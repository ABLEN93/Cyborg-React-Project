import React from 'react'
import { Card } from './export';

function Gaminglibrarydata() {
    const GamingLibraryData = [
        {
          id: "mostpopular item-0",
          
          title: "Fortnite",
          category: "Sandbox",
          rate: "3.8",
          download: "2.3M",
        },
        {
          id: "mostpopular item-1",
         
          title: "pubG",
          category: "Stream-X",
          rate: "4.8",
          download: "1.1M",
        },
        {
          id: "mostpopular item-2",
         
          title: "Data2",
          category: "Legendary",
          rate: "2.7",
          download: "5.3M",
        },
        {
          id: "mostpopular item-3",
         
          title: "CS-GO",
          category: "Battle S",
          rate: "3.9",
          download: "6.1M",
        }];
        const cards = GamingLibraryData.map((card) => {
            return (
              <Card
                
                title={card.title}
                category={card.category}
                rate={card.rate}
                download={card.download}
              />
            );
          });
  return (
    <>
    <div>Gaming Library cards</div>
    <div className="mostpopular-items">{cards}</div>
    </>
  )
}

export default Gaminglibrarydata