const Book = require("../books/model");
const Author = require("./model");

const addAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body)
        res.status(201).json({ message: "success", author: author});
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error})
    }
};

const getAuthorandBooks = async (req, res) => {
  try {
    const authorbook = await Author.findOne({
        where: {authorName: req.params.author},
        include: Book
    })
    res.status(200).json({ message: "success", author: authorbook }); //not getting books
} catch (error) {
    res.status(501).json({errorMessage: error.message, error: error})
}
};

module.exports = {addAuthor, getAuthorandBooks};
