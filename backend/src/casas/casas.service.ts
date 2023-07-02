import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Casa } from './casas.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, ILike, Repository } from 'typeorm';
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

    findAllByPriceBetween(minPrice: number, maxPrice: number): Promise<Casa[]> {
        console.log(minPrice);
        console.log(maxPrice);

        return this.casaRepo.find({ 
            where: {
                price: Between(minPrice, maxPrice)
            }
        });
    }

    // findAllByAvailableTrue(): Promise<Casa[]> {
    //     return this.casaRepo.find({
    //         where: {
    //             available: true
    //         }
    //     });
    // }

    findAllOrderByPriceAsc(): Promise<Casa[]> {
        return this.casaRepo.find({
            order: {
                price: "ASC"
            }
        });
    }

    async create(casa: Casa): Promise<Casa> {
        try {
            return await this.casaRepo.save(casa);
        } catch (error) {
            console.log(error.message);
            throw new ConflictException('No se ha podido guardar la casa.');
        }
    }

    async update(casa: Casa): Promise<Casa> {
        let casaFromDB = await this.casaRepo.findOne({ 
            where: {
                id: casa.id
            }
         });

         if(!casaFromDB) throw new NotFoundException('Casa no encontrada');

         try {
            console.log(casa);
            casaFromDB.price = casa.price;
            // casaFromDB.available = casa.available;
            casaFromDB.city = casa.city;
            casaFromDB.title = casa.title;
            casaFromDB.user = casa.user;
           
            
             //Opción 1: buscar las categorías
            //  let categoryIds = casa.categories.map(cat => cat.id);
            //  let categories = await this.categoryService.findAllByIds(categoryIds);
            //  casaFromDB.categories = categories;

             // Opción 2: cargar las categorías directamente
            // casaFromDB.categories = casa.categories;
            // return await this.casaRepo.save(casaFromDB);

         } catch (error) {
            console.log(error);
            throw new ConflictException('Error actualizando la casa');
         }
    }

    async deleteById(id: number): Promise<void> {

        let exist = await this.casaRepo.exist({
            where: {
                id: id
            }
        });

        if(!exist) throw new NotFoundException('Not found');

        try {
            await this.casaRepo.delete(id);
        } catch (error) {
            throw new ConflictException('No se puede borrar')
        }

    }

    async deleteAllByUserId(userId: number) {

        // Opcion 1
        // let casa = await this.casaRepo.find({
        //     select: {
        //         id: true            
        //     },
        //     relations: {
        //         user: false
        //     },
        //     where: {
        //         user: {
        //             id: userId
        //         }
        //     }
        // });
        // let ids = casa.map(casa => casa.id)
        // await this.casaRepo.delete(ids);

        // Opcion 2: una sola sentencia sql
        await this.casaRepo.delete({
            user: {
                id: userId
            }
        });


    }



}
