const express = require('express')
const ctrl = require('./controller')
const app = express()
const massive = require('massive')
const { axios } = require('axios')
require('dotenv').config()


app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env

axios.get('/api/inventory', ctrl.getInventory)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    },
}).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('DB Ready')
    app.listen(SERVER_PORT, () => console.log(`Now serving on ${SERVER_PORT}`))
})