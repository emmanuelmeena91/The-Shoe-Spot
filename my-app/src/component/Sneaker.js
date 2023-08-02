import React, { useState, useEffect } from 'react';

const Sneaker = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    fetch('https://example-data.draftbit.com/sneakers?_limit=10')
      .then(response => response.json())
      .then(data => {
        const mappedSneakers = data.map(sneaker => {
          return {
            id: sneaker.id,
            brand: sneaker.brand,
            colorway: sneaker.colorway,
            gender: sneaker.gender,
            imageUrl: sneaker.media.imageUrl,
            releaseDate: sneaker.releaseDate,
            retailPrice: sneaker.retailPrice,
            styleId: sneaker.styleId,
            title: sneaker.title,
            year: sneaker.year
          };
        });
        setSneakers(mappedSneakers);
      });
  }, []);

  return (
    <div className="bg-black p-8">
    <h1 className="text-3xl bg-yellow-500 font-bold text-center mb-8"> Today's Deals </h1>
    <ul className="grid grid-cols-2 gap-8 justify-center">
      {sneakers.map(sneaker => (
        <li key={sneaker.id} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4">
          <img src={sneaker.imageUrl} alt={sneaker.title} className="w-full h-auto object-contain max-w-lg max-h-96 mb-4" />
          <div className="text-lg text-center">
            <h2 className="font-bold mb-2">{sneaker.title}</h2>
            <p><span className="font-bold">Brand:</span> {sneaker.brand}</p>
            <p><span className="font-bold">Style ID:</span> {sneaker.styleId}</p>
            <p><span className="font-bold">Colorway:</span> {sneaker.colorway}</p>
            <p><span className="font-bold">Gender:</span> {sneaker.gender}</p>
            <p><span className="font-bold">Release Date:</span> {sneaker.releaseDate}</p>
            <p><span className="font-bold">Price: $</span> {sneaker.retailPrice}</p>
            <button className="bg-yellow-500 hover:bg-black m-3 text-white font-bold py-2 px-4 rounded-lg">
            Add to Cart
           </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Sneaker;

