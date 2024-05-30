"use client"
import Image from "next/image"
import { FaMotorcycle } from "react-icons/fa"
import { GiScooter } from "react-icons/gi"
import { IoBoat } from "react-icons/io5"
import { useState } from "react"
import {motion, AnimatePresence} from 'framer-motion'
import { Button } from '@/components/UIComponents'
import ContactForm from '@/components/contactForm'

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

const fields = [
    {name: "How old are you?", subHeading: "Select an option", options: ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65 or older"]},
   {name: "When would you like to start?", subHeading: "Select a date to start riding", options: ["Today", "Tomorrow", "This weekend", "Next week", "Next month"]},
   {name: "What is your employment status?", subHeading: "Select from below", options: ["Employed", "Unemployed", "Student", "Retired", "Other"]},
   {name: "How long have you been employed?", subHeading: "Select an option", options: ["Less than 6 months", "6 months - 1 year", "1-2 years", "2-3 years", "3-4 years", "4-5 years", "5 years or more"]},
   {name: "Are you self-employed?", subHeading: "Select an option", options: ["Yes", "No"]},
   {name: "What is your annual income?", subHeading: "Select an option", options: ["Under $20,000", "$20,000-$40,000", "$40,000-$60,000", "$60,000-$80,000", "$80,000-$100,000", "Over $100,000"]},
  
]

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
export function Step3({ contact, setContact }) {
    const [fs, setFs] = useState(0)
    return (
        <div className='w-full h-screen bg-gray-100'>
          { fs<=5? <div className='flex flex-col items-center justify-center h-full'>
                <div key={i} className='w-2/3 h-1/2 flex flex-col items-center justify-center'>
                  <div className="flex flex-col justify-center items-center ">
                        <label className='text-2xl font-semibold'>{fields[fs].name}</label>
                        <label className='text-md text-gray-400 font-semibold mb-[100px]'>{fields[fs].subHeading}</label>
                    </div>
                     <div className="w-full h-full space-y-5 flex flex-col items-center">
                
                    { fields[fs].options.map((x)=>{
                        console.log(fs)
                        return(
                        <motion.button whileHover={{scale:1.02}} whileTap={{scale:0.95}} className="w-2/3 h-[100px] focus:bg-lime-500 focus:border-[5px] bg-black text-white font-extrabold text-xl rounded-xl" onClick={()=>setContact({...contact, [fields[fs].name]: x})} >{x}</motion.button>)
                    }) }
                     </div>

                           
                    </div>
                    <div className="w-full h-1/3 items-center flex justify-center ">
                        <Button color="bg-black" text={"Next"} onClick={()=>setFs(fs+1)} />
                    </div>
             
            </div> : <ContactForm applicationInfo={contact}/>}
            
        </div>
    );
}