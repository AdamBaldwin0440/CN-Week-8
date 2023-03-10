const {Router} = require("express");
const bookRouter = Router();

const {
    addBook,
    getAllBooks,
    getOneBook,
    updateBook,
    deleteOneBook,
    deleteAllBooks
} = require("./controllers");

bookRouter.post("/books/addbook", addBook);
bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.get("/books/getbook/:title", getOneBook);
bookRouter.put("/books/updatebook", updateBook);
bookRouter.delete("/books/deleteonebook/:title", deleteOneBook);
bookRouter.delete("/books/deleteallbooks", deleteAllBooks);

module.exports = bookRouter;
