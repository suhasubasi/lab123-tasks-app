import jwt from 'jsonwebtoken'

export const jwtModel = {}

jwtModel.createJwtToken = (username, role, email) => {
  const payload = {
    iss: 'Lab123 app',
    sub: username,
    username,
    email,
    role,
    permissions: ['read', 'write'],
    iat: Date.now()
  }

  const options = {
    expiresIn: '1h'
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET, options)
  return token
}

jwtModel.verifyJwtToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}