const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    //validation a
    if (!authorId) return res.send('The request is not valid as the author details are required.')

    //validation b
    let author = await authorModel.findById(authorId)
    if (!author) return res.send('The request is not valid as no author is present with the given author id')

    //validation c
    if (!publisherId) return res.send('The request is not valid as the publisher details are required.')

    //validation d
    let publisher = await publisherModel.findById(publisherId)
    if (!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({ data: bookCreated })
}

const getBooks = async function (req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({ data: books })
}


//problem 5

const book = async function (request, response){
    const dataRes = await bookModel.find().populate('publisher').select({
        publisher: 1,
        _id: 0
    });
    const publisherList = _.compact(_.uniq(dataRes.map((data) => {
        if (data.publisher.name == "Penguin" || data.publisher.name == "HarperCollins") {
            return data.publisher._id;
        }
    })));
    if (!publisherList.length == 2) {
        response.send({
            'msg': "Both Penguin and HarperCollins Publisher compulsary"
        });
    }
    for (let i = 0; i < publisherList.length; i++) {
        const updateRes = await bookModel.updateOne(
            {
                'publisher': ObjectId(publisherList[i])
            },
            {
                $set: {
                    isHardCover: true
                }
            }
        );
        response.send({
            'msg': updateRes
        });
    }

}

const increasePrice = async function(request, response) {
    const dataRes = await bookModel.updateMany(
        {
            ratings: { $gt: 3.5 }
        },
        {
            $inc: { price: +10 }
        }
    );
    response.send({ 'msg': dataRes });
}





//



module.exports.createBook = createBook
module.exports.getBooks = getBooks
module.exports.book=book
module.exports.increasePrice=increasePrice
