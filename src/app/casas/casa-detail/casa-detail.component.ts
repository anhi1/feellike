import { CasaService } from './../services/casa.service';
import { Component } from '@angular/core';
import { ICasa } from '../models/casa.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-casa-detail',
  templateUrl: './casa-detail.component.html',
  styleUrls: ['./casa-detail.component.css']
})
export class CasaDetailComponent {
casa?: ICasa;
constructor(private casaService: CasaService, private activateroute: ActivatedRoute){}
ngOnInit(): void {
  this.activateroute.params.subscribe(params => {
    const id = parseInt(params['id'], 10);
    this.casaService.findById(id).subscribe(data => this.casa = data)
})
}

reserve(){}
}
