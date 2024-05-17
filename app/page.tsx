"use client"
import {Button, Input, InputSmall} from '@/components/UIComponents'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'


export default function Page(){
  
  return (
    <AnimatePresence>
    <motion.div>
      <motion.div className="w-screen h-screen bg-white flex flex-col">
        <motion.div style = {{height:"90px"}}className = "w-full  bg-white flex">
          <motion.div className="w-2/3 h-full bg-white px-56 space-x-10 flex">
            <motion.div className='flex h-full text-center items-center'>
                <p className='text-lg font-bold'>Powersport</p>
                <pre> </pre>
                <p className='text-lg text-lime-500 font-bold'>Financing</p>
            </motion.div>
            <motion.div className='flex h-full text-center items-center'>
                <p className='text-md text-black font-bold'>FINANCING</p>
            </motion.div>
            <motion.div className='flex h-full text-center items-center'>
                <p className='text-md text-black font-bold'>RESOURCES</p>
            </motion.div>
          </motion.div>
          <motion.div className="w-1/3 h-full bg-white flex items-center  justify-center">
            <Button color={"bg-black hover:bg-lime-500 rounded"} onClick={null} text={"APPLY NOW"}></Button>
          </motion.div>
        </motion.div>
        <motion.div className='h-4/5 bg-[url("/Dirtbike.jpeg")] bg-center xl:bg-start bg-cover flex items-end'>
        <motion.div className='w-2/3 h-full flex items-center justify-center mr-20'>
              
              </motion.div>
          <motion.div initial={{y:"10vh", opacity: 0}} whileInView={{y:0, opacity:1}} transition={{duration:1}} className='w-1/3 flex flex-col p-20 h-1/2 mb-60 ml-20  space-y-5 items-end '>
            <p className='w-full text-5xl tefont-bold font-arial'>
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
              </motion.div>
              <motion.div whileHover={{y:"1vh", transition:{duration:0.8}}}className='bg-gray-100 relative rounded-xl  w-1/3 h-full flex justify-center shadow-xl'>
                <motion.div className='rounded-full absolute y--20 flex top-[-66px] items-center justify-center  bg-lime-500' style={{width:"125px", height:"125px"}} >
                    <p className='text-white text-7xl font-bold '>2</p>
                </motion.div>
              </motion.div>
              <motion.div whileHover={{y:"1vh", transition:{duration:0.8}}}className='bg-gray-100 relative rounded-xl  w-1/3 h-full flex justify-center shadow-xl'>
                <motion.div className='rounded-full absolute y--20 flex top-[-66px] items-center justify-center  bg-lime-500' style={{width:"125px", height:"125px"}} >
                    <p className='text-white text-7xl font-bold '>3</p>
                </motion.div>
              </motion.div>
             
              </motion.div>

          </motion.div>

        </motion.div>
      
        </motion.div>
        <motion.div className="w-screen h-screen bg-gray-100  flex justify-end">
          <motion.div className='w-1/2 h-full flex items-center justify-center'>
            <motion.div initial={{x:"-5vw"}} whileInView={{x:0}} className='flex flex-col p-20'>
              <p className='text-5xl font-bold text-gray-900 text-center mb-10'>About Powersport Financing</p>
              <p className='  text-gray-700 text-center'>We are a reputable loan and financing company that specializes in providing good and bad credit powersport loans for purchasing powersport vehicles such as ATVs, RVs, UTVs, Boats, Motorcycles, Sea-Doos, Snowmobiles and Travel Trailers. We offer flexible loan options, competitive interest rates, and personalized assistance to help customers secure the funds they need. With a network of trusted lenders, we ensures access to favorable loan terms. 

Our dedicated team of loan specialists guides applicants through the process, from application to approval, providing ongoing support and exceptional customer service. We are committed to making powersport vehicle ownership accessible and enjoyable for customers through our expertise in powersports.?</p>
            </motion.div>


          </motion.div>
          <motion.div className='w-1/2 h-full flex items-center justify-center'>
            <Image alt="" src="/payment.svg" width={1200} height={1200}></Image>
          </motion.div>
       
      
      </motion.div>
      <motion.div className='w-screen h-screen flex flex-col'>
        <motion.div className="w-screen h-1/5 overflow-scroll bg-gradient-to-b from-gray-100 to-white flex flex-col">
        
        </motion.div>
        <motion.div className='w-full h-screen bg-white flex items-center justify-center'>
          <motion.div initial={{scale:0.75}} whileInView={{scale:1}}className='flex flex-col p-20 bg-lime-500 w-[600px] h-[600px] mb-20 rounded-xl drop-shadow-xl items-center justify-center'>
            <motion.div className='w-full flex h-full flex-col items-center  justify-between'>
             <motion.div></motion.div>
             <motion.div  className='text-5xl items-center justify-center font-bold text-center w-full flex'>
              <p>Get Approved Today!</p>
             </motion.div>
              <motion.div className='flex w-[350px] justify-between'>
                <InputSmall onChange={()=>{}} value={null} placeholder={"First Name"}></InputSmall>
                <InputSmall onChange={()=>{}} value={null} placeholder={"Last Name"}></InputSmall>
              </motion.div>
              <Input placeholder={"Email"} onChange={()=>{}} value={null}></Input>
              <Button color={"bg-black hover:bg-gray-900 hover:text-lime-500 rounded"} onClick={null} text={"APPLY NOW"}></Button>
              </motion.div>

          </motion.div>
        
        </motion.div>
      </motion.div>
     
    </motion.div>
    </AnimatePresence>
  )
}