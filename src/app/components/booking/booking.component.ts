import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
//import { emailService } from 'src/app/services/email.service'; 
/*import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { response } from 'express';
*/

@Component({
  selector: 'app-booking',
  imports: [CommonModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css', '../../../assets/css/style.min.css']
})
export class BookingComponent {
  citas: any = {};
  donaciones: any = {};

  constructor ( private ips: InfoPaginaService, /*private emailService: emailService*/) {
    this.citas = ips.home.citas;
    this.donaciones = ips.home.donaciones.opciones;
  }

  enviarCorreo() {
    const data = {
      // Aquí debes construir el objeto con la información que quieres enviar
      // Por ejemplo:      
      nombre: 'Juan',
      email: 'juan@example.com',
      mensaje: 'Este es el mensaje del correo'
    };

    const from = 'avielman@gmail.com';
    const to = 'avielman@gmail.com';
    const subject = 'Hola mundo';
    const text = 'Este es un correo enviado desde mi aplicación Angular';

    /*
    try {
      this.emailService.sendEmail(from, to, subject, text);
      console.log('Correo enviado correctamente:', response);
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
      */
  }
  
}
