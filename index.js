const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const pizzas = [
  {
    id: 0,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1667682942060-977925f9a54b?q=80&w=3972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Pepperoni with pepper",
    price: 8,
    description: "A classic pepperoni pizza with an extra kick of pepper.",
  },
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1632428442713-1f13a6c56ec4?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "4 Cheeses",
    price: 7,
    description: "A delightful blend of four different types of cheeses.",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1592977731761-2d58aafef572?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Barbecue Chicken",
    price: 15,
    description: "A tangy barbecue chicken pizza with a hint of sweetness.",
  },
  {
    id: 4,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1679924471066-dd984e92f395?q=80&w=3928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "With fresh tomatoes and basil",
    price: 15,
    description:
      "A refreshing pizza topped with fresh tomatoes and basil leaves.",
  },
];

app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "main",
  })
);

app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    companyName: "Pizza World",
    pizzas: pizzas,
  });
});

// static files css, jpg etc
app.use(express.static("public"));

app.use((req, res, next) => {
  res.status(404).send("Sorry we dont have such pizzunja");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
