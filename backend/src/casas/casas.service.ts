/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, Delete, NotFoundException } from '@nestjs/common';
import { Casa } from './casas.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, ILike, Repository, In, MoreThan, MoreThanOrEqual } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';



@Injectable()
export class CasasService {
    

    constructor(
        @InjectRepository(Casa) private casaRepo: Repository<Casa>,
        private categoryService: CategoriesService
    ){}  


    findAll(): Promise<Casa[]> {
        // SELECT * FROM casas;
        return this.casaRepo.find();
    }

    findAllWithRelations(): Promise<Casa[]> {
        return this.casaRepo.find({
            relations: {
                user: true,
                categories: true
            }

        });
    }

    findAllProjections(): Promise<Casa[]> {
        return this.casaRepo.find({
            select: {
                id: true,
                title: true,
                // country: true,
                // city: true,
                // price: true,
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
    findAllByCategoryId(categoryId: number): Promise<Casa[]> {
        return this.casaRepo.find({
            relations: {
                user: true,
                categories: true
            },
            where: {
                categories: {
                    id: categoryId,
                }
            }
        });
    }

   

    findById(id: number): Promise<Casa | null> {
        // SELECT * FROM casa WHERE id = 1;
        console.log(id);
        return this.casaRepo.findOne({ 
            relations: {
                user: true
            },
            where: {
                id: id
            }
         })
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

    // findAllByPriceBetween(minPrice: number, maxPrice: number): Promise<Casa[]> {
    //     console.log(minPrice);
    //     console.log(maxPrice);

    //     return this.casaRepo.find({ 
    //         where: {
    //             price: Between(minPrice, maxPrice)
    //         }
    //     });
    // }

    
    // findAllOrderByPriceAsc(): Promise<Casa[]> {
    //     return this.casaRepo.find({
    //         order: {
    //             price: "ASC"
    //         }
    //     });
    // }

    async create(casa: Casa): Promise<Casa> {
        try {
            return await this.casaRepo.save(casa);
        } catch (error) {
            console.log(error.message);
            throw new ConflictException('No se ha podido guardar la casa.');
        }
    }

    //Metodo actualizar casa
    async update(casa: Casa): Promise<Casa> {
        let casaFromDB = await this.casaRepo.findOne({ 
            where: {
                id: casa.id
            }
         });

         if(!casaFromDB) throw new NotFoundException('Casa no encontrada');

         try {
            console.log(casa);
            casaFromDB.title = casa.title;
            casaFromDB.bedrooms = casa.bedrooms;
            casaFromDB.bathrooms = casa.bathrooms;
            casaFromDB.squarefeet = casa.squarefeet;
            casaFromDB.description = casa.description;
            casaFromDB.country = casa.country;
            casaFromDB.city = casa.city;
            casaFromDB.price = casa.price;
            casaFromDB.available = casa.available;
            casaFromDB.user = casa.user;
            casaFromDB.images = casa.images;
            
           
              // Opción 2: cargar las categorías directamente
             casaFromDB.categories = casa.categories;
             return await this.casaRepo.save(casaFromDB);

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

        // Opcion 2: una sola sentencia sql
        await this.casaRepo.delete({
            user: {
                id: userId
            }
        });

    }
}
