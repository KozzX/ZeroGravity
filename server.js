const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

const port = 8080

app.use(express.static('public'))

app.get('/game/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})

/*app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})*/

const rooms = {}
const players = {}
var seqRoom = 1
var width = 400
var height = 600

io.on('connection', (socket) => {
    
    console.log(socket.id)

})


server.listen(port, () => {
    console.log(`Listening port ${port}`)
})