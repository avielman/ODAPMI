import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css', '../../../assets/css/style.css']    
})

export class CarouselComponent {
  carrousel: any = {};
  //rutaServidor: string = window.location.origin;
  
  activeIndex: number = 0;    
  //itemToModify: boolean;
  
  constructor ( private ips: InfoPaginaService) {
    this.carrousel = ips.home.carrousel;
    /*this.carrousel.forEach((element: any) => {
      const url = "/" + element.imagen.replace('../', '');   
      element.imagen = url;
    });
    */
  }
}
