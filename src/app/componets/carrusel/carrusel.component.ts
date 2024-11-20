import { Component, Input, OnInit, ChangeDetectorRef  } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { isEmpty } from 'rxjs';

export interface ICarouselItem {
  id: number;
  title: {
    first: string;
    second: string;
  };
  subtitle?: string;
  link?: string;
  image: string;
  order?: number;
  marginLeft?: number;
}

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css', '../../../assets/css/style.css']
})

export class CarruselComponent {
  carrousel: any = {};
  rutaServidor: string = window.location.origin;
  
  activeIndex: number = 0;    
  //itemToModify: boolean;
  
  constructor ( private ips: InfoPaginaService, private cdRef: ChangeDetectorRef) {
    this.carrousel = ips.home.carrousel;
    this.carrousel.forEach((element: any) => {
      const url = "/" + element.imagen.replace('../', '');   
      element.imagen = url;
    });
  }

  carouselNext() {
    
  }


}
