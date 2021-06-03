import React from 'react'

const estilo = {
  'margin-top': '15px'
}

export default function TextoInput({title, id}){
  return(
    <>
    <div style={estilo}>
      {title}
      <div>
         <input type = "text" id={id} />
      </div>
    </div>
    
    </>
  )
}