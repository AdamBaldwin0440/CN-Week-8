const {Router} = require("express");
const authorRouter = Router();

const {
    addAuthor,
    getAuthorandBooks,
} = require("./controllers");

authorRouter.post("/authors/addauthor", addAuthor);
authorRouter.get("/authors/getauthorandbooks/:author", getAuthorandBooks);

module.exports = authorRouter;
