import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-acercade',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css', './../../../assets/css/style.min.css']
})

export class AcercadeComponent {
  acercaDe: any = {};
  tiempo: string = "";

  constructor ( private ips: InfoPaginaService) {    
    this.acercaDe = ips.acercaDe;
    this.tiempo = this.ips.tiempoTranscurrido('09/12/2024');
  }
}
