import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Nest Cource API')
        .setDescription('API documentation for Nest Course')
        .setVersion('1.0.0')
        .setContact(
            'TeaCoder Team',
            'https://teacoder.ru',
            'support@teacoder.ru',
        )
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('/docs', app, document, {
        jsonDocumentUrl: '/swagger.json',
        yamlDocumentUrl: '/yaml.json',
        customSiteTitle: 'Nest js Api docs',
    });

    await app.listen(3000);
}
bootstrap();
