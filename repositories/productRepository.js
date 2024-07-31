const jsonProducts = require("../database/products");
const Product = require("../entities/product");
let productList = jsonProducts.products.map((p) => {
  return new Product(p.id, p.name, p.price);
});

/**
 * Retrieves all products from the database.
 * @returns {Product[]|null} An array of Product objects or null if an error occurs.
 * @throws Will throw an error if there is a problem with the database connection or data retrieval.
 */
function findAll() {
  try {
    return productList;
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
    let product = productList.find((p) => p.id == id);
    return new Product(product.id, product.name, product.price);
  } catch (error) {
    console.error(`Ha ocurrido un error: ${error}`);
    return null;
  }
}

/**
 * Retrieves the maximum ID from the products array in the database.
 *
 * @returns {number} The maximum ID found in the products array, or 0 if no products are found or an error occurs.
 * @throws Will throw an error if there is a problem with the database connection or data retrieval.
 */
function max() {
  try {
    let maxId = 0;
    productList.forEach((p) => {
      if (maxId < p.id) {
        maxId = p.id;
      }
    });
    return maxId;
  } catch (error) {
    console.error(`Ha ocurrido un error: ${error}`);
    return 0;
  }
}

/**
 * Saves a product to the database. If the product already exists, it updates the existing product.
 * If the product does not exist, it creates a new product with a unique ID.
 *
 * @param {Product} product - The product object to save. The product object must have an '_id' property for updating.
 * @returns {Product|null} The saved product object, or null if an error occurs.
 * @throws Will throw an error if there is a problem with the database connection or data retrieval.
 */
function save(product) {
  try {
    if (product._id) {
      productList.forEach((p, i) => {
        if (product._id === p._id) {
          productList[i] = product;
        }
      });
      return product;
    } else {
      product._id = max() + 1;
      productList.push(product);
      return product;
    }
  } catch (error) {
    console.error(`Ha ocurrido un error: ${error}`);
    return null;
  }
}

/**
 * Deletes a product from the database by its ID.
 *
 * @param {number} id - The unique identifier of the product to delete.
 * @throws Will throw an error if there is a problem with the database connection or data retrieval.
 */
function destroyById(id) {
  try {
    productList.find((p, i) => {
      if (p._id == id) {
        productList.splice(i, 1);
        return true;
      }
    });
  } catch (error) {
    console.error(`Ha ocurrido un error: ${error}`);
  }
}

module.exports = { findAll, findById, max, save, destroyById };
