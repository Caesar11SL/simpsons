
const mongoose = require('mongoose');

const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : "mongodb+srv://test:test@cluster0.ga9qe.mongodb.net/Simpsons?retryWrites=true&w=majority";

  mongoose.connect(mongoURI)
  .then((instance) => console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch((error) => console.log('Connection failed!', error));

module.exports = mongoose;