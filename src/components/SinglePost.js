import React from 'react'
import './SinglePostStyles.css'
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";


const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
          <img className='singlePostImg' src='https://www.nationalgeographic.com.es/medio/2021/07/01/glory-of-damavand-and-milky-way_710ab66c_1348x890.jpg'></img>
        <h1 className='singlePostTitle'>
          Lorem ipsum
          <div className='singlePostEdit'>
          <FaRegEdit className='singlePostIconEdit'></FaRegEdit>
          <FaRegTrashAlt className='singlePostIconDelete'></FaRegTrashAlt>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>Autor: <b>Federico Escobar</b></span>
          <span className='singlePostDate'>21 de Abril del 2022</span>
          </div>
          <p className='singlePostDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo aliquam dolor at dapibus. Morbi congue egestas justo, nec varius lorem ullamcorper a. Nulla rhoncus posuere tellus sed imperdiet. Vestibulum non nisi a dolor tristique facilisis a vitae orci. Ut vehicula pulvinar venenatis. Nulla porta urna quis purus rutrum finibus. Cras pretium nulla ac sollicitudin congue. Nam sagittis vestibulum lorem, sed vulputate metus aliquet et. Maecenas sapien orci, lobortis at felis aliquam, hendrerit porta massa. Mauris et lobortis tellus, ut tempus mauris.
          </p>
        
        </div>
    </div>
  )
}

export default SinglePost