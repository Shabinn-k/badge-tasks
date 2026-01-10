import React from 'react'
import Props from './Props'

const PropsParent = () => {
  return (
    <div>
        <h1>Users</h1>
        <Props name="shabin"/>
        <Props name="Ronaldo" age={20}/>

    </div>
  )
}

export default PropsParent