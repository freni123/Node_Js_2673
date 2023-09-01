const { LEGAL_TLS_SOCKET_OPTIONS } = require("mongodb");
const {bookService} = require("../services");
const { options } = require("joi");
// create-book
const createBook = async(req,res) =>{
    try {
        const reqBody = req.body;
        const book = await bookService.createBook(reqBody);
        if(!book){
            throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
        success: true,
        message:"Book Details Successfully",
        data: {book},
      });
    } catch (error) {
              res.status(400).json({ success: false, message: error.message });

    }
}
// Get Book List
const getBookList = async (req,res) => {
    try {
        const getBookDetails = await bookService.getBookList(req,res);
        res.status(200).json({
            success:true,
            message:"Book details get successfully!",
            data:getBookDetails,
        })
    } catch (error) {
        res.status(400);
    }

}
module.exports = {
        createBook,
        getBookList
}
