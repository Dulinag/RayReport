"use client";
import React, { useState } from "react";
import { getUVData } from '../api/api';
import axios from 'axios';
import CenterText from '../components/CenterText'



const OPENUV_API_KEY = 'openuv-g05efkrlov2wwuu-io';
const OPENWEATHERMAP_API_KEY = '610c1366e1aa6b9cee0b4a4816923839';


function Chat() {

  const [zipCode, setZipCode] = useState('');
  const [uvIndexData, setUVIndexData] = useState(null);
  const [open, setOpen] = useState(null);
  const [showCenterText, setShowCenterText] = useState(true); // Added state to control visibility
  
  const fetchUVData = async () => {
    try {
      // Fetch latitude and longitude from OpenWeatherMap reverse geocoding API
      const geocodingResponse = await axios.get(
        `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${OPENWEATHERMAP_API_KEY}`
      );
  
      const location = geocodingResponse.data;
  
      console.log('Geocoding Response:', location);

      setOpen(location)
  
      if (!location || !location.lat || !location.lon) {
        console.error('Location not found for the provided ZIP code');
        return;
      }
  
      const { lat, lon } = location;
  
      // Fetch UV index data from OpenUV API
      const uvResponse = await axios.get(
        `https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${lon}`,
        {
          headers: {
            'x-access-token': OPENUV_API_KEY,
          },
        }
      );
  
      const uvIndexData = uvResponse.data.result;
      setUVIndexData(uvIndexData);
      setShowCenterText(false); // Hide CenterText component after fetching UV data
    } catch (error) {
      console.error('Error fetching UV data:', error);
      setUVIndexData(null);
      setShowCenterText(true); // Hide CenterText component after fetching UV data
    }
  };
  
  

  return (
    <>
      <div className="flex h-screen antialiased text-gray-800 bg-sky-300">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-sky-300 flex-shrink-0">
            <div className="flex flex-row items-center justify-center h-12 w-full">
              <div
                className="flex items-center justify-center rounded-2xl text-white bg-yellow-300 h-10 w-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </div>
              <div className="ml-2 font-bold text-2xl text-white">RayReport</div>
            </div>
            <div className="relative flex flex-col items-center bg-white border border-gray-300 mt-4 w-full py-6 px-4 rounded-full overflow-hidden">
  <div className="absolute w-20 h-10 bg-gray-300 rounded-full -top-6"></div>
  <div className="absolute w-24 h-12 bg-gray-300 rounded-full -top-8"></div>
            <div class = " flex justify-center items-center italic text-zinc-800">NEW YORK CITY</div>
              <div className="h-20 w-20 rounded-full border overflow-hidden">
                
                <img
                  src="https://i.insider.com/5ad8ae04cd862425008b4898?width=700"
                  alt="Avatar"
                  className="h-full w-full"

                />

              </div>

            </div>


            <div className="relative flex flex-col items-center bg-white border border-gray-300 mt-4 w-full py-6 px-4 rounded-full overflow-hidden">
  <div className="absolute w-20 h-10 bg-gray-300 rounded-full -top-6"></div>
  <div className="absolute w-24 h-12 bg-gray-300 rounded-full -top-8"></div>
            <div class = " flex justify-center items-center italic text-zinc-800">LOS ANGELOS</div>

              <div className="h-20 w-20 rounded-full border overflow-hidden">
                <img
                  src="https://www.telegraph.co.uk/content/dam/Travel/2019/June/la-observatory.jpg"
                  alt="Avatar"
                  className="h-full w-full"
                />


              </div>
            </div>


            <div className="relative flex flex-col items-center bg-white border border-gray-300 mt-4 w-full py-6 px-4 rounded-full overflow-hidden">
  <div className="absolute w-20 h-10 bg-gray-300 rounded-full -top-6"></div>
  <div className="absolute w-24 h-12 bg-gray-300 rounded-full -top-8"></div>
            <div class = " flex justify-center items-center italic text-zinc-800">MIAMI</div>

              <div className="h-20 w-20 rounded-full border overflow-hidden">
                <img
                  src="https://thumbs.dreamstime.com/b/miami-beach-florida-usa-ocean-drive-74275357.jpg"
                  alt="Avatar"
                  className="h-full w-full"
                />


              </div>
            </div>



            <div className="relative flex flex-col items-center bg-white border border-gray-300 mt-4 w-full py-6 px-4 rounded-full overflow-hidden">
  <div className="absolute w-20 h-10 bg-gray-300 rounded-full -top-6"></div>
  <div className="absolute w-24 h-12 bg-gray-300 rounded-full -top-8"></div>
            <div class = " flex justify-center items-center italic text-zinc-800">CHICAGO</div>

              <div className="h-20 w-20 rounded-full border overflow-hidden">
                <img
                  src="https://erepublic.brightspotcdn.com/dims4/default/13ede82/2147483647/strip/false/crop/1000x664+0+0/resize/1000x664!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.us-west-2.amazonaws.com%2Fb5%2F48%2F0fd02b1c4df7acadea1470bd37c8%2Fshutterstock-84639565.jpg"
                  alt="Avatar"
                  className="h-full w-full"
                />


              </div>
            </div>





            <div className="relative flex flex-col items-center bg-white border border-gray-300 mt-4 w-full py-6 px-4 rounded-full overflow-hidden">
  <div className="absolute w-20 h-10 bg-gray-300 rounded-full -top-6"></div>
  <div className="absolute w-24 h-12 bg-gray-300 rounded-full -top-8"></div>
            <div class = " flex justify-center items-center italic text-zinc-800">BOSTON</div>

              <div className="h-20 w-20 rounded-full border overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/1336879395/photo/boston-massachusetts-usa-skyline-over-boston-common.jpg?s=612x612&w=0&k=20&c=JLq8oarT8Vz26QUyXIHWPajJ25qefWS40Et_771RDkk="
                  alt="Avatar"
                  className="h-full w-full"
                />


              </div>
            </div>
            
          </div>

          

          
          <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gradient-to-t from-white to-yellow-300 h-full p-4">

            {showCenterText && <CenterText />}

            {uvIndexData && (
  <div className="flex items-center justify-center h-screen">

    <div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">UV Index Data for {open.name} {open.zip}: </h2>

<p className=" text-2xl font-bold flex justify-center items-center text-center ">{uvIndexData.uv}</p>
    <div className="bg-grey-400 text-white p-8 rounded-lg shadow-lg">
      
      
      <h2 className="text-2xl font-bold mb-4">UV Index Data</h2>
      <p className="text-lg">UV Index: {uvIndexData.uv}</p>


    </div>
  </div>
)}

              <div
                className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4 mt-auto"
              >
                <div>

                  
                  <button
                    className="flex items-center justify-center text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      ></path>
                    </svg>
                  </button>
                </div>

                
                <div className="flex-grow ml-4 mb -20">
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                    <button
                      className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="ml-4">
                  <button onClick={fetchUVData} className="flex items-center justify-center bg-blue-300 hover:bg-orange-500 rounded-xl text-white px-4 py-1 flex-shrink-0">
                    <span> Send</span>

                    <div>
                    {/* {uvIndexData && (
        <div>
          <h2>UV Index Data:</h2>
          <pre>{JSON.stringify(uvIndexData, null, 2)}</pre>
        </div>
      )} */}
   
    </div>
                    <span className="ml-2">
                      <svg
                        className="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
