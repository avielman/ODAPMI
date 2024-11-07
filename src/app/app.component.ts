import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/css/style.css', '../assets/lib/flaticon/font/flaticon.css', '../assets/lib/owlcarousel/assets/owl.carousel.min.css',
    '../assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'
  ]
})
export class AppComponent {
  // insertamos los servicios aquí.
  
  constructor (public _infoPaginaService: InfoPaginaService/*,
                public productosServicios: PoductosService*/) {

                }
  
}
