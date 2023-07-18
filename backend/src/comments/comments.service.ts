import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Comment } from './comments.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Casa } from 'src/casas/casas.model';
import { CasasService } from 'src/casas/casas.service';

@Injectable()
export class CommentsService {
    

    constructor(
        @InjectRepository(Comment)
        private commentRepo: Repository<Comment>,
        private casaService: CasasService
    ) {}

    findAll(): Promise<Comment[]> {
        return this.commentRepo.find();
    }

    findAllCommentId(commentId: number): Promise<Casa[]> {
        return this.casaRepo.find({
            relations: {
                commentId: true
            },
            where: {
                comment: {
                    id: commentId
                }
            }
        });
    }

    findAllByCasasId(id: number): Promise<Casa[]> {
        return this.casaRepo.find({
            relations: {
                Comment: true
            },
            where: {
                Comment: {
                    id: commentId
                }
            }
        });
    }


    async create(comment: Comment): Promise<Comment> {
        try {
            return await this.commentRepo.save(comment);
        } catch (error) {
            console.log(error.message);
            throw new ConflictException('Cant save');
        }
    }

    async update(comment: Comment): Promise<Comment> {
        let commentFromDB = await this.commentRepo.findOne({ 
            where: {
                id: comment.id
            }
         });

         if(!commentFromDB) throw new NotFoundException('Comentario no encontrado');

         try {
            console.log(comment);
            commentFromDB.description= comment.description;
            commentFromDB.rating = comment.rating;
            
           
            
            // Opción 1: buscar las categorías
            // let categoryIds = comment.categories.map(cat => cat.id);
            // let categories = await this.categoryService.findAllByIds(categoryIds);
            // commentFromDB.categories = categories;

            // Opción 2: cargar las categorías directamente
            
            return await this.commentRepo.save(commentFromDB);

         } catch (error) {
            console.log(error);
            throw new ConflictException('Error actualizando comentario');
         }
    }

}
