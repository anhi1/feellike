import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.model';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>,
    ){}
    
    findById(id: number): Promise<User |null>{
        return this.userRepo.findOne({
            where:{
                id:id
            },
        });
    }

    async create(user: User): Promise<User> {
        try {
            return await this.userRepo.save(user);
        } catch (error) {
            console.log(error.message);
            throw new ConflictException('Cant save');
        }
    }



}
