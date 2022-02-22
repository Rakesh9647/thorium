const express = require('express');
const router = express.Router();

router.get('/movies/:movieId', function (req, res) {
    mov = ["Abcd", "Hulk", "Batman", "Spiderman", "Superman"]
    let value = req.params.movieId;
    if (value > mov.lenght - 1) {
        res.send('"Does not exist"')
    } else {
        res.send(mov[value])
    }
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

//3. This API will fetch all movies from array all objects
router.get('/moviez', function (req, res) {
    res.send([{ id: 1, name: 'Hawkaye' }, { id: 2, name: 'Thor' }, { id: 3, name: 'Ironman' }, { id: 4, name: 'Loky' }, { id: 5, name: 'Black Panther' }]);
});

//4 This API will fetch all movies from array of objectsby indexId
router.get('/films/:filmId',function(req,res){
    let movi=[{ id: 1, name: 'Hawkaye' }, { id: 2, name: 'Thor' }, { id: 3, name: 'Ironman' }, { id: 4, name: 'Loky' }, { id: 5, name: 'Black Panther' }]
    let value =req.params.filmId;
    //console.log(typeof value)
    let found =false;
    for(let i=0;movi.length;i++){
        //console.log(typeof movi[i].id)
        if(movi[i].id==value){
            found=true
            res.send(movi[i])
            break
        }

    }
    if(found==false){
        //console.log(found)
        res.send('No movie exists with this id')}
});



module.exports = router;
