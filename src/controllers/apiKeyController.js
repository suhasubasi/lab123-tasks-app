export const controller = {}

controller.magicAnswer = (req, res) => {
  res.json({
    message: 'YES. The magic answer is 42!'
  })
}