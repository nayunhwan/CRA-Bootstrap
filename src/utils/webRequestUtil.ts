import axios from "axios";

import { SERVER_END_POINT } from "configs/server";

type Method = "GET" | "POST" | "DEL" | "PUT";
interface Request {
  url: string;
  headers?: object;
  body?: object;
}

const basicRequest = async (type: Method, { url, headers, body }: Request) => {
  const config = {
    method: type,
    url: SERVER_END_POINT + url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers
    },
    data: body
  };

  try {
    const res = await axios(config);
    return res;
  } catch (err) {
    throw err.response;
  }
};

export const get = ({ url, headers, body }: Request) => {
  return basicRequest("GET", { url, headers, body });
};

export const post = ({ url, headers, body }: Request) => {
  return basicRequest("POST", { url, headers, body });
};

export const del = ({ url, headers, body }: Request) => {
  return basicRequest("DEL", { url, headers, body });
};

export const put = ({ url, headers, body }: Request) => {
  return basicRequest("PUT", { url, headers, body });
};
