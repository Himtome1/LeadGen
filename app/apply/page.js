"use client"
import {motion, AnimatePresence} from 'framer-motion'
import {Step1, Step2, Step3} from '@/components/onboarding.js'
import { Button } from '@/components/UIComponents'
import {useState, useEffect, use} from 'react'
import Image from 'next/image'

export default function Page(){

    const [counter, setCounter] = useState(1)
    const [vehicleType, setVehicleType] = useState("")
    const [contact, setContact] = useState("")

    useEffect(()=>{
        console.log(vehicleType)
    },[vehicleType])

    useEffect(()=>{
        console.log(contact)
    },[contact])


    const display = () => {
        switch(counter){
            case 1:
                return <Step1/>
            case 2:
                return <Step2 selectedVehicleType={vehicleType} setVehicleType={setVehicleType}/>
            case 3:
                return <Step3 setContact={setContact} contact={contact}/>
            default:
                return <h1>Step 1</h1>
        }
    }
    
    return(
        <div className='w-screen h-screen bg-gray-100 flex'>
            <div className='w-2/3 h-full z-50'>  
                <div className='w-full h-4/5'>
                    {display()}
                </div>
                <div className='w-full h-1/5 flex items-center justify-center'>
                    {counter!==3?<Button disabled={vehicleType==""&&counter==2?true:false} text={'Next'} onClick={()=>{counter==3?setCounter(1):setCounter(counter+1)}} color={"bg-black hover:bg-gray-800"}/>:null}
                </div>
            </div>
            <div className='w-1/3 h-full bg-green-400 relative'>
                <motion.div className='w-screen bg-blue-500 flex h-full z-0 fixed left-20' initial={{x:0}} animate={{x:`${counter*300 -300}px`}} transition={{duration:0.25,}}>
                    <Image style={{objectFit: "cover"}} fill={true} src='/Dirtbike.jpeg'/>
                </motion.div>
            </div>
        </div>
    )
}