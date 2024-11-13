import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css', '../../../assets/css/style.min.css']
})
export class BookingComponent {
  citas: any = {};

  constructor ( private ips: InfoPaginaService) {    
    this.citas = ips.home.citas;
  }
}
