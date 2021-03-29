import axios from "axios";

export async function doFetch(url) {
  const response = await axios.get(url);
  let data = null;
  try {
    data = await response.data;
  } catch (err) {
    console.log(err);
  }
  return {
    data,
  };
}
