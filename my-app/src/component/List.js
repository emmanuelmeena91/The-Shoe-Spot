import React from 'react'
import Nav from './Nav';
import Sneaker from './Sneaker';

const List = () => {
  return (
    <div>
    
      <h1 className="text-7xl font-bold text-white shadow-silver bg-black p-4 ml-2 mr-2 mt-2 mb-2">The-Shoe-Spot</h1>
  
      <Nav/>

      <Sneaker/>

    </div>
  )
}

export default List;
