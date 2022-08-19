import Country from './components/Country'
import React from 'react'
import style from "./components/countries.module.css"
import {v4 as uuidv4} from "uuid"

const Countries = (props) => {
  return (
    <section className={style.countries} >
            {props.countries.map((country) => {
                const countryNew = {country,id: uuidv4()}

                return <Country {...countryNew} key = {countryNew.id} 
               onRemoveCountry = {props.onRemoveCountry}/>
            
           
           })}      
    </section>
  )
}

export default Countries