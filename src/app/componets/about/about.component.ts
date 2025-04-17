import { InfoPaginaService } from './../../services/info-pagina.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../../../assets/css/style.min.css']
})
export class AboutComponent {
  acerca: any = {};

  constructor ( private ips: InfoPaginaService) {
    this.acerca = ips.home.acerca;
  }

}
