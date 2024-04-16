const axios = require ("axios")
require("dotenv").config()

const {
    APPID,
    CITY_NAME,
    LAT,
    LON,
    UNITS,
    IDIOM,
    CNT,
    URL_BASE
} = process.env

const url = `${URL_BASE}?appid=${APPID}&q=${CITY_NAME}&lat=${LAT}&lon=${LON}&units=${UNITS}&lang=${IDIOM}&cnt=${CNT}`

axios.get(url)
.then(res => {
    console.log('data')
    console.log(res.data)
    console.log('--------------------------------')
    console.log('********************************')

    return res.data
})
.then(res2 => {
    console.log('Consulta de coordenadas latitude/longitude em função do nome de uma cidade:')
    console.log('Cidade:', res2.city.name)
    console.log('País:', res2.city.country)
    console.log('Latitude:', res2.city.coord.lat )
    console.log('Longitude:', res2.city.coord.lon)
    console.log('********************************')
    console.log('--------------------------------')
    return res2
})