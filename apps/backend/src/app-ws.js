const WebSocket = require("ws")

const onError = (ws, error) => {
    console.error(`[onError]: ${error.message}`)
}

const onMessage = (ws, data) => {
    console.log(`[onMessage]: ${data}`)
    ws.send("recebido")
}

const onConnection = (ws, req) => {
    ws.on("message", data => onMessage(ws, data))
    ws.on("error", error => onError(ws, error))
};

module.exports = (server) => {
    const wss = new WebSocket.Server({
        server
    })

    wss.on("connection", onConnection)

    console.log("Websocker server is running")
    return wss
}