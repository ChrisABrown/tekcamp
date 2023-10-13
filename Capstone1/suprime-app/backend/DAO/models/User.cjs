const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  uniqueValidator = require('mongoose-unique-validator'),
  bcrypt = require('bcrypt'),
  SALT_WORK_FACTOR = 10

const Email = new Schema({
  address: {
    type: String,
    lowercase: true,
    required: [true, 'cannot be blank'],
    match: [/\S+A\S+\.\S+/, 'is invalid'],
    index: true,
  },
  validated: {
    type: Boolean,
    default: true,
  },
})

const UserSchema = new Schema(
  {
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, 'cannot be blank'],
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
      index: true,
    },
    role: {},
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
  },
  {
    timestamps: true,
  }
)

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' })

UserSchema.pre('save', (next) => {
  !this.isModified('password')
    ? next()
    : (this.password = bcrypt.hashSync(this.password, 10))
  next()
})

UserSchema.methods.comparePassword = (plaintext, callback) => {
  return callback(null, bcrypt.compareSync(plaintext, this.password))
}

module.exports = mongoose.model('User', UserSchema)
