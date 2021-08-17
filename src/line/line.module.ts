import { LineController } from './line.controller';
import { Module } from '@nestjs/common';
import { BotHandleService } from './bot-handle.service';
import { MessageService } from './handle/message.service';
import { ClientService } from '../services/client.service';
import { PostbackService } from './handle/postback.service';
import { TextMessageService } from './handle/message-handle/text-message.service';
import { StickerMessageService } from './handle/message-handle/sticker-message.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/db/schema/user.schema';
import { UserService } from 'src/services/user.service';
import { FollowService, UnFollowService } from './handle/subscribe.service';
import { Ledger, LedgerSchema } from 'src/db/schema/ledger.schema';
import { LedgerService } from 'src/services/ledger.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Ledger.name, schema: LedgerSchema },
    ]),
  ],
  controllers: [LineController],
  providers: [
    BotHandleService,
    MessageService,
    ClientService,
    PostbackService,
    TextMessageService,
    StickerMessageService,
    UserService,
    FollowService,
    UnFollowService,
    LedgerService,
  ],
})
export class LineModule {}
