const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year:{
        type:Number,
        default:2021,
    },
    totalPages:Number,
    stokAvailable:Boolean
}, { timestamps: true });


module.exports = mongoose.model('Bookslibrary', bookSchema) 
