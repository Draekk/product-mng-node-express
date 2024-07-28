const { log } = require("console");
const Product = require("./entities/product");

const product1 = new Product(1, "milk", 990);

log(product1);
