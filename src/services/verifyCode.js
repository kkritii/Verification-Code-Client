import axios from "axios";

import config from "../config";

export const verifyCode = async (data) => {
  try {
    const url      = `${config.apiUrl}${config.endpoints.verify}`;
    const response = await axios.post(url, data);

    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};