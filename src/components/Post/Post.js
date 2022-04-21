import React from 'react'
import { Link } from 'react-router-dom'
import '../Post/PostStyles.css'

const Post = () => {
  return (
    <div className='post'>
        <img src='https://www.nationalgeographic.com.es/medio/2021/07/01/glory-of-damavand-and-milky-way_710ab66c_1348x890.jpg' className='postImg' />
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <Link to="/Blog/post"><span className='postTitle'>Lorem ipsum</span></Link>
            <hr/>
            <span className='postDate'>Hace 1 hora</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis auctor elit. Vivamus feugiat ex felis, id dictum nunc efficitur id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis auctor elit. Vivamus feugiat ex felis, id dictum nunc efficitur id. Nunc sit amet imperdiet nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras bibendum finibus ante, sit amet rhoncus arcu placerat non. Donec elementum non mi a aliquam. Aenean porttitor ex sit amet dolor varius, at ultricies erat tempor. Cras odio ipsum, accumsan sit amet arcu eget, viverra fermentum lorem. Suspendisse gravida, tortor at posuere dictum, urna lorem ornare nisl, vel porta purus purus vel ipsum. Integer in turpis quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ultricies magna nec urna sagittis, eleifend sodales augue interdum. Integer et dolor nec erat vehicula efficitur sed eget dolor. Nam volutpat turpis ipsum, a eleifend urna suscipit sed. </p>
    </div>
  )
}

export default Post