import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_API;
const PIXBAY_KEY = import.meta.env.VITE_PIXBAY_API;

export async function fetchdata(query, page = 1, per_page = 20) {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  return res.data;
}
export async function fetchvideodata(query, page = 1, per_page = 20) {
  const res = await axios.get("https://pixabay.com/api/videos/", {
    params: { key: PIXBAY_KEY, q: query, page, per_page, safesearch: true },
  });
  return res.data;
}
