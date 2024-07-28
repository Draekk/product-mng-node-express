const repository = require("../repositories/productRepository");

function findProducts() {
  return repository.findAll();
}

function findProductById(id) {
  return repository.findById(id);
}

console.log(findProductById(2));
