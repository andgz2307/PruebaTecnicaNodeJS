import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    //AQUI SE DEBE USAR LA VARIABLE DE ENTORNO, LO CORREGIRE
    MongooseModule.forRoot(
      'mongodb+srv://andgz:cuenca@cursojsnode.haxcbjl.mongodb.net/?retryWrites=true&w=majority&appName=CursoJSNode',
    ),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
