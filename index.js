const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3030);

app.get('/', (req, res) => {
  res.send('Local Express Server');
});

app.post('/login', (req, res) => {
    let 
})

app.listen(app.get('port'), '0.0.0.0', () => {
  console.log(`on port ${app.get('port')}`);
});