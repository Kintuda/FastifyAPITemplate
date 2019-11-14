import mongoose, { Document, Schema, mongo } from 'mongoose'
import { locationSchema, Ilocation } from './location'

enum userRole {
    PLAYER = 'PLAYER',
    ADMIN = 'ADMIN'
}

export interface Iuser extends Document {
    authId: string
    firstName: string
    lastName: string
    phone: string
    email: string
    location: Ilocation
    role: userRole
    dateBirthday: Date
    userOptData: {}
}

const userSchema: Schema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: locationSchema
    },
    role: {
        required: true,
        type: String,
        enum: ['PLAYER', 'ADMIN']
    },
    dateBirthday: {
        required: true,
        type: Date
    },
    userOptData: {}

}, { timestamps: true })

export default mongoose.model<Iuser>('User', userSchema)