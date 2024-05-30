import { Input, InputSmall, Button } from "./UIComponents"
import { useState, useEffect } from "react"

export default function ContactForm(applicationInfo) {

    

    const [contact, setContact] = useState(applicationInfo)
    useEffect(()=>{console.log(contact)},[contact])

    return(
        <form className="w-full h-full bg-white items-center justify-center space-y-5 flex flex-col">
            <div>
                <h1 className="text-3xl font-bold pb-10 text-gray-700">How can we reach you?</h1>
            </div>
          
                <div className="flex space-x-5">
                    <InputSmall placeholder="First Name" onChange={(e)=>{setContact({...contact,"firstName":e.target.value})}}/>
                    <InputSmall placeholder="Last Name" onChange={(e)=>{setContact({...contact,"lastName":e.target.value})}}/>
                </div>
                <Input placeholder="Email" onChange={(e)=>{setContact({...contact,"email":e.target.value})}}/>
                <Input placeholder="Phone Number" onChange={(e)=>{setContact({...contact,"phone":e.target.value})}}/>
                <Input placeholder="Address" onChange={(e)=>{setContact({...contact,"address":e.target.value})}}/>
                <Input placeholder="City" onChange={(e)=>{setContact({...contact,"city":e.target.value})}}/>
                <div className="flex space-x-5">
                    <InputSmall placeholder="Province" onChange={(e)=>{setContact({...contact,"province":e.target.value})}}/>
                    <InputSmall placeholder="Postal Code" onChange={(e)=>{setContact({...contact,"postal_code":e.target.value})}}/>
                </div>
                <Input placeholder="Country" onChange={(e)=>{setContact({...contact,"country":e.target.value})}}/>
                <Button text={"Submit!"} color={"bg-black"} 
                disabled={contact.firstName == (null||"") || contact.lastName ==(null||"")|| contact.email == (null||"")|| 
                contact.phone ==(null||"")|| contact.address == (null||"")|| contact.city == (null||"") || contact.province == (null||"") || contact.postal_code == (null||"")}/>
      
        </form>
            
    )
}