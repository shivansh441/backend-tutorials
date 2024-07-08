require('dotenv').config()
const express = require('express')
// import express from "express" same matlab h upar wali line se bs depend krega ki module js use kr rhe ya common js use kr rhe 

const app = express()


const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send("This is twitter page")
})

// concept of hot reloading
// stop the server and restart the server (1.^C 2. npm start)
app.get('/login', (req, res)=> {
    res.send('<h1>This is login page</h1>')
})

app.get('/kuchbhi', (req, res ) => {
    res.send('<h2>this is the page of kuch bhi</h2>')
})

// port->process.env.jobhiapnenamlikhahai
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})