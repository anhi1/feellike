/* eslint-disable prettier/prettier */
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



    findAll(): Promise<Category[]> {
        return this.categoryRepo.find();
    }

    findById(id: number): Promise<Category | null> {
        console.log(id);
        return this.categoryRepo.findOne({ 
            where: {
                id: id
            }
         });
    }

    findAllByIds(ids: number[]): Promise<Category[]> {
        return this.categoryRepo.find({
            where: {
                id: In(ids)
            }
        });
    }

}    

