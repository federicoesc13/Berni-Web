import React from 'react'
import { Link } from 'react-router-dom'
import '../Post/PostStyles.css'

const Post = () => {
  window.scrollTo(0,0);
  return (
    <div className='post'>
        <img src='https://fastly.4sqi.net/img/general/width960/3632723_wKjRIMAJiB6HBUzpPFexMfmITqGC9mZ45d2sd2wlQc8.jpg' className='postImg' />
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Noticia</span>
            </div>
            <Link to="/blog/post"><span className='postTitle'>Inscripciones 2022</span></Link>
            <hr/>
            <span className='postDate'>Hace 1 hora</span>
        </div>
        <p className='postDesc'>A continuación encontrarán toda la información y requisitos para la inscripción a las carreras en las sedes de San Martín y San Isidro, así como la planilla de inscripción y ficha médica para descargar.

*PROFESORADO DE ARTES VISUALES – Orientación GRABADO, ESCULTURA o PINTURA – 4 años, Validez Nacional – (Turnos Mañana, Tarde o Noche) Requisito: curso introductorio (FOBA) de 1 año de duración (Total: 5 años)


*Tecnicatura en DISEÑO GRAFICO – 3 años, Validez Nacional) (Turnos Mañana o Noche)

*DISEÑO GRAFICO – 1 año, Validez Nacional – (Turnos Mañana o Noche) Requisito: Técnico en Diseño Gráfico


*Tecnicatura en DISEÑO de IMAGEN y SONIDO – 3 años, Validez Nacional – (Turno Noche)

Requisitos de inscripción:

    Formulario de inscripción con datos personales (descargarlo de FB Antonio Berni o adquirirlo en Pedro o M&M).
    2 fotocopias del DNI, frente y dorso.
    3 fotos 4×4.
    2 fotocopias de analítico secundario, o constancia de título en trámite, o de alumno regular cursando el último año del secundario.
    Certificado de apto físico.
    Carpeta de tres solapas color “NARANJA” con folio oficio.
    (En sede Martínez el folio, la planilla de inscripción y la carpeta serán proveídos por las preceptoras y tendrá un costo de $100, que abonará el estudiante) </p>
    </div>
  )
}

export default Post