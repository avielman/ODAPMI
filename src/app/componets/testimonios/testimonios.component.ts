import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css', '../../../assets/css/style.min.css']
})
export class TestimoniosComponent {
  testimonios: any;

  constructor ( private ips: InfoPaginaService) {   
    this.testimonios = ips.home.testimonios;
  }

}
