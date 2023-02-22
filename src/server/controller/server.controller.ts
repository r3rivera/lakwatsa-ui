import { Controller, Get } from '@nestjs/common';


@Controller()
export class ServerController {
  constructor() {}

  @Get()
  getHello(): string {
    return "Hello World";
  }
}
