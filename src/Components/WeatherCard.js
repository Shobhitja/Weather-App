import React, { useEffect, useState } from 'react'
import '../App.css'

const WeatherCard = ({ tempInfo }) => {

    const [weatherState, setWeatherState] = useState('')
    const {
        temp, pressure, humidity, name, speed, weathermood, country, sunset
    } = tempInfo

    useEffect(() => {
        if (weathermood) {

            switch (weathermood) {
                case 'Clouds': setWeatherState('wi-day-cloudy');
                    break;
                case 'Haze': setWeatherState('wi-fog');
                    break;
                case 'Clear': setWeatherState('wi-day-sunny');
                    break;

                case 'Mist': setWeatherState('wi-dust');
                    break;
                default: setWeatherState('wi-day-sunny');
                    break;
            }
        }
    }, [weathermood])




    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`

    return (
        <div className='bg-white flex   md:h-[33rem] mt-2 md:mt-0 flex-col  cursor-pointer  rounded-3xl shadow-2xl shadow-cyan-900 mx-auto max-w-[65rem]  w-[95%]'>

            {/* 1st div */}

            <div className=" bg-slate-200 h-full md:h-[40%] flex items-center justify-center w-full p-14  ">
                <div className='text-9xl'> <i className={`wi ${weatherState}`}></i></div>
            </div>

            {/* 2nd div*/}

            <div className="   flex flex-col md:flex-row h-full md:h-[30%]  w-full  bg-blue-500  items-center ">


                <div className="temperature flex h-full py-8 w-full md:w-[70%] justify-around bg-neutral-800 text-white ">
                    <div className='text-7xl '>{temp}</div>
                    <div className="description ">
                        <div className="weatherCondition text-3xl">{weathermood}</div>
                        <div className="place text-2xl">{name}, {country}</div>
                    </div>

                </div>


                <div className="date h-full py-16 md:py-9 gap-2 w-full md:w-[40%]  text-3xl md:text-4xl flex flex-col items-center  bg-[#70c1b3] ">
                    <span className=''>{new Date().toLocaleString()}</span>
                </div>

            </div>

            {/*3rd div */}

            <div className=" grid grid-rows-2 md:grid-cols-2  items-center mt-0 md:mt-6 ">

                <div className=" h-full md:h-48  grid grid-rows-2 md:grid-cols-2  p-4  ">

                    <div className="  grid grid-rows-2 gap-2 md:grid-cols-2 text-center   ">
                        <p className='text-4xl my-auto text-[#0f8696] '><i className={"wi wi-sunset"}></i></p>
                        <p className=' text-3xl font-semibold'>{timeStr}<br />Sunset </p>
                    </div>


                    <div className=" 3 mt-4 md:mt-0 two-sided-section  grid grid-rows-2 gap-4 md:grid-cols-2  text-center ">
                        <p className='text-4xl  my-auto text-[#0f8696]'> <i className={"wi wi-humidity"}></i></p>
                        <p className=' text-3xl text-center md:text-left font-semibold '>{humidity} <br /> Humidity</p>
                    </div>


                </div>

                <div className=" h-full md:h-48  grid grid-rows-2 md:grid-cols-2  p-4  ">

                    <div className="  grid grid-rows-2 gap-2 md:grid-cols-2 text-center   ">
                        <p className='text-4xl my-auto text-[#0f8696] '><i className={"wi wi-rain"}></i></p>
                        <p className=' text-3xl font-semibold'>{pressure} <br />Pressure </p>
                    </div>


                    <div className=" mt-4 md:mt-0 two-sided-section  grid grid-rows-2 gap-4 md:grid-cols-2  text-center ">
                        <p className='text-4xl  my-auto text-[#0f8696]'> <i className={"wi wi-strong-wind"}></i></p>
                        <p className=' text-3xl text-center md:text-left font-semibold '>{speed}<br /> Speed</p>
                    </div>


                </div>

            </div>


        </div>


    )
}

export default WeatherCard
