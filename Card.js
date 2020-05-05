import React from 'react';
//import './index.css';

export default function Card(props) {

  return (
    <div className='Card'>
      <button
      onClick={() => props.onDeleteCard(props.cardId)}
        type='button'
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}
