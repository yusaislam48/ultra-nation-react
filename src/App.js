import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    console.log(country.name);
  }

  return (
    <div className="App">
      
      <div className="show-countries">
        {
          countries.map(countries => <Country key={countries.alpha3Code} country={countries} handleAddCountry={handleAddCountry}></Country>)
        }
      </div>

    </div>
  );
}

export default App;
