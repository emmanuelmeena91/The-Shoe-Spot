import React, { useState, useEffect } from 'react';

const Sneaker = () => {
  const [sneakers, setSneakers] = useState([]);
  const [cart, setCart] = useState([]);

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

  const handleAddToCart = (sneaker) => {
    // Add the selected sneaker to the cart
    setCart([...cart, sneaker]);
  };

  const handleRemoveFromCart = (id) => {
    // Remove the selected sneaker from the cart
    setCart(cart.filter(sneaker => sneaker.id !== id));
  };

  return (
    <div className="bg-black p-8">
      <div className="bg-black">
        <p className="bg-black"> This is your cart container </p>
        <ul className="grid grid-cols-5 gap-4 justify-center">
          {cart.map(sneaker => (
            <li key={sneaker.id} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4">
           <p className="bg-yellow-200 text-green-500 px-3 rounded-lg"><span class="text-green-500 text-2xl font-bold">&#x2713;</span> Added to Cart</p>                
              <img src={sneaker.imageUrl} alt={sneaker.title} className="w-full h-auto object-contain max-w-md max-h-64 mb-4" />
              <div className="text-lg text-center">
                <h2 className="font-bold mb-2">{sneaker.title}</h2>
                <p><span className="font-bold">Brand:</span> {sneaker.brand}</p>
                <p><span className="font-bold">Style ID:</span> {sneaker.styleId}</p>
                <p><span className="font-bold">Colorway:</span> {sneaker.colorway}</p>
                <p><span className="font-bold">Gender:</span> {sneaker.gender}</p>
                <p><span className="font-bold">Release Date:</span> {sneaker.releaseDate}</p>
                <p><span className="font-bold">Price: $</span> {sneaker.retailPrice}</p>
                <button className="bg-red-500 hover:bg-black m-3 text-white font-bold py-2 px-4 rounded-lg"
                  onClick={() => handleRemoveFromCart(sneaker.id)}>
                  Remove
                </button>
                <br/>
                 <button className="bg-orange-500 hover:bg-black m-3 text-white font-bold py-2 px-4 rounded-lg">Buy</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <h1 className="text-3xl bg-yellow-500 font-bold text-center mt-3 mb-8 ml-10 mr-10 rounded-lg"> Today's   Deals </h1>
      <ul className="grid grid-cols-2 gap-8 justify-center">
        {sneakers.map(sneaker => (
          <li key={sneaker.id} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4">
            <img src={sneaker.imageUrl} alt={sneaker.title} className="w-full h-auto object-contain max-w-md max-h-64 mb-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
            <div className="text-lg text-center">
              <h2 className="font-bold mb-2">{sneaker.title}</h2>
              <p><span className="font-bold">Brand:</span> {sneaker.brand}</p>
              <p><span className="font-bold">Style ID:</span> {sneaker.styleId}</p>
              <p><span className="font-bold">Colorway:</span> {sneaker.colorway}</p>
              <p><span className="font-bold">Gender:</span> {sneaker.gender}</p>
              <p><span className="font-bold">Release Date:</span> {sneaker.releaseDate}</p>
              <p><span className="font-bold">Price: $</span> {sneaker.retailPrice}</p>
              <button className="bg-yellow-500 hover:bg-black m-3 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => handleAddToCart(sneaker)}>
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