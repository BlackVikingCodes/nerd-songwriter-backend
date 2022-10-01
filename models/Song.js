const mongoose = require('mongoose')

const Schema = mongoose.Schema

const songSchema = new Schema({
  title: {
    type: String,
    required: false
  },
  lyrics: {
    type: String,
    required: false
  },
  user_id: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Song', songSchema)