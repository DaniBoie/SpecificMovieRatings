module.exports = require('mongoose').connect('mongodb://localhost/movie_db', {
  useNewUrlParser: true,
  // useFindandModify: true,
  useUnifiedTopology: true
})
