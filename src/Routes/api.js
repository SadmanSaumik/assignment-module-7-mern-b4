const express = require("express");
const router = express.Router();

const blogController = require("../Controller/blogController");
const commentController = require("../Controller/commentController");
const messageController = require("../Controller/messageController");
const portfolioController = require("../Controller/portfolioController");
const productController = require("../Controller/productController");

router.get("/blog/create", blogController.create);
router.get("/blog/read", blogController.read);
router.get("/blog/update", blogController.update);
router.get("/blog/delete", blogController.delete);

router.get("/comment/create", commentController.create);
router.get("/comment/read", commentController.read);
router.get("/comment/update", commentController.update);
router.get("/comment/delete", commentController.delete);

router.get("/message/create", messageController.create);
router.get("/message/read", messageController.read);
router.get("/message/update", messageController.update);
router.get("/message/delete", messageController.delete);

router.get("/portfolio/create", portfolioController.create);
router.get("/portfolio/read", portfolioController.read);
router.get("/portfolio/update", portfolioController.update);
router.get("/portfolio/delete", portfolioController.delete);

router.get("/product/create", productController.create);
router.get("/product/read", productController.read);
router.get("/product/update", productController.update);
router.get("/product/delete", productController.delete);

module.exports = router;
