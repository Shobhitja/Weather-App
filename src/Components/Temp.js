import React, { useEffect, useState } from 'react'

import WeatherCard from './WeatherCard'

const Temp = () => {
    const [searchValue, setSearchValue] = useState('pune');
    const [tempInfo, setTempInfo] = useState({})

    const getWeatherInfo = async () => {
        try {

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=75f83d29ce06f828e1701bd025029af9`
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            const { temp, pressure, humidity } = data.main;
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;
            const { main: weathermood } = data.weather[0]

            const myNewWeatherInfo = {
                temp, pressure, humidity, name, speed, weathermood, country, sunset
            }
            setTempInfo(myNewWeatherInfo)

        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        getWeatherInfo()
    }, [])

    return (
        <div className='bg-gradient-to-b from-blue-500 to  h-screen '>

            <header className='  mx-auto'>
                <div className=' w-[85%] md:w-[40%] mx-auto  py-3 '>
                    <div className="mb-6 flex gap-2 md:gap-4 my-3">
                        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-2xl focus:ring-blue-500 focus:border-cyan-400 block w-full px-5 md:px-8 shadow-xl" placeholder='Search City' />

                        <button onClick={getWeatherInfo} type="button" className="text-white bg-[#0aa0b4] hover:bg-[#70c1b3] font-semibold rounded-lg text-lg px-5 py-1.5 md:py-2.5 mr-2 mb-2 mt-3 shadow-xl">Search</button>

                    </div>
                </div>
            </header>


            <WeatherCard tempInfo={tempInfo} />



        </div>
    )
}

export default Temp
