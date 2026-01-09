import React, { useRef, useState } from 'react'

function Page1() {
  const inputRef = useRef()
  const [list, setList] = useState([])
  const [status, setStatus] = useState(false)
  const [editId, setEditId] = useState(null)

  const handleAddOrEdit=()=>{
    const text=inputRef.current.value
    if(!text.trim())return;
    if(editId){
      setList(prev=>
        prev.map(item=>
          item.id === editId ? {...item,text} : item
        )
      )
      window.alert("text edited")
      setEditId(null)
    }else{
      setList(prev=>[
        ...prev,{id:Date.now(),text,deleted:false}
      ])
      window.alert("text added")
    }
    inputRef.current.value=""
  }
  const handleRemove=(id)=>{
    setList(prev=>
      prev.map(item=>
        item.id === id ? {...item,deleted : true} : item
      )
    )
  }

  const handleUndo=(id)=>{
    setList(prev=>
      prev.map(item=>
        item.id ===id ? {...item,deleted:false} : item
      )
    )
  }
  const handleDelete=(id)=>{
    if(!window.confirm("Are you sure wanna delete ?"))return
    setList(list.filter(item=>item.id !== id))

  }

  const handleStatus=()=>{
    setStatus(prev => !prev)
  }

  const visible=list.filter(item=>
    status ? item.deleted : !item.deleted
  )


  return (
    <div>
      <h1>TO DO APP</h1>
       {!status &&(
        <>
        <input type="text"  ref={inputRef} placeholder='Enter Something...'/>&nbsp;&nbsp;
        <button onClick={handleAddOrEdit}>{editId ? "UPDATE" : "ADD"}</button>
        </>
       )}
       <h5>{status ? "REMOVED ITEMS" : "ACTIVE ITEMS"}</h5>
       <button onClick={handleStatus}>{status ? "ACTIVE" : "DELETED"}</button>

       <ul>
        {visible.map(item=>(
          <li key={item.id}>
            <h3>{item.text}</h3>
            {!status &&(
              <>
              <button onClick={()=>{inputRef.current.value=item.text ;setEditId(item.id)}}>EDIT</button>&nbsp;&nbsp;
              <button onClick={()=>handleRemove(item.id)}>REMOVE</button>
              </>
            )}
            {status &&(
              <>
              <button onClick={()=>handleUndo(item.id)}>UNDO</button>&nbsp;&nbsp;
              <button onClick={()=>handleDelete(item.id)}>DELETE</button>
              </>
            )}
              

          </li>
        ))}
       </ul>
    </div>
  )
}

export default Page1