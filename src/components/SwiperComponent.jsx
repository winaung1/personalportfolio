import React from 'react';


const SwiperComponent = ({items}) => {
  return (
    <div className="w-full h-64 slider">
      <div className="slide-track">
        {items.concat(items).map((item, index) => (
          <div key={index} className="slide text-4xl md:text-6xl text-gray-500 w-40 md:w-44">
            {item.item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwiperComponent;
