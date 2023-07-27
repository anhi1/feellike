import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Reserva } from './reservas.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReservasService {
    
    constructor(
        @InjectRepository(Reserva)
        private reservaRepo: Repository<Reserva>
    ) {}

    async create(reserva: Reserva): Promise<Reserva> {
        try {
            return await this.reservaRepo.save(reserva);
        } catch (error) {
            console.log(error.message);
            throw new ConflictException('no puede guardar');
        }
    }

    findAll(): Promise<Reserva[]> {
        return this.reservaRepo.find();
    }

    findAllByUserId(userId: number): Promise<Reserva[]> {
        return this.reservaRepo.find({
            relations: {
                user: true,
                casa: true
            },
            where: {
                user: {
                    id: userId
                }
            }
        });

    }

    async deleteById(id: number): Promise<void> {

        let exist = await this.reservaRepo.exist({
            where: {
                id: id
            }
        });

        if(!exist) throw new NotFoundException('Not found');

        try {
            await this.reservaRepo.delete(id);
        } catch (error) {
            throw new ConflictException('No se puede borrar')
        }

    }

    
}
