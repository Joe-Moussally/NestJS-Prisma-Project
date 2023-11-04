// ** Nest Imports
import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'

// ** Module Imports
import { AppModule } from './app.module'

// ** Cookies Imports
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe({ whitelist: true })) // Validation on all http requests

  app.use(cookieParser()) // Handle cookie sessions

  await app.listen(4000) // Server Port
}
bootstrap()
