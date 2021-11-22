const { model, Schema } = require('mongoose')

const Movie = new Schema({
  title: String,
  year: String,
  imdbID: String,
  type: String,
  poster: String
})

module.exports = model('Movie', Movie)
