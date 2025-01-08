import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-caracteristicas',
  imports: [CommonModule, NgFor],
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css', '../../../assets/css/style.min.css']
})
export class CaracteristicasComponent {
  caracteristicas: any = {};

  
  constructor ( private ips: InfoPaginaService) {   
    this.caracteristicas = ips.home.caracteristicas;
  }
}
