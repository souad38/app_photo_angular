import { Component } from '@angular/core';
/*import { HttpClient } from '@angular/common/http';*/
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a3';
  data = [];
  constructor() { }

 /* getPhotos(): Observable<any> {
    return this.http.get('http://localhost/fichier.php');
}

addPhoto(title: string, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    return this.http.post('http://localhost/fichier.php', formData);
}

updatePhoto(id: number, title: string, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('id', id.toString());
    formData.append('title', title);
    formData.append('image', image);
    return this.http.post('http://localhost/fichier.php', formData);
}

deletePhoto(id: number): Observable<any> {
    return this.http.get('http://localhost/fichier.php' + id);
}*/

}
