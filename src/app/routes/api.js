const express = require('express');
const Router = express.Router();
const multer = require('../middlewares/multer');
const productController = require('../controller/product.controller');

Router.get('/product/getAll', productController.getAll);
Router.get('/product/:id', productController.getById);
Router.post('/product/add', multer, productController.add);
Router.put('/product/:id', multer, productController.update);
Router.delete('/product/:id', productController.deleted);

module.exports = Router;