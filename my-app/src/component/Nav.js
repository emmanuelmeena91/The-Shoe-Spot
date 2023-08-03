import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="text-center py-4 bg-black">
      <nav className="bg-black text-white inline-block">
        <ul>
          <li className="flex">
            <ul className="flex justify-end space-x-6 ">
              <li>
                <NavLink exact to="/" className="bg-white text-black py-2 px-4 rounded-lg font-bold hover:text-black hover:bg-yellow-500">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="bg-white text-black py-2 px-4 rounded-lg font-bold hover:text-black hover:bg-yellow-500">About</NavLink>
              </li>
              <li>
                <NavLink to="/shopnow" className="bg-white text-black py-2 px-4 rounded-lg font-bold hover:text-black hover:bg-yellow-500">Shop Now</NavLink>
              </li>
            </ul>
          </li>
        </ul> 
      </nav>
    </div>
  );
};

export default Nav;