// ** Nest Imports
import { JwtService } from '@nestjs/jwt'
import { BadRequestException, Injectable } from '@nestjs/common'

// ** Prisma Imports
import { PrismaService } from 'prisma/prisma.service'

// ** DTO Imports
import { AuthDTO } from './dto/auth.dto'

// ** Utility Imports
import hashPassword from 'src/utils/hash-password'
import comparePasswords from 'src/utils/compare-passwords'

// ** Constant Imports
import { jwtSecret } from 'src/utils/constants'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService
  ) {}

  // ** Register
  async register(dto: AuthDTO) {
    // params
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

  // ** Login
  async login(dto: AuthDTO) {
    // params
    const { email, password } = dto

    // Find the user
    const user = await this.prisma.user.findUnique({ where: { email } })

    // If user is not found -> throw error
    if (!user) {
      throw new BadRequestException('Email/Password is incorrect')
    }

    // If user is found -> check if password matches
    const passwordsMatch = comparePasswords({ password, hashedPassword: user.hashedPassword })
    if (!passwordsMatch) {
      throw new BadRequestException('Email/Password is incorrect')
    }

    // If password is correct, sign in with JWT
    const token = await this.signToken({ id: user.id, email: user.email })

    return { message: 'Log In Successful', token }
  }

  // ** Logout
  async logout() {
    return { message: 'Log Out Successful' }
  }

  // Function to generate and sign a jwt token to the user
  async signToken(args: { id: string; email: string }) {
    return this.jwt.signAsync(args, { secret: jwtSecret })
  }
}
