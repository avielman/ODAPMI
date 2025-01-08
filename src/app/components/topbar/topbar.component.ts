import { CommonModule, Location } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-topbar',
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css', '../../../assets/css/style.min.css']
})

@Injectable({ providedIn: 'root'})
export class TopbarComponent {
  title = 'ODAPMI';
  logo: string = '';

  redes: any = [];
  nosotros: any = {};

  constructor ( private ips: InfoPaginaService) {
    this.redes = ips.home.redes;
    this.nosotros = ips.home.nosotros;    
    this.logo = this.imageUrl;
  }

  get imageUrl() {
    return '../../../assets/img/logo.jpg';
  }
}
