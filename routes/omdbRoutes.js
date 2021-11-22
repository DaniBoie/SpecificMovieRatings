const router = require('express').Router()
const axios = require('axios')
const { Media } = require('../models')

// Search omdb database and modify data for website's needs.
router.get('/omdb/:search', (req, res) => {
  axios.get(`http://www.omdbapi.com/?apikey=329ccf56&s=${req.params.search}`)
    .then(({ data }) => data.Search.map(media => (
      {
        title: media.Title,
        year: media.Year,
        imdbID: media.imdbID,
        type: media.Type,
        poster: media.Poster
      })))
    .then(modifiedMedia => Media.find()
      .then(media => modifiedMedia.filter(movie => media.every(dbData => dbData.imdbID !== movie.imdbID))))
    .then(filteredMedia => res.json(filteredMedia))
    .catch(err => console.log(err))
})

module.exports = router
