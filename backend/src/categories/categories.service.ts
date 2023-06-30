import { Injectable } from '@nestjs/common';
import { Repository, In } from 'typeorm';
import { Category } from './categories.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {

    constructor(
        @InjectRepository(Category) 
        private categoryRepo: Repository<Category>
    ){}


    findAllByIds(ids: number[]): Promise<Category[]> {
        return this.categoryRepo.find({
            where: {
                id: In(ids)
            }
        });
    }

}
