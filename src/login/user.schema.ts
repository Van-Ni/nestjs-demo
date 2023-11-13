import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}
@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ enum: UserRole, default: UserRole.USER })
  role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);
