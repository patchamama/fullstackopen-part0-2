import axios from 'axios';

const Weather = ({ zone }) => {
  let temp = '';
  let wicon = '';
  let wind = '';
  const APIKey = process.env.REACT_APP_API_KEY;
  const APIUrl = `http://api.weatherstack.com/current?access_key=${APIKey}&query=${zone}`;
  console.log(APIUrl);
  axios
    .get(APIUrl)
    .then((response) => {
      const apiResponse = response.data;
      temp = apiResponse.current.temperature;
      wicon = apiResponse.current.weather_icons;
      wind = `${apiResponse.current.wind_speed} mph direction ${apiResponse.current.wind_dir}`;
    })
    .catch((error) => {
      console.log(error);
    });

  if (temp === '') {
    //Error with api
    return null;
  }

  return (
    <div>
      <h2>Weather in {zone}</h2>
      <p>
        <strong>temperature:</strong> {temp}
      </p>
      <p>
        <img alt={wicon} src={wicon} />
      </p>
      <p>
        <strong>wind:</strong> {wind}
      </p>
    </div>
  );
};

const Countries = ({ countries, handleCountry }) => {
  if (countries.length === 0) {
    return null;
  } else if (countries.length > 10) {
    return (
      <div>
        <p>Too many matches, especify another filter</p>
      </div>
    );
  } else if (countries.length <= 10 && countries.length > 1) {
    return (
      <div>
        {countries.map((country) => (
          <p key={country.name.common}>
            {country.name.common}
            <button onClick={() => handleCountry(country.name.common)}>
              show
            </button>
          </p>
        ))}
      </div>
    );
  }

  const country = countries[0];
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <ul>
        {Object.keys(country.languages).map((key) => (
          <li key={key}>{key}</li>
        ))}
      </ul>
      <p>
        <img alt={country.flags.alt} src={country.flags.png} />
      </p>
      <Weather zone={country.capital} />
    </div>
  );
};

export default Countries;
