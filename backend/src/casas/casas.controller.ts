/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Casa } from './casas.model';
import { CasasService } from './casas.service';

@Controller('casas')
export class CasasController {
   
   

    constructor(private casaService: CasasService) {}

    @Get()
    findAll(): Promise<Casa[]> {
        return this.casaService.findAll();
    }

    // FILTRAR CASAS POR ID DE CATEGORÍA
    @Get('category/:categoryId')
    findAllByCategoryId( @Param("categoryId", ParseIntPipe) categoryId: number): Promise<Casa[]> {
        return this.casaService.findAllByCategoryId(categoryId);
    }

    @Get('load-relations')
    findAllWithRelations(): Promise<Casa[]> {
        return this.casaService.findAllWithRelations();
    }

    @Get('projections')
    findAllProjections(): Promise<Casa[]> {
        return this.casaService.findAllProjections();
    }

        @Get('user/:userId')
        findAllByUserId(
        @Param("userId", ParseIntPipe) userId: number
        ): Promise<Casa[]> {
         return this.casaService.findAllByUserId(userId);
     }

    @Get('id/:id')
    findById(@Param("id", ParseIntPipe) id: number): Promise<Casa | null> {
        return this.casaService.findById(id);
    }

    @Get('title-eq/:title') // http://localhost:3000/casas/title-eq/casa1
    findAllByTitleEquals(@Param("title") title: string): Promise<Casa[]> {
        return this.casaService.findAllByTitleEquals(title);
    } 

    @Get('title-like/:title') // http://localhost:3000/casas/title-like/casa
    findAllByTitleLike(@Param('title') title: string): Promise<Casa[]> {
        return this.casaService.findAllByTitleLike(title);
    }

    @Get('price/min/:min/max/:max')
    findAllByPriceBetween(
        @Param('min') min: number, 
        @Param('max') max: number): Promise<Casa[]> {
        return this.casaService.findAllByPriceBetween(min, max);
    }

    
    
    /*
    Cambiar price:

    {
        "id": 0,
        "title": "book postman2",
        "price": "11.00",
        "user": {
            "id": 1
        }
      
    }
    */
    @Post()
    async create(@Body() casa: Casa): Promise<Casa> {
        return await this.casaService.create(casa);
    }
    

    /*
    Solo actualiza una casa existente, no se debe crear uno nueva:

    {
        "id": 1,
        "title": "casa1",
        "price": "15.00",
        "user": {
            "id": 2,
        }
       
        
    }

    */
    @Put()
    async update(@Body() casa: Casa): Promise<Casa> {
        return await this.casaService.update(casa);
    }



    @Delete(':id')
    async deleteById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<void> {
        return await this.casaService.deleteById(id);
    }

    
    @Delete('user-id/:userId')
    async deleteAllByAuthorId(
        @Param('userId', ParseIntPipe) userId: number
    ): Promise<void> {
        return await this.casaService.deleteAllByUserId(userId);
    }


}
