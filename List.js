import React from 'react';
import Card from './Card'
//import './index.css';

export default function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
            cardId={card.id}
            onDeleteCard={props.onDeleteCard}
          />
        )}
        <button
          type='button'
          className='List-add-button'
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}


//            // here we get the array with all of our card objects from list.js
            // passed in as props.cards. so we map it, sending the info to each
            // individual card as a prop.
