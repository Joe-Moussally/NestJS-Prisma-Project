// ** Nest Imports
import { JwtService } from '@nestjs/jwt'
import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common'

// ** Express Imports
import { Request, Response } from 'express'

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
  async login(dto: AuthDTO, req: Request, res: Response) {
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
    if (!token) {
      throw new ForbiddenException()
    }

    // Set cookie in response header
    res.cookie('token', token)

    return res.send({ message: 'Log in successful' })
  }

  // ** Logout
  async logout(req: Request, res: Response) {
    res.clearCookie('token')
    return res.send({ message: 'Log out successful' })
  }

  // Function to generate and sign a jwt token to the user
  async signToken(args: { id: string; email: string }) {
    return this.jwt.signAsync(args, { secret: jwtSecret })
  }
}
