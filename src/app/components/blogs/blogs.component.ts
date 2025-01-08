import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs',
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css', '../../../assets/css/style.min.css']
})
export class BlogsComponent {
  blogs: any;

  constructor ( private ips: InfoPaginaService) {   
    this.blogs = ips.home.blogs;
  }
}
