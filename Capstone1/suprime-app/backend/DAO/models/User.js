// import Message from './Message.cjs'

import { ObjectId } from 'mongodb'
import uniqueValidator from 'mongoose-unique-validator'
import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const Schema = mongoose.Schema
const Session = new Schema({
  refreshToken: {
    type: String,
    default: '',
  },
})

const userSchema = new Schema(
  {
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, 'cannot be blank'],
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
      index: true,
    },
    role: {
      type: String,
      enum: ['user', 'employee', 'admin'],
      required: [true, 'Please specify user role'],
      default: 'user',
    },
    email: {
      type: String,
      unique: [true, 'email already exists in database'],
      lowercase: true,
      trim: true,
      required: [true, 'email not provided'],
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        },
        message: '{VALUE} is not a valid email',
      },
    },
    profile: {
      firstName: String,
      lastName: String,
      avatar: String,
      bio: String,
      address: {
        street1: String,
        street2: String,
        city: String,
        state: String,
        country: String,
        zip: String,
      },
    },
    messages: {
      type: [
        {
          type: ObjectId,
          ref: 'Message',
        },
      ],
    },
    authStrategy: {
      type: String,
      default: 'local',
    },
    refreshToken: {
      type: [Session],
    },
  },
  {
    timestamps: true,
  }
)

userSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    delete ret.refreshToken
    return ret
  },
})

userSchema.plugin(passportLocalMongoose)

userSchema.plugin(uniqueValidator, { message: 'is already taken.' })

const User = mongoose.model('User', userSchema)
// userSchema.method({
//   setPassword: function (password) {
//     this.salt = crypto.randomBytes(16).toString('hex')
//     this.hash = crypto
//       .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
//       .toString('hex')
//   },

//   generateJWT: function () {
//     let today = new Date()
//     let exp = new Date(today)
//     exp.setDate(today.getDate() + 60)

//     return jwt.sign({
//       id: this._id,
//       username: this.username,
//       exp: parseInt(exp.getTime() / 1000),
//       secret: process.env.SECRET,
//     })
//   },

//   validPassword: function (password) {
//     let hash = crypto
//       .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
//       .toString('hex')

//     return this.hash === hash
//   },

//   toAuthJSON: function () {
//     return {
//       username: this.username,
//       email: this.email,
//       token: this.generateJWT(),
//       bio: this.bio,
//       image: this.image,
//     }
//   },
// })

export default User
