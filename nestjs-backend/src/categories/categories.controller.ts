// ** Nest Imports
import { Controller, Get } from '@nestjs/common'

// ** Service Imports
import { CategoriesService } from './categories.service'

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // Get all categories
  @Get()
  getCategories() {
    return this.categoriesService.getCategories()
  }
}
