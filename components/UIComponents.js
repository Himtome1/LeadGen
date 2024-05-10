"use client"

import useState from "react"

export function Button({onClick, text, color}) {
    
  return <button className={`${color} rounded-lg  font-bold`} style={{width:"175px", height:"50px"}} onClick={onClick}>{text}</button>
}

