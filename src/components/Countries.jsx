import React from 'react';
import { Spinner } from 'react-bootstrap';

const Countries = ({ countries, loading }) => {
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">wait...</span>
      </Spinner>
    );
  }

  return (
    <nav>
      <ul>
        {countries.map((country, id) => (
          <li key={id}>{country.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Countries;
