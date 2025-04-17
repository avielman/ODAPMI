import { InfoPaginaService } from './../../services/info-pagina.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css', '../../../assets/css/style.min.css']
})
export class BookingComponent {
  citas: any = {};

  constructor ( private ips: InfoPaginaService) {
    this.citas = ips.home.citas;
  }
}
