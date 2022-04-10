import React from 'react'
import './CarrerasStyles.css'

const Carreras = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <span className='bar'></span>
                <p className='btc'>Diseñador Grafico</p>
                <p>- Duración 4 años -</p>
                <p>- Se ingresa siendo técnico en diseño -</p>
                <p>- No requiere Foba -</p>
                <p>- Modalidad Presencial -</p>
                <a href='../assets/Plan.pdf' download className='btn' >Ver Plan de estudios</a>

            </div>
            <div className='card'>
                <h3>-Tecnicatura-</h3>
                <span className='bar'></span>
                <p className='btc'>Imagen y Sonido</p>
                <p>- Duración 3 años -</p>
                <p>- No se requiere Foba -</p>
                <p>- Modalidad Presencial -</p>
                <a href='../assets/Plan.pdf' download className='btn' >Ver Plan de estudios</a>

            </div>
            <div className='card'>
                <h3>-Profesorado-</h3>
                <span className='bar'></span>
                <p className='btc'>Artes Visuales</p>
                <p>- Duración 4 años -</p>
                <p>- Se ingresa rindiendo Foba -</p>
                <p>- Modalidad Presencial -</p>
                <a href='../assets/Plan' download={"Plan Estudios DG"} className='btn' >Ver Plan de estudios</a>

            </div>
        </div>
    </div>
  )
}

export default Carreras