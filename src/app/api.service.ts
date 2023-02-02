import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = 'http://localhost/your-api-path/';
  constructor(private http: HttpClient) { }

  addPhoto(title: string, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);

    return this.http.post(`${this.API_URL}/fichier.php`, formData);
  }
  getPhotos(): Observable<any> {
    return this.http.get(`${this.API_URL}/fichier.php`);
  }

  updatePhoto(id: number, title: string, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('id', id.toString());
    formData.append('title', title);
    formData.append('image', image);

    return this.http.post(`${this.API_URL}/fichier.php`, formData);
  }

  deletePhoto(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/fichier.php?id=${id}`);
  }
}


