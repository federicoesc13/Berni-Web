import React from 'react'
import './SinglePostStyles.css'
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";


const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
          <img className='singlePostImg' src='https://fastly.4sqi.net/img/general/width960/3632723_wKjRIMAJiB6HBUzpPFexMfmITqGC9mZ45d2sd2wlQc8.jpg'></img>
        <h1 className='singlePostTitle'>
        Inscripciones 2022
          <div className='singlePostEdit'>
          <FaRegEdit className='singlePostIconEdit'></FaRegEdit>
          <FaRegTrashAlt className='singlePostIconDelete'></FaRegTrashAlt>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>Autor: <b>Federico Escobar</b></span>
          <span className='singlePostDate'>21 de Abril del 2022</span>
          </div>
          <p className='singlePostDesc'>A continuación encontrarán toda la información y requisitos para la inscripción a las carreras en las sedes de San Martín y San Isidro, así como la planilla de inscripción y ficha médica para descargar.
          *PROFESORADO DE ARTES VISUALES – Orientación GRABADO, ESCULTURA o PINTURA – 4 años, Validez Nacional – (Turnos Mañana, Tarde o Noche) Requisito: curso introductorio (FOBA) de 1 año de duración (Total: 5 años)
          catura en DISEÑO GRAFICO – 3 años, Validez Nacional) (Turnos Mañana o Noche) O GRAFICO – 1 año, Validez Nacional – (Turnos Mañana o Noche) Requisito: Técnico en Diseño Gráfico
          *Tecnicatura en DISEÑO de IMAGEN y SONIDO – 3 años, Validez Nacional – (Turno Noche)
          Requisitos de inscripción:
          Formulario de inscripción con datos personales (descargarlo de FB Antonio Berni o adquirirlo en Pedro o M&M)
          2 fotocopias del DNI, frente y dorso.
          3 fotos 4×4.
          2 fotocopias de analítico secundario, o constancia de título en trámite, o de alumno regular cursando el último año del secundario.
          Certificado de apto físico.
          Carpeta de tres solapas color “NARANJA” con folio oficio.
          (En sede Martínez el folio, la planilla de inscripción y la carpeta serán proveídos por las preceptoras y tendrá un costo de $100, que abonará el estudiante)
          </p>
        
        </div>
    </div>
  )
}

export default SinglePost