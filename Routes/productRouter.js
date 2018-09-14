const express = require("express");
const productRouter = express.Router();

productRouter
  .get('/', (req, res) => {
    res.json([
      {
        id: 1,
        title: "Marteau",
        price: 40,
        stock: 999,
        brand: "Stanley"
      },
      {
        id: 2,
        title: "Tourne-vis",
        price: 20,
        stock: 500,
        brand: "Dexter"
      }
    ])
  })
  module.exports = productRouter;
