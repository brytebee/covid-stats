import React from 'react';

const NamePagination = ({
  countriesPerPage,
  totalCountries,
  paginate,
  countries,
}) => {
  const allFisrtCountriesIndex = [];

  for (let i = 0; i < Math.ceil(totalCountries / countriesPerPage); i++) {
    allFisrtCountriesIndex.push(i * countriesPerPage);
  }

  const firstCountries = allFisrtCountriesIndex.map((num) => countries[num]);

  return (
    <nav>
      <ul className="pagination">
        {firstCountries.map((country, number) => (
          <li className="page-item" key={country.name}>
            <a
              onClick={() => paginate(number + 1)}
              href="!#"
              className="page-link"
            >
              {country.name.slice(0, 2)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NamePagination;
