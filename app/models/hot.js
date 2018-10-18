let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let hotsSchema = new Schema();

module.exports = mongoose.model('hot', hotsSchema);
