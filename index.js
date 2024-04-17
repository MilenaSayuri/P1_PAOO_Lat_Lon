const axios = require("axios")
require("dotenv").config()

const {
    APPID,
    CITY_NAME,
    UNITS,
    IDIOM,
    CNT,
    URL_BASE,
    URL_BASE2
} = process.env

const tempo = () => {
const url = `${URL_BASE}?appid=${APPID}&q=${CITY_NAME}&units=${UNITS}&lang=${IDIOM}&cnt=${CNT}`
axios.get(url)
    .then(res => {
    const LAT = res.data[0].lat
    const LON = res.data[0].lon
    console.log('Consulta de coordenadas latitude/longitude em função do nome de uma cidade:')
    console.log('Cidade:', res.data[0].name)
    console.log('País:', res.data[0].country)
    console.log('Latitude:', res.data[0].lat)
    console.log('Longitude:', res.data[0].lon)
    console.log('********************************')
    console.log('--------------------------------')
        const url2 = `${URL_BASE2}?lat=${LAT}&lon=${LON}&appid=${APPID}&lang=${IDIOM}`
        axios.get(url2)
        .then(res => {
            console.log('Consulta de condições atuais em função de latitude/longitude:')
            console.log('País: ', res.data.name)
            console.log('Latitude:', res.data.coord.lat)
            console.log('Longitude:', res.data.coord.lon)
            console.log('Sensação Térmica: ', res.data.main.feels_like + ' °C')
            console.log('Descrição: ', res.data.weather[0].description)
            console.log('********************************')
            console.log('--------------------------------')
        })
    })
}
tempo()


