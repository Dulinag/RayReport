import React from 'react'

function CenterText() {
    return (
        <div className="flex items-center justify-center h-full">
        <div className="text-gray-600 text-center">
        <div className="bg-gray-100 rounded-full p-8 relative overflow-hidden">
          <div className="absolute w-16 h-8 bg-gray-100 rounded-full top-0 left-0 transform -rotate-45"></div>
          <div className="absolute w-16 h-8 bg-gray-100 rounded-full top-0 right-0 transform rotate-45"></div>
          
          
          <div className="p-4">
            <p className="text-lg font-semibold">Welcome to RayReport!</p>
            <p className="text-sm">Your Friendly UV reporter!</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default CenterText;

