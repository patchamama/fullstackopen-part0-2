import { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './components/Country.js';

const baseUrl = 'https://restcountries.com/v3.1/name/';

function App() {
  const [searchCountry, setSearchCountry] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (searchCountry === '') {
      return;
    }
    axios
      .get(`${baseUrl}/${searchCountry}`)
      .then((response) => response.data)
      .then((results) => setCountries(results))
      .catch((error) => console.log(error));
  }, [searchCountry]);

  const handleChange = (event) => {
    setSearchCountry(event.target.value);
    console.log(searchCountry);
  };

  const handleCountry = (country) => {
    console.log('Country: ', country);
    setSearchCountry(country);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          find coutries
          <input onChange={handleChange} />
        </p>
      </form>
      <Countries countries={countries} handleCountry={handleCountry} />
    </div>
  );
}

export default App;
