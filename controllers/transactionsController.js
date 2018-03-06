const Transactions = require('../models/Transactions')


class TransactionCont {
  static createData(req, res) {
    const { member,days,booklist } = req.body

    let today = new Date()
    today.setDate(today.getDate() + (+req.body.days))

    const transactions = new Transactions()
    transactions.member = member
    transactions.days = days
    transactions.out_date = new Date()
    transactions.due_date = today
    transactions.booklist = booklist

    console.log(req.body);

    transactions.save().then(data_transactions => {
      res.status(201).json({
        message: 'new transaction was created',
        data_transactions
      })
    }).catch(err => {
      res.status(500).json({
        message: 'error'
      })
    })
  }

  static showData(req, res) {
    Transactions.find().populate('booklist').populate('member').exec().then(data_transactions => {
      res.status(200).json({
        message: 'list transactions',
        data_transactions
      })
    }).catch(error => {
      console.log(error);
    })
  }

  static updateData(req, res) {
    Transactions.findOne({
      _id: req.params.id
    }).then(data => {

      let newFine = req.body.in_date * 1000
      let today = data.due_date
      today.setDate(today.getDate() + +req.body.in_date)
      Transactions.updateOne({
        _id: req.params.id
      },{
        $set: {
          in_date: today,
          fine: newFine
        }
      }).then(data1 => {
        res.status(201).json({
          message: 'update Success',
          data1
        })
      })

    }).catch(error => {
      console.log(error);
    })
  }

  static deleteData(req, res) {
    Transactions.deleteOne({ _id : req.params.id}).then(data => {
      res.status(200).json({
        message: 'delete success'
      })
    })
  }
}

module.exports = TransactionCont
