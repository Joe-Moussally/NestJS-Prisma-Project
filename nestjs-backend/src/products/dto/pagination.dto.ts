// ** Validation Imports
import { IsNotEmpty, IsNumber } from 'class-validator'

export class PaginationDTO {
  // ** page
  @IsNumber()
  public page: number

  // ** limit
  @IsNumber()
  public limit: number
}
