import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Countries from './components/Countries';
import NamePagination from './components/NamePagination';
import Pagination from './components/Pagination';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(12);

  useEffect(() => {
    const fetchCountries = async () => {
      const date = new Date().toISOString().split('T')[0];
      setLoading(true);
      const res = await axios.get(
        `https://api.covid19tracking.narrativa.com/api/${date}`
      );
      const dateString = date.toString();
      setCountries(Object.values(res.data.dates[dateString].countries));
      setLoading(false);
    };

    fetchCountries(countries);
  }, []);

  const indexOfLastCountry = countriesPerPage * currentPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1>Covid stats</h1>
      <Countries countries={currentCountries} loading={loading} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
        countries={countries}
      />
      <NamePagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
        countries={countries}
      />
    </div>
  );
};

export default App;
