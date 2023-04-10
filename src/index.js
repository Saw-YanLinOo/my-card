import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const card = {
  title:"Card 1",
  description:"accusamus beatae ad facilis cum similique qui sunt",
  image:"https://via.placeholder.com/150/92c952"
}
const cardTwo = {
  title:"Card 2",
  description:"accusamus beatae ad facilis cum similique qui sunt",
  image:"https://via.placeholder.com/150/92c952"
}
function CardList() {
  return (<main className='card-list'>
    <Card card={card} />
    <Card card={cardTwo} />
  </main>);
}

function Card(props){
  return (
    <section className='card'>
      <img src={props.card.image} alt='card-image'/>
      <h1 style={{marginTop:"1rem"}} >{props.card.title}</h1>
      <CardDescription desc= {props.card.description}/>
    </section>
  )
}

function CardDescription(props){
  return <p style={{marginTop:"0.5rem"}}>{props.desc}</p>
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<CardList/>)
