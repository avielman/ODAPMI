import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css', '../../../assets/css/style.min.css']
})
export class TopbarComponent {
  title = 'ODAPMI';
  logo = '../assets/img/logo.jpg';

  redes: any = [];
  nosotros: any = {};

  constructor ( private ips: InfoPaginaService) {
    this.redes = ips.home.redes;
    this.nosotros = ips.home.nosotros;
  }

}
