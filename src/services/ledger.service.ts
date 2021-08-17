import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLedgerByCommand } from 'src/db/dto/ledger.dto';
import { Ledger, LedgerDocument } from 'src/db/schema/ledger.schema';

@Injectable()
export class LedgerService {
  constructor(
    @InjectModel(Ledger.name) private ledgerModel: Model<LedgerDocument>,
  ) {}

  async create(createLedger: CreateLedgerByCommand): Promise<Ledger> {
    const createdLedger = new this.ledgerModel(createLedger);
    return createdLedger.save();
  }

  //   async findOne(userId: string): Promise<User> {
  //     return this.userModel.findOne({ userId: userId }).exec();
  //   }

  //   async update(updateUserDto: UpdateUserDto) {
  //     return this.userModel
  //       .updateOne({ userId: updateUserDto.userId }, updateUserDto)
  //       .exec();
  //   }
}
