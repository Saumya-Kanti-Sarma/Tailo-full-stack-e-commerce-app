
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<BooksSchemaClass>;// for type safety

@Schema()
export class BooksSchemaClass {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  img_url: string;

  @Prop()
  author: string;

  @Prop({ default: 0 })
  ratings: number;

  @Prop({ required: true })
  price: number;

  @Prop([String])
  category: string[];

  @Prop({ default: Date.now() })
  create_at: Date;
}

export const BooksSchema = SchemaFactory.createForClass(BooksSchemaClass);
