const Song = require('../models/Song')
const mongoose = require('mongoose')

module.exports = {
  getSongs: async (req, res) => {
    const user_id = req.user._id
  
    const songs = await Song.find({user_id}).sort({createdAt: -1})
  
    res.status(200).json(songs)
  },

  getSong: async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such song'})
    }
  
    const song = await Song.findById(id)
  
    if (!song) {
      return res.status(404).json({error: 'No such song'})
    }
    
    res.status(200).json(song)
    //console.log(id)
  },

  createSong: async (req, res) => {
    const {title, lyrics} = req.body
  
    let emptyFields = []
  
    if(!title) {
      emptyFields.push('title')
    }
    if(!lyrics) {
      emptyFields.push('load')
    }
   /*  if(emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    } */
  
    // add doc to db
    try {
      const user_id = req.user._id
      const song = await Song.create({title, lyrics, user_id})
      res.status(200).json(song)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  },

  deleteSong: async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such song'})
    }
  
    const song = await Song.findOneAndDelete({_id: id})
  
    if (!song) {
      return res.status(400).json({error: 'No such song'})
    }
  
    res.status(200).json(song)
  },

  updateSong:  async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such song'})
    }
  
    const song = await Song.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!song) {
      return res.status(400).json({error: 'No such song'})
    }
  
    res.status(200).json(song)
  },
  newSong: async(req, res) => {
    res.send('hey')
  }
}
/*
// get all songs
const getSongs = async (req, res) => {
  const user_id = req.user._id

  const songs = await Song.find({user_id}).sort({createdAt: -1})

  res.status(200).json(songs)
}

// get a single song
const getSong = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such song'})
  }

  const song = await Song.findById(id)

  if (!song) {
    return res.status(404).json({error: 'No such song'})
  }
  
  res.status(200).json(song)
}


// create new song
const createSong = async (req, res) => {
  const {title, load, reps} = req.body

  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!load) {
    emptyFields.push('load')
  }
  if(!reps) {
    emptyFields.push('reps')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const user_id = req.user._id
    const song = await Song.create({title, load, reps, user_id})
    res.status(200).json(song)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a song
const deleteSong = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such song'})
  }

  const song = await Song.findOneAndDelete({_id: id})

  if (!song) {
    return res.status(400).json({error: 'No such song'})
  }

  res.status(200).json(song)
}

// update a song
const updateSong = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such song'})
  }

  const song = await Song.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!song) {
    return res.status(400).json({error: 'No such song'})
  }

  res.status(200).json(song)
}


module.exports = {
  getSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong
}
*/