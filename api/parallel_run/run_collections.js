const async = require('async')
const newman = require('newman')
const path = require('path')

const collectionPath1 = path.join(__dirname, 'postman', 'RentalAPI.postman_collection.json') // Create a new collection for each test

// Could be used as much as need different collections in this test
/*
const collectionPath = path.join(
    __dirname,
    "postman",
    "RentalAPI.postman_collection.json"
);
*/

const collectionPath2 = path.join(__dirname, 'postman', 'RentalAPI.postman_collection.json') // Create a new collection for each test

const envPath = path.join(__dirname, 'postman', 'Rentalenv.postman_environment.json') // Create a new env for each test

const PARALLEL_RUN_COUNT = 2

const runNewman = (collection, environment, callback) => {
  newman.run(
    {
      collection,
      environment,
      reporters: 'cli',
    },
    callback
  )
}

const tasks = Array.from({ length: PARALLEL_RUN_COUNT }, (_, index) => (callback) => {
  async.parallel(
    [
      (cb) => runNewman(collectionPath1, envPath, cb),
      (cb) => runNewman(collectionPath2, envPath, cb),
    ],
    callback
  )
})

async.parallel(tasks, (err, result) => {
    if (err) {
        console.error('Error: ', err)
        process.exit(1)
    }
    console.log('All collections have been run successfully.')
})
