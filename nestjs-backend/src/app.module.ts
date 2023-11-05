// ** Nest Imports
import { Module } from '@nestjs/common'

// ** Modules Imports
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { PrismaModule } from 'prisma/prisma.module'
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, ProductsModule, CategoriesModule]
})
export class AppModule {}
