import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../../../assets/css/style.min.css']
})
export class AboutComponent {
  acerca: any = {};

  constructor (private ips: InfoPaginaService) {
    this.acerca = ips.home.acerca;
  }

}
