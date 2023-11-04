// ** Nest Imports
import { Injectable, OnModuleInit } from '@nestjs/common'

// ** Prisma Imports
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect()
  }
}
