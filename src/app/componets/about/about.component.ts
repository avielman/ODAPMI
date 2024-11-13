import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../../../assets/css/style.min.css']
})
export class AboutComponent {
  acerca: any = {};

  constructor ( private ips: InfoPaginaService) { 
    this.acerca = ips.home.acerca;
  }

}
