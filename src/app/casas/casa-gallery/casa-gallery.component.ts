import { ICasa } from '../models/casa.model';
import { CasaService } from './../services/casa.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { IReserve } from '../models/reserve.model';

@Component({
  selector: 'app-casa-gallery',
  templateUrl: './casa-gallery.component.html',
  styleUrls: ['./casa-gallery.component.css']
})
export class CasaGalleryComponent implements OnInit{

  casas: ICasa[] = [];
  reservedList: IReserve[] = [];
  reserveId: number[] = []

constructor(private casaService: CasaService ,private sharedService : SharedService){}

ngOnInit(): void {

  this.casaService.findAll().subscribe(data => {
    this.casas = data;
    console.log(this.casas);

    this.casaService.findAllReserved().subscribe(data => {
    this.reservedList = data;
    this.reservedList.forEach(casa => {
      this.reserveId.push(casa.id);
      console.log(this.reserveId);

    })
    for(const num of this.reserveId){
       if(this.reserveId.includes(num)){
        this.casas.forEach(casa => {
          casa.available = false;
        })
       }
    }

    });




  } )
}


}
