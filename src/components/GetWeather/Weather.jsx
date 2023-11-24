import React, { useEffect } from 'react'
import styles from './Weather.module.css'
import { LongLat } from './LongLat/LongLat'


export const Weather = () => {
    useEffect(()=>{
        let result = fetch("")
    },[])
  return (
    <div className={`container mt-4 ${styles.weather}`}>
        <LongLat />
    </div>
  )
}
