import Header from './components/Header'
import './App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutesTypes } from './routes/FinalRoutes'

function App() {
  const [titulo, setTitulo] = useState("")
  const [ubicacion, setUbicacion] = useState("")
  const navegate = useNavigate()
  const handleClick = ()=>{
    if(titulo.length != 0){
      const urlParams = new URLSearchParams()
      urlParams.set("work", titulo)
      urlParams.set("ubicacion", ubicacion)
      const baseURL = RoutesTypes.SEARCH_WORK.split(":")
      navegate(`${baseURL[0]}${baseURL[1]}?${urlParams.toString()}`)
    }else{
      alert("Falta el titulo del trabajo")
    }

  } 
  return (
    <div className='home'>
      <Header className="home__header"/>
      <div className='home--container'>
        <h1 className='home__title'>Aplicación primer empleo</h1>
        <strong className='home__subtitle'>¡Bienvenido!</strong>
      </div>
      <div className='home__form'>
        <input type="text" className="home__form__input" placeholder='Titulo de empleo' onChange={(e)=> setTitulo(e.currentTarget.value.trim())}/>
        <input type="text" className="home__form__input" placeholder='Ubicación' 
        onChange={(e)=> setUbicacion(e.currentTarget.value.trim())}/>
        <button className='home__form__button' onClick={handleClick}> Buscar Empleos </button>
      </div>
    </div>
  )
}

export default App
