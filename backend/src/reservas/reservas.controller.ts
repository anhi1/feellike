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

    /*
    {
        "id": 0,
        "startDate": "2023-07-30T22:00:00.000Z",
        "endDate": "2023-08-04T22:00:00.000Z",
        "price": 5000,
        "user": {
            "id": 1
        },
        "casa": {
            "id": 1
        }
    }
    */
    @Post()
    async create(@Body() reserva: Reserva): Promise<Reserva> {
        return await this.reservaService.create(reserva);
    }
}
