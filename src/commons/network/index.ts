import Axios from "axios";
import cookies from "../cookies";

const getHeaders = () => {
  const authKey = cookies.get("authKey");
  if (authKey && authKey.length) {
    return {
      headers: {
        Authorization: "Bearer " + authKey,
      },
    };
  }
  return {};
};

const hostname=  "http://localhost:1337";

export default {
  get: async (url: string) => {
    const response = await Axios.get(hostname+url,getHeaders());
    return response;
  },
  post: async (url: string, data: any) => {
    const response = await Axios.post(hostname+url, data, getHeaders());
    return response;
  },
};
