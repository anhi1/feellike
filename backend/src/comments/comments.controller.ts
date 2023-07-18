import { Controller, Post, UseGuards, Request, Get,Body, Put } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { Comment } from './comments.model';
import { UserRole } from 'src/users/user-role.enum';

@Controller('comments')
export class CommentsController {
     

     constructor(private commentService: CommentsService, private userService: UsersService){}


     //findaLL
     @UseGuards(AuthGuard('jwt'))
    @Get()
    findAll(@Request() request): Promise<Comment[]> {

        if(request.user.role === UserRole.ADMIN)
            return this.commentService.findAll();

        return this.commentService.findAllByUserId(request.user.id);
    }

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

    @Put()
    async update(@Body() comment: Comment): Promise<Comment> {
        return await this.commentService.update(comment);
    }

    
}

