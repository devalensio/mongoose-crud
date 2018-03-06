const mongoose = require('mongoose');
const Schema = mongoose.Schema

const transactionSchema = new Schema({
 member: {
    type: Schema.Types.ObjectId,
    ref: 'Customers'
},
 days: Number,
 out_date: {
   type: Date,
   default: Date.now
 },

 due_date: Date,

 in_date: {
    type: Date,
    default: ''
},
 fine: {
    type: Number,
    default: 0
},

 booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'Books'
}],
 createdAt: {
   type: Date,
   default: Date.now
 },
 updatedAt: {
   type: Date,
   default: Date.now
 }
});

const Transactions = mongoose.model('Transactions', transactionSchema)

module.exports = Transactions
