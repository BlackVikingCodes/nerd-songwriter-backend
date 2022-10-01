const express = require('express')
const SongsController = require('../controllers/song')
const ensureAuth = require('../middleware/ensureAuth')

const router = express.Router()

// require auth for all song routes
router.use(ensureAuth)

// GET all songs
router.get('/', SongsController.getSongs)

//GET a single song
router.get('/:id', SongsController.getSong)

// POST a new song
router.post('/', SongsController.createSong)

// DELETE a song
router.delete('/:id', SongsController.deleteSong)

// UPDATE a song
router.put('/:id', SongsController.updateSong)


module.exports = router