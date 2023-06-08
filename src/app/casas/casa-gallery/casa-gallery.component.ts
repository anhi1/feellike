import { ICasa } from '../models/casa.model';
import { CasaService } from './../services/casa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casa-gallery',
  templateUrl: './casa-gallery.component.html',
  styleUrls: ['./casa-gallery.component.css']
})
export class CasaGalleryComponent implements OnInit{

  casas: ICasa[] = [];

constructor(private casaService: CasaService){}

ngOnInit(): void {

  this.casaService.findAll().subscribe(data => {
    console.log(data);
    this.casas = data
  } )
}
}
