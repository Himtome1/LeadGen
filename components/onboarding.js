"use client"
import { FaMotorcycle } from "react-icons/fa"
import { GiScooter } from "react-icons/gi"
import { IoBoat } from "react-icons/io5"
import {motion} from 'framer-motion'
import { AddressInput, InputSmall, Input, PhoneInput, OTPInput, Mosaic, InputEmail, DateInput, Button, NumberInput } from '@/components/UIComponents'
import {useState, useEffect} from 'react'

const vehicleTypes = [
    {name: "Street Bike", image: <FaMotorcycle size={30}/>},
    {name: "Dirt Bike", image: <GiScooter size={30}/>},
    {name: "ATV", image: ""},
    {name: "UTV", image: <GiScooter size={30}/>},
    {name: "Boat", image: <IoBoat size={30}/>},
    {name: "Jet-Ski", image: ""},
    {name: "RV/Camper", image: <GiScooter size={30}/>},
    {name: "Snowmobile", image: <GiScooter size={30}/>}

]

const fields = []

export function Step1(){
    return(
        <div className='w-full h-screen bg-gray-100'>
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-3xl font-extrabold'>Ready to start riding?</h1>
                <p className='text-gray-500'>Let's get you started</p>
            </div>
        </div>
    )
}
export function Step2({setVehicleType, selectedVehicleType}){
    return(
        <div className='w-full h-screen bg-gray-100 flex flex-col'>
            <div className='flex flex-col items-center justify-start h-full'>
                <div className="h-1/8">
                    <h1 className='text-2xl font-extrabold text-black mt-2'>Select your vehicle type</h1>
                </div>
            <div className = "grid grid-cols-4 grid-rows-2 w-2/3 px-2 h-2/3 gap-3 pb-2 pt-5">
                {vehicleTypes.map((vehicleType, index) => {
                    var border =""
                    vehicleType.name == selectedVehicleType? border = "border border-lime-500": border = null
                    return(
                        <motion.button  whileHover={{scale:1.05}} onClick={()=>setVehicleType(vehicleType.name)}  key={index} className={`flex ${border} flex-col items-center justify-center w-full h-full bg-white rounded-lg shadow-md`}>
                            <div className={`w-[100px]  h-[100px] bg-gray-100 rounded-full flex items-center justify-center`}>
                                {vehicleType.image}
                            </div>
                            <p className="text-center">{vehicleType.name}</p>
                        </motion.button>
                    )
                })}
                    
                </div>
            </div>
        </div>
    )
}
export function Step3({onComplete, variable1, setNumber, onEnter}) {

   return(
    <form className="w-full h-screen bg-white items-center justify-center space-y-5 flex flex-col">
    <div>
        <h1 className="text-2xl font-extrabold pb-10 text-gray-700">What is your phone number?</h1>
    </div>
        <PhoneInput onComplete={onComplete} variable1={variable1} setNumber={setNumber} onEnter={onEnter}/>
    </form>
   )
}

export function Step4({onComplete, variable1, number, generatedOTP, setReceivedOTP }) {
    return(
        <form className="w-full h-screen bg-white items-center justify-center space-y-5 flex flex-col">
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-extrabold pb-10 text-gray-700">Please confirm your phone number</h1>
                <p className="text-gray-600 text-sm font-bold">Enter the 4 digit code that was sent to +{number[0]} {`(${number.slice(1,4)}) `}{number.slice(4,7)}-{number.slice(7-11)}</p>
            </div>
            <OTPInput onComplete={onComplete} variable1={variable1} setReceivedOTP={setReceivedOTP} generatedOTP={generatedOTP}/>
        </form>
    )
}

export function Step5({setFirstName, setLastName}) {

    return(
        <form className="w-full h-screen bg-white items-center space-y-5 flex flex-col">
        <motion.div initial={{y:-100}} animate={{y:0}} transition={{duration:0.5}} className="top-0 flex items-center justify-center  w-full h-[40px] bg-lime-500">
            <p className="text-white align-center items-center text-center">Phone number confirmed!</p>
        </motion.div>
        <div className="h-full flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold pb-10 text-gray-700">What's your name?</h1>
            <div className="flex space-x-5">
                <div className="relative">
                    <span className="text-gray-500 text-sm absolute top-[-17px] left-[39px]">First Name</span>
                    <InputSmall placeholder={"John"} onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div className="relative">
                    <span className="text-gray-500 text-sm absolute top-[-17px] left-[39px]">Last Name</span>
                    <InputSmall placeholder={"Smith"} onChange={(e)=>setLastName(e.target.value)}/>
                </div>
            </div>
        </div>
  
       
    </form>
    )
}

export function Step6({setEmail, firstName}){
    return(
        <form className="w-full h-screen bg-white items-center justify-center space-y-5 flex flex-col">
            <div className="flex flex-col items-center">
                <p className="text-gray-700 text-2xl font-extrabold">What is your email, {firstName}?</p> 
                <div className="w-[250px] text-center mt-5 mb-5">
                    <p className="text-gray-500 text-sm">If you qualify, we will immediately let you know through email with your pre-approval offer.</p>
                    <p className="text-gray-500 mt-2 text-sm font-bold">Please enter your email below.</p>
                </div>
                <InputEmail placeholder={"jsmith@email.com"} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
           
        </form>
    )
}
export function Step7({setBudget, budget}){
    const BUDGET_OPTIONS = ['100-300', '300-500', '500-700', '700+', 'I am not sure yet.']
    return(
        <div className="w-full h-screen bg-white items-center justify-evenly flex flex-col pt-20 pb-[150px]">
            
                <div className="flex flex-col items-center space-y-5">
                    <p className="text-gray-700 text-2xl font-extrabold">What is your monthly budget for financing?</p>
                    <div className="w-[250px] text-center">
                        <p className="text-gray-500 text-sm">This information will let us match you with the best possible interest rate for your vehicle of choosing.</p>
                    </div>
                </div>
                <Mosaic onClick={setBudget} data={BUDGET_OPTIONS} columns={5}/>
        
           
        </div>
    )
}
export function Step8({setDOB}){
    return(
        <div className="w-full h-screen bg-white items-center justify-evenly flex flex-col pt-20 pb-[150px]">
            
                <div className="flex flex-col items-center space-y-5">
                    <p className="text-gray-700 text-2xl font-extrabold">When is your date of birth?</p>
                    <div className="w-[250px] text-center">
                        <p className="text-gray-500 text-sm">This information is stored to accelerate your application processing.</p>
                    </div>
                </div>
                <DateInput placeholder={"MM/DD/YYYY"} onChange={(e)=>setDOB(e.target.value)}/>
        
        
        </div>
    )
}
export function Step9({setAddress}){
    const [localAddress, setLocalAddress] = useState({address: "", city: "", province: "BC", postalCode: ""})
    useEffect(()=>{
        setAddress(localAddress)
        console.log(localAddress)
    },[localAddress])
    return(
        <div className="w-full h-screen bg-white items-center justify-evenly flex flex-col pt-20 pb-[150px]">
                <div className="flex flex-col items-center space-y-5">
                    <p className="text-gray-700 font-extrabold text-2xl">What's your address?</p>
                    <div className="w-[250px] text-center">
                        <p className="text-gray-500 text-sm">This information is used to accelerate application processing times.</p>
                    </div>
                </div>
                <div className=" rounded flex flex-col w-full h-full p-20">
                    <div className=" rounded-lg">
                        <div className="w-full items-center justify-center flex ">
                            <h1 className="text-sm text-gray-500 font-bold">Please enter your address information below</h1>
                        </div>
                        <div className="w-full grid grid-cols-2 px-5 py-5 border-t-2">
                            <div className="flex w-full justify-left">
                                <AddressInput label={"Address"} placeholder={"1234 Main St"} onChange={(e)=>setLocalAddress({...localAddress, address: e.target.value})}/>
                            </div>
                            <div className="flex w-full justify-left">
                                <AddressInput label={"Postal Code"} width={'100'} placeholder={"X1X 1X1"} onChange={(e)=>setLocalAddress({...localAddress, postalCode: e.target.value})}/>
                            </div>
                            <div className="flex w-full justify-left">
                                <AddressInput label={"City"} width={'100'} placeholder={"Metropolis"} onChange={(e)=>setLocalAddress({...localAddress, city: e.target.value})}/>
                            </div>
                            <div className="flex items-center justify-left w-full space-x-2 pl-2">
                                <p className="text-xs text-gray-700 ">Province</p>
                                <select defaultValue={"BC"} name="Province" className="text-xs border rounded-lg h-[40px] border-gray-300" onChange={(e)=>setLocalAddress({...localAddress, province: e.target.value})}>
                                  <option value="AB">Alberta</option>
                                    <option value="BC">British Columbia</option>
                                    <option value="MB">Manitoba</option>
                                    <option value="NB">New Brunswick</option>
                                    <option value="NL">Newfoundland and Labrador</option>
                                    <option value="NS">Nova Scotia</option>
                                    <option value="ON">Ontario</option>
                                    <option value="PE">Prince Edward Island</option>
                                    <option value="QC">Quebec</option>
                                    <option value="SK">Saskatchewan</option>
                                    <option value="NT">Northwest Territories</option>
                                    <option value="NU">Nunavut</option>
                                    <option value="YT">Yukon</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export function Step10({setOwnHome}){
    return( 
        <div className="w-full h-screen bg-white items-center justify-center flex space-y-5 flex-col pt-20 pb-[150px]">
          
                <h1 className="text-gray-700 text-2xl font-extrabold">Do you own your home?</h1>
                <div className="flex space-x-5">
                    <Button text={"Yes"} onClick={()=>setOwnHome("mortgage")} color={"bg-black hover:bg-gray-900"}/>
                    <Button text={"No"} onClick={()=>setOwnHome("rent")} color={"bg-black hover:bg-gray-900"}/>
                </div>
           
        </div>
    )
}
export function Step11({setMonthlyPayment, ownHome}){
    const [warning, setWarning] = useState(false)
    return(
        <div className="w-full h-screen bg-white items-center justify-center flex space-y-5 flex-col pt-20 pb-[150px]">
            
                    <div className="flex flex-col h-1/2 justify-end items-center space-y-5 relative">
                        <h1 className="text-gray-700 text-2xl font-extrabold">How much is your {ownHome} each month?</h1>
                        <p className="text-gray-600 text-sm font-bold">Estimates are fine if you are not sure of the exact amount.</p>
                        <div className="flex space-x-5 items-center justify-center pl-[68px]">
                            <p className="text-sm text-gray-700">$</p>
                            <InputSmall placeholder={100} onChange={(e)=>{
                                if(/^[0-9]*$/.test(e.target.value) == false){
                                    setWarning(true)
                                    return 
                                }
                                setWarning(false)
                                setMonthlyPayment(e.target.value)
                                }}/>
                            
                            <p className="text-sm text-gray-700">per month</p>
                        </div>
                    {warning? <p className="text-red-500 text-sm absolute bottom-[-20px] w-full text-center">Please enter a valid number</p>: null}
                    </div>
                    <div className="flex h-1/2 items-end pb-20">
                        <p className="text-gray-500">This information is used to accelerate your application processing time.</p>
                    </div>
            
        </div>
    )
}
export function Step12({setTimeAtAddress}){
    const [warning, setWarning] = useState(false)
    const [localTimeAtAddress, setLocalTimeAtAddress] = useState({years: 0, months: 0})
    useEffect(()=>{
        if(localTimeAtAddress.years != 0 && localTimeAtAddress.months != 0){
            setTimeAtAddress(localTimeAtAddress)
        }
        else{
            setTimeAtAddress("")
        }
    },[localTimeAtAddress])
    return(
        <div className="w-full h-screen bg-white items-center justify-center flex space-y-5 flex-col pt-20 pb-[150px]">
            
        <div className="flex flex-col h-1/2 justify-end space-y-5 relative items-center">
            <h1 className="text-gray-700 text-2xl font-extrabold">How long have you been at your current address for?</h1>
            <p className="text-gray-600 text-sm font-bold">Estimates are fine if you are not sure.</p>
            <div>
                <div className="flex space-x-5 items-center justify-center">
                    <AddressInput label={"Years"} placeholder={"Ex. 5"} onChange={(e)=>{
                        if(/^[0-9]*$/.test(e.target.value) == false){
                            setLocalTimeAtAddress({...localTimeAtAddress, years: 0})
                            setWarning(true)
                            return e.preventDefault()
                        }
                        setWarning(false)
                        setLocalTimeAtAddress({...localTimeAtAddress, years: e.target.value})
                
                        }}/>
                     <AddressInput label={"Months"} placeholder={"Ex. 11"} onChange={(e)=>{
                        if(/^[0-9]*$/.test(e.target.value) == false){
                            setLocalTimeAtAddress({...localTimeAtAddress, months: 0})
                            setWarning(true)
                            return e.preventDefault()
                        }
                        setWarning(false)
                        setLocalTimeAtAddress({...localTimeAtAddress, months: e.target.value})
                        
                
                        }}/>
                </div>

            </div>
        {warning? <p className="text-red-500 text-sm absolute bottom-[-20px] w-full text-center">Please enter a valid number</p>: null}
        </div>
        <div className="flex h-1/2 items-end pb-20">
            <p className="text-gray-500">This information is used to accelerate your application processing time.</p>
        </div>

</div>
    )
}