const express = require('express')
const Flight = require("../models/flight") 
const router = new express.Router()

router.get('/flights', async (req, res)=>{ //get all flights
    try{
        const flights = await Flight.find() 

        if(!flights){
            return res.status(404).send({error: "flights not found!"})
        }
        res.status(200).send(flights)
    }catch(e){
        res.status(500).send()
    }
})

router.get('/flights/:flight_no', async (req, res)=>{ //get by flight_no
    const flight_no = req.params.flight_no
    
    try{
        const flight = await Flight.findOne({flight_no}) 

        if(!flight){
            return res.status(404).send({error: "flight not found!"})
        }
        res.status(200).send(flight)
    }catch(e){
        res.status(500).send()
    }
})

router.get('/flight', async (req, res)=>{ //find by date, origin, destination
    const match = {}
    if(req.body.origin){
        match.origin = req.body.origin 
    }

    if(req.body.destination){
        match.destination = req.body.destination 
    }

    const flights = await Flight.find(match).sort({ duration : 1}) //sorted by duration
    try{
        res.status(200).send({flights})
    }
    catch(e){
        return res.status(400).send({error: 'flights not found!'})
    }
})


router.post('/flights', async (req, res)=>{   //create flight
    if(req.body.stops){
        const stops_arr = req.body.stops.split(',')
        req.body.stops = stops_arr
    }
    const flight = new Flight(req.body)

    try{
        await flight.save()
        res.status(201).send(flight)
    }catch(e){
        res.status(400).send(e)
    }
})


module.exports = router