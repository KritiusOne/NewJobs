import { Link } from "react-router-dom"
import "./header.css"
import { RoutesTypes } from "../routes/FinalRoutes"
export default function Header() {
  return (
    <header className="header">
      <ul className="header__list">
        <Link to={RoutesTypes.HOME} className="header__list__item">
          Inicio
        </Link>
        <li className="header__list__item">
          Estadisticas
        </li>
        <li className="header__list__item">
          Iniciar sesión
        </li>
      </ul>
    </header>
  )
}
