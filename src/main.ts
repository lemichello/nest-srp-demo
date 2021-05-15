import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import { ErrorExceptionFilter } from './filters/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupBaseConfiguration(app);

  await app.listen(3000);
}

function setupBaseConfiguration(app: INestApplication) {
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new ErrorExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.use(helmet());
}

bootstrap();
