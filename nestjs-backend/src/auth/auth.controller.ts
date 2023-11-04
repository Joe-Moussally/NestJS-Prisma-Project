// ** Nest Imports
import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common'

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
  login(@Body() dto: AuthDTO, @Req() req, @Res() res) {
    return this.authService.login(dto, req, res)
  }

  // ** Logout
  @Get('logout')
  logout(@Req() req, @Res() res) {
    return this.authService.logout(req, res)
  }
}
