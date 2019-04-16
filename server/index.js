const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

// middleware 
app.use(morgan('dev'));

app.get('/', (res, req) => {
  res.send('Testing route / !!')
})

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});

