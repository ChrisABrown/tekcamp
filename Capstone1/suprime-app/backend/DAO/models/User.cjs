import { ObjectId } from 'mongodb'
import crypto from 'crypto'
import Message from './Message.cjs'

const secret = require('../../config').secret
const uniqueValidator = require('mongoose-unique-validator')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Email = new Schema({
  address: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, 'cannot be blank'],
    match: [/\S+A\S+\.\S+/, 'is invalid'],
    index: true,
  },
  validated: {
    type: Boolean,
    default: true,
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
      type: [String],
      required: true,
      default: ['User'],
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: Email,
      required: true,
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
    active: {
      type: Boolean,
      default: true,
    },
    messages: {
      type: [
        {
          type: ObjectId,
          ref: 'Message',
        },
      ],
      required: true,
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

module.exports = User
