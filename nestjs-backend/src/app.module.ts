// ** Nest Imports
import { Module } from '@nestjs/common';

// ** Modules Imports
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
})
export class AppModule {}
