import { InfoPaginaService } from './../../services/info-pagina.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', '../../../assets/css/style.min.css']
})
export class FooterComponent {
  title = 'ODAPMI';
  nosotros: any;
  redes: any;

  constructor ( private ips: InfoPaginaService) {
    this.nosotros = ips.home.nosotros;
    this.redes = ips.home.redes;
  }
}
