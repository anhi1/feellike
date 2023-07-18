import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { Comment } from './comments.model';

@Controller('comments')
export class CommentsController {

     constructor(private commentService: CommentsService, private userService: UsersService){}


     //findaLL

     // find all by casa id


     
@UseGuards(AuthGuard('jwt'))
    @Post()
    async create(
        @Request() request, 
        @Body() comment: Comment): Promise<Comment> {
        console.log(request.user);
        comment.user = request.user;
        return await this.commentService.create(comment);
    }
}

