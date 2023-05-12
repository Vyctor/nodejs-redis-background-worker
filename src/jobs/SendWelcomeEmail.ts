import Bull from "bull";
import { container } from "tsyringe";

import { NodemailerMailService } from "../shared/infra/container/providers/Mail/NodemailerMailService";

export class SendWelcomeEmail {
  private _queue: Bull.Queue;

  constructor() {
    this._queue = new Bull("RegistrationMail", {
      redis: {
        host: "localhost",
        port: 6379,
      },
    });
  }

  public async add(name: string, data: any) {
    await this.queue.add(data, {
      delay: 5000,
      attempts: 3,
    });
  }

  async process() {
    await this.queue.process(async (job) => {
      const { user } = job.data;
      const mailService = container.resolve(NodemailerMailService);
      const to = `${user.name} <${user.email}>`;
      const subject = "Cadastro de usuário";
      const body = `<p>Olá ${user.name}, seja bem-vindo!</p>`;
      await mailService.sendMail(to, subject, body);

      this.queue.on("failed", (job: any, err: any) => {
        console.log("Job failed", err);
      });
    });
  }

  get queue() {
    return this._queue;
  }
}
