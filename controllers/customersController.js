const Customers = require('../models/Customers')


class CustomersCont {
  static createData(req, res) {
    const { name,memberid,address,zipcode,phone } = req.body
    const customers = new Customers()
    customers.name = name
    customers.memberid = memberid
    customers.address = address
    customers.zipcode = zipcode
    customers.phone = phone

    customers.save().then(data_customers => {
      res.status(201).json({
        message: 'new customer was created',
        data_customers
      })
    }).catch(err => {
      res.status(500).json({
        message: 'error'
      })
    })
  }

  static showData(req, res) {
    Customers.find().exec().then(data_customers => {
      res.status(200).json({
        message: 'List Customers',
        data_customers
      })
    }).catch(error => {
      res.status(500).json({
        message: 'error'
      })
    })
  }

  static updateData(req, res) {
    Customers.updateOne({
      _id: req.params.id
    },{
      $set: {name: req.body.name,memberid: req.body.memberid,address: req.body.address,zipcode: req.body.zipcode,phone: req.body.phone}
    }).then(data_books => {
      res.status(202).json({
        message: 'success update',
        data_books
      })
    })
  }

  static deleteData(req, res) {
    Customers.deleteOne({ _id : req.params.id}).then(data => {
      res.status(200).json({
        message: 'delete success'
      })
    })
  }
}

module.exports = CustomersCont
