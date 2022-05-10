import React, { useEffect, useState } from "react";
import "./Stats.css";

const Stats = () => {
  const [stats, setStats] = useState({});

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      "X-RapidAPI-Key": "b710f27e7bmsh3dd626c60d04359p106b72jsnef8f78f40b7d",
    },
  };

  useEffect(() => {
    fetch(
      "https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setStats(data.data);
      });
  }, []);

  return (
    <div className="stats-container">
      <h1>Global Crypto Stats</h1>
      <div className="stats-menu">
        <div className="left-stats">
          <p>Total Cryptocurrencies</p>
          <h3>{stats.totalCoins}</h3>
          <p>Total Market Cap</p>
          <h3>{stats.totalMarketCap}T</h3>
          <p>Total Markets</p>
          <h3>{stats.totalMarkets}K</h3>
        </div>
        <div className="right-stats">
          <p>Total Exchanges</p>
          <h3>{stats.totalExchanges}</h3>
          <p>Total 24h Volume</p>
          <h3>{stats.total24hVolume}B</h3>
        </div>
      </div>
    </div>
  );
};

export default Stats;
