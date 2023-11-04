// ** Nest Imports
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

// ** Service Imports
import { AuthService } from './auth.service'

// ** Controller Imports
import { AuthController } from './auth.controller'

@Module({
  imports: [JwtModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
