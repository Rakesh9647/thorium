const axios = require('axios'); 

const modifyMeme = async (request, response) => {
    try {
        const template_id = request.query.template_id;
        const text0 = request.query.text0;
        const text1 = request.query.text1;
        const username = request.query.username;
        const password = request.query.password;

        const option = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        const dataRes = await axios(option); 
        response.status(200).send({
            'data': dataRes.data
        }); 
    } catch (error) {
        response.status(500).send({
            'Error: ': error.message
        }); 
    }
}

module.exports.modifyMeme = modifyMeme; 