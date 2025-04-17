import { InfoPaginaService } from './../../services/info-pagina.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css', '../../../assets/css/style.min.css']
})
export class TestimoniosComponent {
  testimonios: any;

  constructor ( private ips: InfoPaginaService) {
    this.testimonios = ips.home.testimonios;
  }

}
