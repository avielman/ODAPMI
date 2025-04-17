import { InfoPaginaService } from './../../services/info-pagina.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css', '../../../assets/css/style.min.css']
})

// Proyectos humanitarios.
export class ServiciosComponent {
  servicios: any;

  constructor ( private ips: InfoPaginaService) {
    this.servicios = ips.home.servicios;
  }

}
