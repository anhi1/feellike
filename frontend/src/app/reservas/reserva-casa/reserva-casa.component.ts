import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/categories/models/category.model';
import { ReservaService } from '../services/reserva.service';
import { ActivatedRoute } from '@angular/router';
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
    fullName: new FormControl('', [Validators.required]),
    startDate: new FormControl(new Date()), 
    endDate: new FormControl(new Date()),
    price: new FormControl(0, [
      Validators.required, Validators.min(5), Validators.max(500), Validators.pattern("^[0-9]+([.,][0-9]{1,2})?$")
    ]),
    categories: new FormControl('', [Validators.required]),
  });


  
  users: IUser[] = [];
  categories: ICategory | undefined;
  casa : ICasa | undefined;
  

  constructor(
    private reservaService: ReservaService,
    private casaService: CasaService,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const idString = params['casaId'];
      if (!idString) return;

      const casaId = parseInt(idString, 10);
      this.casaService.findById(casaId).subscribe(data => this.casa = data);
      this.reservaService.findById(casaId).subscribe(reserva => this.loadReservaForm(reserva));
      //this.categoryService.findById(this.casa.category).subscribe(data =>this.category = data);
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
    let startDate = this.reservaForm.get('startDate')?.value ?? '';
    let endDate = this.reservaForm.get('endDate')?? '';
    let precio = this.reservaForm.get('precio')?.value ?? 5;
    //let category = this.reservaForm.get('category')?.value ?? '';

   
  }
  
}
 
  



