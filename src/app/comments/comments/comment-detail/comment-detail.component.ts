import { Component } from '@angular/core';
import { IComment } from '../../models/comment.model';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent {
  comment: IComment | undefined;
  
  constructor(private activatedRoute: ActivatedRoute,
              private commentService : CommentService) {}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      this.commentService.findById(id).subscribe(data => this.comment = data);
    });
  }
}
