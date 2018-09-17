const express = require("express");
const Product = require('../models/productModel');

const productRouter = express.Router();

productRouter.route('/')
  // GET: Display all products 
  .get((req, res) => {
    Product.find({}, (err, products) => {
      res.json(products)
    })
  })
  // POST: Add a product
  .post((req, res) => {
    let product = new Product(req.body);
    product.save();
    res.status(201).send(product)
  })

// MIDDLEWARE
productRouter.use('/:productId', (req, res, next)=>{
  Product.findById( req.params.productId, (err, product) => {
    if(err)
      res.status(500).send(err)
    else {
      req.product = product;
      next()
    }  
  })
})

productRouter.route('/:productId')
  .get((req, res) => {
    res.json(product)
  })
  // PUT: Update product in the database  
  .put((req, res) => {
    req.product.name;
    req.product.sku;
    req.product.brand;
    req.product.description;
    req.product.save()
    res.json(req.product)
  })
  // PATCH: Update product properties
  .patch((req, res) => {
    if(req.body._id) {
      delete req.body._id;
    }
    for(let p in req.body){
      req.product[p] = req.body[p];
    }
    req.product.save();
    res.json(req.product);
  })
  // DELETE: Remove product from the database
  .delete((req, res) => {
    req.product.remove(err => {
      if(err) {
        res.status(500).send(err)
      }
      else {
        res.status(204).send('removed')
      }
    })
  })
module.exports = productRouter;
