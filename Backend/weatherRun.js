import express from 'express'
import { WeatherServices } from './weatherServices.js';
import * as dotenv from 'dotenv';

var app = express();
dotenv.config(); //Load the environment variables.
const port = 3010;

app.get('/weather', async (req, res) => {
    try {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000') // This won't be in production... Allows to do request in local.
        res.send(await WeatherServices.getWeather(req.query.days, req.query.city)) //req.body.city, req.body.days
    } catch (e) {
        res.status(500).send('Failed to process weather request')
    }
})

app.listen(port, () => {})