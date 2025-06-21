import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {

  @Get()
  getHello() {
    return ({
      status: 201,
      message: "server is healthy"
    });
  }
}
