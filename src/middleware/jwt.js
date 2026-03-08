import { jwtModel } from '../models/jwt.js'

export const middleware = {}

middleware.jwtTokenIsValid = (req, res, next) => {
  const token = req.header('Authorization') || null

  try {
    res.locals.jwt = jwtModel.verifyJwtToken(token)
  } catch (error) {
    return res.status(403).json({
      status: 403,
      message: 'Forbidden'
    })
  }

  next()
}