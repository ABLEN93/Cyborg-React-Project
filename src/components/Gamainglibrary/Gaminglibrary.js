import React from 'react'
import { Gamingcard, GamingData, SectionHeader } from '../export.js';
import './gaminglibrary.css';

function Gaminglibrary() {
  const cards = GamingData.map((card) => {
    return (
      <Gamingcard
        img={card.img}
        title={card.title}
        category={card.category}
      />
    );
  });
  return (
    <div className='gamingcard-items-wrapper'>

      <div className='gamingcard-items'>
        <SectionHeader><h3><em>YourGaming</em> Library</h3> </SectionHeader>
        <span className='gamingcard-items-section'>
          {cards}
        </span>
      </div>


    </div>
  )
}

export default Gaminglibrary