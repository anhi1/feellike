import { Component, OnInit } from '@angular/core';
import { ICasa } from '../models/casa.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CasaService } from '../services/casa.service';
import { BASE_URL } from 'src/app/shared/constants';

@Component({
  selector: 'app-casa-form-images',
  templateUrl: './casa-form-images.component.html',
  styleUrls: ['./casa-form-images.component.css']
})
export class CasaFormImagesComponent implements OnInit{
 
  casa: ICasa | undefined;
  imagePreviews: String[] = [];
  imageFiles: File[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private casaService: CasaService,
    private httpClient: HttpClient
  ){}

  ngOnInit(): void {
    this.loadCasa();
  }

  loadCasa(){
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      this.casaService.findById(id)
                    .subscribe(data => {
        this.casa = data;
      });
    });
  }
    onFileSelected(event: Event) {
      let target = event.target as HTMLInputElement;
      if (target.files === null) return;
  
      for(let i = 0; i < target.files.length; i++) {
        this.imageFiles.push(target.files[i]);
        let reader = new FileReader();
        reader.onload = ev => this.imagePreviews.push(reader.result as string);
        reader.readAsDataURL(target.files[i]);
      }
    }
  
    save() {
      if(this.imageFiles.length === 0) return;
  
      // Cargar las imágenes en un objeto FormData
      let formData = new FormData();
      this.imageFiles.forEach(file => {
        formData.append('file', file); // file0, file1, file2....
      });
  
      // http://localhost:3000/books/2/images
      this.httpClient
        .post(`${BASE_URL}/casas/${this.casa?.id}/images`, formData)
        .subscribe(data => {
          console.log(data);
          this.loadCasa();
          this.imageFiles = [];
          this.imagePreviews = [];
        });
  
    }
}

