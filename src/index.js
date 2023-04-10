import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {cards} from './cards';
import CardView from './card-view';

import {data,fruit} from './data';

function CardList() {
  return (<main className='card-list'>
    {cards.map((card)=> <CardView key={card.id} {...card} />)}
  </main>);
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<CardList/>)
