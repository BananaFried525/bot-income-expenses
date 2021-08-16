import { Message, MessageEvent, WebhookEvent } from '@line/bot-sdk';
import { Injectable, Logger } from '@nestjs/common';
import { EventHandle } from 'src/interfaces/event-handle.interface';
import { MessageHandleList } from 'src/interfaces/message-handle.interface';
import { StickerMessageService } from './message-handle/sticker-message.service';
import { TextMessageService } from './message-handle/text-message.service';

@Injectable()
export class MessageService implements EventHandle {
  private readonly logger = new Logger(MessageService.name);
  private messageHandleList: MessageHandleList;
  constructor(
    private readonly textMessageService: TextMessageService,
    private readonly stickerMessageService: StickerMessageService,
  ) {
    this.messageHandleList = {
      text: this.textMessageService,
      sticker: this.stickerMessageService,
      //   image: this,
      //   video: this,
      //   audio: this,
      //   location: this,
      //   imagemap: this,
      //   template: this,
      //   flex: this,
    };
  }

  async handle(event: MessageEvent) {
    this.logger.log(JSON.stringify(event));
    const messageEvent = event.message;
    this.messageHandleList[messageEvent.type].handle(event);
  }
}
