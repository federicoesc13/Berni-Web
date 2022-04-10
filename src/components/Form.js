import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
                <label>Nombre y Apellido</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Carrera de Interés</label>
                <input type='text'></input>
                <label>Duda/Consulta</label>
                <textarea rows='6' placeholder='Escribe tu consulta...' />
                <button className='btn'>Enviar</button>        
        </form>
    </div>
  )
}

export default Form