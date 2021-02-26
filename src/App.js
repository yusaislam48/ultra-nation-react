import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    let item = cart.indexOf(country);
    if (item === -1) {
      const newCart = [...cart, country];
      setCart(newCart);
    }else{
      alert("This Country Already Added!");
    }
  }

  return (
    <div className="App">
      <div className="cart">
        <div className='cart-info'>
          <h3>Country Loaded: <span style={{color:'tomato'}}>{countries.length}</span></h3>
          <Cart cart={cart}></Cart>
        </div>
      </div>
      
      <div className="show-countries">
        {
          countries.map(countries => <Country key={countries.alpha3Code} country={countries} handleAddCountry={handleAddCountry}></Country>)
        }
      </div>

    </div>
  );
}

export default App;
