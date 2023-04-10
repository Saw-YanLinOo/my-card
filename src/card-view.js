function onClickHandler(){

}

function onMouseOverHandler(){

}

function Card(props){
  const {image,title,description} = props;

  return (
    <section onMouseOver={onMouseOverHandler} className='card'>
      <img src={image} alt='card-image'/>
      <h1 style={{marginTop:"1rem"}} >{title}</h1>
      <CardDescription desc= {description}/>
      <button onClick={onClickHandler}>Click ME</button>
    </section>
  )
}

function CardDescription(props){
  return <p style={{marginTop:"0.5rem"}}>{props.desc}</p>
}

export default Card;