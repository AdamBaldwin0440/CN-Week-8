const {Router} = require("express");
const genreRouter = Router();

const {
    addGenre,
    getAllBooks,
} = require("./controller");

genreRouter.post("/genres/addgenre", addGenre);
genreRouter.get("/genres/getbooksbygenre/:genre", getAllBooks);

module.exports = genreRouter