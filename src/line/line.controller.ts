import { WebhookRequestBody } from '@line/bot-sdk';
import { Body, NotFoundException } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';
import { BotHandleService } from './bot-handle.service';

@Controller('line')
export class LineController {
  constructor(private botHandleService: BotHandleService) {}

  @Get()
  greeting(): string {
    throw new NotFoundException();
    return 'hello';
  }

  @Post('webhook')
  async botGateway(@Body() { events }: WebhookRequestBody): Promise<any> {
    return this.botHandleService.handle(events);
  }
}
