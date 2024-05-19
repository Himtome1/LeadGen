"use client"

import useState from "react"

export function Button({onClick, text, color, disabled}) {
  var dis = true
  var c = "bg-gray-300"
  if (disabled == undefined || disabled == false) {
    dis= false
    c= color
  }

  
    
  return <button disabled={dis}className={`${c} rounded-lg  font-bold text-white` } style={{width:"175px", height:"50px"}} onClick={onClick}>{text}</button>
}

export function Input({onChange, placeholder, value}) {
  return <input className="border-2 border-gray-300 w-[350px] rounded-lg p-2" placeholder={placeholder} value={value} onChange={onChange} />
}
export function InputSmall({onChange, placeholder, value}) {
    return <input className="border-2 border-gray-300 w-[150px] rounded-lg p-2" placeholder={placeholder} value={value} onChange={onChange} />
  }

