import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css', '../../../assets/css/style.min.css']
})
export class EquipoComponent {
  integrantes: any;

  constructor (public IPS: InfoPaginaService) {
    this.integrantes = IPS.home.integrantes;
  }
}
