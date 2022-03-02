const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let tedauthorCrea = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

module.exports.createAuthor= createAuthor