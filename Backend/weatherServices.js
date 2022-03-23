import fetch from 'node-fetch';

export class WeatherServices{
    static async getWeather(amountOfDaysP, cityP){ //city, amountOfDays
        //Fill the URL with the parameters asked in the API documentation which are the apiKey, City and Days i want to display
        const url = process.env.WEATHER_API_URL +
                    'city=' + cityP + 
                    '&key=' + process.env.WEATHER_API_KEY +
                    '&days=' + amountOfDaysP;
        
        //Fetch and load response with the JSON obtained from the API
        const result = await fetch (url, {
            method: 'GET',
        }).then(res => res.json());

        //Initialize the list with no objects yet as we are filling it up later with JSONs
        let listOfDays = [];

        //forEach where i fill the JSONs with info and then push it to listOfDays
        result.data.forEach(element => {
            const unixsunrise = new Date(element.sunrise_ts * 1000); //Convert Unix time to HH:MM, lo que me devolvio lo tengo que parsear como date para poder acceder a metodos que me den horas, minutos, etc. 
            const unixSunset = new Date(element.sunset_ts * 1000); //Convert Unix time to HH:MM
            let infoAboutDay = {}; //Initiliaze an empty json and we fill it with the info we need
            infoAboutDay['min_temp'] = element.min_temp;
            infoAboutDay['max_temp'] = element.max_temp;
            infoAboutDay['description'] = element.weather.description;
            infoAboutDay['datetime'] = element.datetime;
            infoAboutDay['sunrise_ts'] = unixsunrise.getHours() + ':'+ unixsunrise.getMinutes();
            infoAboutDay['sunset_ts'] = unixSunset.getHours() + ':'+ unixSunset.getMinutes();
            listOfDays.push(infoAboutDay);
        });

        return listOfDays; //Return the list with all the days with it's info
    }
}