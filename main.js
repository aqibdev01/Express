import express from 'express'
import blog from "./routes/blog.js"
const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)

app.get('/', (req, res) => {
  res.send('Hi This is a get request!')
})
app.post('/', (req, res) => {
  res.send('Post Request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})