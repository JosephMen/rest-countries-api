import COUNTRIES from "./constants";

export default function isValidCountryCode(code) {
    const values = Object.values(COUNTRIES)
    if (values.findIndex(value => value === code) >= 0){
        return true
    }
    return false
}
