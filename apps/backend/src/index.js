const app = require("./app")
const appWs = require("./app-ws")
const port = 8001

const server = app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})

appWs(server)