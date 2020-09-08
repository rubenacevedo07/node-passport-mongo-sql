//dbPassword = 'mongodb://ra_dbuser_008:ooyrZsIbkVRjb3C3@cluster0.kv4it.gcp.mongodb.net/Passport?retryWrites=true&w=majority';
dbPassword = 'mongodb+srv://ra_dbuser_008:hkKlFlxnGjg4Ymog@cluster0.kv4it.gcp.mongodb.net/Passport?retryWrites=true&w=majority';
/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ra_dbuser_008:<password>@cluster0.kv4it.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/

module.exports = {
    mongoURI: dbPassword
};
