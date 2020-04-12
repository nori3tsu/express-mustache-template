const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// mustache-express
const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('views', __dirname + '/../views');
app.set('view engine', 'mustache');
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', (req, res) => {
  res.render('index', {
    param: 'value'
  })
});

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server started: port = ${port}`);
});