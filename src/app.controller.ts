import { BadRequestException } from '@nestjs/common';
import { Controller, Get, NotFoundException } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  async hello(): Promise<void> {
    // throw new NotFoundException();
    throw new BadRequestException();
  }
}
