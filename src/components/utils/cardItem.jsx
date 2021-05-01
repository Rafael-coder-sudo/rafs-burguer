import React from 'react'


export default props => (
  <a href={props.href}>
    <img className="img-fluid" src={props.img} />
    <h1 className="text-light text-center">{props.title}</h1>
  </a>
)