const middleware = {}

export { middleware as flashMiddleware }

middleware.flashMessage = (req, res, next) => {
  res.locals.flashMessage = req.session?.flashMessage ?? null
  req.session.flashMessage = null
  next()
}