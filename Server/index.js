const http = require('http')

const webSocket = require('ws')

const server = http.createServer((req, res)=>{
    res.end('Welcome to the HTTP index file!')
})

const wss = new webSocket.WebSocketServer({server})

wss.on('connection',(ws, req)=>{
    ws.send("Wecome to Simiel's webSocket shrine!!!")

    ws.on('message',(data)=>{
        console.log(data.toString())
    })

    
})

server.listen(8000)