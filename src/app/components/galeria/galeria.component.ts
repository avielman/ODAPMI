import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../../services/galeria.service';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css', '../../../assets/css/style.css']
})
export class GaleriaComponent {
  archivos: string[] = []; // Array para almacenar los nombres de los archivos
  error: string = ''; // Variable para almacenar el mensaje de error
  ruta: string = '../../../assets/img/galeria/'; // Ruta base para los archivos de la galería
  imagen: string = '../../../assets/img/galeria/imagen_donacion.jpg'; // Ruta de la imagen por defecto
  video: string = '../../../assets/img/galeria/video_donacion1.mp4'; // Ruta del video por defecto
  video2: string = '../../../assets/img/galeria/video_donacion2.mp4'; // Ruta del segundo video por defecto
  ficheros: string[] = []; // Array para almacenar los nombres de los ficheros

  constructor(private galeriaService: GaleriaService) { } // Inyectar el servicio de galería

  ngOnInit() {
    //this.llenaArchivos(); // Llamar a la función para llenar los archivos

    this.galeriaService.getFiles().subscribe(
      (data: string[]) => {
        this.archivos = data; // Asignar los nombres de los archivos al array
        if (this.archivos.length > 0) {
          this.llenaArchivos(); // Llamar a la función para llenar los archivos
        }

        // ciclo para recorrer los archivos y asignar la ruta base
        for (let i = 0; i < this.archivos.length; i++) {
          this.ficheros[i] = this.ruta + this.archivos[i]; // Asignar la ruta base a cada archivo
        }

        console.log(this.archivos);
        console.log(this.ficheros);
      },
      (error) => {
        this.error = 'Error al cargar los archivos'; // Manejar el error
      }
    );
    console.log(this.archivos);
  }

  llenaArchivos() {
    this.archivos = ["feature.jpg","imagen_donacion.jpg","video_donacion1.mp4","video_donacion2.mp4"];
    console.log(this.archivos);
  }
}

