// ** Validation Imports
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class ProductDTO {
  // ** name
  @IsString()
  @IsNotEmpty()
  public name: string

  // ** Description
  @IsString()
  public description: string

  // ** Price
  @IsNumber()
  public price: number

  // ** Quantity
  @IsNumber()
  public quantity: number
}
