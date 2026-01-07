import React, { useState } from 'react'

function Page1() {
  const [list,setList] =useState([])
  const [text,setText] =useState("")
  const [editId,setEditId] = useState(null)
  const [status,setStatus] =useState(false);

  const handlAddOrEdit=()=>{
    if(!text.trim())return ;
    if(editId){
      setList(prev=>
        prev.map(item=>
          item.id===editId ? {...item,text} : item
        )
      )
      setEditId(null)
    }else{
      setList(prev=>[
        ...prev,
        {id:Date.now(),text,deleted :false}
      ])
    }
    setText("")
  }
  const handleRemove=(id)=>{
    setList(prev=>
      prev.map(item=>
        item.id ===id ? {...item,deleted :true} : item
      )
    )
  }
  const handleUndo=(id)=>{
    setList(prev=>
      prev.map(item=>
        item.id===id ? {...item ,deleted :false} : item
      )
    )
  }
  const handleDelete=(id)=>{
    setList(prev=>
      prev.filter(item=>item.id !== id)
    )
  }

  const toggleStatus=()=>{
    setStatus(prev => !prev)
  }

    const visible=list.filter(item=>
      status ? item.deleted : !item.deleted
    )

  return (
    <div>
      <h1>TO DO APP</h1>
    {!status && (
      <>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />&nbsp;&nbsp;
      <button onClick={handlAddOrEdit}>{editId ? "UPDATE" : "ADD"}</button>
      </>
    )}
    <h4>{status ? "DELETED ITEMS" : "ITEMS"}</h4>
    <button onClick={toggleStatus}>{status ? "ACTIVE" : "DELETED"}</button>

    <ul>
      {visible.map(item=>(
        <li key={item.id}>
          <h2>{item.text}</h2>
          {!item.deleted &&(
            <>
            <button onClick={()=>{setText(item.text);setEditId(item.id)}}>EDIT</button>&nbsp;
            <button onClick={()=>handleRemove(item.id)}>REMOVE</button>
            </>
          )}

            {item.deleted &&(
              <>
              <button onClick={()=>handleUndo(item.id)}>UNDO</button>&nbsp;
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