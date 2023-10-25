import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDataImage } from 'src/app/types/upload.type';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  selectedFile!: File;
  images: IDataImage[] = [];

  constructor(private readonly http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  fetchImages() {
    this.http
      .get<IDataImage[]>('http://localhost:3000/images')
      .subscribe((data) => {
        this.images = data;
      });
  }

  uploadImage() {
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      const imageBinary = reader.result as string;
      this.http
        .post('http://localhost:3000/images', { data: imageBinary })
        .subscribe((response) => {
          console.log('Image uploaded', response);

          // AFTER UPLOADED, fetch the images again to display the newly uploaded image
          this.fetchImages();
        });
    };
  }

  deleteImage(id: number) {
    this.http.delete(`http://localhost:3000/images/${id}`).subscribe(() => {
      console.log('Image was deleted', id);

      // After deletion, fetch the images again to update the displayed list
      this.fetchImages();
    });
  }
}
