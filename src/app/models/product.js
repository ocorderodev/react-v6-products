const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    title : { type : String },
    description : { type : String },
    photo : { type : String },
    created_at: {type: Date, default: Date.now()}
});

module.exports = model('Products', productSchema);