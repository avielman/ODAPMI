import { InfoPaginaService } from './../../services/info-pagina.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-caracteristicas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css', '../../../assets/css/style.min.css']
})
export class CaracteristicasComponent {
  caracteristicas: any = {};


  constructor ( private ips: InfoPaginaService) {
    this.caracteristicas = ips.home.caracteristicas;
  }
}
