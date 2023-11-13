import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema({
    timestamps: true,
})
export class Customer {
    @Prop({ type: Types.ObjectId, ref: 'User' })
    user: Types.ObjectId;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    phone: string;
    @Prop([{
        street: String,
        city: String,
        country: String,
        zipCode: String
    }])
    addresses: Record<string, any>[];
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);