"use client"
import Image from "next/image"
import { FaMotorcycle } from "react-icons/fa"
import { GiScooter } from "react-icons/gi"
import { IoBoat } from "react-icons/io5"
import { useState } from "react"
import {motion, AnimatePresence} from 'framer-motion'
import { Button } from '@/components/UIComponents'
import ContactForm from '@/components/contactForm'
import { Input, InputSmall, PhoneInput } from '@/components/UIComponents'

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
                <h1 className='text-3xl font-bold'>Ready to start riding?</h1>
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
var i = 0
export function Step3({onComplete, variable1}) {

   return(
    <form className="w-full h-screen bg-white items-center justify-center space-y-5 flex flex-col">
    <div>
        <h1 className="text-3xl font-bold pb-10 text-gray-700">What is your phone number?</h1>
    </div>
  
        <PhoneInput onComplete={onComplete} variable1={variable1}/>
       
</form>
   )
}

export function Step4({onComplete, variable1}) {
    
}