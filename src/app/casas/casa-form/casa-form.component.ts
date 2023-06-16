import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ICasa } from '../models/casa.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/users/models/user.model';
import { ICategory } from 'src/app/categories/models/category.model';
import { CasaService } from '../services/casa.service';
import { CategoryService } from 'src/app/categories/services/category.service';
import { UserService } from 'src/app/users/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-casa-form',
  templateUrl: './casa-form.component.html',
  styleUrls: ['./casa-form.component.css']
})
export class CasaFormComponent {
  
  casaForm = new FormGroup({
    id: new FormControl<number>(0),
    title: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    description: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    country: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    bedrooms: new FormControl<number>(0, [Validators.min(1)]),
    bathrooms: new FormControl<number>(0, [Validators.min(1)]),
    price: new FormControl<number>(0, [
      Validators.required, Validators.min(5), Validators.max(3000), Validators.pattern("^[0-9]+([.,][0-9]{1,2})?$")
    ]),
   
  });
  
  users: IUser[] = [];
  categories: ICategory[] = [];
  user: IUser | undefined;
  category: ICategory | undefined;

  

  
  constructor(
    private casaService: CasaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private categoryService: CategoryService,
      
    ) {}

    ngOnInit(): void {
      // /books/3/edit
      this.activatedRoute.params.subscribe(params => {
        const idString = params['id'];
        if (!idString) return;
  
         const id = parseInt(idString, 10);
         this.casaService.findById(id).subscribe(casa => this.loadCasaForm(casa));
      });
  
     
    }
  loadCasaForm(casa: ICasa): void {

    this.casaForm.reset({
      id: casa.id,
      title: casa.title,
      description: casa.description,
      country: casa.country,
      bedrooms: casa.bedrooms,
      bathrooms: casa.bathrooms,
      price: casa.price,
      
    });
  }

  save(): void {
    let id = this.casaForm.get('id')?.value ?? 0;
    let title = this.casaForm.get('title')?.value ?? '';
    let description = this.casaForm.get('description')?.value ?? '';
    let country = this.casaForm.get('country')?.value ?? '';
    let bedrooms = this.casaForm.get('bedrooms')?.value ?? 1;
    let bathrooms = this.casaForm.get('bathrooms')?.value ?? 1;
    let price = this.casaForm.get('price')?.value ?? 5;
    let userId = this.casaForm.get('userId')?.value ?? 0;
    let categories = this.casaForm.get('categories')?.value ?? [];
    

    // TODO añadir validación extra de datos, si alguno está mal hacer return y mostrar error y no guardar.
    let casa: ICasa = {
      id: id,
      title: title,
      description,
      country: country,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      price: price,
      squarefeet: 0,
      available: false,
      city: '',
      cp: '',
      comodidad: '',
      photo: '',
      categories: [],
      userId: 0
    }

    if (id === 0) // crear nuevo libro
      this.casaService.create(casa).subscribe(casa => this.router.navigate(['/casas', casa.id]));
    else // editar libro existente
      this.casaService.update(casa).subscribe(casa => this.router.navigate(['/casas', casa.id]));
  }

}

