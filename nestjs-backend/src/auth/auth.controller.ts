// ** Nest Imports
import { Controller, Post } from '@nestjs/common';

// ** Services Imports
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
