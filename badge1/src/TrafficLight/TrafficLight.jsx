import React, { useEffect, useState } from 'react'
import "./TrafficLight.css";

function TrafficLight() {
    const [light,setLight] = useState("red")
    const [running,setRunning] = useState(false)
    const [direction,setDirection] = useState("forward")


    useEffect(()=>{
        if(!running)return;
        const interval=setInterval(()=>{
            setLight(prev=>{
                if(direction === "forward"){
                    if(prev === "red")return "yellow"
                    if(prev === "yellow") return "green";
                    if(prev=== "green"){
                        setDirection("backward");
                        return "yellow"
                    }
                }
                    if(direction === "backward"){
                        if(prev === "yellow")return "red";
                        if(prev=== "red"){
                            setDirection("forward");
                            return ("yellow")
                        }
                    }       
                    return prev
            })
        },2000)
        return ()=> clearInterval(interval)
    },[running,direction])


  return (  
    <div className='container'>
        <h1>TRAFIC LIGHT</h1>
        <div className="traffic-box">
            <div className={`light red ${light === "red" ? "on" : "" }`}></div>
            <div className={`light yellow ${light === "yellow" ? "on" : "" }`}></div>
            <div className={`light green ${light === "green" ? "on" : "" }`}></div>
        </div>
        <div className="buttons">
            <button onClick={()=>setRunning(true)}>START</button>
            <button onClick={()=>setRunning(false)}>STOP</button>
        </div>
    </div>
  )
}

export default TrafficLight