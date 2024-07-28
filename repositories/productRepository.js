const jsonProducts = require("../database/products");
const Product = require("../entities/product");

/**
 * Retrieves all products from the database.
 * @returns {Product[]|null} An array of Product objects or null if an error occurs.
 * @throws Will throw an error if there is a problem with the database connection or data retrieval.
 */
function findAll() {
  try {
    let products = jsonProducts.products.map((p) => {
      return new Product(p.id, p.name, p.price);
    });
    return products;
  } catch (error) {
    console.error(`Ha ocurrido un error: ${error}`);
    return null;
  }
}

/**
 * Retrieves a product from the database by its ID.
 *
 * @param {number} id - The unique identifier of the product to retrieve.
 * @returns {Product|null} A Product object if found, or null if not found or an error occurs.
 * @throws Will throw an error if there is a problem with the database connection or data retrieval.
 */
function findById(id) {
  try {
    let product = jsonProducts.products.find((p) => {
      return p.id === id;
    });
    return new Product(product.id, product.name, product.price);
  } catch (error) {
    console.error(`Ha ocurrido un error: ${error}`);
    return null;
  }
}

module.exports = { findAll, findById };
