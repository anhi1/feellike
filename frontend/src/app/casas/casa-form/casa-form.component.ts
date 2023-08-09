import { Component, OnInit } from '@angular/core';
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
export class CasaFormComponent implements OnInit {
  
  casaForm = new FormGroup({
    id: new FormControl<number>(0),
    title: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    bedrooms: new FormControl<number>(0, [Validators.min(1)]),
    bathrooms: new FormControl<number>(0, [Validators.min(1)]),
    squarefeet: new FormControl<number>(0, [Validators.min(1)]),
     // photo: new FormControl<string>('', []),

     description: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
     //available: new FormControl<boolean>(false),
     country: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
     city: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    // cp: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    // comodidad: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    
     price: new FormControl<number>(0, [
       Validators.required, Validators.min(5), Validators.max(3000), Validators.pattern("^[0-9]+([.,][0-9]{1,2})?$")
     ]),


    // user: new FormControl<any>(null, []),
    categories: new FormControl<any[]>([])
 
  });
  
  users: IUser[] = [];
  categories: ICategory[] = [];

   user: IUser | undefined;
   category: ICategory | undefined;
   casas: ICasa[];
   

  

  
  constructor(
    private casaService: CasaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private categoryService: CategoryService,
      
    ) {}

    ngOnInit(): void {
      // /casa/3/edit
      this.activatedRoute.params.subscribe(params => {
        const idString = params['id'];
        if (!idString) return;
  
         const id = parseInt(idString, 10);
         this.casaService.findById(id).subscribe(casa => this.loadCasaForm(casa));
      });

      this.casaService.findAll().subscribe(data => this.casas = data);
      this.categoryService.findAll().subscribe(data => this.categories = data);
    }
  
     
    
 loadCasaForm(casa: ICasa): void {

     this.casaForm.reset({
      id: casa.id, 
       title: casa.title, 
       bedrooms: casa.bedrooms,
       bathrooms: casa.bathrooms,
       squarefeet:  casa.squarefeet,
       description: casa.description,
       country: casa.country,
        city: casa.city,
      //  cp: casa.cp,
        price: casa.price,
      //  comodidad: casa.comodidad,
       categories: casa.categories,
       // user: casa.user,
     
     });
   }

   save(): void {

     
      let id = this.casaForm.get('id')?.value ?? 0;
      let title = this.casaForm.get('title')?.value ?? '';
      let bedrooms = this.casaForm.get('bedrooms')?.value ?? 1;
      let bathrooms = this.casaForm.get('bathrooms')?.value ?? 1;
      let squarefeet = this.casaForm.get('squarefeet')?.value ?? 0;
      let description = this.casaForm.get('description')?.value ?? '';
      let country = this.casaForm.get('country')?.value ?? '';
      let city= this.casaForm.get('city')?.value ?? '';
      let price=this.casaForm.get('price')?.value ?? 5;
      // // cp: this.casaForm.get('cp')?.value ?? '',
      // // comodidad: this.casaForm.get('comodidad')?.value ?? '',
      // photo: '',
      let categories = this.casaForm.get('categories')?.value ?? [];

      let casa: ICasa = {
        id: id,
        title:title,
        bedrooms:bedrooms,
        bathrooms:bathrooms,
        squarefeet:squarefeet,
        description:description,
        available:true,
        country:country,
        city:city,
        price:price,
        categories:categories

      }
      
      
   

    if (casa.id === 0) // crear nueva casa
      this.casaService.create(casa).subscribe(casa => this.router.navigate(['/casas', casa.id]));
    else // editando una casa
      this.casaService.update(casa).subscribe(casa => this.router.navigate(['/casas', casa.id]));
    }
  }









