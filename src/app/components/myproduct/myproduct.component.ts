import { Component } from '@angular/core';

@Component({
  selector: 'app-myproduct',
  templateUrl: './myproduct.component.html',
  styleUrls: ['./myproduct.component.css']
})
export class MyproductComponent {
  uploadImage(event:any) {
    const file = event.target.files[0];
    // Use the file object to upload the image
  }
}

