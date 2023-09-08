import { Component, OnInit } from '@angular/core';
import { IComment } from '../comment.model';
import { CommentService } from '../comment.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit{
  
  displayedColumns: string[] = [
    'id', 
    'description', 
    'user', 
    'actions',
  ];
  comments: IComment[] = [];
  isOwner = false;
  
  constructor(private commentService: CommentService,
              private router: Router,
              private user:UserService) {}

  
  ngOnInit(): void {
    this.commentService.findAll()
    .subscribe(data => this.comments = data);
  }

  deleteById(id: number){
    this.commentService.deleteById(id).subscribe(data => {
      console.log(data);
      
    });
 
}
}
