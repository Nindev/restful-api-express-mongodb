const express = require("express");
const Product = require('../models/productModel');

const productRouter = express.Router();

productRouter.route('/')
  // Display all products 
  .get((req, res) => {
    Product.find({}, (err, products) => {
      res.json(products)
    })
  })

productRouter.route('/')
  // Add a product
  .get((req, res) => {
    Product.find({}, (err, products) => {
      res.json(products)
    })
  })
  .post((req, res) => {
    let product = new Product(req.body);
    product.save();
    res.status(201).send(product)
  })

productRouter.route('/:productId')
  .get((req, res) => {
    Product.findById(req.params.productId, (err, product) => {
      res.json(product)
    })
  })
  // Update product in the database
  .put((req, res) => {
    Product.findById(req.params.productId, (err, product) => {
      product.name = req.body.name;
      product.sku = req.body.sku;
      product.brand = req.body.brand;
      product.description = req.body.description;
      product.save()
      res.json(product)
    })
  })
  module.exports = productRouter;
