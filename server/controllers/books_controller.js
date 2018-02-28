let books = [];
let id = 0;

module.exports = {

// On the object create a method called create, another called read, 
// another called update, and another called delete.

  create: (req, res) => {
    const {title, author} = req.body;
    books.push({id, title, author});
    id++;
    res.status(200).send(books);
  },

// Create - This method should be able to add a new book to the collection using the request body.

  read: (req, res) => {
    res.status(200).send(books);
  },

// Read - This method should return all books in the collection.

  update: (req, res) => {
    const updateID = req.params.id;
    let index = books.findIndex(book => book.id == updateID);

    books[index] = {
      id: books[index].id,
      title: req.body.title || books[index].title,
      author: req.body.author || books[index].author
    };

    res.status(200).send(books);
  },

// Update - This method should be able to update a book by an id from the request query parameters.

  delete: (req, res) => {
    const deleteID = req.params.id;
    bookID = books.findIndex(book => book.id == deleteID);
    books.splice(bookID, 1);
    res.status(200).send(books);
  }

// Delete - This method should be able to delete a book by an id from the request query parameters.

};