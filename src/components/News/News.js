import React, { useState, useEffect } from "react";
import "./News.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        "X-RapidAPI-Key": "b710f27e7bmsh3dd626c60d04359p106b72jsnef8f78f40b7d",
      },
    };

    fetch(
      "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setNews(response.value);
        console.log(response.value);
      });
  }, []);

  const newsElement = news.map((item, index) => {
    return (
      <div className="news-card" key={index + 1}>
        <div className="card-content">
          <div className="news-title">
            <h2>{item.name}</h2>
            <img src={item.image.thumbnail.contentUrl} alt="" />
          </div>
          <p>{item.description}</p>
          <div className="card-details">
            <img src="" alt="" />
            <h4>Where</h4>
            <h4>3 hours ago</h4>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="news-container">
      <div className="filter">
        <h1>ACA VA EL FILTRO</h1>
      </div>
      {news && <div className="news-content">{newsElement}</div>}
    </div>
  );
};

export default News;
