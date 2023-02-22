import { Module } from '@nestjs/common';
import { ServerController } from './controller/server.controller';

@Module({
  imports: [],
  controllers: [ServerController],
})
export class ServerModule {}
