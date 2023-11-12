const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(con => {
    console.log(`Database connected successfully`);
  });

// const testTour = new Tour({
//   name: 'The Forest hiker',
//   rating: 4.7,
//   price: 497
// });

// testTour.save().then(doc => console.log(doc));

const app = require('./app');

app.listen(3000, () => {
  console.log('SERVER STARTED!!');
});
