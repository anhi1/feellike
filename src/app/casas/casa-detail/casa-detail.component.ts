import { CasaService } from './../services/casa.service';
import { Component } from '@angular/core';
import { ICasa } from '../models/casa.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-casa-detail',
  templateUrl: './casa-detail.component.html',
  styleUrls: ['./casa-detail.component.css']
})
export class CasaDetailComponent {

  reservedList: ICasa[] = [];
  casa?: ICasa;
  casaId?: number;

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

reserve(){

/* this.loadHomeDetail();
if(!this.casa) return;
this.reservedList.push(this.casa);
console.log(this.reservedList);
this.casa.available = false;*/

this.router.navigate([`/${this.casaId}/casa-reserve`])


}
}


