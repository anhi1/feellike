import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentListComponent} from './comments/comment-list/comment-list.component';
import { CommentDetailComponent } from './comments/comment-detail/comment-detail.component';

const routes: Routes = [
  { path: 'comments', component: CommentListComponent },
  { path: 'comments/:id', component: CommentDetailComponent },
  { path: '', redirectTo: '/comments', pathMatch: 'full'},
  { path: '**', redirectTo: '/comments', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
