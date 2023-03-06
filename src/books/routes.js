const {Router} = require("express");
const bookRouter = Router();

const {
    addBook,
    getAllBooks,
    getOneBook,
    updateBook,
    deleteBook
} = require("./controllers");

bookRouter.post("/books/addbook", addBook);
bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.get("/books/getbook/:title", getOneBook);
bookRouter.put("/books/updatebook", updateBook);
bookRouter.delete("/books/deletebook", deleteBook);

module.exports = bookRouter;
