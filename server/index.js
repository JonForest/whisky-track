const _ = require('lodash')
const express = require('express')
const cors = require('cors')

const port = 3001

const app = express()
app.use(express.json())
app.use(cors())

let data = require('./data/whiskies.json')

let whiskies = data.whiskies

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

app.get('/whiskies', (req, res) => {
  sendWithTimeout(res, whiskies, 1000) // Simulated delay of 1s
})

app.post('/whiskies', (req, res) => {
  whiskies.push(req.body)
  res.sendStatus(200)
})

app.put('/whiskies/:id', (req, res) => {
  let whisky = whiskies.filter((item) => {
    return Number(item.id) === Number(req.params.id)
  })

  if (!!whisky) {
    whisky = req.body
    res.sendStatus(200)
  } else {
    res.sendStatus(400)
  }
})

const sendWithTimeout = (res, data, timeout) => {
  setTimeout(() => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data))
  }, timeout)
}