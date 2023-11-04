// ** Nest Imports
import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'

// ** Module Imports
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(4000) // Server Port
}
bootstrap()
