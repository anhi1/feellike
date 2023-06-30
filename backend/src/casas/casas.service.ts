import { Injectable } from '@nestjs/common';
import { Casa } from './casas.model';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';

@Injectable()
export class CasasService {

    constructor(
        @InjectRepository(Casa) private casaRepo: Repository<Casa>,
        private categoryService: CategoriesService
    ){}  


    findAll(): Promise<Casa[]> {
        // SELECT * FROM books;
        return this.casaRepo.find();
    }

    findAllWithRelations(): Promise<Casa[]> {
        return this.casaRepo.find({
            relations: {
                user: true,
                // categories: true
            }

        });
    }

    findAllProjections(): Promise<Casa[]> {
        return this.casaRepo.find({
            select: {
                id: true,
                title: true,
                bedrooms: true,
                bathrooms: true,
                squarefeet: true,
                description: true,
                available: true,
                country: true,
                city: true,
                cp: true,
                price: true,
                comodidad: true,
                user: {
                    id: true,
                    fullName: true
                }
            },
            relations: {
                user: true
            }
        });
    }

    findAllByUserId(userId: number): Promise<Casa[]> {
        return this.casaRepo.find({
            relations: {
                user: true
            },
            where: {
                user: {
                    id: userId,
                }
            }
        });
    }

    findById(id: number): Promise<Casa | null> {
        // SELECT * FROM casa WHERE id = 1;
        console.log(id);
        return this.casaRepo.findOne({ 
            where: {
                id: id
            },
         });
    }


    findAllByTitleEquals(title: string): Promise<Casa[]> {
        console.log(title);
        return this.casaRepo.find({
            where: {
                title: title // coincidencia exacta
            }
        });
    }


    findAllByTitleLike(title: string): Promise<Casa[]> {
        console.log(title);
        return this.casaRepo.find({
            where: {
                title: ILike(`%${title}%`) // contenga una palabra
            }
        });
    }



}
