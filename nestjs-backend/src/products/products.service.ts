// ** Nest Imports
import { Injectable } from '@nestjs/common'

// ** Prisma Imports
import { PrismaService } from 'prisma/prisma.service'

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  // ** Get all products
  async getProducts() {
    return this.prisma.product.findMany()
  }
}
