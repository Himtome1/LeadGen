"use client"
import {Button} from '@/components/UIComponents'
import Image from 'next/image'

export default function(){
  
  return (
    <div>
      <div className="w-screen h-screen bg-white flex flex-col">
        <div style = {{height:"90px"}}className = "w-full  bg-white flex">
          <div className="w-2/3 h-full bg-white px-56 space-x-10 flex">
            <div className='flex h-full text-center items-center'>
                <p className='text-lg font-bold'>Powersport</p>
                {` `}
                <p className='text-lg text-lime-500 font-bold'>Financing</p>
            </div>
            <div className='flex h-full text-center items-center'>
                <p className='text-md text-black font-bold'>FINANCING</p>
            </div>
            <div className='flex h-full text-center items-center'>
                <p className='text-md text-black font-bold'>RESOURCES</p>
            </div>
          </div>
          <div className="w-1/3 h-full bg-white flex items-center  justify-center bg-yellow-400">
            <Button color={"bg-lime-500 hover:bg-lime-500"} onClick={null} text={"APPLY NOW"}></Button>
          </div>
        </div>
        <div className='h-4/5 bg-gray-100 flex'>
          <div className='w-2/3 flex flex-col p-20 h-full ml-20  space-y-5'>
            <p className='w-full text-5xl font-bold font-arial'>
              Powersport Financing
            </p>
            <p className='w-full text-5xl font-bold font-arial'>
              Simplified
            </p>
            <p className='text-lg font-fine'>
              Get approved from your phone for powersports loans & powersports financing today!
            </p>
            <div className='text-sm pt-5'><Button color={"bg-lime-500 hover:bg-lime-500"} onClick={null} text={"GET APPROVED"}></Button></div>
          </div>
          <div className='w-1/3 h-full flex items-center justify-center mr-20'>
              <div className='rounded-full bg-yellow-400 overflow-scroll flex w-[400px] h-[400px]'>
                <Image alt='' src="/bike.webp" width={1200} height={1200}></Image>
              </div>
          </div>
        
        </div>
      </div>
      <div className="w-screen h-screen bg-white flex flex-col">

        <div className='w-full  h-full flex flex-col items-center justify-center'>

          <div className='flex flex-col w-2/3 h-full'>
            <div className='text-5xl font-bold text-center text-gray-700 h-1/5'>
                <p>How it works.</p>
            </div>
            <div className=' w-full h-2/3 items-center flex justify-center space-x-10 py-20'>
              <div className='bg-gray-100 relative rounded-xl  w-1/3 h-full flex justify-center shadow-xl'>
                <div className='rounded-full absolute y--20 flex top-[-66px] items-center justify-center  bg-lime-500' style={{width:"125px", height:"125px"}} >
                    <p className='text-white text-7xl font-bold '>1</p>
                </div>
              </div>
              <div className='bg-gray-100 relative rounded-xl  w-1/3 h-full flex justify-center shadow-xl'>
                <div className='rounded-full absolute y--20 flex top-[-66px] items-center justify-center  bg-lime-500' style={{width:"125px", height:"125px"}} >
                    <p className='text-white text-7xl font-bold '>2</p>
                </div>
              </div>
              <div className='bg-gray-100 relative rounded-xl  w-1/3 h-full flex justify-center shadow-xl'>
                <div className='rounded-full absolute y--20 flex top-[-66px] items-center justify-center  bg-lime-500' style={{width:"125px", height:"125px"}} >
                    <p className='text-white text-7xl font-bold '>3</p>
                </div>
              </div>
             
              </div>

          </div>

        </div>
      
        </div>
        <div className="w-screen h-screen bg-gray-100  flex justify-end">
          <div className='w-1/2 h-full flex items-center justify-center'>
            <div className='flex flex-col p-20'>
              <p className='text-5xl font-bold text-gray-900 text-center mb-10'>About Powersport Financing</p>
              <p className='  text-gray-700 text-center'>We are a reputable loan and financing company that specializes in providing good and bad credit powersport loans for purchasing powersport vehicles such as ATVs, RVs, UTVs, Boats, Motorcycles, Sea-Doos, Snowmobiles and Travel Trailers. We offer flexible loan options, competitive interest rates, and personalized assistance to help customers secure the funds they need. With a network of trusted lenders, we ensures access to favorable loan terms. 

Our dedicated team of loan specialists guides applicants through the process, from application to approval, providing ongoing support and exceptional customer service. We are committed to making powersport vehicle ownership accessible and enjoyable for customers through our expertise in powersports.?</p>
            </div>


          </div>
          <div className='w-1/2 h-full flex items-center justify-center'>
            <Image src="/payment.svg" width={1200} height={1200}></Image>
          </div>
       
      
      </div>
      <div className="w-screen h-screen bg-blue-500 flex flex-col">
      
      </div>
      <div className="w-screen h-screen bg-blue-500 flex flex-col">
     
      
        </div>
    </div>
  )
}