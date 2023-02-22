import { NestFactory } from '@nestjs/core';
import { ServerModule } from './server.module';

async function bootstrap() {
  const app = await NestFactory.create(ServerModule);
  await app.listen(3000);
}


export const NodeServer = bootstrap().catch( err => {
  console.log(err.stack);
});
