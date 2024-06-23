"use client"

import {useState, useRef, useEffect} from "react"

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
export function InputSmall({onChange, placeholder, value, pattern}) {
    return <input pattern={pattern || null} className="border-2 border-gray-300 text-center w-[150px] rounded-lg p-2" placeholder={placeholder} value={value} onChange={onChange} />
  }
  export function InputEmail({onChange, placeholder, value}) {
    return <input type="email" className="border-2 border-gray-300 text-sm text-left w-[200px] rounded-lg p-2" placeholder={placeholder} value={value} onChange={onChange} />
  }
  export function NumberInput({onChange, placeholder, value}) {
    return <input  disabled={true} type="tel" className="border-gray-300 text-center w-[50px] rounded-lg" placeholder={placeholder} value={value} onChange={onChange} />
  }

  export function DateInput({onChange, placeholder, value}) {
    return <input  type="date" className="border-gray-300 border h-[40px] p-[5px] text-center w-[150px] text-sm rounded-lg" placeholder={placeholder} value={value} onChange={onChange} />
  }

  export function AddressInput({onChange, placeholder, value, label, width}) {
    var localWidth = ""
    if(width != undefined){
      localWidth = `w-[${width}px]`
    }
    else{
      var localWidth = "w-[150px]"
    }
    return(
    <div className="relative flex items-center justify-center space-x-2 p-2">
      <p className="text-gray-600 text-xs" >{label}</p>
      <input  className={`border-gray-300 border h-[40px] p-[5px] text-sm text-left ${localWidth} text-sm rounded-lg`} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
    )
  }

export function PhoneInput({onComplete, variable1, setNumber, onEnter}){
  const [phone, setPhone] = useState(Array(10).fill("")) // Determines the amount of digits in phone number
  const arrayOfRefs = [Array(10).fill(useRef())] // Array that is populated with refs for each input field in the phone number in the map function below
  useEffect(() => {
    if(!phone.includes("")){
     console.log(variable1)
     const newArray = [...variable1]
     newArray[2] = false
     onComplete(newArray)
     const newPhone = [...phone]
     newPhone.unshift("1")
     setNumber(newPhone.join(""))
    }
    else{
      const newArray = [...variable1]
      newArray[2] = true
      onComplete(newArray)
    }


}, [phone])
    
return(
  <div className="flex space-x-1">
   {phone.map((p, index) => {
    arrayOfRefs[index] = useRef() //populating the array with refs for each input field
    return(
      <div className="flex items-center">
        <input key={index} ref={arrayOfRefs[index]} autoFocus = {index==0} maxLength={1} className=" border-gray-300 border text-center w-[50px] h-[50px] rounded"  value={p}

        onKeyDown={(e) => { 
          if (e.key == "Enter" && !phone.includes("")){
            onEnter()
          }
          if (e.key == "Backspace"){
              const newPhone = [...phone] //shallow copy of phone number
              newPhone[index] = "" //sets the appropriate entry in the copied phone number to an empty string
              setPhone(newPhone) //sets the phone number to the modified copied phone number
              if (index > 0){
                arrayOfRefs[index-1].current.focus() //focuses on the previous input field if the index is greater than 0
            }
          }
          if (e.key == "ArrowRight" && index < 9){ //focuses on the next input field if the index is less than 9
            arrayOfRefs[index+1].current.focus()
          }
          if (e.key == "ArrowLeft" && index > 0){ //focuses on the previous input field if the index is greater than 0
            arrayOfRefs[index-1].current.focus()
          }
          if (/^[0-9]+$/.test(e.key)){ //checks if the key pressed is a number
            if (index < 10){ //checks if the index is less than 10
              const newPhone = [...phone] //shallow copy of phone number
              newPhone[index] = e.key //sets the appropriate entry in the copied phone number to the key pressed
              setPhone(newPhone) //sets the phone number to the modified copied phone number
              
            }
            if (index < 9){
              arrayOfRefs[index+1].current.focus() //focuses on the next input field if the index is less than 9, as not to run out of input fields
            }
           
          }
          else null
        }}
       />
       { 
        index == 2 || index == 5 ? <span className="text-2xl"><pre> - </pre></span> : null //adds a dash after the third and sixth input field
       }
      </div>
    )
   })}
  </div>
)
}

export function OTPInput({onComplete, variable1, generatedOTP, setReceivedOTP}){
  const [otp, setOTP] = useState(Array(4).fill("")) // Determines the amount of digits in phone number
  const arrayOfRefs = [Array(4).fill(useRef())] // Array that is populated with refs for each input field in the phone number in the map function below
  const [correctOTP, setCorrectOTP] = useState(true)
  useEffect(() => {
    if(!otp.includes("")){
     const newArray = [...variable1]
     newArray[3] = false
     setReceivedOTP(otp.join(""))
     if (otp.join("") != generatedOTP){
       setCorrectOTP(false)
     }
      else{
        setCorrectOTP(true)
      }
    }
    else{
      const newArray = [...variable1]
      newArray[2] = true
      onComplete(newArray)
    }
    

}, [otp])
    
return(
  <div className="flex space-x-1">
   {otp.map((p, index) => {
    arrayOfRefs[index] = useRef() //populating the array with refs for each input field
    return(
      <div className="flex items-center">
        <input key={index} ref={arrayOfRefs[index]} autoFocus = {index==0} maxLength={1} className={`${correctOTP?"border-gray-400":"border-red-400"} border text-center w-[50px] h-[50px] rounded`} value={p}

        onKeyDown={(e) => { 
          if (e.key == "Backspace"){
              const newOTP = [...otp] //shallow copy of otp
              newOTP[index] = "" //sets the appropriate entry in the copied otp to an empty string
              setOTP(newOTP) //sets the otp to the modified copied otp
              if (index > 0){
                arrayOfRefs[index-1].current.focus() //focuses on the previous input field if the index is greater than 0
            }
          }
          if (e.key == "ArrowRight" && index < 3){ //focuses on the next input field if the index is less than 3
            arrayOfRefs[index+1].current.focus()
          }
          if (e.key == "ArrowLeft" && index > 0){ //focuses on the previous input field if the index is greater than 0
            arrayOfRefs[index-1].current.focus()
          }
          if (/^[0-9]+$/.test(e.key)){ //checks if the key pressed is a number
            if (index < 4){ //checks if the index is less than 14
              const newOTP = [...otp] //shallow copy of otp
              newOTP[index] = e.key //sets the appropriate entry in the copied otp to the key pressed
              setOTP(newOTP) //sets the otp to the modified copied otp
              
            }
            if (index < 3){
              arrayOfRefs[index+1].current.focus() //focuses on the next input field if the index is less than 9, as not to run out of input fields
            }
           
          }
          else null
        }}
       />
       { 
       index != 3 ? <span className="text-2xl"><pre> - </pre></span> : null //adds a dash after each input
       }
      </div>
    )
   })}
  </div>
)
}

export function Mosaic({data, onClick, columns}){
  const [selected, setSelected] = useState(null)
  const columnsCSS = `grid-cols-5`
  return(
    <div className={`grid ${columnsCSS} gap-3`}>
      {data.map((amount, index)=>{
        var border = ""
        if (amount == selected){
          border = "border-lime-400"
        }
        return(
          <button key={index} className={`flex items-center border text-center ${border} justify-center w-[125px] h-[125px] bg-white rounded-lg shadow-md`} onClick={()=>{onClick(amount), setSelected(amount)}}>
            <p>{amount}</p>
          </button>
        )
      })}
    </div>
  )
}

export function ProgressBar({currentStep, totalSteps}){
  var barColor = "bg-black"
  if(currentStep == totalSteps){
    barColor = "bg-lime-500"
  }
  const progress = (currentStep/totalSteps)*100
  return(
    <div className="relative h-2 w-full bg-gray-300 rounded-lg">
      <div className={`absolute h-2 ${barColor} rounded-lg`} style={{width:`${progress}%`}}></div>
    </div>
  )
}

