import { Client, Message, TextMessage } from '@line/bot-sdk';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ClientService {
  private readonly client = new Client({
    channelSecret: this.configService.get(`LINE_CHANNEL_SECRET`),
    channelAccessToken: this.configService.get(`LINE_CHANNEL_ACCESS_TOKEN`),
  });
  constructor(private configService: ConfigService) {}

  async reply(replyToken: string, message: TextMessage): Promise<void> {
    await this.client.replyMessage(replyToken, message);
  }

  async push(userId: string, message: Message) {
    await this.client.pushMessage(userId, message);
  }
}
