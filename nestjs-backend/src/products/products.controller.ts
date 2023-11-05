// ** Nest Imoprts
import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common'

// ** Service Imports
import { ProductsService } from './products.service'

// ** DTO Imports
import { ProductDTO } from './dto/product.dto'
import { PaginationDTO } from './dto/pagination.dto'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Get all products
  @Get()
  getProducts(@Query('page') page: number, @Query('limit') limit: number) {
    return this.productsService.getProducts(page, limit)
  }

  // Get product
  @Get(':id')
  getProduct(@Param() params: { id: string }, @Req() req) {
    return this.productsService.getProduct(params.id, req)
  }

  // Create product
  @Post('create')
  createProduct(@Body() dto: ProductDTO) {
    return this.productsService.createProduct(dto)
  }
}
