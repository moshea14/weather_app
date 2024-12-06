// Import axios to make our http requests to the OpenWeatherMap API
import axios from 'axios';

// TODO: Complete the WeatherService class
class WeatherService {
  // Define the baseURL and API key properties
  baseURL: string;
  apiKey: string;

  constructor() {
    // TODO: Assign the properties baseURL and apiKey using process.env
    this.baseURL = '';
    this.apiKey = '';
  }

  // TODO: Create fetchLocationData method
  async getForecastWeatherForCity(city: string) {
    // Create the url variable using this.baseURL + '/forecast', a query parameter of 'units' set to imperial, a query parameter of 'q' set to the city parameter above and a query parameter of appid set to this.apiKey
    const url = '';

    // Make a fetch request to OpenWeatherMap using the url above constructed above
    const res = await axios.get(url);

    // Please console.log res.data so you can see how the returned data is structured - The 5 day forecast will be provided to you in an array of 40 objects. Each object represents a 3-hour segment of time. 

    // return the array of of 40 weather objects

    // BONUS: filter the array of 40 objects down to just objects that have a dt_txt that includes '12:00'
    return res.data.list;

  }

  // TODO: Complete getCurrentWeatherForCity method
  async getCurrentWeatherForCity(city: string) {
    // Create the url variable using this.baseURL + '/weather', a query parameter of 'units' set to imperial, a query parameter of 'q' set to the city parameter above and a query parameter of appid set to this.apiKey
    const url = '';

    // Make a fetch request to OpenWeatherMap using the url constructed above
    const res = await axios.get(url);

    // Create a data object from the weather data you receive
    const data = {
      city: res.data.name, // this is completed for you as an example
      date: '', // Use the already installed dayjs package to convert res.data.dt * 1000 into a formatted date like '10/17/2024'
      icon: '',
      iconDescription: '',
      tempF: '',
      windSpeed: '',
      humidity: ''
    };

    // Return the custom data object of weather information
    return data;
  }
}

// Export a constructed/instatiated object, using our WeatherService class above
export default new WeatherService();
