import './App.css';
import Header from './Header';
import {useState} from 'react';

function App() { // tengo una function component

  //Declaro 3 variables usando hooks.
  const [city, setCity] = useState(""); //Declare minneapolis as the default value for city
  const [days, setDays] = useState(1); //declare 1 as default value for days
  const [listOfInfo, setListOfInfo] = useState([]); //Set a list with no values yet so it can be filled later with the values i get from the backend

  //Function to submit the Select i did in the HTML
  function onSubmit() {
    fetch(`http://localhost:3010/weather?city=${encodeURIComponent(city)}&days=${encodeURIComponent(days)}`) //Fetch with encodeURIComponent 
    .then(res => res.json()) //Response as JSON
    .then(list => { 
      console.log(list);
      setListOfInfo([...list]); //destructuring de la lista, creo una nueva lista con todos los elementos de list, que fue lo que me vino de backend. el metodo de asignar de los hooks necesita una lista nueva en vez de list.
    }); // El set list of info lo podria poner como que me costo ya que por alguna razon no me pasaba la lista y el problema era que necesitabamos crear una nueva lista
  }; //los tres puntos se llaman Spread


  //ClearList basically clears the list to change the page
  function clearList() {
    setListOfInfo([]);
  }

  return (
    <>
      <Header/>
      { listOfInfo.length === 0 //estado inicial, despues vuelve a renderizar cuando cambia el estado de listOfInfo
        ? <div id="form">
            <select name="City" id="city" value={city} onChange={e => setCity(e.target.value)}>
              <option value="" disabled selected>Select a city</option>
              <option value="Minneapolis">Minneapolis</option>
              <option value="Jackson">Jackson</option>
              <option value="Kansas">Kansas</option>
              <option value="New York">New York</option>
            </select>
            <input type="text" name="City" id="other" value={city} style={{display:'none'}}/>
            <select name="Days" id="days" value={days} onChange={e => setDays(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <button onClick={onSubmit}>Submit</button>
        </div>
        : <div id="grid"> 
            <button onClick={clearList}>Back</button>
            <h2 id="daysTitle">{days} Days Forecast for {city}</h2>
            <div id="results">
              {listOfInfo.map(item => (
                <div key={item.datetime} class="item">
                  <p>Minimum: {item.min_temp}°C</p>
                  <p>Maximum: {item.max_temp}°C</p>
                  <p>{item.description}</p>
                  <p>Date: {item.datetime}</p>
                  <p>Sunrise: {item.sunrise_ts}</p>
                  <p>Sunset: {item.sunset_ts}</p>
                </div>
              ))}
            </div>
        </div>
      }
    </>
  );
}

export default App;
