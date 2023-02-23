import { NestFactory } from '@nestjs/core';
import { AddressInfo } from 'net';
import { ServerModule } from './server.module';

async function bootstrap() {
  const app = await NestFactory.create(ServerModule);


  await app.listen(3000);
  const httpServer = await app.getHttpServer();
  const serverAddress = (await httpServer.address()) as AddressInfo;
  console.info(
      `NestJS Server is listening on ${serverAddress.address}:${serverAddress.port}`
  );
  return httpServer;
}


export const NodeServer = bootstrap().catch( err => {
  console.log(err.stack);
});
