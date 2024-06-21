"use client"

import {useState, useRef, useEffect} from "react"
const alphabetSpecials = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-"

export function Button({onClick, text, color, disabled}) {
  var dis = true
  var c = "bg-gray-300"
  if (disabled == undefined || disabled == false) {
    dis= false
    c= color
  }

  
    
  return <button disabled={dis}className={`${c} rounded-lg  font-bold text-white` } style={{width:"175px", height:"50px"}} onClick={onClick}>{text}</button>
}

export function Input({onChange, placeholder, value, ...props}) {
  return <input {...props} className="border-2 border-gray-300 w-[350px] rounded-lg p-2" placeholder={placeholder} value={value} onChange={onChange} />
}
export function InputSmall({onChange, placeholder, value, ...props}) {
    return <input {...props} className="border-2 border-gray-300 text-center w-[150px] rounded-lg p-2" placeholder={placeholder} value={value} onChange={onChange} />
  }
  export function NumberInput({onChange, placeholder, value}) {
    return <input disabled={true} type="tel" className="border-gray-300 text-center w-[50px] rounded-lg" placeholder={placeholder} value={value} onChange={onChange} />
  }

export function PhoneInput () {
  const [phone, setPhone] = useState([])
  const inputRef = useRef(null)
  const adjustPhone = (e,i) => {
    var temp = [...phone]
    temp[i] = e.target.value
    setPhone(temp)
  }
  useEffect(() => {
    document.addEventListener('keydown', function(event) {
    var temp = phone
    temp.push(event.key)
    setPhone(temp)
    console.log(phone)
  })
  return () => {
    document.removeEventListener('keydown', function(event) {
    var temp = phone
    temp.push(event.key)
    setPhone(temp)
    console.log(phone)
  })
  }
}, []);
  return(
    
    <div className="flex space-x-2 text-center justify-center">
      
      <span className={alphabetSpecials.includes(phone[0])||alphabetSpecials.includes(phone[1])||alphabetSpecials.includes(phone[2])?"p-2 rounded-xl border border-red-200":"p-2 rounded-xl border border-gray-200"}>
        {[0,1,2].map((i) => {
          return <NumberInput value = {phone[i]||"___"} onChange={(e)=>adjustPhone(e,i)}/>
        })}
      </span>
      <span className="flex items-center">
        <p>
          {" "}
        </p>
      </span>
      <span className={phone.length >= 6 && !alphabetSpecials.includes(phone[4] || phone[5] || phone [6])? "p-2 rounded-xl border border-green-200":alphabetSpecials.includes(phone[4] || phone[5] || phone [6])?"p-2 rounded-xl border border-red-200":"p-2 rounded-xl border border-gray-200"}>
      {[3,4,5].map((i) => {
          return <NumberInput value = {phone[i]||"___"} onChange={(e)=>adjustPhone(e,i)}/>
        })}
      </span>
      <span className="flex items-center">
        <p>
          {" "}
        </p>
      </span>
      <span className="p-2 rounded-xl border border-gray-200">
      {[6,7,8,9].map((i) => {
          return <NumberInput value = {phone[i]||"___"} onChange={(e)=>adjustPhone(e,i)}/>
        })}
      </span>
    </div>
    )
}

