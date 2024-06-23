"use client"
import {motion, AnimatePresence} from 'framer-motion'
import {Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9, Step10, Step11, Step12, Step13, Step14, Step15, Step16, Step17} from '@/components/onboarding.js'
import { Button } from '@/components/UIComponents'
import {useState, useEffect, use} from 'react'
import Image from 'next/image'
import { SendMessage, SaveLead, SendEmail } from '@/lib/serverComponents'
import { ProgressBar } from '@/components/UIComponents'
import { useRouter } from 'next/navigation'

export default function Page(){
    const router = useRouter()
    const [counter, setCounter] = useState(1)
    const [vehicleType, setVehicleType] = useState("")
    const [disabledArray, setDisabledArray] = useState([false, true, true, true, true, true, true, true, true, true, true, true, true, true, true])
    const [number, setNumber] = useState("")
    const [generatedOTP,setGeneratedOTP] = useState(Math.floor(1000 + Math.random() * 8999))
    const [receivedOTP, setReceivedOTP] = useState(0)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [budget, setBudget] = useState("")
    const [DOB, setDOB] = useState("")
    const [address, setAddress] = useState({"address": "", "city": "", "postalCode": "", "province": ""})
    const [ownHome, setOwnHome] = useState("na")
    const [timeAtAddress, setTimeAtAddress] = useState("")
    const [monthlyPayment, setMonthlyPayment] = useState("")
    const [employmentStatus, setEmploymentStatus] = useState("")
    const [employmentDetails, setEmploymentDetails] = useState({"employer": "", "position": "", "duration": ""})
    const [monthlyIncome, setMonthlyIncome] = useState("")

    useEffect(()=>{
        if (vehicleType != ""){
            const newArray = [...disabledArray]
            newArray[1] = false
            setDisabledArray(newArray)
        }
    },[vehicleType])

    useEffect(()=>{if(receivedOTP==generatedOTP){
        console.log("OTP Matched")
        setCounter(counter+1)
    }},[receivedOTP])

    useEffect(()=>{
        if (firstName != "" && lastName != ""){
            const newArray = [...disabledArray]
            newArray[4] = false
            setDisabledArray(newArray)
        }
        else if (firstName == "" || lastName == ""){
            const newArray = [...disabledArray]
            newArray[4] = true
            setDisabledArray(newArray)
        }
    },[firstName, lastName])

    useEffect(()=>{
        if (email != ""){
            const newArray = [...disabledArray]
            newArray[5] = false
            setDisabledArray(newArray)
        }
        else if (email == ""){
            const newArray = [...disabledArray]
            newArray[5] = true
            setDisabledArray(newArray)
        }
        if(budget != ""){
            const newArray = [...disabledArray]
            newArray[6] = false
            setDisabledArray(newArray)
        }
        if(DOB != ""){
            const newArray = [...disabledArray]
            newArray[7] = false
            setDisabledArray(newArray)
        }

        
    
    },[email, budget, DOB])

    useEffect(()=>{
        if (address.address != "" && address.city != "" && address.postalCode != "" && address.province != ""){
            const newArray = [...disabledArray]
            newArray[8] = false
            setDisabledArray(newArray)
        }
        else if (address.address == "" || address.city == "" || address.postalCode == "" || address.province){
            const newArray = [...disabledArray]
            newArray[8] = true
            setDisabledArray(newArray)
        }
    },[address])
    
    useEffect(()=>{
        if (ownHome != "na"){
            const newArray = [...disabledArray]
            newArray[9] = false
            setCounter(counter+1)
        }
    },[ownHome])
    useEffect(()=>{
        if (monthlyPayment != ""){
            const newArray = [...disabledArray]
            newArray[10] = false
            setDisabledArray(newArray)
        }
        if (monthlyPayment == ""){
            const newArray = [...disabledArray]
            newArray[10] = true
            setDisabledArray(newArray)
        }
    },[monthlyPayment])

    useEffect(()=>{
        if(timeAtAddress != ""){
            const newArray = [...disabledArray]
            newArray[11] = false
            setDisabledArray(newArray)
        }
        if(timeAtAddress == ""){
            const newArray = [...disabledArray]
            newArray[11] = true
            setDisabledArray(newArray)
        }
    },[timeAtAddress])

    useEffect(()=>{
        if(employmentStatus != ""){
            const newArray = [...disabledArray]
            newArray[12] = false
            setDisabledArray(newArray)
        }
        if(employmentStatus == ""){
            const newArray = [...disabledArray]
            newArray[12] = true
            setDisabledArray(newArray)
        }
    },[employmentStatus])

    useEffect(()=>{
        console.log(employmentDetails)
        if(
            employmentDetails.employer != "" &&
            employmentDetails.position != "" &&
            employmentDetails.duration != ""
        ){
            const newArray = [...disabledArray]
            newArray[13] = false
            setDisabledArray(newArray)
        }
        if(
            employmentDetails.employer == "" ||
            employmentDetails.position == "" ||
            employmentDetails.duration == ""
        ){
            const newArray = [...disabledArray]
            newArray[13] = true
            setDisabledArray(newArray)
        }
    }
    ,[employmentDetails])

    useEffect(()=>{
        if(monthlyIncome != ""){
            const newArray = [...disabledArray]
            newArray[14] = false
            setDisabledArray(newArray)
        }
        if(monthlyIncome == ""){
            const newArray = [...disabledArray]
            newArray[14] = true
            setDisabledArray(newArray)
        }
    }
    ,[monthlyIncome])
   
    
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
                return <Step5 setFirstName={setFirstName} setLastName={setLastName}/>
            case 6:
                return <Step6 firstName={firstName} setEmail={setEmail}/>
            case 7:
                return <Step7 setBudget={setBudget}/>
            case 8:
                return <Step8 setDOB={setDOB}/>
            case 9:
                return <Step9 setAddress={setAddress}/>
            case 10:
                return <Step10 setOwnHome={setOwnHome} />
            case 11:
                return <Step11 setMonthlyPayment={setMonthlyPayment} ownHome={ownHome}/>
            case 12:
                return <Step12 setTimeAtAddress={setTimeAtAddress}/>
            case 13:
                return <Step13 setEmploymentStatus={setEmploymentStatus}/>
            case 14:
                return <Step14 setEmployemntDetails={setEmploymentDetails} employmentDetails={employmentDetails}/>
            case 15:
                return <Step15 setMonthlyIncome={setMonthlyIncome}/>
            case 16:
                return <Step16 vehicleType={vehicleType} phoneNumber={number} firstName={firstName} lastName={lastName} budget={budget} DOB = {DOB} address={address} ownHome={ownHome} monthlyPayment={monthlyPayment} timeAtAddress={timeAtAddress} employmentStatus={employmentStatus} employmentDetails={employmentDetails} monthlyIncome={monthlyIncome}/>
            case 17:
                return <Step17/>
        }
    }

    const handleFinalSubmit = async() => {
        console.log(address)
        await SendMessage("17787008157", "Hello! A new application has been submitted. Please check your email or the database for more information.")
        await SendMessage(number, "Congratulations! Your application has been submitted successfully. A representative will be in touch with you shortly to discuss the next steps.")
        /*await SaveLead({
            vehicleType: vehicleType,
            phoneNumber: number,
            firstName: firstName,
            lastName: lastName,
            email: email,
            budget: budget,
            DOB: DOB,
            address: address,
            ownHome: ownHome=="rent" ? false : true,
            monthlyPayment: monthlyPayment,
            timeAtAddress: JSON.stringify(timeAtAddress),
            employmentStatus: employmentStatus,
            employmentDetails: employmentDetails,
            monthlyIncome: monthlyIncome
        })*/
        const res = await SendEmail({
            vehicleType: vehicleType,
            phoneNumber: number,
            firstName: firstName,
            lastName: lastName,
            email: email,
            budget: budget,
            DOB: DOB,
            address: address,
            ownHome: ownHome=="rent" ? false : true,
            monthlyPayment: monthlyPayment,
            timeAtAddress: JSON.stringify(timeAtAddress),
            employmentStatus: employmentStatus,
            employmentDetails: employmentDetails,
            monthlyIncome: monthlyIncome
        })
        setCounter(17)
    }

    const onClickHandler = () => {
        switch(counter){
            case 3: SendMessage(number, `Thank you for your interest in financing. Your generated OTP is: ${generatedOTP}`)
            break
            case 16: handleFinalSubmit()
            break
        }
        if(counter==13 && employmentStatus != "Employed"){
            setCounter(counter+2)
        }
        else if(counter != 16 || counter != 17){
            setCounter(counter+1)
        }
    }
    
    
    return(
        <div className='w-screen h-screen bg-gray-100 flex relative'>
            <div className='w-2/3 h-full z-30'>
         
                <ProgressBar currentStep={counter} totalSteps={17}/>
    
                <div className='w-full h-4/5'>
                    {display()}
                </div>
                <div className={`w-full  h-1/5 flex items-center justify-center space-x-5`}>
                  <div className={`${(counter<=2 || counter==17) ? "invisible":"visible"}`}>
                    <Button text={'Back'} onClick={()=>{setCounter(counter-1)}} disabled={false} color={"bg-black hover:bg-gray-800"}/>
                  </div>
                  <div className={`${(counter==4 || counter==10 || counter==17) ? "invisible":"visible"}`}>
                    <Button disabled={disabledArray[counter-1]} text={counter==16?'Confirm':counter==15?'Submit':'Next'} onClick={()=>{onClickHandler()}} color={"bg-black hover:bg-gray-800"}/>
                  </div>
                </div>
            </div>
            <div className='w-1/3 h-full bg-green-400 relative'>
                <motion.div className='w-screen bg-blue-500 flex h-full z-0 fixed left-20' initial={{x:400}}  transition={{duration:0.25,}}>
                    <Image style={{objectFit: "cover"}} fill={true} src='/Dirtbike.jpeg'/>
                </motion.div>
            </div>
        </div>
    )
}