import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src= 'https://i.pinimg.com/originals/25/ed/39/25ed39bb14ff6aa2e2d0dea0aea939aa.jpg' />
           {props.message}
          <div>
        <span>like</span>
      </div>
    </div>



  )
}

export default Post;