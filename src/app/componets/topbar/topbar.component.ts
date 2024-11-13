import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
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
