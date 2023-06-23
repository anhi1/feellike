
import { Component } from '@angular/core';
import { ICasa } from '../models/casa.model';
import { IUser } from 'src/app/users/models/user.model';
import { CasaService } from '../services/casa.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'app-casa-detail',
  templateUrl: './casa-detail.component.html',
  styleUrls: ['./casa-detail.component.css']
})
export class CasaDetailComponent {
  casa: ICasa | undefined;
  user: IUser | undefined;
  casas: ICasa[]=[];
  images: string[]=[];
  

  constructor(private activatedRoute: ActivatedRoute,
              private casaService: CasaService,
              private userService: UserService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id'], 10);

      this.casaService.findById(id).subscribe(data => {
        this.casa = data;
        //prueba
        for (const currentCasa of this.casas) {
          this.images = currentCasa.images
        }
        if (!(this.casa.userId > 0)) return;
        this.userService.findById(this.casa.userId).subscribe(data => this.user = data)
      });

    });
  }
  
}
