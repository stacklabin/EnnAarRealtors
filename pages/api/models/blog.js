import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var blog = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
  },  
  description:{
    type: String,
  },
  content:{
    type: String,
  },
  slug:{
    type: String,
  },
  featured:{
    type: Boolean,
  },
  imageUrl:{
    type: String,
  },
  since: {
    type: Date,
    default: Date.now
  }
},{
  collection: 'blogs'
});

mongoose.models = {};

var Blog = mongoose.model('blog', blog);

export default Blog;