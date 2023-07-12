import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentFormComponent } from './comment-form/comment-form.component';


const routes: Routes = [
    {
      path: '',
      component: CommentFormComponent
    },
    {
      path: ':casaId/new',
      component: CommentFormComponent
    },
    {
      path: ':id/edit',
      component: CommentFormComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CommentsRoutingModule { }
  