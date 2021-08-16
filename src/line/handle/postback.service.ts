import { PostbackEvent } from '@line/bot-sdk';
import { Injectable, Logger } from '@nestjs/common';
import { EventHandle } from 'src/interfaces/event-handle.interface';
import { ClientService } from 'src/services/client.service';

@Injectable()
export class PostbackService implements EventHandle {
  private logger = new Logger(PostbackService.name);
  constructor(private clientService: ClientService) {}
  async handle(event: PostbackEvent): Promise<any> {
    return () => console.log(event['postback']);
  }
}
