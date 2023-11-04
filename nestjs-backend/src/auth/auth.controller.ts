// ** Nest Imports
import { Controller, Get, Post } from '@nestjs/common'

// ** Services Imports
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // ** Register/Sign Up
  @Post('register')
  register() {
    return this.authService.register()
  }

  // ** Login
  @Post('login')
  login() {
    return this.authService.login()
  }

  // ** Logout
  @Get('logout')
  logout() {
    return this.authService.logout()
  }
}
