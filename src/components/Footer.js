import React, { Children } from 'react'

import './Footer.css'

export default function Footer ({props, children}){

  return (
    <footer>
      <hr/>
      <br/>
      <p> Desenvolvido por {props} </p>
      {children}
    </footer>
  )
}