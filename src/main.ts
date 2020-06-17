import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder, ApiOAuth2 } from '@nestjs/swagger';
import { CorrelationInterceptor } from './middleware/correlation.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new CorrelationInterceptor());

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Meeting API')
    .setDescription('Meeting API description')
    .setVersion('1.0')
    .addTag('meet')
    .addOAuth2({
      type: 'oauth2',
      bearerFormat: 'Bear' // ??
    })
    .build();

    const document = SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup('api',app, document);


  await app.listen(3000);
}
bootstrap();
