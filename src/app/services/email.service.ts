import { Injectable } from '@angular/core';
//import * as nodemailer from 'nodemailer';
import { Resend } from 'resend';


@Injectable({
  providedIn: 'root'
})

export class emailService {
  resend: Resend = new Resend('api_key: re_S64Ts295_4ueFZidzZsN7xUyiMd4BF94v');

  sendEmail(from: string, to: string, subject: string, html: string) {
    this.resend.emails.send({
      from: 'avielman@gmail.com',
      to: 'avielman@gmail.com',
      subject: 'Hola Mundo',
      html: '<p> Felicidades al enviar tu <strong>Primer Email</strong>!</p>'
    });
  }
}
