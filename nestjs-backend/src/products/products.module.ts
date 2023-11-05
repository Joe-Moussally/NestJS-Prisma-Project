// ** Nest Imports
import { Module } from '@nestjs/common'

// ** Services Imports
import { ProductsService } from './products.service'

// ** Controller Imports
import { ProductsController } from './products.controller'

@Module({
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
