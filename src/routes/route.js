const express = require('express');
const router = express.Router();

const player = [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ],
        "bookings": [
            {
                "bookingNumber": 1,
                "sportId": "",
                "centerId": "",
                "type": "private",
                "slot": '16286598000000',
                "bookedOn": '31/08/2021',
                "bookedFor": '01/09/2021'
            },
            {
                "bookingNumber": 2,
                "sportId": "",
                "centerId": "",
                "type": "private",
                "slot": '16286518000000',
                "bookedOn": '31/08/2001',
                "bookedFor": '01/09/2001'
            }
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ],
        "bookings": []
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ],
        "bookings": []
    }
];

router.post('/player', (request, response)=>{
    const playerData = request.body; 
    let playerNameStatus = null;
    for(let i = 0; i < player.length; i++){
        if(player[i].name == playerData.name){
            playerNameStatus = true; 
            break; 
        }
        else{
            playerNameStatus = false; 
        }
    } 
    if(!playerNameStatus){
        player.push(playerData);
        response.send(player);
    }
    else{
        response.send("Player name is already exist !"); 
    }
}); 

router.post('/player/:playerName/booking/:bookingId', (request, response)=>{
    const playerName = request.params.playerName; 
    const bookingId = request.params.bookingId; 
    const bookingData = request.body; 
    bookingData.bookingNumber = Number(bookingId); 

    let playerNameStatus = "", bookingIdStatus = ""; 
    
    for(let i = 0; i < player.length; i++){
        if(player[i].name == playerName){
            playerNameStatus = i; 
            break; 
        }
        else{
            playerNameStatus = null; 
        }
    }
    if(playerNameStatus != null){
        if(player[playerNameStatus].bookings.length == 0){
            bookingIdStatus = player[playerNameStatus].bookings;
        }
        else{
            for(let i = 0; i < player[playerNameStatus].bookings.length; i++){
                if(player[playerNameStatus].bookings[i].bookingNumber == bookingId){
                    bookingIdStatus = null; 
                    break; 
                }
                else{
                    bookingIdStatus = player[playerNameStatus].bookings;  
                }
            }
        }
        if(bookingIdStatus != null){
            bookingIdStatus.push(bookingData);
            response.send(player); 
        }
        else{
            response.send("Booking number already exist !"); 
        }
    }
    else{
        response.send("Player name not found !"); 
    }
}); 

module.exports = router;