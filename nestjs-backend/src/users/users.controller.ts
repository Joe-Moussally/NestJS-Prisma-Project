// ** Nest Imports
import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common'

// ** Service Imports
import { UsersService } from './users.service'

// ** JWT Imports
import { JwtAuthGuard } from 'src/auth/jwt.guard'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // ** Get current logged in user
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getLoggedInUser(@Param() params: { id: string }, @Req() req) {
    return this.usersService.getLoggedInUser(params.id, req)
  }

  // ** Get users
  @Get()
  getUsers() {
    return this.usersService.getUsers()
  }
}
