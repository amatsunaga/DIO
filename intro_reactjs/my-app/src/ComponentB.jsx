import React, { Children } from 'react'

function ComponentB(props) {
  return (
    <div>Componente B =D
      <div>{props.children}</div>
    </div>
  )
}

export default ComponentB