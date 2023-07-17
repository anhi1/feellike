import { ConflictException, Injectable } from '@nestjs/common';
import { Comment } from './comments.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CommentsService {

    constructor(
        @InjectRepository(Comment)
        private commentRepo: Repository<Comment>
    ) {}

    async create(comment: Comment): Promise<Comment> {
        try {
            return await this.commentRepo.save(comment);
        } catch (error) {
            console.log(error.message);
            throw new ConflictException('Cant save');
        }
    }

}
