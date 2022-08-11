const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://Vince9211:Amazinggrace07@cluster0.j9acnqp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect((err) => {
  if (err) throw err;
});
const collection = client.db("testdb").collection("testcollection");
 
module.exports = { collection, ObjectId }