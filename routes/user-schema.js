const mongoose = require('mongoose')

/*  This is the user schema for mongoose/mongodb. With this schema, mongoose knows which data to expect and where it needs to be
stored in the the database. This schema will be used with my database and will be put in the variable name 'User'. Which
is now available to write, delete and update data to. */

// Define my framework for the database users
const mySchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  gender: String,
  age: Number,
  address: String,
  disability: String,
  hobbies: String,
  about: String,
  profilePic: String
})

const User = mongoose.model('users', mySchema)

module.exports = User
