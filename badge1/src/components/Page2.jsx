import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"

function Page2() {
    const inputRef = useRef()
    const [names, setNames] = useState([])
    const [search, setSearch] = useState("")
    const [status, setStatus] = useState(true)

    const fetchingNames = async () => {
        const res = await axios.get("http://localhost:5000/users")
        setNames(res.data)
    }
    const handleAdd = async () => {
        const value = inputRef.current.value;
        if (!value.trim()) return;

        const res = await axios.post("http://localhost:5000/users", {
            name: value
        })
        setNames(prev => [...prev, res.data])
        inputRef.current.value = ""
    }

    const handleDel = async (id) => {
        await axios.delete(`http://localhost:5000/users/${id}`)
        setNames(prev => prev.filter(items => items.id !== id))
    }
    const getSearch = names.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    )
    useEffect(() => {
        if (status) {
            fetchingNames()
        } else {
            setNames([])
        }
    }, [status])

    const toggleStatus = () => {
        setStatus(prev => !prev)
    }


    return (
        <div>
            <h1>LIST OF NAMES</h1>
            <button onClick={toggleStatus}>{status ? "HIDE" : "SHOW ALL"}</button><br /><br />
            <input type="text" ref={inputRef} placeholder='Enter Name' />&nbsp;&nbsp;
            <button onClick={handleAdd}>ADD</button>
            <ul>
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search Something..' /><hr />
                {getSearch.map(items => (
                    <li key={items.id}>
                        <span>{items.name}</span>&nbsp;&nbsp;
                        <button onClick={() => handleDel(items.id)}>DELETE</button>
                        <h2></h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Page2