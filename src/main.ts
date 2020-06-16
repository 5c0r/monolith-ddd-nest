import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorrelationInterceptor } from './middleware/correlation.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new CorrelationInterceptor());
  await app.listen(3000);
}
bootstrap();
