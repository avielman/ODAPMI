import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})

export class CarruselComponent {
  carrousel: any = {};
  activeIndex: number = 0;    

  constructor ( private ips: InfoPaginaService) {
    this.carrousel = ips.home.carrousel;
  }

}
