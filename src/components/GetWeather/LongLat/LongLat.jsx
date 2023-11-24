import {React,useEffect,useState} from 'react'
import styles from './LongLat.module.css'
import axios from 'axios'
let REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
let REACT_APP_API_KEY = '603dc2011cbb0200dec01704aa0376ca'
let REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'

export const LongLat = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [result, setData] = useState([]);
  
  async function getWeatherData(){
    const {data} =await axios.get(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=603dc2011cbb0200dec01704aa0376ca`)
    setData(data)
    console.log(result);
  }


  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      // await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=603dc2011cbb0200dec01704aa0376ca`)
      // .then(res => res.json())
      // .then(result => {
      //   setData(result)
      //   console.log(result.name);
      // });
      getWeatherData();
    }
    fetchData();
  }, [lat,long])
  return (
    (typeof(result.main) != 'undefined') ? (
      <div className={styles.weatherCard}>
        <h3 className='fw-bold fs-2 text-center'> {result.main.temp} <sup>o</sup></h3>
        <h2 className='fw-bold fs-4 text-center'>{result.name}</h2>
        <h2 className='fw-bold fs-4 text-center'>{result.sys.country}</h2>
        <h3 className='fw-bold fs-4 text-center'>Humidity : {result.main.humidity}%</h3>
        <h3 className='fw-bold fs-4 text-center'> {result.weather[0].main}</h3>
        <h3 className='fw-bold fs-4 text-center'>Desc : {result.weather[0].description}</h3>
      </div>
    ):""
  );
}


