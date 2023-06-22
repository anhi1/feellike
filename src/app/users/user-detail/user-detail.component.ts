import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.model';
import { ICasa } from 'src/app/casas/models/casa.model';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { CasaService } from 'src/app/casas/services/casa.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user: IUser | undefined;
  casas: ICasa[] = [];

  constructor(
    private userService: UserService,
    private casaService: CasaService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit UserDetailComponent');
    this.activatedRoute.params.subscribe((params) => {
      const id = parseInt(params['id'], 10);

      this.userService.findById(id).subscribe((data) => {
        this.user = data;
      });

      this.casaService.findAllByUserId(id).subscribe((data) => {
        this.casas = data;
      });
    });
  }
}