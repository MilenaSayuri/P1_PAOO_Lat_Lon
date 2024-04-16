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
    URL_BASE2
} = process.env

const url = `${URL_BASE2}?appid=${APPID}&q=${CITY_NAME}&lat=${LAT}&lon=${LON}&units=${UNITS}&lang=${IDIOM}&cnt=${CNT}`

axios.get(url)
.then(res => {
    console.log('data')
    console.log(res.data)
    console.log('--------------------------------')
    console.log('********************************')
    return res.data
})
.then(res3 => {
    console.log('Consulta de condições atuais em função de latitude/longitude:')
    console.log('Cidade: ', res3.name)
    console.log('Latitude:', res3.coord.lat )
    console.log('Longitude:', res3.coord.lon)
    console.log('Sensação Térmica: ', res3.main.feels_like + ' °C')
    console.log('Descrição: ', res3.weather[0].description)
    console.log('********************************')
    console.log('--------------------------------')
    return res3
})