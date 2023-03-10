const Book = require("./model");

const addBook = async (req, res) => {
    try{
        const book = await Book.create(req.body);
        console.log(book);
        res.status(201).json({message: "book added", newBook: book})
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error })
    }
}

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.findAll()
        res.status(200).json({ message: "success", books: allBooks })
    } catch (error) {
        console.log(error);
    res.status(501).json({ errorMessage: error.message, error: error });
    }
}

const getOneBook = async (req, res) => {
    try {
        const book = await Book.findOne({where: {title: req.params.title}})
        res.status(200).json({ message: "success", book: book })
    } catch (error) {
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error})
    }
}

const updateBook = async (req, res) => {
    try {
        const book = await Book.update(
            {[req.body.updateKey]: req.body.updateValue},
            {where: {title: req.body.title}},
        )
        res.status(201).json({ message: "success", book: book})
    } catch (error) {
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error})
    }
}

const deleteOneBook = async (req, res) => {
    try {
        const book = await Book.destroy(
        {where: {title: req.body.title}}
        )
        res.status(200).json({ message: "success", book: book });
    } catch (error) {
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error})
    }
}

const deleteAllBooks = async (req, res) => {
    try {
    const book = await Book.destroy({
            where: {},
            truncate: true
    })
    res.status(200).json({ message: "success", book: book });
} catch (error) {
    console.log(error)
    res.status(501).json({errorMessage: error.message, error: error})
}
}

module.exports = {
    addBook,
    getAllBooks,
    getOneBook,
    updateBook,
    deleteOneBook,
    deleteAllBooks,
}