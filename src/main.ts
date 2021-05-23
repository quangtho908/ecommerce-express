import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CatchErrorInterceptor } from './interceptors/CatchError.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new CatchErrorInterceptor())
  await app.listen(3000); 
}
bootstrap();