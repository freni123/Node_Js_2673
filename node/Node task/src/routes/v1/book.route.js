const express = require('express');
const {bookValidation} = require('../../validation')
const {bookCotroller} = require('../../controllers')
const validate = require("../../middlewares/validate")

const router = express.Router();

//Create-Book
router.post(
    "/create-book",
    validate(bookValidation.createBook),
    bookCotroller.createBook
);
//Get-Book List
router.get(
    "/book-list",
    bookCotroller.getBookList
)
module.exports = router;