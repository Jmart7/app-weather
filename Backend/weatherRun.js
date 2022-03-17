import express from 'express'
import { WeatherServices } from './weatherServices.js';
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv';

var app = express();
dotenv.config(); //Cargo las variables de entorno.
const port = 3010;
app.use(bodyParser.json())

app.get('/weather', async (req, res) => {
    try {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000') // No va en produccion... Le permite que pueda hacer el request en local.
        res.send(await WeatherServices.getWeather(req.query.days, req.query.city)) //req.body.city, req.body.days
    } catch (e) {
        res.status(500).send('Failed to process weather request')
    }
})

app.listen(port, () => {})