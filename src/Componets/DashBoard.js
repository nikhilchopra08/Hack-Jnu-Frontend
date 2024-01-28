import React from 'react';
import image from './image.jpeg';


const ImageGallery = () => {
  // Array of image URLs
  const images = [
    `${image}`,
    `${image}`,
    `${image}`,
    `${image}`,
    `${image}`
  ];

  return (
    <>
      <div className='dashboard'>DashBoard</div>
      {/* First background div */}
      <div className='background'>
        <p className='Solar'>Solar Panel</p>
        <hr className="my-2 mx-auto w-full border-t-2 border-black divider" />
        <div className="mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {images.map((imageUrl, index) => (
              <div key={index} className={`image-wrapper ${index === 0 ? 'ml-4' : ''} ${index === images.length - 1 ? 'mr-4' : ''}`}>
                <div className="image-container">
                  <img src={imageUrl} alt={`Image ${index + 1}`} className="image" />
                  <p className="index">{index + 1}</p>
                </div>
                <div className={`rectangular-box ${index === 3 ? 'red-rectangular-box' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second background div */}
      <div className='background-1'>
        <p className='Solar'>Rain Water Harvest</p>
        <hr className="my-2 mx-auto w-full border-t-2 border-black divider" />
        <div className="mx-auto px-4">
          <div className="flex flex-wrap justify-between">
                <div className="image-container-1">
                <img src={image} alt="Image" className="image-1" />
                  <div className="flex justify-between mt-2 button">
                    <button className="bg-green-500 text-white px-4 py-2 rounded show">Functioning</button>
                    <button className="bg-white border border-gray-300 px-4 py-2 rounded show white">MalFunction</button>
                  </div>
                </div>
              </div>
        
          </div>
        </div>
    </>
  );
};

export default ImageGallery;
