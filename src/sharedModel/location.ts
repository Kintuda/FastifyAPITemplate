import mongoose, { Document, Schema } from 'mongoose'

export enum typeEnum {
    Point = 'Point'
}

export interface Ilocation extends Document {
    type: typeEnum
    coordinates: Array<Number>
    city: string
    street: string
    streetNumber?: string
    cep: string
    state: string
    neighborhood: string
    complement?: string
}

export const locationSchema: Schema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    streetNumber: {
        type: String
    },
    cep: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    neighborhood: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Point'],
    },
    coordinates: {
        type: [Number],
    },
    complement: {
        type: String
    }
}, { _id: false })


export default mongoose.model<Ilocation>('location', locationSchema)
