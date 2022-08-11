const express = require("express")

const app = express()

// needed for adding a document
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

const userRouter = require("./routes/users")

app.use("/users", userRouter)

app.listen(3000)

app.get("/", (req, res) => {
    res.send("Index Page")
})