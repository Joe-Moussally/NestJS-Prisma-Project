// ** Nest Imports
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'

// ** Express Imports
import { Request } from 'express'

// ** Prisma Imports
import { PrismaService } from 'prisma/prisma.service'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getLoggedInUser(id: string, req: Request) {
    const user = await this.prisma.user.findUnique({ where: { id } }) // user by param id
    const decodedUser = req.user as { id: string; email: string } // logged in user (by jwt token)

    // If user is not found -> throw error
    if (!user) {
      throw new NotFoundException()
    }

    // If logged in user id doens't match route id
    if (user.id !== decodedUser.id) {
      throw new ForbiddenException()
    }

    delete user.hashedPassword
    return { user }
  }

  async getUsers() {
    return await this.prisma.user.findMany({ select: { id: true, email: true } })
  }
}
