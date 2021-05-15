import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  _id: Types.ObjectId;

  @Prop({ index: { unique: true } })
  email: string;

  @Prop()
  verifier: string;

  @Prop()
  salt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
