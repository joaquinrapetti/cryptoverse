import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CryptoTop.css";

const CryptoTop = () => {
  const [ranking, setRanking] = useState([{}]);

  const request = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      "X-RapidAPI-Key": "b710f27e7bmsh3dd626c60d04359p106b72jsnef8f78f40b7d",
    },
  };

  useEffect(() => {
    fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=0",
      request
    )
      .then((response) => response.json())
      .then((response) => {
        setRanking(response.data.coins);
      });
  }, []);

  // console.log(ranking);
  const coinsElement = ranking.map((item, index) => (
    <div className="card" key={index}>
      <div className="card-content">
        <div className="card-title">
          <h4>
            {index + 1}. {item.name}
          </h4>
          <img src={item.iconUrl} alt="" />
        </div>
        <div className="card-stats">
          <p>Symbol: {item.symbol}</p>
          <p>Price: {item.price}K</p>
          <p>MarketCap: {item.marketCap}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="crypto-container">
      <div className="crypto-title">
        <h1>Top 10 Cryptocurrencies in the world</h1>
        <Link to="/cryptocurrencie" className="show-more">
          Show More
        </Link>
      </div>
      {ranking && <div className="crypto-top">{coinsElement}</div>}
    </div>
  );
};

export default CryptoTop;
