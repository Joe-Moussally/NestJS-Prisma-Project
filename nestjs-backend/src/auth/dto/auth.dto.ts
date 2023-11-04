// ** Validation Imports
import { IsNotEmpty, IsString, IsEmail, Length } from 'class-validator'

export class AuthDTO {
  // ** Email
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  public email: string

  // ** Password
  @IsString()
  @IsNotEmpty()
  @Length(6, 16, { message: 'Password must be between 6 and 16 characters' })
  public password: string
}
