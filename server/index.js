const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

// middleware 
app.use(morgan('dev'));

// Home
app.get('/', (req, res) => {
  res.send('Home del servidor')
})

// App
app.get('/app', (req, res) => {
  res.send('App del servidor');
});

// *
app.get('*', (req, res) => {
  res.send('Donde estoy en el servidor (*)');
});

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

