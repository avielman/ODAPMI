import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-donaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css', '../../../assets/css/style.min.css']
})
export class DonacionesComponent {
  donaciones: any;

  constructor (public IPS: InfoPaginaService) {
    this.donaciones = IPS.home.donaciones;
  }
}
