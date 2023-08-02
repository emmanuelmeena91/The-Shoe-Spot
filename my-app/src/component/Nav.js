import React from 'react'
import ImageShoe from './ImageShoe';

const Nav = () => {
  return (
    <nav className="bg-black text-white">
      <ul className="flex items-center justify-between ml-10 max-w-4xl mx-auto py-4 px-6">
        <li className="flex items-center ml-7">
          <img src='https://www.shutterstock.com/image-vector/modern-designer-mens-sneaker-logo-600w-2240796723.jpg' alt="The Shoe Spot" className="rounded-full h-12 w-12 mr-2 h-16 w-16 mr-2"></img>
          <a href="#" className="font-bold text-xl">The Shoe Spot</a>
         
        </li>
        <li className="flex">
          <ul className="flex justify-end space-x-6 ">
            <li>
              <a href="#" className="bg-white text-black py-2 px-4 rounded-lg font-bold hover:text-black hover:bg-yellow-500">Home</a>
            </li>
            <li>
              <a href="#" className="bg-white text-black py-2 px-4 rounded-lg font-bold hover:text-black hover:bg-yellow-500">About</a>
            </li>
            <li>
              <a href="#" className="bg-white text-black py-2 px-4 rounded-lg font-bold hover:text-black hover:bg-yellow-500">Contact</a>
            </li>
          </ul>
        </li>
      </ul> 
      <ImageShoe/>
    </nav>
  )
}

export default Nav;