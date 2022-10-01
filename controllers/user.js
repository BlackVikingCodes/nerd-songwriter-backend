const User = require('../models/User')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET_SAUCE, { expiresIn: '3d' })
}

module.exports = {
  loginUser: async (req, res) => {
    const {userName, password} = req.body
  
    try {
      const user = await User.login(userName, password)
  
      // create a token
      const token = createToken(user._id)
  
      res.status(200).json({userName, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  },

  signupUser: async (req, res) => {
    const {userName, password} = req.body
  
    try {
      const user = await User.signup(userName, password)
  
      // create a token
      const token = createToken(user._id)
  
      res.status(200).json({userName, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
}