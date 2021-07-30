import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var enquiry = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
  },  
  contact:{
    type: String,
  },
  email:{
    type: String,
  },
  message:{
    type: String,
  }
},{
  collection: 'enquiries'
});

mongoose.models = {};

var Enquiry = mongoose.model('enquiry', enquiry);

export default Enquiry;