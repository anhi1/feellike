import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/categories/models/category.model';
import { ReservaService } from '../services/reserva.service';
import { ActivatedRoute } from '@angular/router';
import { CasaService } from 'src/app/casas/services/casa.service';
import { IReserva } from './reserva.model';
import { IUser } from 'src/app/users/models/user.model';

@Component({
  selector: 'app-reserva-casa',
  templateUrl: './reserva-casa.component.html',
  styleUrls: ['./reserva-casa.component.css']
})
export class ReservaCasaComponent {
  
    userForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    starDate: new FormControl<Date>(new Date()),
    endDate: new FormControl<Date>(new Date()),
    people:new FormControl(0, [Validators.min(10)]),

    });
    users: IUser[] = [];
    categories: ICategory[] = [];
   
    constructor(
    private reservaService: ReservaService,
    private casaService: CasaService,
    private activatedRoute: ActivatedRoute
    ){}

    ngOnInit(): void{

      this.activatedRoute.params.subscribe(params=>{
        const idString = params ['id'];
        if (!idString) return;

        const id = parseInt(idString, 10);
     
    });

    

    }
    
  
    



    }
 
  



