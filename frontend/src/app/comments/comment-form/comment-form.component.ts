import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IComment } from '../comment.model';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {


  commentForm = new FormGroup({
    id: new FormControl<number>(0),
    description:new FormControl<String>('', [Validators.required, 
      Validators.minLength(5), Validators.maxLength(1000)]),
      rating: new FormControl<number>(0)
      
    
   
     
    // casaId: new FormControl<number>(0),
    // userId: new FormControl<number>(0),
  })

  casaId: number;
    

  constructor(
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ){}
  ngOnInit(): void {
    // Extraer id del commentario de la url para poder enviarlo luego a backend para crear un nuevo commentario asociada a esa casa de alquiler
    this.activatedRoute.params.subscribe(params => {
      const idString = params['casaId'];
      if (!idString) return;
      this.casaId = parseInt(idString, 10);
    });
  }  

  save(): void {
    let id = this.commentForm.get('id')?.value ?? 0;
    let description = this.commentForm.get('description')?.value ?? '';
    let rating = this.commentForm.get('rating')?.value ?? 0;
    //let photo = this.commentForm.get('img')?.value ?? "";
    
    // let casaId = this.commentForm.get('id')?.value ?? 0;
    // let userId = this.commentForm.get('id')?.value ?? 0;

    let comment: IComment = {
      id: id,
      description: description,
      rating: rating,
      // photo: photo,
      casa: {
        id: this.casaId,
      }
    }

    if (id === 0)
      this.commentService.create(comment)
      .subscribe(comment => this.router.navigate(['/comments']));
    else
      this.commentService.update(comment)
      .subscribe(comment => this.router.navigate(['/comments']));
  }


}
