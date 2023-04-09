import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg';

const brands = [
  {
    name: 'Porsche',
    id: 1,
    img: '',
  },
  {
    name: 'Mercedes',
    id: 2,
    img: '',
  },
  {
    name: 'BMW',
    id: 3,
    img: '',
  },
  {
    name: 'Lexus',
    id: 4,
    img: '',
  },
  {
    name: 'Land Rover',
    id: 5,
    img: '',
  },
];

function App() {
  return (
    <div className="App container">
        <div className="brands-container columns">
            {brands.slice(0, 3).map((brand) => (
              <div className="column brand-container is-one-third" key={brand.id}>
                <div style={{ backgroundImage: `url('${brand.img}')` }}>
                  <div className="brand-body-container container">
                    <h2>{brand.name}</h2>
                    <p>Shop Now</p>
                  </div>
                </div>
              </div>
            ))}
    </div>
    <div className="brands-container columns">
            {brands.slice(3).map((brand) => (
              <div className="column brand-container is-one-half" key={brand.id}>
                <div style={{ backgroundImage: `url('${brand.img}')` }}>
                  <div className="brand-body-container container">
                    <h2>{brand.name}</h2>
                    <p>Shop Now</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
    </div>
  );
}

export default App;
