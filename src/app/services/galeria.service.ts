import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  //private apiUrl = 'assets/php/getFiles.php'; // URL del backend
  //private apiUrl = 'localhost/getFiles.php'; // URL del backend Local
  private apiUrl = 'http://server/assets/php/getfiles.php'; // URL del backend
  constructor(private http: HttpClient) { }

  getFiles(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
