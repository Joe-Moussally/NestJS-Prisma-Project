// ** Nest Imports
import { Injectable } from '@nestjs/common'

// ** Express Imports
import { Request } from 'express'

// ** Prisma Imports
import { PrismaService } from 'prisma/prisma.service'

// ** DTO Imports
import { ProductDTO } from './dto/product.dto'
import { PaginationDTO } from './dto/pagination.dto'

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  // ** Get all products
  async getProducts(dto: PaginationDTO) {
    const { page, limit } = dto
    // If no pagination param is defined -> return all
    if (!page || !limit) {
      return await this.prisma.product.findMany()
    }

    // Else -> paginate
    const skip = (page - 1) * limit // Calculate the rows to skip/offset
    return await this.prisma.product.findMany({
      skip,
      take: limit
    })
  }

  // ** Get product
  async getProduct(id: string, req: Request) {
    return await this.prisma.product.findUnique({ where: { id } })
  }

  // ** Create Product
  async createProduct(dto: ProductDTO) {
    // params
    const { name, description, price, quantity } = dto

    await this.prisma.product.create({
      data: { name, description, price, quantity }
    })

    return {
      message: 'Product created',
      data: { name, description, price, quantity }
    }
  }
}
