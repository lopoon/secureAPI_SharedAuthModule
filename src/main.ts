import { NestFactory } from '@nestjs/core';
import { SharedAppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(SharedAppModule);
  await app.listen(3000);
}
bootstrap();
