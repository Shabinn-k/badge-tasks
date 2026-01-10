import React, { useState } from 'react'

const DropDown = () => {
 const options=["react","vue","vanilla","hyy"]
  const [open,setOpen]=useState(false)
  const [list,setlist]=useState([])

  const handleToggle=(options)=>{
    setlist(prev=>
      prev.includes(options) ? prev.filter(item=> item !== options) : [...prev,options]
    )
  }

  return (
    <div>
      <h1>DROP DOWN</h1>
      <button onClick={()=>setOpen(!open)}>Select items</button>
      {open &&(
        <>
        {options.map(option=>(
          <label key={option} style={{display:"block"}}>
            <input type="checkbox" checked={list.includes(option)} onChange={()=>handleToggle(option)} />
           {" "} {option}
          </label>
        ))}
        </>
      )}
      <ul>
        {list.map((item)=>(
          <li key={item}>
            <h2>{item}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropDown