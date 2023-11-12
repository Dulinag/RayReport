import axios from 'axios';

const OPENUV_API_KEY = 'openuv-g05efkrlounj9zh-io';
const OPENWEATHERMAP_API_KEY = '610c1366e1aa6b9cee0b4a4816923839';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { zipCode } = req.body;

  try {
    // Fetch latitude and longitude from OpenWeatherMap reverse geocoding API
    const geocodingResponse = await axios.get(
      `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${OPENWEATHERMAP_API_KEY}`
    );

    if (!geocodingResponse.data.length) {
      return res.status(404).json({ error: 'Location not found for the provided ZIP code' });
    }

    const { lat, lon } = geocodingResponse.data[0];

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

    res.status(200).json({ uvIndexData });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

