import React, { useState } from 'react';
import '../styles/BrewDisplay.css';

const BrewDisplay = ({ brew }) => {
  const [showDetails, setShowDetails] = useState(false);

  function handleDisplay() {
    setShowDetails(!showDetails);
  }

  return (
    <div className='brew-display-container'>
      <h1>{brew.name}</h1>
      <h2>{brew.phone}</h2>
      <a href={brew.website_url} target='_blank' rel='noopener noreferrer'>Link to Brand</a>
      <button onClick={handleDisplay}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div>
        <div className='brew-details'>
          <p>State: {brew.state}</p>
          <p>Address: {brew.address_1}</p>
          <p>City: {brew.city}</p>
          <p>State-province: {brew.state_province}</p>
          <p>Postal Code: {brew.postal_code}</p>
          <p>country: {brew.country}</p>
          <p>longitude: {brew.longitude}</p>
          <p>latitude: {brew.latitude}</p>
          <p>Street: {brew.street}</p>

          {/* Add more details here as needed */}
        </div>
        </div>
      )}
    </div>
  );
}

export default BrewDisplay;
