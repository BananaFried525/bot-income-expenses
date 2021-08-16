import { MessageEvent, StickerEventMessage } from '@line/bot-sdk';
import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { MessageHandle } from 'src/interfaces/message-handle.interface';

@Injectable()
export class StickerMessageService implements MessageHandle {
  private readonly logger = new Logger(StickerMessageService.name);

  handle(messageEvent: MessageEvent): void {
    const stickerMessage = <StickerEventMessage>messageEvent.message;
    this.logger.log(stickerMessage);
  }
}
