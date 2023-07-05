import { Controller, Body, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { Reserva } from './reservas.model';


@Controller('reservas')
export class ReservasController {

    constructor(private reservaService: ReservasService) {}

    @Get('user/:userId')
    findAllByUserId(
        @Param("userId", ParseIntPipe) 
        userId: number): Promise<Reserva[]> {
        return this.reservaService.findAllByUserId(userId);
    }

    @Post()
    async create(@Body() reserva: Reserva): Promise<Reserva> {
        return await this.reservaService.create(reserva);
    }
}
