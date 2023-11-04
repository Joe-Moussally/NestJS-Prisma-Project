// ** Nest Imports
import { Global, Module } from '@nestjs/common'

// ** Prisma Imports
import { PrismaService } from './prisma.service'

@Global() // Initialize prisma service globally in the project
@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
