const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine(
  'handlebars',
  exphbs.engine({
    defaultLayout: 'main',
  })
);

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// static files css, jpg etc
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
