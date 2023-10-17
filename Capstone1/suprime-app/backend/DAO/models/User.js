// import Message from './Message.cjs'

import crypto from 'crypto'
import { ObjectId } from 'mongodb'
import '../../config/index.js'
import uniqueValidator from 'mongoose-unique-validator'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
const { Schema } = mongoose

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
      enum: ['user', 'worker', 'admin'],
      required: [true, 'Please specify user role'],
    },
    password: {
      type: String,
      required: true,
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
    hash: String,
    salt: String,
  },
  {
    timestamps: true,
  }
)

userSchema.plugin(uniqueValidator, { message: 'is already taken.' })

userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex')
}

userSchema.methods.generateJWT = function () {
  let today = new Date()
  let exp = new Date(today)
  exp.setDate(today.getDate() + 60)

  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      exp: parseInt(exp.getTime() / 1000),
    },
    secret
  )
}

userSchema.methods.validPassword = function (password) {
  let hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex')

  return this.hash === hash
}
userSchema.methods.toAuthJSON = function () {
  return {
    username: this.username,
    email: this.email,
    token: this.generateJWT(),
    bio: this.bio,
    image: this.image,
  }
}

const User = mongoose.model('User', userSchema)

export default User
