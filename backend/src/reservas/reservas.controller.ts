import { Controller, Body, Request,Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { Reserva } from './reservas.model';
import { AuthGuard } from '@nestjs/passport';
import { UserRole } from 'src/users/user-role.enum';


@Controller('reservas')
export class ReservasController {

    constructor(private reservaService: ReservasService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    findAll(@Request() request): Promise<Reserva[]> {

        if(request.user.role === UserRole.ADMIN)
            return this.reservaService.findAll();

        return this.reservaService.findAllByUserId(request.user.id);
    }



    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(
        @Request() request, 
        @Body() reserva: Reserva): Promise<Reserva> {
        console.log(request.user);
        reserva.user = request.user;
        return await this.reservaService.create(reserva);
    }
}
