class Product {
  constructor(id = null, name = null, price = null) {
    this._id = id;
    this._name = name;
    this._price = price;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }
}

module.exports = Product;
