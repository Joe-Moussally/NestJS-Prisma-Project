// ** Nest Imports
import { Module } from '@nestjs/common'

// ** Services Imports
import { UsersService } from './users.service'

// ** Controller Imports
import { UsersController } from './users.controller'

// ** Auth Guard Imports
import { JwtStrategy } from 'src/auth/jwt.strategy'

@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy]
})
export class UsersModule {}
