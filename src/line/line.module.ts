import { LineController } from './line.controller';
import { Module } from '@nestjs/common';
import { BotHandleService } from './bot-handle.service';
import { MessageService } from './handle/message.service';
import { ClientService } from '../services/client.service';
import { PostbackService } from './handle/postback.service';
import { TextMessageService } from './handle/message-handle/text-message.service';
import { StickerMessageService } from './handle/message-handle/sticker-message.service';

@Module({
  imports: [],
  controllers: [LineController],
  providers: [
    BotHandleService,
    MessageService,
    ClientService,
    PostbackService,
    TextMessageService,
    StickerMessageService,
  ],
})
export class LineModule {}
