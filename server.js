// const express = require("express");
// const app = express();
// const questions = require("./routes/ques")


// const express = require("express");
// const app = express();
// const port = 5000

// require the Express module
const express = require("express");
const cartItems = require("./cartItems");


// creates an instance of an Express server this is referencing the const express
const app = express();

// define the port
const port = 8080;

//convert to json
app.use(express.json());
app.use(cors());

// request
// app.use('/', __dirname,cartItems);

// Endpoints

// get json array of all items in the cart-items
//  status code 200

app.get("/cartItems", function(req, res) {

  res.status(200); //ok
  console.log(req.body);
  res.json(cartItems);

});

// get json response of :id
// status code 200
app.get("/cartItems/:id", function(req, res) {
  console.log(req.body); //data being extracted from the URL
  res.status(200); //ok
  return res.json(cart - items, id[req.params.index]); 
  res.send("get ID for item in the cart.." + req.params.id);
});


app.post("/cartItems", function(req, res) {

  cartItems.push(req.body);
  res.status(201); // created
  console.log(req.body); //data being extracted from the URL
  res.send("Add items to the cart ..");
});


app.put("/cartItems/:id", function(req, res) {

  const index = cartItems.findIndex(cartItem => cartItem.id == req.params.id);
  cartItems.splice(index, 1, req.body);

  
  res.status(200); //ok
  console.log(req.params.id); 
  res.send("Update items in the cart ..");
});


app.delete("/cartItems/:id", function(req, res) {

  res.status(204); //no content
  cartItems.splice(index, 1); //remove an item from the cart, not sure about the -1
  console.log(cartItems.findIndex(cartItem => cartItem.id == req.params.id));
  res.send("Delete items from the cart .. ");
});


app.listen(port, () => console.log(`Listening on port: ${port}.`));
console.log("Listening at http://localhost:8080/cart-items...");