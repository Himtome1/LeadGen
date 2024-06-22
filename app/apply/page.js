"use client"
import {motion, AnimatePresence} from 'framer-motion'
import {Step1, Step2, Step3, Step4, Step5} from '@/components/onboarding.js'
import { Button } from '@/components/UIComponents'
import {useState, useEffect, use} from 'react'
import Image from 'next/image'
import { SendMessage } from '@/lib/serverComponents'
import { Send } from 'lucide'

export default function Page(){

    const [counter, setCounter] = useState(1)
    const [vehicleType, setVehicleType] = useState("")
    const [contact, setContact] = useState("")
    const [disabledArray, setDisabledArray] = useState([false, true, true, true, true, true, true, true, true, true])
    const [number, setNumber] = useState("")
    const [generatedOTP,setGeneratedOTP] = useState(Math.floor(1000 + Math.random() * 8999))
    const [receivedOTP, setReceivedOTP] = useState(0)

    useEffect(()=>{
        if (vehicleType != ""){
            setDisabledArray([false, false, true])
        }
    },[vehicleType])

    useEffect(()=>{if(receivedOTP==generatedOTP){
        console.log("OTP Matched")
        setCounter(counter+1)
    }},[receivedOTP])

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
                return <Step3 onComplete={setDisabledArray} setNumber={setNumber} onEnter={onClickHandler} variable1={disabledArray}/>
            case 4:
                return <Step4 generatedOTP={generatedOTP} onComplete={setDisabledArray} setReceivedOTP={setReceivedOTP} number={number}  variable1={disabledArray}/>
            case 5:
                return <Step5/>
        }
    }

    const onClickHandler = () => {
        switch(counter){
            case 3: SendMessage(number, `Thank you for your interest in financing. Your generated OTP is: ${generatedOTP}`)
        }

        setCounter(counter+1)
    }
    
    return(
        <div className='w-screen h-screen bg-gray-100 flex'>
            <div className='w-2/3 h-full z-50'>  
                <div className='w-full h-4/5'>
                    {display()}
                </div>
                <div className={`w-full ${counter==4?"invisible":"visible"} h-1/5 flex items-center justify-center`}>
                  <Button disabled={disabledArray[counter-1]} text={'Next'} onClick={()=>{onClickHandler()}} color={"bg-black hover:bg-gray-800"}/>
                </div>
            </div>
            <div className='w-1/3 h-full bg-green-400 relative'>
                <motion.div className='w-screen bg-blue-500 flex h-full z-0 fixed left-20' initial={{x:0}} animate={{x:`${counter*100 -100}px`}} transition={{duration:0.25,}}>
                    <Image style={{objectFit: "cover"}} fill={true} src='/Dirtbike.jpeg'/>
                </motion.div>
            </div>
        </div>
    )
}