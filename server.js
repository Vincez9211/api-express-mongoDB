const express = require("express")
const app = express()

const userRouter = require('./routes/users')

app.use("/", userRouter)

//adding middleware, needed for adding document.
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.listen(3000)

app.get("/users", (req, res) => {
    res.send("Index Page")
})


