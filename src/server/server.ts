import { NestFactory } from '@nestjs/core';
import * as expressStaticGzip from 'express-static-gzip';
import { AddressInfo } from 'net';
import { join } from 'path';
import { ServerModule } from './server.module';

async function bootstrap() {
  const app = await NestFactory.create(ServerModule);

  /**
   * Add Middleware Items
   */

  const staticPath = join(__dirname, '../', 'ui-resources');
  console.log(`Root Directory Name :: ${__dirname}`);
  console.log(`Updated Static Directory Name :: ${staticPath}`);

  app.use('/', expressStaticGzip(staticPath,{
    enableBrotli: true,
    orderPreference: ['br'],
    index: false,
    serveStatic:{
      maxAge: '365d',
      etag: true,
      setHeaders: (res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
      }
    }
  }));

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
