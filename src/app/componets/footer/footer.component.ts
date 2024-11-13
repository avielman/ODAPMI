import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
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
