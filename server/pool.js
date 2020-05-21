const { Client } = require('pg');

const connectionString = 'PASTE YOUR CONNECTION STRING HERE';

const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect(err => {
  if (err) console.log(err);
  else console.log('Connected to database!');
});

module.exports = client;
