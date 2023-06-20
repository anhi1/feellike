import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentDetailComponent } from './comments/comment-detail/comment-detail.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    CommentDetailComponent,
    CommentListComponent,
    
],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule, 
    MatIconModule,
    MatTableModule,
    MatToolbarModule
    
  ]
})
export class commentsModule { }
