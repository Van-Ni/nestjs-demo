import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ReviewDocument = Review & Document;

@Schema({
    timestamps: true,
})
export class Review {
    @Prop()
    content: string;

    @Prop()
    rating: number;

    @Prop({ type: Types.ObjectId, ref: 'User' })
    user: Types.ObjectId;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);