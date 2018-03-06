const mongoose = require('mongoose');
const Schema = mongoose.Schema

const customerSchema = new Schema({
 name: String,
 memberId: String,
 address: String,
 zipcode: Number,
 phone: String,
 createdAt: {
   type: Date,
   default: Date.now
 },
 updatedAt: {
   type: Date,
   default: Date.now
 }
});

const Customers = mongoose.model('Customers', customerSchema)

module.exports = Customers
