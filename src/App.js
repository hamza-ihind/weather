import './App.scss';

import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';

// components
import CityWeather from './components/city-weather/city-weather.component';
import Navigation from './components/navigation/navigation.component';

function App() {
	const [cityWeather, setCityWeather] = useState(null);
	const [forecast, setForecast] = useState(null);

	const handleOnSearchChange = (searchData) => {
		const [lat, lon] = searchData.value.split(' ');
		const cityWeatherFetch = fetch(
			`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
		);
		const forecastFetch = fetch(
			`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
		);

		Promise.all([cityWeatherFetch, forecastFetch])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const forecastResponse = await response[1].json();

				setCityWeather({ city: searchData.label, ...weatherResponse });
				setForecast({ city: searchData.label, ...forecastResponse });
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='App'>
			<Navigation onSChange={handleOnSearchChange} />
			<CityWeather data={cityWeather} />
		</div>
	);
}

export default App;
