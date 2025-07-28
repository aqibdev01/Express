import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hi This is a get request!')
})

router.post('/about', (req, res) => {
  res.send('Post Request')
})

router.get('/post/:slug', (req, res) => {
  res.send(`Fetching blogpost for ${req.params.slug}`)
})

export default router;