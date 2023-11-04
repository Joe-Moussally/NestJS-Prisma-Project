// ** Nest Imports
import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
  constructor() {}

  async register() {
    return { message: 'Account Created' }
  }
  async login() {
    return { message: 'Log In Successful' }
  }
  async logout() {
    return { message: 'Log Out Successful' }
  }
}
