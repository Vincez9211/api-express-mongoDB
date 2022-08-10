const express = require("express")
const app = express()

const userRouter = require('./routes/users')

app.use("/", userRouter)

app.listen(3000)

app.get("/", (req, res) => {
    res.send("Index Page")
})


