import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ReportDocument = Report & Document;

@Schema()
export class Report {
  @Prop({ type: String, required: true })
  userId: string;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
