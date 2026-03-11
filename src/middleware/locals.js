const middleware = {}

export { middleware as localsMiddleware }

middleware.injectBaseUrl = (req, res, next) => {
  res.locals.baseURL = process.env.BASE_URL || '/'
  next()
}