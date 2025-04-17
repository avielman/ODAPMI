import { InfoPaginaService } from './../../services/info-pagina.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css', '../../../assets/css/style.min.css']
})
export class EquipoComponent {
  integrantes: any;

  constructor (public IPS: InfoPaginaService) {
    this.integrantes = IPS.home.integrantes;
  }
}
