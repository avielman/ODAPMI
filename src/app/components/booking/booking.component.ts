import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css',  '../../../assets/css/style.min.css']
})
export class BookingComponent {
  citas: any = {}
  donaciones: any = {};

  constructor( private ips: InfoPaginaService ) {
    this.citas = ips.home.citas;
    this.donaciones = ips.home.donaciones.opciones;
  }

  enviarCorreo(): void {

  }

}
