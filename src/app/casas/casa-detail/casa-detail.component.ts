import { CasaService } from './../services/casa.service';
import { Component } from '@angular/core';
import { ICasa } from '../models/casa.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IReserve } from '../models/reserve.model';
@Component({
  selector: 'app-casa-detail',
  templateUrl: './casa-detail.component.html',
  styleUrls: ['./casa-detail.component.css']
})
export class CasaDetailComponent {

  reservedList: ICasa[] = [];
  casa?: ICasa;
  casaId?: number;
  disabled: boolean = false;

constructor(private casaService: CasaService,
  private activateroute: ActivatedRoute,
  private router : Router

  ){}
ngOnInit(): void {
 this.loadHomeDetail();

}
loadHomeDetail(){
  this.activateroute.params.subscribe(params => {
    const id = parseInt(params['id'], 10);
    this.casaId = id;
    this.casaService.findById(id).subscribe(data => this.casa = data);

})
}

reserve(casa: ICasa){
this.disabled = true;
 this.loadHomeDetail();
if(!this.casa) return;
let reserve : IReserve = {
  id: 0,
  title: this.casa.title,
  country: this.casa.country,
  city: this.casa.city,
  price: this.casa.price
}
this.casaService.createNewReserve(reserve).subscribe(
 response => {
  console.log('ha anadido correctamente');

 },
 error => {
  console.log('ha producido un error');

 }
)
this.reservedList.push(this.casa);
console.log(this.reservedList);
this.casa.available = false;


}

cancelar(casaId: number) {
  this.disabled = false
  this.casaService.deleteReservation(casaId).subscribe(
    res =>{
      console.log('reservacion ha cancelado correctamente');

    }

  )
  }
}



