import mongoose, { Document, Schema } from 'mongoose'
import { locationSchema, Ilocation } from '../../sharedModel/location'
import { hash } from 'bcryptjs'

export interface Iuser extends Document {
    firstName: string
    lastName: string
    phone: string
    password: string
    email: string
    location: Ilocation
    dateBirthday?: Date
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
    password: {
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
    dateBirthday: {
        required: true,
        type: Date
    },
}, { timestamps: true })

userSchema.pre<Iuser>('save', function (next) {
    if (this.isNew || this.isModified('password')) {
        hash(this.password, 8, (err, hash) => {
            if (err) return next(err)
            this.password = hash
            next()
        })
    }
    next()
})

export default mongoose.model<Iuser>('User', userSchema)