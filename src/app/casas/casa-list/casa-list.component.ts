import { Component, OnInit } from '@angular/core';
import { CasaService } from '../services/casa.service';
import { ICasa } from '../models/casa.model';
import { UserService } from 'src/app/users/services/user.service';
import { IUser } from 'src/app/users/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/categories/services/category.service';
import { ICategory } from 'src/app/categories/models/category.model';





@Component({
  selector: 'app-casa-list',
  templateUrl: './casa-list.component.html',
  styleUrls: ['./casa-list.component.css']
})
export class CasaListComponent implements OnInit{
  displayedColumns: string[] = [
    'title',
    'description',
    'country',
    'bedrooms',
    'bathrooms',
    'price',
    'actions',
  ];

  casas: ICasa[] = [];
  users: IUser[] = [];
  categories: ICategory [] = [];
  user: IUser | undefined;
  category: ICategory | undefined;

  constructor(
    private casaService: CasaService,
    private userService: UserService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private snackbar: MatSnackBar

  ){}

  ngOnInit(): void {
    this.loadCasas();
  }

  loadCasas(): void {
    this.activatedRoute.params.subscribe((params) => {
      const userIdStr = params['userId'];
      const categoryIdStr = params['categoryId'];

      if (userIdStr) { //filtro por usuario
        const id = parseInt(userIdStr, 10);
        this.casaService.findAllByUserId(id).subscribe((data) => (this.casas = data));
        this.userService.findById(id).subscribe(data => this.user = data);

      } else if(categoryIdStr){ //Filtro por category
        const id = parseInt(categoryIdStr, 10);
        this.casaService.findAllByCategoryId(id).subscribe(data => this.casas = data);
        this.categoryService.findById(id).subscribe(data => this.category = data);
      } else{ //sin filtro
        this.casaService.findAll().subscribe(data=> this.casas = data);
      }

    });
    this.userService.findAll().subscribe(data => this.users = data);
    this.categoryService.findAll().subscribe(data => this.categories = data);
  }

  deleteCasa(casa: ICasa) {
    this.casaService.deleteById(casa.id).subscribe({
      next: response => {
        if (response.status === 200 || response.status === 204) {
          console.log('Se ha borrado correctamente');
          this.loadCasas();
        } else {
          console.log('Se ha producido un error');
          this.snackbar.open('se ha producido un error, inténtanlo más tarde')
        }
      },
      error: error => {
        console.log(error);
        this.snackbar.open('Se ha producido un error, inténtalo más tarde.', 'Cerrar', {duration: 3000});
      },
    });
  }
}
