import { userModel } from '../models/userModel.js'

export const controller = {}

controller.getUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

controller.getUserById = async (req, res) => {
  try {
    const userId = Number.parseInt(req.params.id, 10)
    const user = await userModel.getUserById(userId)

    if (!user) {
      return res.status(404).json({
        error: 'User not found'
      })
    }

    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

controller.createUser = async (req, res) => {
  try {
    const newUser = req.body

    if (!newUser.username || newUser.username.trim() === '') {
      return res.status(400).json({
        error: 'Username is required'
      })
    }

    if (!newUser.password || newUser.password.trim() === '') {
      return res.status(400).json({
        error: 'Password is required'
      })
    }

    if (!newUser.email || newUser.email.trim() === '') {
      return res.status(400).json({
        error: 'Email is required'
      })
    }

    const createdUser = await userModel.createUser({
      username: newUser.username.trim(),
      password: newUser.password.trim(),
      email: newUser.email.trim()
    })

    res.status(201).json(createdUser)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

controller.replaceUser = async (req, res) => {
  try {
    const userId = Number.parseInt(req.params.id, 10)
    const newUserData = req.body
    const existingUser = await userModel.getUserById(userId)

    if (!existingUser) {
      return res.status(404).json({
        error: 'User not found'
      })
    }

    if (!newUserData.username || newUserData.username.trim() === '') {
      return res.status(400).json({
        error: 'Username is required'
      })
    }

    if (!newUserData.password || newUserData.password.trim() === '') {
      return res.status(400).json({
        error: 'Password is required'
      })
    }

    if (!newUserData.email || newUserData.email.trim() === '') {
      return res.status(400).json({
        error: 'Email is required'
      })
    }

    const replacedUser = await userModel.replaceUser(userId, {
      username: newUserData.username.trim(),
      password: newUserData.password.trim(),
      email: newUserData.email.trim()
    })

    res.json(replacedUser)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

controller.deleteUser = async (req, res) => {
  try {
    const userId = Number.parseInt(req.params.id, 10)
    const deleted = await userModel.deleteUser(userId)

    if (!deleted) {
      return res.status(404).json({
        error: 'User not found'
      })
    }

    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}