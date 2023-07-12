import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/categories/models/category.model';
import { ReservaService } from '../services/reserva.service';
import { ActivatedRoute, Route } from '@angular/router';
import { CasaService } from 'src/app/casas/services/casa.service';
import { IReserva } from './reserva.model';
import { IUser } from 'src/app/users/models/user.model';
import { CategoryService } from 'src/app/categories/services/category.service';
import { ICasa } from 'src/app/casas/models/casa.model';

@Component({
  selector: 'app-reserva-casa',
  templateUrl: './reserva-casa.component.html',
  styleUrls: ['./reserva-casa.component.css'],
})
export class ReservaCasaComponent {
  
  reservaForm = new FormGroup({
    // fullName: new FormControl('', [Validators.required]),
    startDate: new FormControl(new Date()), 
    endDate: new FormControl(new Date()),
    price: new FormControl(0, [
      Validators.required, Validators.min(5), Validators.pattern("^[0-9]+([.,][0-9]{1,2})?$")
    ]),
    // categories: new FormControl('', [Validators.required]),
  });


  
  users: IUser[] = [];
  categories: ICategory | undefined;
  casa : ICasa | undefined;
  router: any;
  

  constructor(
    private reservaService: ReservaService,
    private casaService: CasaService,
    private activatedRoute: ActivatedRoute,
    
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const idString = params['casaId'];
      if (!idString) return;

      const casaId = parseInt(idString, 10);
      this.casaService.findById(casaId).subscribe(data => this.casa = data);
      this.reservaService.findById(casaId).subscribe(reserva => this.loadReservaForm(reserva));
      
    });
    
    
    
  }

  loadReservaForm(reserva: IReserva): void {

    //CARGAR DATOS DEL FORMULARIO
    this.reservaForm.reset({  
      startDate: reserva.startDate,
      endDate: reserva.endDate,
      price: reserva.price,
      //categories: reserva.categories as any
      
    });
  }

   //extraer los datos del formulario para guardar en el backend
  save() : void{
    let id = this.reservaForm.get('id')?.value ?? 0;
    let startDate = this.reservaForm.get('startDate')?.value ;
    let endDate = this.reservaForm.get('endDate')?. value ;
    let price = this.reservaForm.get('price')?.value ?? 5;
    let userId = this.reservaForm.get('userId')?.value ?? 0;
    let casaId = this.reservaForm.get('userId')?.value ?? 0;
    //let category = this.reservaForm.get('category')?.value ?? '';

    let reserva: IReserva = {
      id: id,
      userId: userId,
      casaId: casaId,
      startDate:startDate,
      endDate: endDate,
      price: price,
 
    }

    if (id === 0) // crear nueva casa
    this.reservaService.create(reserva).subscribe(reserva => this.router.navigate(['/reserva', reserva.id]));
  else // editando una casa
    this.reservaService.update(reserva).subscribe(reserva => this.router.navigate(['/reserva', reserva.id]));
   
  }
  
}
 
  



