import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type LedgerDocument = Ledger & Document;

@Schema()
export class Ledger {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: Number, required: true })
  priceValue: number;

  @Prop({ type: String, required: true })
  userId: string;

  @Prop({ type: Date, default: Date.now() })
  date: Date;

  type: string;

  isMonthly: boolean;

  isAnnual: boolean;
}

export const LedgerSchema = SchemaFactory.createForClass(Ledger);
