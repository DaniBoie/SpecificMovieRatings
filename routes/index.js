const router = require('express').Router()

router.use('/api', require('./movieRoutes.js'))
router.use('/api', require('./omdbRoutes.js'))

module.exports = router
