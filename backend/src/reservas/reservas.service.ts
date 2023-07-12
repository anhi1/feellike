import { ConflictException, Injectable } from '@nestjs/common';
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

}
