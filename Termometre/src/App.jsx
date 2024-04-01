import { useState } from 'react'
import './App.css'
  const TempratureConverter=()=>{
    const[celcius,setCelcius]=useState('');
    const[fahrenheit,setFahrenheit]=useState('');
    const[kelvin,setKelvin]=useState('');

    const convertTemperature=()=>{
      const celciusValue=parseFloat(celcius);

      if(!isNaN(celciusValue)){
        const fahrenheitValue=(celciusValue*9/5)+32;
        const kelvinValue=celciusValue+273.15;

        setFahrenheit(fahrenheitValue.toFixed(2));
        setKelvin(kelvinValue.toFixed(2));
      }
      else{
        //geçerli bir sayı girilmediğinde hata vermesi için
        setFahrenheit('');
        setKelvin('');
      }
    };
  
  return (
    
    <div className='container'>
      <h1>TERMOMETRE</h1>
      <hr/>
      <label>
        Celcius :
        <input
          
          type ="text"
          
          value={celcius}
          onChange={(e)=>setCelcius(e.target.value)}
        />
      </label>
      
      
      <button onClick={convertTemperature} >
        Dönüştür
      </button>
      <p >Fahrenheit:{fahrenheit}</p>
      <p >Kelvin:{kelvin}</p>
    </div>
  )
}

export default TempratureConverter
