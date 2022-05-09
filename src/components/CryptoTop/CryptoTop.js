import React, { useEffect, useState } from "react";
import "./CryptoTop.css";

// `http://api.coinlayer.com/list?access_key=${process.env.REACT_APP_CRYPTO_API_KEY}`

const CryptoTop = () => {
  // const coins = ([ranking, setRanking] = useState([]));

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      "X-RapidAPI-Key": "b710f27e7bmsh3dd626c60d04359p106b72jsnef8f78f40b7d",
    },
  };

  useEffect(() => {
    fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=0",
      options
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="crypto-top">
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
    </div>
  );
};

export default CryptoTop;
