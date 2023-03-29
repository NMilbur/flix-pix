import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const HOST = "movie-database-alternative.p.rapidapi.com/";
const API_KEY = process.env.MOVIE_API_KEY;

type ReqOptions = {
  method: string;
  url: string;
  headers: Record<string, string>;
  params: {
    s: string;
    r: "json";
  };
};

const options: ReqOptions = {
  method: "GET",
  url: `https://${HOST}`,
  headers: {
    "X-RapidAPI-Key": API_KEY!,
    "X-RapidAPI-Host": HOST,
  },
  params: { s: "", r: "json" },
};

type Data = string;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { searchText } = req.query;

  if (searchText && searchText.length > 0) {
    options["params"]["s"] = `*${searchText}*`;

    const response = await axios.request(options);

    res.status(200).json(JSON.stringify(response.data));
  }
}
