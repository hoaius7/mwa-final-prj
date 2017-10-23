var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    startTime: {type: Date, required: true},
    endTime: {type: Date, required: true},
    startingBid: {type: Number},
    currentBid: {type: Number},
    status: {type: String},  
    bidCount:{type:Number, default:0},
    currentHighestBidder: {type: Schema.Types.ObjectId, ref: 'User'},
    property: {type: Schema.Types.ObjectId, ref: 'Property'}
});


module.exports = mongoose.model('Auction', schema);