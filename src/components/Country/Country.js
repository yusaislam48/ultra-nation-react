import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props);
    const {name, population, region, capital, area, flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="country">
            <img src={flag} alt=""/>
            <h3>Country Name: <span style={{color:'tomato'}}>{name}</span></h3>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country!</button>
        </div>
    );
};

export default Country;