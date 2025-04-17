import { InfoPaginaService } from './../../services/info-pagina.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-donaciones',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css', '../../../assets/css/style.min.css']
})
export class DonacionesComponent {
  donaciones: any;

  constructor (public IPS: InfoPaginaService) {
    this.donaciones = IPS.home.donaciones;
  }
}
