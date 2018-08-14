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
  const name = req.body.name
  if (!!name) {
    const nextId = _.maxBy(whiskies, 'id').id + 1
    const whisky = { name, id: nextId }
    whiskies.push(whisky)
    res.send(whisky)
  } else {
    res.sendStatus(400)
  }
})

app.put('/whiskies/:id', (req, res) => {
  let whisky = whiskies.filter((item) => {
    return item.id === Number(req.params.id)
  })

  if (!!whisky) {
    // Don't actually bother updating
    res.sendStatus(204)
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