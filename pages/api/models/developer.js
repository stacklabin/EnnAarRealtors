import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var developer = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  priority: {
    type: Number,
    required: false
  },
  imageUrl:{
      type: String,
      required: false
  },
  since: {
    type: Date,
    default: Date.now
  }
},{
  collection: 'developers'
});

mongoose.models = {};

var Developer = mongoose.model('developer', developer);

export default Developer;