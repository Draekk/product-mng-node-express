const repository = require("../repositories/productRepository");

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
  }
}

console.log(findProductsByName("bREAD "));
