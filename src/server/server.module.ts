import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { ServerController } from './controller/server.controller';

@Module({
  imports: [],
  controllers: [AuthController, ServerController],
})
export class ServerModule {}
