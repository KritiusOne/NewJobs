import "./card.css"

export default function Card({title, city, description, alert}) {
  
  return (
    <article className="card" onClick={alert}>
      <h2 className="card__title"> {title} </h2>
      <strong className="card__city"> {city} </strong>
      <span className="card__description">
        {description}
      </span>
      <span className="click">
        Click para postularte
      </span>
    </article>
  )
}
