import { Injectable, Logger } from '@nestjs/common';
import { WebhookEvent } from '@line/bot-sdk';
import { MessageService } from './handle/message.service';
import { PostbackService } from './handle/postback.service';
import { EventHandleList } from 'src/interfaces/event-handle.interface';
import { FollowService, UnFollowService } from './handle/subscribe.service';

@Injectable()
export class BotHandleService {
  private readonly logger = new Logger(BotHandleService.name);
  private readonly lineEvent: EventHandleList;
  constructor(
    private readonly messageService: MessageService,
    private readonly postbackService: PostbackService,
    private readonly followService: FollowService,
    private readonly unFollowService: UnFollowService,
  ) {
    this.lineEvent = {
      message: this.messageService,
      //   unsend: 'unsend',
      follow: this.followService,
      unfollow: this.unFollowService,
      //   join: 'join',
      //   leave: 'leave',
      //   memberJoined: 'memberJoined',
      //   memberLeft: 'memberLeft',
      postback: this.postbackService,
      //   videoPlayComplete: 'videoPlayComplete',
      //   beacon: 'beacon',
      //   accountLink: 'accountLink',
      //   things: 'things',
    };
  }

  async handle(events: WebhookEvent[]): Promise<void> {
    for (const event of events) {
      if (event['replyToken'] != undefined) {
        await this.lineEvent[event.type].handle(event);
      }
    }
  }
}
