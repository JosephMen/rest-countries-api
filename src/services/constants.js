const COUNTRIES = {
    ELSE: 0,    
    AFRICA: 1,
    EUROPA: 2,
    AMERICA: 3,
    ASIA: 4,
    OCEANIA: 5,
    ALL: 6
}
export const themeSaved = 'themeChoose'
export default COUNTRIES
export const countryDetails = {
    url_flag: "",
    name: "",
    capital: "",
    region: "",
    population: 0,
    subregion: "",
    nativeName: "",
    topLevelDomain: "",
    currencies: [],
    languajes: [],
    borders: [],
}
export const URL_COUNTRIES = "https://restcountries.com/v3.1/all"
export const URL_COUNTRY = "https://restcountries.com/v3.1/name/"