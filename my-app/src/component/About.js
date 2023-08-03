import React from 'react';

const About = () => {
  return (
    <div className="bg-black p-8 text-white">
      <h1 className="text-4xl font-bold mb-4">ABOUT US.</h1>
      <p className="italic mb-4">
      Welcome to The-Shoe-Spot, your one-stop-shop for the latest and greatest in footwear. Our mission is to provide you with a wide selection of high-quality shoes that not only look great but feel great too. Whether you're looking for the perfect pair of sneakers for your morning jog, some stylish dress shoes for a night out, or anything in between, we've got you covered.
      At The-Shoe-Spot, we believe that shoes are more than just an accessory - they're a reflection of your personality and your style. That's why we've curated a collection of shoes from some of the top brands in the industry, so you can find the perfect pair to match your unique taste.
      </p>
      <img src="https://sneakernews.com/wp-content/uploads/2017/06/nike-hyperdunk-2017-tb-black-white-1.jpg" alt="Shoes" className="rounded-full mx-auto max-w-md mb-4" />
      <footer className="flex items-center bg-black py-5" style={{position: "absolute", bottom: 0, left: 0, right: 0, width: "100%"}} >
          Contact: 0897686 | Follow us on
        <img src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg" alt="Instagram" className="w-4 h-4 mx-2" />
      @shoe_spot_org | 
      </footer>
    </div>
  );
};

export default About; 