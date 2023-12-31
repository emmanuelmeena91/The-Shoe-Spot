import React from 'react'

 const Home = () => {
  return (
    <div>
       <h1 className="text-7xl font-bold text-white shadow-silver bg-black p-4 ml-2 mr-2 mt-2 mb-2">The-Shoe-Spot</h1>
       <div className="bg-black text-white">
         <ul className="flex items-center justify-between ml-10 max-w-4xl mx-auto py-4 px-6">
        <li className="flex items-center ml-7">
          <img src='https://www.shutterstock.com/image-vector/modern-designer-mens-sneaker-logo-600w-2240796723.jpg' alt="The Shoe Spot" className="rounded-full h-12 w-12 mr-2 h-16 w-16 mr-2"></img>
          <a href="#" className="font-bold text-xl">The Shoe Spot</a>
         
        </li>
        </ul>
        </div>
          
        <div className="grid grid-cols-5 gap-4 mx-auto max-w-7xl mt-10 ">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img
          src="https://wallpapercave.com/wp/wp10269488.jpg"
          alt="Jordan 1"
          className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2">HyperAdapt 1.0</h2>
          <p className="text-gray-700 text-base"> 
          Nike Unmatched performance |"HyperAdapt 1.0"
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/723/80/34/michael-jordan-cool-pictures-wallpaper-preview.jpg"
          alt="Michael Jordan"
          className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2">Jordans</h2>
          <p className="text-gray-700 text-base">
          MJ's kicks and feel the greatness flow through you | "J's"
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img
          src="https://media.istockphoto.com/id/1208683466/photo/colorful-sport-shoes-on-mustard-color-backround.jpg?s=612x612&w=0&k=20&c=i4qjpMawsnjPME39tAusZQjAr-X9tIRxndO8GH6dyhU="
          alt="Colorful Sport Shoes"
          className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2">Red Skechers</h2>
          <p className="text-gray-700 text-base">
          Comfort meets style | "Skechers"
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img
          src="https://www.kickscrew.com/cdn/shop/articles/Untitled_design_1_1920x.jpg?v=1660125252"
          alt="Yeezy Boost 350"
          className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2">BRED</h2>
          <p className="text-gray-700 text-base">
           Air Jordan 1 Sneakers Are Worth the Hype | "BRED"
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img
          src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F04%2Fadidas-nite-jogger-triple-black-carbon-colorway-release-1.jpg?cbr=1&q=90"
          alt="Adidas Nite Jogger"
          className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2">Nite Jogger</h2>
          <p className="text-gray-700 text-base">
          Adidas Originals Nite Jogger in "Triple Black" | Hypebeast
          </p>
        </div> 
      </div>
      <footer className="bg-black mt-9 py-4" style={{position: "absolute", bottom: 0, left: 0, right: 0, width: "100%"}}>
  <h1 className="text-gray-300 text-center">"Shoe love is true love - find your sole mate in our collection!"</h1>
</footer>
    </div>

    </div>
  )
}

export default Home;