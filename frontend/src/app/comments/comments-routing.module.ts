import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';

const routes: Routes = [
  {
  path: ':id', component: CommentDetailComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
