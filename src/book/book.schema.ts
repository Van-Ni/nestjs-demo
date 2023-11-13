import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class Book {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  price: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Category' })
  category: MongooseSchema.Types.ObjectId;

  @Prop()
  images: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Review' }] })
  reviews: MongooseSchema.Types.ObjectId[];
}

export type BookDocument = Book & Document;
export const BookSchema = SchemaFactory.createForClass(Book);