export const controller = {}

controller.showFridayPage = (req, res) => {
  const inputDate = req.query.date
  const selectedDate = inputDate ? new Date(inputDate) : new Date()

  if (Number.isNaN(selectedDate.getTime())) {
    return res.status(400).render('friday/index', {
      dateString: inputDate,
      weekday: 'Invalid date',
      isFriday: false,
      error: 'The date in the query string is not valid.'
    })
  }

  const weekday = selectedDate.toLocaleDateString('en-US', { weekday: 'long' })
  const dateString = selectedDate.toISOString().split('T')[0]
  const isFriday = selectedDate.getDay() === 5

  res.render('friday/index', {
    dateString,
    weekday,
    isFriday,
    error: null
  })
}