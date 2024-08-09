import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
dotenv.config(); // Carga las variables de entorno desde el archivo .env
import { UsersService } from './users/users.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const usersService = app.get(UsersService);

  const config = new DocumentBuilder()
    .setTitle('API de Usuarios')
    .setDescription('API para gestionar usuarios')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Verificar si hay usuarios en la base de datos
  const users = await usersService.findAll();
  if (users.length === 0) {
    // Crear un usuario por defecto
    const defaultUser: CreateUserDto = {
      name: 'Default User',
      email: 'default@example.com',
      age: 30,
      password: await bcrypt.hash('defaultPassword123', 10),
    };
    await usersService.create(defaultUser);
    console.log('Default user created');
  }
  await app.listen(3000);
}
bootstrap();
