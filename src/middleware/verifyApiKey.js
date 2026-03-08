export function verifyApiKey(req, res, next) {
  const apiKey = req.query.API_KEY || req.header('Authorization') || null
  const validApiKey = 'my-secret-key'

  if (apiKey !== validApiKey) {
    return res.status(403).json({
      type: 'forbidden',
      message: 'You have not supplied a valid API key!'
    })
  }

  next()
}