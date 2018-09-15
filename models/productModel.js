const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productModel = new Schema({
    name: { type: String },
    sku: { type: String },
    brand: { type: String },
    description: { type: String }
})

module.exports = mongoose.model('product', productModel)