import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-testimonios',
  imports: [CommonModule],
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css', '../../../assets/css/style.min.css']
})
export class TestimoniosComponent {
  testimonios: any;

  constructor ( private ips: InfoPaginaService) {   
    this.testimonios = ips.home.testimonios;
  }
}
