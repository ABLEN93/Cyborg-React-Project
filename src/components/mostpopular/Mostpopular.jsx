import React from "react";
import "./mostpopular.css";
import game from "../../assets/img/popular-01.jpg";
import pubG from "../../assets/img/game-03.jpg";
import Data2 from "../../assets/img/popular-03.jpg";
import csgo from "../../assets/img/popular-04.jpg";

import { Card, SectionHeader } from "../export.js";

function Mostpopular() {
  const mostPopularItems = [
    {
      id: "mostpopular item-0",
      img: game,
      title: "Fortnite",
      category: "Sandbox",
      rate: "3.8",
      download: "2.3M",
    },
    {
      id: "mostpopular item-1",
      img: pubG,
      title: "pubG",
      category: "Stream-X",
      rate: "4.8",
      download: "1.1M",
    },
    {
      id: "mostpopular item-2",
      img: Data2,
      title: "Data2",
      category: "Legendary",
      rate: "2.7",
      download: "5.3M",
    },
    {
      id: "mostpopular item-3",
      img: csgo,
      title: "CS-GO",
      category: "Battle S",
      rate: "3.9",
      download: "6.1M",
    },
    {
      id: "mostpopular item-4",
      img: game,
      title: "Fortnite",
      category: "Sandbox",
      rate: "3.8",
      download: "2.3M",
    },
    {
      id: "mostpopular item-5",
      img: pubG,
      title: "PubG",
      category: "Stream-X",
      rate: "4.8",
      download: "1.1M",
    },
    {
      id: "mostpopular item-6",
      img: Data2,
      title: "Data2",
      category: "Legendary",
      rate: "2.7",
      download: "5.3M",
    },
    {
      id: "mostpopular item-7",
      img: csgo,
      title: "CS-GO",
      category: "Battle S",
      rate: "3.9",
      download: "6.1M",
    },
  ];
  const cards = mostPopularItems.map((card) => {
    return (
      <Card
        img={card.img}
        title={card.title}
        category={card.category}
        rate={card.rate}
        download={card.download}
      />
    );
  });
  return (
    <div className="mostpopular-wrapper">
      <SectionHeader><span>Most popular</span><em> Right Now</em></SectionHeader>
      <div className="mostpopular-items">{cards}</div>
      {/* this here we put them up in array */}
      {/* <Card
        img={game}
        title="Fortnite"
        category="Sandbox"
        rate="3.8"
        download="2.3M"
      />
      <Card
        img={pubG}
        title="PubG"
        category="Stream-X"
        rate="4.8"
        download="1.1M"
      /> */}
    </div>
  );
}

export default Mostpopular;
