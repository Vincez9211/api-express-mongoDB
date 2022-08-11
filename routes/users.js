const express = require("express")
const router = express.Router()
const { collection, ObjectId } = require("../config/database") 

// get with projection
router.get("/", (req, res) => {
    let project = { projection: { _id: 0, username: 1 } }
    //res.send("User List")
    collection.find( {}, project ).toArray((err, result) => {
        if (err) throw err;
        res.json(result)
    })
})

// get without projection
// router.get("/", (req, res) => {
//     //res.send("User List")
//     collection.find().toArray((err, result) => {
//         if (err) throw err;
//         res.json(result)
//     })
// })
router.post("/", (req, res) => {
   // res.send("Create New User")
    collection.insertOne(req.body, (err, res) => {
        if (err) throw err;
    })
   res.send("1 document inserted.")
})
router
    .route("/:id")
    .get((req, res) => {
       //res.send(`Get a User with ID: ${req.params.id}`)
       const query = {
            _id: ObjectId(req.params.id)
       }
       collection.findOne(query, (err, result) => {
            if (err) throw err;
            res.send(result)
       })
    })
    .put((req, res) => {
        //res.send(`Update a User with ID: ${req.params.id}`)
        const query = { _id: ObjectId(req.params.id) } 
        let newvalues = { $set: req.body };
        collection.updateOne(query, newvalues, (err, result) => {
            if (err) throw err;
        })
        res.send("1 document updated.")
    })
    .delete((req, res) => {
        //res.send(`Delete a User with ID: ${req.params.id}`)
        const query = { _id: ObjectId(req.params.id) }
        collection.deleteOne(query, (err, result) => {
            if (err) throw err;
        })
        res.send("1 document deleted.")
    })
module.exports = router