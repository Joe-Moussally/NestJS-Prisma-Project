// ** Nest Imports
import { BadRequestException, Injectable } from '@nestjs/common'

// ** Prisma Imports
import { PrismaService } from 'prisma/prisma.service'

// ** DTO Imports
import { AuthDTO } from './dto/auth.dto'

// ** Utility Imports
import hashPassword from 'src/utils/hash-password'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(dto: AuthDTO) {
    // ** params
    const { email, password } = dto

    // Check if user already exists
    const user = await this.prisma.user.findUnique({ where: { email } })

    // If user exists -> throw error
    if (user) {
      throw new BadRequestException('Email already in use')
    }

    // Else if user doesn't exist -> hash password and create
    const hashedPassword = await hashPassword(password)
    await this.prisma.user.create({
      data: { email, hashedPassword }
    })

    return { message: 'Account Created' }
  }

  async login() {
    return { message: 'Log In Successful' }
  }

  async logout() {
    return { message: 'Log Out Successful' }
  }
}
