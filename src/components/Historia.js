import React from 'react'
import './HistoriaStyles.css'
import Foto from '../assets/Foto.jpg'
import Foto2 from '../assets/Foto2.jpg'


const Historia = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Historia</h1>
            <p>La Escuela de Artes Visuales «Antonio Berni», comenzó a funcionar el 28 de Julio de 1980 . 
                En principio como talleres municipales de arte.  Hacia 1983, se consiguió que fuera reconocida como Escuela Superior de Artes Visuales de la Provincia de Buenos Aires. 
                En 1994, se le impuso el nombre «ANTONIO BERNI» en homenaje al pintor.
                La primera sede funcionaba en LINIERS 15  en el partido de Gral. San Martín. Años más tarde y hasta el 2004, funcionó con dos sedes, una en Bonifacini, esquina Perdriel, del mismo partido de Gral. San Martín, en el primer piso de lo que es el mercado municipal de frutos, mientras que en Liniers 15,  funcionaban los talleres de Escultura. 
                En la actualidad, nos encontramos en TUCUMÁN 130, en un edificio alquilado por la Provincia de Buenos Aires. Al mismo tiempo, se está construyendo un edificio para nuestra escuela en LINIERS 15.
                Desde el año 2008, contamos con una Extensión en Martínez, en la Calle Fleming 1621, Partido de San Isidro, donde se puede cursar el Profesorado de Artes Visuales en el Turno Vespertino. </p>
                <a target="_blank" href="https://goo.gl/maps/yc8K7irQW127ki2M9"><button className='btn'>Ver Ubicación</button></a>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Foto} className='img' alt='Foto del instituto' />
                </div>
                <div className='image-stack bottom'>
                    <img src={Foto2} className='img' alt='Foto de la entrada del instituto' />
                </div>

            </div>

        </div>
    </div>
  )
}

export default Historia