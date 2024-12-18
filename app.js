const express = require("express");
const service = require("./services/productService");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`El servidor esta escuchando en el puerto: ${PORT}.`);
});

app.get("/", (req, res) => {
  // res.send(
  //   "<a href='/find/all' style='font-size: 20px; text-decoration: none; color: red;'>Product list</a>"
  // );
  res.sendFile(path.join(__dirname, "templates", "index.html"));
});

app.get("/find/all", (req, res) => {
  return res
    .status(HTTP_STATUS.CREATED)
    .send(JSON.stringify(service.findProducts()));
});

app.get("/find/id", (req, res) => {
  const id = req.query.id;
  const product = service.findProductById(id);
  if (product) {
    return res.status(HTTP_STATUS.OK).send(product);
  }
  return res.status(HTTP_STATUS.BAD_REQUEST).send("ERROR 400 BAD REQUEST");
});

app.get("/find/name", (req, res) => {
  const name = req.query.name;
  const products = service.findProductsByName(name);
  if (products.length > 0) {
    return res.status(HTTP_STATUS.OK).send(products);
  }
  return res.status(HTTP_STATUS.BAD_REQUEST).send("ERROR 400 BAD REQUEST");
});

app.get("/find/text", (req, res) => {
  const text = req.query.text;
  const products = service.findProductsByNameContaining(text);
  if (products.length > 0) {
    return res.status(HTTP_STATUS.OK).send(products);
  }
  return res.status(HTTP_STATUS.BAD_REQUEST).send("ERROR 400 BAD REQUEST");
});

app.post("/create/product", (req, res) => {
  const product = { name: req.body.name, price: parseInt(req.body.price) };
  if (product.name && product.price) {
    return res.status(HTTP_STATUS.CREATED).send(service.saveProduct(product));
  }
  return res.status(HTTP_STATUS.BAD_REQUEST).send("ERROR 400 BAD REQUEST");
});

app.post("/edit/product", (req, res) => {
  const product = {
    id: parseInt(req.body.id),
    name: req.body.name,
    price: parseInt(req.body.price),
  };
  const { id, name, price } = product;
  if ((id, name, price)) {
    return res.status(HTTP_STATUS.CREATED).send(service.updateProduct(product));
  }
  return res.status(HTTP_STATUS.BAD_REQUEST).send("ERROR 400 BAD REQUEST");
});

app.post("/delete/product", (req, res) => {
  const id = req.body.id;
  if (id !== null) {
    service.deleteProduct(id);
    return res.status(HTTP_STATUS.OK).redirect("/find/all");
  }
  return res.status(HTTP_STATUS.BAD_REQUEST).send("ERROR 400 BAD REQUEST");
});
