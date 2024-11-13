import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css', '../../../assets/css/style.min.css']
})
export class CaracteristicasComponent {
  caracteristicas: any = {};

  
  constructor ( private ips: InfoPaginaService) {   
    this.caracteristicas = ips.home.caracteristicas;
  }
}
