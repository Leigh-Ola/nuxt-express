/**
 * root = /api
 */

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    main_server: 'Nuxt',
    state: 'Vuex',
    api_server: 'Express',
  })
})
app.get('/x', (req, res) => {
  res.send('xxx')
})
app.get(['/y', '/y/:blah'], (req, res) => {
  let { query, params } = req
  res.json({
    name: '/y',
    params,
    query,
  })
})
app.get('/contact', (req, res) => {
  res.json({ email: 'Leigh@mail.com', phone: '08012345678' })
})

module.exports = {
  path: '/api',
  handler: app,
}
