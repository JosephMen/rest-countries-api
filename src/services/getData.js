
import dataCountry from '../../data.json'
import COUNTRIES from './constants'
import { URL_COUNTRIES, URL_COUNTRY } 
from './constants'



export default function fetchData(){
    return fetch(URL_COUNTRIES)
    .then(res => res.json())
    .then(countries => {
        // console.log(countries)
        const result = countries.map(country => {
            const url_flag = country.flags.png
            const name = country.name.common
            const population = country.population.toLocaleString('en-US')
            const capital = country.capital?.join(", ") ?? ""
            const region = country.region
            const key = country.cca3
            return {url_flag, name, population, capital, region, key}
        })
        return result
    })
}

export function fetchCountry (name){
    return fetch( URL_COUNTRY + name )
    .then( res => res.json())
    .then((arrCountry) => {
        const country= arrCountry[0]
        
        if (country){
            const url_flag = country.flags.svg
            const name = country.name.common
            const capital = country.capital[0]
            const region = country.region
            const population = country.population.toLocaleString('en-US')
            const subregion = country.subregion
            const nativeName = Object.entries(country.name.nativeName).map(([name, value]) => {
                return `${name.toUpperCase()}: ${value.official}`
            }).slice(0,3).join(", ")

            const topLevelDomain = country.tld
            const currencies = Object.entries(country.currencies).map(([name, value]) => {
                return `${name}: ${value.symbol}`
            }).join(", ")
            const languajes = Object.entries(country.languages).map(([key,value]) => {
                return value
            }).join(", ")
            const borders = country.borders

            const result = {url_flag, name, capital, region, population, subregion,
            nativeName, topLevelDomain, currencies, languajes, borders}
            // return new Promise((res, rej) => {
            //     res(result)
            // })
            return result
        }else{
            return undefined
        }
    }).catch( e => console.log(e))
}
export const getRegionCode = (regionName) => {
    switch (regionName.toLowerCase()){
        case "americas":
            return COUNTRIES.AMERICA
        case "asia":
            return COUNTRIES.ASIA
        case "europe":
            return COUNTRIES.EUROPA
        case "oceania":
            return COUNTRIES.OCEANIA
        case "africa":
            return COUNTRIES.AFRICA
        default:
            return COUNTRIES.ELSE
    } 
}
