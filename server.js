const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

app.listen(3000, () => {
  console.log('ola');
});
