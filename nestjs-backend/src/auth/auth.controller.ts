// ** Nest Imports
import { Body, Controller, Get, Post } from '@nestjs/common'

// ** Services Imports
import { AuthService } from './auth.service'

// ** DTO Imports
import { AuthDTO } from './dto/auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // ** Register/Sign Up
  @Post('register')
  register(@Body() dto: AuthDTO) {
    return this.authService.register(dto)
  }

  // ** Login
  @Post('login')
  login(@Body() dto: AuthDTO) {
    return this.authService.login(dto)
  }

  // ** Logout
  @Get('logout')
  logout() {
    return this.authService.logout()
  }
}
