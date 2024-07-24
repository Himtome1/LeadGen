"use client"
import {Button, Input, InputSmall} from '@/components/UIComponents'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { SendPartialEmail2 } from '@/lib/serverComponents'
import { useState, useEffect } from 'react'
import Image from 'next/image'




export default function Page(){
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [disabled, setDisabled] = useState(true)
  function handleApplyNow(email:string, firstName:string, lastName:string){
    SendPartialEmail2({email:email, firstName:firstName, lastName:lastName})
    router.push("/apply")
  }
  useEffect(()=>{
    if(email.length > 0 && firstName.length > 0 && lastName.length > 0){
      setDisabled(false)
    }
    else{
      setDisabled(true)
    }
  },[email, firstName, lastName])
  
  return (
    <AnimatePresence>
    <motion.div className='text-black'>
      <motion.div className="w-screen h-screen bg-white flex flex-col">
        <motion.div style = {{height:"90px"}}className = "w-full  bg-white flex">
          <motion.div className="w-full h-full bg-white px-10 space-x-10 flex">
            <motion.div className='flex h-full text-start items-center'>
                <p className='text-lg font-bold'>Powersport</p>
                <pre> </pre>
                <p className='text-lg text-lime-500 font-bold'>Financing</p>
            </motion.div>
          
          </motion.div>
          <motion.div className="w-1/3 h-full bg-white flex items-center  justify-center">
            <Button disabled={false} color={"bg-black hover:bg-lime-500 rounded"} onClick={()=>router.push("/apply")} text={"APPLY NOW"}></Button>
          </motion.div>
        </motion.div>
        <motion.div className='h-4/5 bg-[url("/Dirtbike.jpeg")] bg-center xl:bg-start bg-cover flex items-end'>
        <motion.div className='w-2/3 h-full flex items-center justify-center mr-20'>
              
              </motion.div>
          <motion.div initial={{y:"10vh", opacity: 0}} whileInView={{y:0, opacity:1}} transition={{duration:1}} className='w-1/3 flex flex-col p-20 h-1/2 mb-60 ml-20  space-y-5 items-end '>
            <p className='w-full text-5xl font-bold font-arial'>
              Powersport Financing
            </p>
            <p className='w-full text-5xl font-bold font-arial'>
              Simplified
            </p>
            <p className='text-lg font-fine'>
              Get approved from your phone for powersports loans & powersports financing today!
            </p>
            <motion.div className='text-sm pt-5 items-center justify-center flex w-full'></motion.div>
          </motion.div>
        
        
        </motion.div>
      </motion.div>
      <motion.div className="w-screen h-screen bg-white flex flex-col">

        <motion.div className='w-full  h-full flex flex-col items-center justify-center'>

          <motion.div className='flex flex-col w-2/3 h-full'>
            <motion.div className='text-5xl font-bold text-center text-gray-700 h-1/5'>
                <p>How it works.</p>
            </motion.div>
            <motion.div className=' w-full h-2/3 items-center flex justify-center space-x-10 py-20'>
              <motion.div whileHover={{y:"1vh", transition:{duration:0.8}}} className='bg-gray-100 relative rounded-xl  w-1/3 h-full flex justify-center shadow-xl'>
                <motion.div className='rounded-full absolute y--20 flex top-[-66px] items-center justify-center  bg-lime-500' style={{width:"125px", height:"125px"}} >
                    <p className='text-white text-7xl font-bold '>1</p>
                </motion.div>
                <div className='text-black mt-[75px] flex flex-col space-y-5 px-5'>
                  <h2 className='text-black text-xl font-bold text-center'>
                  Apply Online
                  </h2>
                  <p>
                  Start by filling out our quick and secure online application. It takes just a few minutes to provide the essential information needed to begin your financing process. Your details are kept confidential and secure, ensuring a hassle-free start to your journey.
                  </p>
                </div>
              </motion.div>
              <motion.div whileHover={{y:"1vh", transition:{duration:0.8}}}className='bg-gray-100 relative rounded-xl  w-1/3 h-full flex justify-center shadow-xl'>
                <motion.div className='rounded-full absolute y--20 flex top-[-66px] items-center justify-center  bg-lime-500' style={{width:"125px", height:"125px"}} >
                    <p className='text-white text-7xl font-bold '>2</p>
                </motion.div>
                <div className='text-black mt-[75px] flex flex-col space-y-5 px-5'>
                  <h2 className='text-black text-xl font-bold text-center'>
                  Get Approved
                  </h2>
                  <p>
                  After submitting your application, our finance specialists will review it and find the best financing options for you. We partner with trusted lenders to offer competitive rates and terms. You'll receive a pre-approval decision within 24 hours, making the process fast and stress-free.
                  </p>
                </div>
              </motion.div>
              <motion.div whileHover={{y:"1vh", transition:{duration:0.8}}}className='bg-gray-100 relative rounded-xl  w-1/3 h-full flex justify-center shadow-xl'>
                <motion.div className='rounded-full absolute y--20 flex top-[-66px] items-center justify-center  bg-lime-500' style={{width:"125px", height:"125px"}} >
                    <p className='text-white text-7xl font-bold '>3</p>
                </motion.div>
                <div className='text-black mt-[75px] flex flex-col space-y-5 px-5'>
                  <h2 className='text-black text-xl font-bold text-center'>
                  Drive Away
                  </h2>
                  <p>
                  Once approved, finalize the paperwork and choose your ideal powersport vehicle. Our team will guide you through the final steps, ensuring you understand your financing agreement.
Soon, you'll be ready to enjoy your new ride with confidence. Happy adventuring!

                  </p>
                </div>
              </motion.div>
             
              </motion.div>

          </motion.div>

        </motion.div>
      
        </motion.div>
        <motion.div className="w-screen h-screen bg-gray-100  flex justify-end">
          <motion.div className='w-1/2 h-full flex items-center justify-center'>
            <motion.div initial={{x:"-5vw"}} whileInView={{x:0}} className='flex flex-col p-20'>
              <p className='text-5xl font-bold text-gray-900 text-center mb-10'>About Powersport Financing</p>
              <p className='  text-gray-700 text-center'>At Powersport Financing, we specialize in making your powersport dreams a reality. Whether you need financing for ATVs, RVs, Boats, or Motorcycles, we offer flexible loan options for all credit types. Our team works with trusted lenders to secure competitive rates and personalized terms, ensuring a seamless experience.

From application to approval, our dedicated loan specialists guide you every step of the way. With our expertise and commitment to exceptional customer service, you can trust us to help you get on the road or trail with confidence.

Join Powersport Financing and enjoy a stress-free path to owning your ideal powersport vehicle. We're here to make the process easy and exciting, so you can focus on the thrill of your next adventure.
</p>
            </motion.div>


          </motion.div>
          <motion.div className='w-1/2 h-full flex items-center justify-center'>
            <Image alt="" src="/payment.svg" width={1200} height={1200}></Image>
          </motion.div>
       
      
      </motion.div>
      <motion.div className='w-screen h-screen flex flex-col'>
        <motion.div className="w-screen h-1/5 overflow-scroll bg-gradient-to-b from-gray-100 to-white flex flex-col">
        
        </motion.div>
        <motion.div className='w-full h-screen text-black bg-white flex items-center justify-center'>
          <motion.div initial={{scale:0.75}} whileInView={{scale:1}}className='flex flex-col p-20 bg-lime-500 w-[600px] h-[600px] mb-20 rounded-xl drop-shadow-xl items-center justify-center'>
            <motion.div className='w-full flex h-full flex-col items-center  justify-between'>
             <motion.div></motion.div>
             <motion.div  className='text-5xl items-center justify-center font-bold text-center w-full flex'>
              <p>Get Approved Today!</p>
             </motion.div>
              <motion.div className='flex w-[350px] justify-between'>
                <InputSmall pattern={null} onChange={(e:any)=>{setFirstName(e.target.value)}} value={null} placeholder={"First Name"}></InputSmall>
                <InputSmall pattern={null} onChange={(e:any)=>{setLastName(e.target.value)}} value={null} placeholder={"Last Name"}></InputSmall>
              </motion.div>
              <Input placeholder={"Email"} onChange={(e:any)=>{setEmail(e.target.value)}} value={null}></Input>
              <Button disabled={disabled} color={"bg-black hover:bg-gray-900 hover:text-lime-500 rounded"} onClick={()=>handleApplyNow(email,firstName,lastName)} text={"APPLY NOW"}></Button>
              </motion.div>

          </motion.div>
        
        </motion.div>
      </motion.div>
     
    </motion.div>
    </AnimatePresence>
  )
}