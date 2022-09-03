import World from '../../assets/world.png'

import './city-weather.styles.scss'

const CityWeather = ({ data }) => {
    return (


        < div className='container-city-weather' >
            {console.log(data)}
            <div className='pics'>
                <img src={World} alt="world" className='world-picture' />
                <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className='weather-picture' />
            </div>
            <h1 className='city'>{data.city}</h1>
            <div className='current-weather'>
                <h1 className='temperature'>{Math.round(data.main.temp)}°</h1>
                <h4 className='label'>{data.weather[0].description}</h4>
            </div>
            <div className='info-weather'>
                <div className='info'>
                    <h2>Wind</h2>
                    <h2>{data.wind.speed} m/s</h2>
                </div>
                <div className='info'>
                    <h2>Pressure</h2>
                    <h2>{data.main.pressure} hPa</h2>
                </div>
                <div className='info'>
                    <h2>Humidity</h2>
                    <h2>{data.main.humidity}%</h2>
                </div>
            </div>
        </div >
    )
}

export default CityWeather