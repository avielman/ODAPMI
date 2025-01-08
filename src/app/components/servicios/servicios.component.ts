import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css', '../../../assets/css/style.min.css']
})
export class ServiciosComponent {
  servicios: any;

  constructor ( private ips: InfoPaginaService, public router: Router) {
    this.servicios = ips.home.servicios;
  }

  selectProyecto(id: number) {
    this.router.navigate(['/proyecto', id]);
  }
}
