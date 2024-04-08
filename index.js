const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const pizzas = [
  {
    id: 0,
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1667682942060-977925f9a54b?q=80&w=3972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Pepperoni with pepper',
    price: 8,
    description: 'A classic pepperoni pizza with an extra kick of pepper.',
  },
  {
    name: 'Milano',
    price: 16,
  },
  {
    name: 'Margarita',
    price: 15,
  },
];

app.engine(
  'handlebars',
  exphbs.engine({
    defaultLayout: 'main',
  })
);

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index', { title: 'Home', companyName: 'Pizza World' });
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/products', (req, res) => {
  res.render('products', {
    title: 'Menue',
    products: pizzas,
  });
});

// static files css, jpg etc
app.use(express.static('public'));

app.use((req, res, next) => {
  res.status(404).send('Sorry we dont have such pizzunja');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
