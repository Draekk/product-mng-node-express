const repository = require("../repositories/productRepository");
const Product = require("../entities/product");

/**
 * Retrieves all products from the repository.
 *
 * @returns {Product[]|null} An array of Product objects or null if an error occurs.
 */
function findProducts() {
  return repository.findAll();
}

/**
 * Retrieves a product by its ID from the repository.
 *
 * @param {number} id - The unique identifier of the product to retrieve.
 * @returns {Product|null} The Product object with the specified ID, or null if not found or an error occurs.
 */
function findProductById(id) {
  return repository.findById(id);
}

/**
 * Retrieves a list of products whose names match the provided name exactly (case-insensitive).
 *
 * @param {string} name - The name of the products to retrieve.
 * @returns {Product[]|null} An array of Product objects that match the provided name, or null if an error occurs.
 *
 * @throws Will throw an error if the provided name is not a string.
 */
function findProductsByName(name) {
  if (typeof name !== "string") {
    throw new Error("Nombre inválido");
  }
  try {
    return repository
      .findAll()
      .filter((p) => p._name.toLowerCase() === name.trim().toLowerCase());
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 * Retrieves a list of products whose names contain the provided text (case-insensitive).
 *
 * @param {string} text - The text to search for in the product names.
 * @returns {Product[]|null} An array of Product objects that contain the provided text in their names, or null if an error occurs.
 *
 * @throws Will throw an error if the provided text is not a string.
 */
function findProductsByNameContaining(text) {
  try {
    if (typeof text !== "string") {
      throw new Error("Texto inválido");
    }
    return repository
      .findAll()
      .filter((p) => p._name.toLowerCase().match(text.trim().toLowerCase()));
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 * Saves a new product to the repository.
 *
 * @param {Object} productJson - The JSON object representing the product to save.
 * @param {string} productJson.name - The name of the product.
 * @param {number} productJson.price - The price of the product.
 *
 * @returns {Product|null} The saved Product object, or null if an error occurs.
 *
 * @throws Will throw an error if the provided productJson is not an object, if it does not contain the required properties, or if the data types are invalid.
 */
function saveProduct({ name, price }) {
  try {
    if (typeof name !== "string" || typeof price !== "number") {
      throw new Error("Tipos de datos inválidos");
    }
    let product = new Product();
    product._name = name;
    product._price = price;

    return repository.save(product);
  } catch (error) {
    console.error(`${error}`);
    return null;
  }
}

/**
 * Updates an existing product in the repository.
 *
 * @param {Object} productJson - The JSON object representing the product to update.
 * @param {number} productJson.id - The unique identifier of the product to update.
 * @param {string} productJson.name - The new name of the product.
 * @param {number} productJson.price - The new price of the product.
 *
 * @returns {Product|null} The updated Product object, or null if an error occurs.
 *
 * @throws Will throw an error if the provided productJson is not an object, if it does not contain the required properties, or if the data types are invalid.
 */
function updateProduct({ id, name, price }) {
  try {
    if ((typeof id, price !== "number" || typeof name !== "string")) {
      throw new Error("Tipos de datos inválidos.");
    }
    let product = new Product();
    product._id = productJson.id;
    product._name = productJson.name;
    product._price = productJson.price;

    return repository.save(product);
  } catch (error) {
    console.error(`${error}`);
    return null;
  }
}

/**
 * Deletes a product from the repository by its unique identifier.
 *
 * @param {number} id - The unique identifier of the product to delete.
 *
 * @throws Will throw an error if the provided ID is not a valid number.
 */
function deleteProduct(id) {
  if (typeof id !== "number" || isNaN(id) || id <= 0) {
    throw new Error("ID inválido");
  }
  repository.destroyById(id);
}

module.exports = {
  findProducts,
  findProductById,
  findProductsByName,
  findProductsByNameContaining,
  saveProduct,
  updateProduct,
  deleteProduct,
};
