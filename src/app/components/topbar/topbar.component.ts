import { CommonModule, Location } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css', '../../../assets/css/style.min.css']
})

//@Injectable({ providedIn: 'root'})
export class TopbarComponent {
  title = 'ODAPMI';
  logo: string = '';

  redes: any = [];
  nosotros: any = {};

  constructor ( private ips: InfoPaginaService, private http: HttpClient) {
    this.redes = ips.home.redes;
    this.nosotros = ips.home.nosotros;    
    this.logo = this.imageUrl;
  }

  get imageUrl() {
    return './assets/img/logo.jpg';
  }
}
