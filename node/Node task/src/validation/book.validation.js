const Joi = require("joi");

/** Create Book */
const createBook = {
  body: Joi.object().keys({
    book_title: Joi.string().required().trim(),
    book_author: Joi.string().required().trim(),
    book_desc: Joi.string().required().trim(),
    book_price: Joi.string().required().trim(),
  }),
};
/** Get Book List */
const getBookList = {
  query:Joi.object().keys({
    serach:Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  })
}
module.exports = {createBook,getBookList};