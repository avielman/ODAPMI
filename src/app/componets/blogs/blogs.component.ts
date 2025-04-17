import { InfoPaginaService } from './../../services/info-pagina.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css', '../../../assets/css/style.min.css']
})
export class BlogsComponent {
  blogs: any;

  constructor ( private ips: InfoPaginaService) {
    this.blogs = ips.home.blogs;
  }

}
