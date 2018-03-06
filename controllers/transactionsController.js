const Transactions = require('../models/Transactions')


class TransactionCont {
  static createData(req, res) {
    const { member,days,fine } = req.body
    const transactions = new Transactions()
    transactions.member = member
    transactions.days = days
    transactions.fine = fine

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
}

module.exports = TransactionCont
