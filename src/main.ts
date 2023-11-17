import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { UsersModule } from './users/users.module';

async function bootstrap() {
  const PORT = Number(process.env.PORT) || 4000;
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create(UsersModule);
  await app.listen(PORT, () => console.log('Server listening at PORT:', PORT));
}
bootstrap();
