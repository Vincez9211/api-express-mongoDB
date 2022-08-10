const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send('user list')
})

router.post("/", (req, res) => {
    res.send("create new user")
})

// router.get("/:id", (req, res) => {
//     res.send(`Get a user + ${req.params.id}`)
// })

// router.put("/:id", (req, res) => {
//     res.send(`Update a user + ${req.params.id}`)
// })

// router.delete("/:id", (req, res) => {
//     res.send(`Delete a user + ${req.params.id}`)
// })

router
    .route("/:id")
    .get((req, res) => {
        res.send(`Get a user + ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update a user + ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete a user + ${req.params.id}`)
    })

module.exports = router

