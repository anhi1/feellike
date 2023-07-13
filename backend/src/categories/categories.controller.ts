/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './categories.model';


@Controller('categories')
export class CategoriesController {

    constructor(private categoryService: CategoriesService) {}

    @Get()
    findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }

    @Get('id/:id')
    findById(@Param("id", ParseIntPipe) id: number): Promise<Category | null> {
        return this.categoryService.findById(id);
    }

}
