// ** Nest Imports
import { Module } from '@nestjs/common'

// ** Modules Imports
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from 'prisma/prisma.module'

@Module({
  imports: [AuthModule, PrismaModule]
})
export class AppModule {}
