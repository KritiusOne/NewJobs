import "./header.css"
export default function Header() {
  return (
    <header className="header">
      <ul className="header__list">
        <li className="header__list__item">
          Inicio
        </li>
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
