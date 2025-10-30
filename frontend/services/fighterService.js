import axios from "axios";

const API_URL = "http://localhost:5000/fighters";

export const getFighters = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};
