const mongoose = require('mongoose');
const Schema = mongoose.Schema

const transactionSchema = new Schema({
 member: {
    type: Schema.Types.ObjectId,
    ref: 'customers'
},
 days: Number,
 out_date: {
   type: Date,
   default: Date.now
 },
 due_date: {
    type: Date,
    default: Date.now
},
 in_date: {
    type: Date,
    default: Date.now
},
 fine: Number,
 booklist: [{
    type: Schema.Types.ObjectId
    ref: 'books'
}]
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
