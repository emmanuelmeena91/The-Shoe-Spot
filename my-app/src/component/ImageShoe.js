import { useState } from 'react';

function Imageshoe() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://i8.amplience.net/i/office/23_SUMMER_SALE_HP1_EXTRA20_Desktop",
    "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/products/2023/6/16/20230616-puma-custom-shoes.jpg.rend.hgtvcom.966.544.suffix/1686924226554.jpeg",
    "https://thumbs.dreamstime.com/b/collection-vector-logo-sportwear-brands-adidas-new-balance-under-armour-jordan-kappa-asics-reebok-nike-vans-converse-collection-222305695.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/1-coolest-sneakers-2023-index-comp-1674143020.jpg",
    "https://images.squarespace-cdn.com/content/v1/58ee0b551e5b6c8ff18b94ad/1612266928154-14XJBOAH621LTBJI57OV/Nike+Air+Jordan+Sneaker.jpg?format=2500w"
  ];  

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };       

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };  
   
  return (                  
    <div className="relative overflow-hidden h-screen">
      <div className="flex justify-center items-center h-48 md:h-72 m-3">
        <div className="relative overflow-hidden w-full h-full rounded-md shadow-md">
          <img
            src={images[currentImage]}
            alt="Shoe image"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ animationDelay: `${currentImage * 5}s` }}
            loading="lazy"
          />
          <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded-full" onClick={prevImage}>
            &lt;
          </button>
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded-full" onClick={nextImage}>
            &gt;
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden h-12 w-12 md:h-16 md:w-16 rounded-md shadow-md mx-2 cursor-pointer ${index === currentImage ? 'border-2 border-blue-500' : ''}`}
            onClick={() => setCurrentImage(index)}
          >
            <img
              src={image}
              alt="Shoe image"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ animationDelay: `${index * 5}s` }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Imageshoe;