const repository = require("../repositories/productRepository");
const Product = require("../entities/product");

function findProducts() {
  return repository.findAll();
}

function findProductById(id) {
  return repository.findById(id);
}

function findProductsByName(name) {
  try {
    return repository
      .findAll()
      .filter((p) => p._name.toLowerCase() === name.trim().toLowerCase());
  } catch (error) {
    console.error(`Ha ocurrido un error: ${error}`);
    return null;
  }
}

function findProductsByNameContaining(text) {
  try {
    return repository
      .findAll()
      .filter((p) => p._name.toLowerCase().match(text.trim().toLowerCase()));
  } catch (error) {
    console.error(`Ha ocurrido un error: ${error}`);
    return null;
  }
}

function save(productJson) {
  try {
    let product = new Product();
    product._name = productJson.name;
    product._price = productJson.price;

    return repository.save(product);
  } catch (error) {
    console.error(`Ha ocurrido un error: ${error}`);
    return null;
  }
}

function update(productJson) {
  try {
    let product = new Product();
    product._id = productJson.id;
    product._name = productJson.name;
    product._price = productJson.price;

    return repository.save(product);
  } catch (error) {
    console.error(`Ha ocurrido un error: ${error}`);
    return null;
  }
}

console.log(update({ id: 3, name: "Lemons", price: 80 }));
