


"use client"
import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

function UVChart() {
  const [uvIndexData, setUVIndexData] = useState([]);

  useEffect(() => {
    // Fetch UV index data using axios or any other method
    axios.get('your_uv_index_api_endpoint')
      .then(response => {
        // Assuming the response data is an array representing UV index levels
        setUVIndexData(response.data);
      })
      .catch(error => {
        console.error('Error fetching UV index data:', error);
      });
  }, []);

  return (
    <div>
 </div>
  );
}

export default UVChart;
