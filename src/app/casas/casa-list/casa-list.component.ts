import { Component, OnInit } from '@angular/core';
import { CasaService } from '../services/casa.service';
import { ICasa } from '../models/casa.model';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/users/models/user.model';
import { UserService } from 'src/app/users/services/user.service';
import { LimitLongTextPipe } from 'src/app/shared/limit-long-text.pipe';

@Component({
  selector: 'app-casa-list',
  templateUrl: './casa-list.component.html',
  styleUrls: ['./casa-list.component.css']
})
export class CasaListComponent implements OnInit{
  displayedColumns: string[] = [
    'photo',
    'title',
    'description',
    'Habitación',
    'Baño',
    'precio',
    'actions',
  ];

  casas: ICasa[] = [];
  users: IUser[] = [];

  constructor(
    private casaService: CasaService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    
  ){}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const idString = params['userId'];
      if (idString) {
        const id = parseInt(idString, 10);
        this.casaService.findAllByUserId(id).subscribe((data) => (this.casas = data));
      } else {
        this.casaService.findAll().subscribe((data) => (this.casas = data));
      }
    });
    this.userService.findAll().subscribe((data) => (this.users = data));
  }

  deleteCasa(casa: ICasa) {
    this.casaService.deleteById(casa.id).subscribe({
      next: response => {
        if (response.status === 200 || response.status === 204) {
          console.log('Se ha borrado correctamente');
        } else {
          console.log('Se ha producido un error');
        }
      },
      error: error => console.log(error),
    });
  }
}