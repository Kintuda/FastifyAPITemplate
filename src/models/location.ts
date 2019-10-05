import mongoose, { Document, Schema } from 'mongoose'

enum typeEnum {
    Point = 'Point'
}

export interface Ilocation extends Document {
    type: typeEnum
    coordinates: Array<Number>
    adress: string
    street: string
    streetNumber: string
    cep: string
    state: string
    neighborhood: string
    complement: string
}

export const locationSchema: Schema = new mongoose.Schema({
    adress: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    streetNumber: {
        type: String,
        required: true
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
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    },
    complement: {
        type: String
    }
}, { _id: false })

export default mongoose.model<Ilocation>('Location', locationSchema)