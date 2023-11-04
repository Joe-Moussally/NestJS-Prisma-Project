// ** Nest Imports
import { JwtModule } from '@nestjs/jwt'
import { Module } from '@nestjs/common'

// ** Service Imports
import { AuthService } from './auth.service'

// ** Controller Imports
import { AuthController } from './auth.controller'

@Module({
  imports: [JwtModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
