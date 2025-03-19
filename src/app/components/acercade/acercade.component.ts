import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-acercade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css', './../../../assets/css/style.min.css']
})
export class AcercadeComponent {
  acercaDe: any = {};
  tiempo: string = "";

  constructor( private ips: InfoPaginaService) {
    this.acercaDe = ips.acercaDe;
    this.tiempo = this.ips.tiempoTranscurrido('09/12/2024');
  }

}
