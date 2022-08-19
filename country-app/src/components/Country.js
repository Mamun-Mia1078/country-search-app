import React from 'react'
import style from './country.module.css'

const Country = (props) => {
    const {name, flags, capital, population, area} = props.country;

      const handleRemove = (name) => {
        props.onRemoveCountry(name)
      }
    
  return (
    <article className={style.country}>
        <div>
            <img src={flags.png} alt={name.common} className = {style.flag} />
            <h2>Name: {name.common}</h2>
            <h3>Population: {population} </h3>
            <h3>Capital: {capital} </h3>
            <h4>Area: {area} SqKM </h4>

            <button className={style.btn} onClick = {() => handleRemove(name.common)}>
              Remove Country
              
            </button>
        </div>
    </article>

  );
  
    
  
};

export default Country