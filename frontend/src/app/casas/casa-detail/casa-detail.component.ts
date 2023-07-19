
import { Component, OnInit } from '@angular/core';
import { ICasa } from '../models/casa.model';
import { IUser } from 'src/app/users/models/user.model';
import { CasaService } from '../services/casa.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/users/services/user.service';
import { ReservaService } from 'src/app/reservas/services/reserva.service';
import { CommentService } from 'src/app/comments/comment.service';
import { IComment } from 'src/app/comments/comment.model';
import { IReserva } from 'src/app/reservas/reserva.model';

@Component({
  selector: 'app-casa-detail',
  templateUrl: './casa-detail.component.html',
  styleUrls: ['./casa-detail.component.css']
})
export class CasaDetailComponent implements OnInit{
  casa: ICasa | undefined;
  user: IUser | undefined;
  casas: ICasa[]=[];
  images: string[]=[];
  comments: IComment[]=[];
  comment: IComment | undefined; // ngFor cada comentario es un objeto
  reservas: IReserva[] | undefined;
  

  constructor(private activatedRoute: ActivatedRoute,
              private casaService: CasaService,
              private userService: UserService,
              private reservaService: ReservaService,
              private commentService: CommentService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id'], 10);

      this.casaService.findById(id).subscribe(data => {
        this.casa = data;

        this.commentService.findAllCommentsByCasaId(id).subscribe(data => this.comments = data);

      });


      
    

    });
  }
 
}
