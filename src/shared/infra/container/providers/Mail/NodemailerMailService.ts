import nodemailer from "nodemailer";
import { MailConfig } from "../../../../../config/mail";
import { MailService } from "./MailService";

export class NodemailerMailService implements MailService {
  private transporter: nodemailer.Transporter =
    nodemailer.createTransport(MailConfig);

  async sendMail(to: string, subject: string, body: string): Promise<void> {
    await this.transporter.sendMail({
      from: "DIO <contato@dio.com.br>",
      to,
      subject,
      html: body,
    });
  }
}
