import "./card.css"
export default function Card({title, city, description, ...props}) {
  return (
    <article {...props} className={`card ${props.className}`}>
      <h2 className="card__title"> {title} </h2>
      <strong className="card__city"> {city} </strong>
      <span className="card__description">
        {description}
      </span>
    </article>
  )
}
