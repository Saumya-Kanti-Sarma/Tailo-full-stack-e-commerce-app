
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<UserSchemaClass>;// for type safety

@Schema()
export class UserSchemaClass {
  @Prop({
    unique: true,
    required: true
  })
  name: string;

  @Prop({
    unique: true,
    required: true
  })
  email: string;

  @Prop({
    required: true
  })
  password: string;
  @Prop(
    { default: new Date() }
  )
  create_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(UserSchemaClass);
