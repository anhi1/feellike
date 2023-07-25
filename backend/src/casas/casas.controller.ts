/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe,Request,Post, Put, UnauthorizedException, UseGuards, NotFoundException, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { Casa } from './casas.model';
import { CasasService } from './casas.service';
import { UserRole } from 'src/users/user-role.enum';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('casas')
export class CasasController {
   
   

    constructor(private casaService: CasasService,
                private userService: UsersService) {}

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

    // @Get('price/min/:min/max/:max')
    // findAllByPriceBetween(
    //     @Param('min') min: number, 
    //     @Param('max') max: number): Promise<Casa[]> {
    //     return this.casaService.findAllByPriceBetween(min, max);
    // }

    
    
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
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Request() request, @Body() casa: Casa): Promise<Casa> {

        // si el user es ADMIN entonces create
        if(request.user.role === UserRole.ADMIN)
            return await this.casaService.create(casa);

        // si el user es OWNER se asocia al user de request
        if(request.user.role === UserRole.OWNER) {
            casa.user = request.user;
            casa = await this.casaService.create(casa);
            // Opción 1: el user es dueño de la asociación
            // request.user.casa = casa;
            // await this.userService.update(request.user);
            return casa;
            // Opción 2: el book es dueño de la asociación
            // casa.user = request.user;
            // this.bookService.create(casa)
        }

        throw new UnauthorizedException('Cant create casa');
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



    @UseGuards(AuthGuard('jwt'))
    @Post(':casaId/images')
    @UseInterceptors(FilesInterceptor('file'))
    async uploadCasaImages(
        @Request() request, 
        @Param('casaId', ParseIntPipe) casaId: number,
        @UploadedFiles() files: Express.Multer.File[]
        ){
            console.log(files);
            console.log(files.length);

            // obtener la casa y si no existe lanzar excepción
            let casa = await this.casaService.findById(casaId);
            if(!casa) throw new NotFoundException('Casa not found');
            
            // asociar los nombres de los archivos en el atributo images del objeto casa
            casa.images = [];
            files.forEach(file => casa.images.push(file.filename));

            // guardar el casa en base de datos
            return await this.casaService.update(casa);
        }


}
