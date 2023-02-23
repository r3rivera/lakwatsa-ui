import { All, Controller, Get, Header, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';


@Controller()
export class ServerController {
  constructor() {}

  @All('*')
  @Header('Content-Type', 'text/html')
  root(@Req() request:{}, @Res() response: Response): void {
    console.info("### Serving static content! ###");
    response.send(
      readFileSync(
        join('dist','ui-resources','index.html'),
        {
          encoding: 'utf8'
        }
      )
    );
  }



}
