import { Controller, Get, Post, Param, ParseIntPipe, Body } from '@nestjs/common';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}


    // http://localhost:3000/users/id/1
    @Get('id/:id')
    findById(
        @Param("id", ParseIntPipe) id: number
    ): Promise<User | null> {
        return this.userService.findById(id);
    }

    // http://localhost:3000/users
    @Post()
    async create(@Body() user: User): Promise<User> {
        return await this.userService.create(user);
    }
    
}




