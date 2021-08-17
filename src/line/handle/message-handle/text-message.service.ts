import { MessageEvent, TextEventMessage, TextMessage } from '@line/bot-sdk';
import { Injectable, Logger } from '@nestjs/common';
import { MessageHandle } from 'src/interfaces/message-handle.interface';
import { ClientService } from 'src/services/client.service';
import { UserService } from 'src/services/user.service';

@Injectable()
export class TextMessageService implements MessageHandle {
  private readonly logger = new Logger(TextMessageService.name);
  constructor(
    private readonly clientService: ClientService,
    private readonly userService: UserService,
  ) {}

  async handle(messageEvent: MessageEvent): Promise<void> {
    const textMessage = <TextEventMessage>messageEvent.message;
    const replyToken = messageEvent.replyToken;
    this.logger.log(JSON.stringify(textMessage));
    switch (textMessage.text) {
      case '?help':
        const respMessage: TextMessage = {
          type: 'text',
          text: 'test',
        };
        this.clientService.reply(replyToken, respMessage);
        break;
      case '!add':
        break;
      default:
        this.logger.log(JSON.stringify(textMessage.text));
        break;
    }
  }

  async addIncome(message: MessageEvent) {
    return null;
  }
}
