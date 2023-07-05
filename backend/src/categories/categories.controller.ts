import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './categories.model';

@Controller('categories')
export class CategoriesController {

    constructor(private categoryService: CategoriesService) {}

    @Get()
    findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }

}
