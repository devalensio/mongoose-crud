const Books = require('../models/Books')


class BooksCont {
  static createData(req, res) {
    const { isbn,title,author,category,stock } = req.body
    const books = new Books()
    books.isbn = isbn
    books.title = title
    books.author = author
    books.category = category
    books.stock = stock

    books.save().then(data_books => {
      res.status(201).json({
        message: 'new book was created',
        data_books
      })
    }).catch(err => {
      res.status(500).json({
        message: 'error'
      })
    })
  }

  static showData(req, res) {
    Books.find().exec().then(data_books => {
      res.status(200).json({
        message: 'List Books',
        data_books
      })
    }).catch(error => {
      res.status(500).json({
        message: 'error'
      })
    })
  }

  static updateData(req, res) {
    Books.updateOne({
      _id: req.params.id
    },{
      $set: {isbn: req.body.isbn,title: req.body.title,author: req.body.author,category: req.body.category,stock: req.body.stock}
    }).then(data_books => {
      res.status(202).json({
        message: 'success update',
        data_books
      })
    })
  }

  static deleteData(req, res) {
    Books.deleteOne({ _id : req.params.id}).then(data => {
      res.status(200).json({
        message: 'delete success'
      })
    })
  }
}

module.exports = BooksCont
