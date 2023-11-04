// ** Nest Imports
import { Injectable } from '@nestjs/common'

// ** Prisma Imports
import { PrismaService } from 'prisma/prisma.service'

// ** DTO Imports
import { AuthDTO } from './dto/auth.dto'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(dto: AuthDTO) {
    const { email, password } = dto
    return { message: 'Account Created' }
  }
  async login() {
    return { message: 'Log In Successful' }
  }
  async logout() {
    return { message: 'Log Out Successful' }
  }
}
