const express = require("express");
const Product = require('../models/productModel');

const productRouter = express.Router();

//GET: Display all products 
productRouter.route('/')
  .get((req, res) => {
    Product.find({}, (err, products) => {
      res.json(products);
    })
  })

// POST: Add a product
productRouter.route('/')
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

// PUT: Update product in the database
productRouter.route('/:productId')
  .get((req, res) => {
    Product.findById(req.params.productId, (err, product) => {
      res.json(product)
    })
  })
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

// PATCH: Update product properties
productRouter.route('/:productId')
  .get((req, res) => {
    Product.findById(req.params.productId, (err, product) => {
      res.json(product)
    })
  })
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
  .patch((req, res) => {
    Product.findById(req.params.productId, (err, product) => {
      if(req.body._id) {
        delete req.body._id;
      }
      for(let p in req.body){
        product[p] = req.body[p];
      }
      product.save();
      res.json(product);
    })
  })

  // DELETE: Remove product from the database
  productRouter.route('/:productId')
  .get((req, res) => {
    Product.findById(req.params.productId, (err, product) => {
      res.json(product)
    })
  })
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
  .patch((req, res) => {
    Product.findById(req.params.productId, (err, product) => {
      if(req.body._id) {
        delete req.body._id;
      }
      for(let p in req.body){
        product[p] = req.body[p];
      }
      product.save();
      res.json(product);
    })
  })
  .delete((req, res) => {
    Product.findById(req.params.productId, (err, product) => {
      product.remove(err => {
        if(err) {
          res.status(500).send(err)
        }
        else {
          res.status(204).send('removed')
        }
      })
    })
  })
module.exports = productRouter;
