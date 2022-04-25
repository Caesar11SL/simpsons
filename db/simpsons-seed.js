const Simpson = require('../model/simpson-model')

const simpsonData = require('./simpsons-seed.json')


Simpson.deleteMany({})
  .then(() => {
    return Simpson.insertMany(simpsonData);
  })
  .then(console.log)

  .catch(console.error)

  .finally(() => {
      
    process.exit();
  });