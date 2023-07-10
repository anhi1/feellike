import { Injectable } from '@nestjs/common';
import { Repository, In } from 'typeorm';
import { Category } from './categories.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {
    create(categories: Category): Category | PromiseLike<Category> {
        throw new Error('Method not implemented.');
    }

    constructor(
        @InjectRepository(Category) 
        private categoryRepo: Repository<Category>
    ){}



    findAll(): Promise<Category[]> {
        return this.categoryRepo.find();
    }


    findAllByIds(ids: number[]): Promise<Category[]> {
        return this.categoryRepo.find({
            where: {
                id: In(ids)
            }
        });
    }

}
