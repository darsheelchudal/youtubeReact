import axios from "axios";

const BASE_URI = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_YOUTUBE_API_KEY,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchDataFromApi = async (url) => {
  try {
    await delay(1000); // Introduce a delay between requests to avoid rate limiting
    const { data } = await axios.get(`${BASE_URI}/${url}`, options);
    return data;
  } catch (error) {
    if (error.response) {
      console.error(
        `Error: ${error.response.status} - ${error.response.statusText}`
      );
      if (error.response.status === 401) {
        console.error("Unauthorized: Check your API key.");
      } else if (error.response.status === 429) {
        console.error("Too Many Requests: You are being rate-limited.");
      }
    } else {
      console.error(`Error: ${error.message}`);
    }
    throw error; // Rethrow the error to be handled by the calling function
  }
};
