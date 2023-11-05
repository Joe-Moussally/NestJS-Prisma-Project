// ** Validation Imports
import { IsNotEmpty } from 'class-validator'

export class PaginationDTO {
  // ** page
  @IsNotEmpty()
  public page: number

  // ** limit
  @IsNotEmpty()
  public limit: number
}
