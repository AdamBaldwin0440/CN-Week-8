require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5001;

const Book = require("./books/model");
// const Author = require("./author/model");
// const Genre = require("./genre/model");

const bookRouter = require("./books/routes");
// const authorRouter = require("./author/routes");
// const genreRouter = require("./genre/routes");
const { Router } = require("express");

const app = express();
app.use (express.json());

const syncTables = () => {
    // Author.hasMany(Book);
    // Book.belongsTo(Author);

    Book.sync({alter:true});
    // Author.sync({alter:true})
}

app.use(bookRouter);
// app.use(authorRouter);
// app.use(genreRouter);

app.get("/health", (req, res) =>
    res.status(200).json({ message: "API is working" })
    );
    
    app.listen(PORT, () => {
      syncTables();
      console.log(`Server is listening on port ${PORT}`);
    });