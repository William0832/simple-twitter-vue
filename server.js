const express = require('express')
const serverStatic = require('serve-static')
const path = require('path')
const app = express()

app.use(serverStatic(path.join(__dirname, 'dist')))
const port = process.env.PORT || 5566
app.listen(port)
console.log('server started ' + port)
