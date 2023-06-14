import { CasaService } from './../services/casa.service';
import { Component } from '@angular/core';
import { ICasa } from '../models/casa.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IReserve } from '../models/reserve.model';
import { IUser } from 'src/app/users/models/user.model';
@Component({
  selector: 'app-casa-detail',
  templateUrl: './casa-detail.component.html',
  styleUrls: ['./casa-detail.component.css']
})
export class CasaDetailComponent {

  casa: ICasa | undefined;
  user: IUser | undefined

  constructor(private activatedRoute: ActivatedRoute,
              private casaService: CasaService,
              ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id'], 10);

      this.bookService.findById(id).subscribe(data => {
        this.book = data;
        if (!(this.book.authorId > 0)) return;
        this.authorService.findById(this.book.authorId).subscribe(data => this.author = data)
      });

    });
  }

}


}

