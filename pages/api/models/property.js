import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var property = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  developer:{
    type: String,
  },
  
  type: {
    type: String,
    required: false
  },
  
  name: {
    type: String,
    required: false
  },  
  description: {
    type: String,
    required: false
  },  
  tags: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  featured:{
    type: Boolean,
  },
  priority:{
    type: Number,
  },
  two:{
    type: Boolean,
  },
  three:{
    type: Boolean,
  },
  four:{
    type: Boolean,
  },
  five:{
    type: Boolean,
  },
  plot:{
    type: Boolean,
  },
  villa:{
    type: Boolean,
  },
  twoArea:{
    type: String,
  },
  threeArea:{
    type: String,
  },
  fourArea:{
    type: String,
  },
  fiveArea:{
    type: String,
  },
  plotArea:{
    type: String,
  },  
  villaArea:{
    type: String,
  },
  
  twoImage:{
    type: String,
  },
  threeImage:{
    type: String,
  },
  fourImage:{
    type: String,
  },
  fiveImage:{
    type: String,
  },
  plotImage:{
    type: String,
  },  
  villaImage:{
    type: String,
  },
  commercialComplexImage:{
      type:String,
  },  
  siteplanImage:{
    type:String,
    },
  price: {
    type: String,
    required: false
  },  
  sp:{
    type: Boolean,
  },
  jt:{
    type: Boolean,
  },
  gym:{
    type: Boolean,
  },
  security:{
    type: Boolean,
  },
  cp:{
    type: Boolean,
  },
  restaurant:{
    type: Boolean,
  },
  club:{
    type: Boolean,
  },
  bc:{
    type: Boolean,
  },
  ka:{
    type: Boolean,
  },
  ff:{
    type: Boolean,
  },
  sm:{
    type: Boolean,
  },
  multiplexes:{
    type: Boolean,
  },
  os:{
    type: Boolean,
  },
  fc:{
    type: Boolean,
  },
  projectArea:{
    type: String,
  },
  apartments:{
    type: String,
  },
  imagesArray:{
    type: Array,
    of: String,
  },
  since: {
    type: Date,
    default: Date.now
  }
},{
  collection: 'properties'
});

mongoose.models = {};

var Property = mongoose.model('property', property);

export default Property;