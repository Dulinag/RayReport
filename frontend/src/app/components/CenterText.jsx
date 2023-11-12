import React from 'react'

function CenterText() {
    return (
        <div className="flex items-center justify-center h-full">
        <div className="text-gray-600 text-center">
        <div className="bg-gray-100 rounded-full p-8 relative overflow-hidden">
          <div className="absolute w-16 h-8 bg-gray-100 rounded-full top-0 left-0 transform -rotate-45"></div>
          <div className="absolute w-16 h-8 bg-gray-100 rounded-full top-0 right-0 transform rotate-45"></div>
          
          
          <div className="p-4">
            <p className="text-2xl font-semibold">Welcome to RayReport!</p>
            <p className="text-lg bold italic">Our app displays the UV index and provides safety suggestions that is essential for user protection against harmful ultraviolet radiation. RayReport empowers individuals by offering real-time information on UV intensity, enabling users to make informed decisions about sun exposure. Additionally, the safety recommendations tailored to the current UV index guide users in adopting preventive measures, promoting skin health and minimizing the risk of conditions like sunburns and long-term skin damage.</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default CenterText;

