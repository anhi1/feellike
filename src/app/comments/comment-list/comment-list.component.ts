import { Component, OnInit } from '@angular/core';
import { IComment } from '../../models/comment.model';
import {  Router } from '@angular/router';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})

displayedColumns: string[] = ['id', 'description', 'casaId', 'userId'];
  comment: IComment[] = [];
  comments: IComment[];
 
  
  
  constructor(private router: Router,
              private commentService : CommentService) {}


  ngOnInit(): void {
   
      this.commentService.findAll().subscribe(data => this.comments = data);
    
  }

  view(comment: IComment) {
    this.router.navigate(['/comments', comment.id]); // /comments/4
  }


}
