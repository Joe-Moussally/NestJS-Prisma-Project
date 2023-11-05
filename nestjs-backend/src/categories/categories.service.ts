// ** Nest Imports
import { Injectable } from '@nestjs/common'

// ** Service Imports
import { PrismaService } from 'prisma/prisma.service'

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async getCategories() {
    return await this.prisma.category.findMany()
  }
}
