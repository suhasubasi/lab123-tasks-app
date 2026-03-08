import bcrypt from 'bcrypt'
import { jwtModel } from './jwt.js'

const passwordHash = await bcrypt.hash('doe', 10)

const users = [
  {
    username: 'doe',
    password: passwordHash,
    email: 'doe@somewhere.se',
    role: 'user'
  }
]

export const jwtUserModel = {}

jwtUserModel.login = async (username, password) => {
  const user = users.find(user => user.username === username)

  if (!user) {
    throw new Error('Wrong user or password!')
  }

  const success = await bcrypt.compare(password, user.password)

  if (!success) {
    throw new Error('Wrong user or password!')
  }

  const token = jwtModel.createJwtToken(user.username, user.role, user.email)
  return token
}