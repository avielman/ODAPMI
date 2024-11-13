import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css', '../../../assets/css/style.min.css']
})

// Proyectos humanitarios.
export class ServiciosComponent {
  servicios: any;

  constructor ( private ips: InfoPaginaService) {    
    this.servicios = ips.home.servicios;
  }

}
