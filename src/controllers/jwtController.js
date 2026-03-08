import { jwtUserModel } from '../models/jwtUserModel.js'
import { jwtModel } from '../models/jwt.js'

export const controller = {}

controller.login = async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({
        type: 'failed',
        message: 'Username and password are required.'
      })
    }

    const token = await jwtUserModel.login(username, password)
    const payload = jwtModel.verifyJwtToken(token)

    res.json({
      type: 'success',
      message: 'The user was authenticated.',
      payload,
      token
    })
  } catch (error) {
    res.status(401).json({
      type: 'failed',
      message: 'Wrong user or password!'
    })
  }
}

controller.token = (req, res) => {
  res.json({
    type: 'success',
    message: 'The JWT token was validated.',
    payload: res.locals.jwt
  })
}