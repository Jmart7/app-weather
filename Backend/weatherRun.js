import express from 'express'
import { WeatherServices } from './weatherServices.js';
import * as dotenv from 'dotenv';

var app = express(); //instancio express.
dotenv.config(); //Load the environment variables.
const port = 3010;

app.get('/weather', async (req, res) => { //un endpoint de mi servidor de express de tipo get.
    try {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000') // Permito hacer requests de dominios distintos, obviamente solo para local.
        res.send(await WeatherServices.getWeather(req.query.days, req.query.city)) //Llamo al metodo de WeatherServices con un await para que antes de hacerse el res.send se cargue lo que devuelve el metodo.
    } catch (e) {
        res.status(500).send('Failed to process weather request') //Muestro un error de tipo 500 en el cual escribo Failed to process weather request.
    }
})

app.listen(port, () => {})