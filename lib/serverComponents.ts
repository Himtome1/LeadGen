"use server"
import { PrismaClient } from "@prisma/client"
import { Resend } from "resend";
var nodemailer = require('nodemailer');
const prisma = new PrismaClient()
const twilioApiKey = process.env.TWILIO_API_KEY || "No Key Found"
export async function SendMessage(to:string, message:string){
    const details = {
      "To":`\"${to}\"`,
      "From":"+14794580714",
      "Parameters":`{\"message\":\"${message}\"}`
    } as any
    console.log(details)
    var formBody = []; 
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property] );
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&") as any
  
    const res = await fetch("https://studio.twilio.com/v2/Flows/FW95984a6bf9dab7fe6b6f8504ff10a288/Executions",
    {method:"POST", headers:{'Authorization': 'Basic ' + btoa(twilioApiKey),
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
      body:formBody}) 
    const data = await res.json()
    return data
  }


export async function SaveLead(input:{email:string, vehicleType:string, phoneNumber:string, firstName:string, lastName:string, budget:string, DOB:string, address:any, ownHome:boolean, monthlyPayment:string, timeAtAddress:string, employmentStatus:string, employmentDetails:{employer:string,duration:string,position:string}, monthlyIncome:string}){
  const {email, vehicleType, phoneNumber, firstName, lastName, budget, DOB, address, ownHome, monthlyPayment, timeAtAddress, employmentStatus, employmentDetails, monthlyIncome} = input
  console.log(budget, monthlyPayment, timeAtAddress, employmentStatus, employmentDetails, monthlyIncome)
  await prisma.leads.create({
    data:{
      email:email,
      vehicleType:vehicleType,
      firstName:firstName,
      lastName:lastName,
      budget:budget,
      DOB:DOB,
      phone:phoneNumber,
      address:address.address,
      city:address.city,
      province:address.province,
      postalCode:address.postalCode,
      homeOwner:ownHome,
      monthlyPayment:monthlyPayment,
      timeAtAddress:timeAtAddress,
      employmentStatus:employmentStatus,
      employer:employmentDetails.employer,
      duration:employmentDetails.duration,
      position:employmentDetails.position,
      monthlyIncome:monthlyIncome,
      leadStatus:"New"
    }})
  
  return "Lead Saved"}

export async function SendFinalEmail(input:{email:string, vehicleType:string, phoneNumber:string, firstName:string, lastName:string, budget:string, DOB:string, address:any, ownHome:boolean, monthlyPayment:string, timeAtAddress:string, employmentStatus:string, employmentDetails:{employer:string,duration:string,position:string}, monthlyIncome:string}){
  const html = 
  '<h1>Completed Alert</h1> </br> <p> A new lead has been submitted on the website.</p> </br> <p>Details:</p> </br> <p> Name: '+input.firstName+' '+input.lastName+'</p> </br> <p> Email: '+input.email+'</p> </br> <p> Phone Number: '+input.phoneNumber+'</p> </br> <p> Vehicle Type: '+input.vehicleType+'</p> </br> <p> Budget: '+input.budget+'</p> </br> <p> Date of Birth: '+input.DOB+'</p> </br> <p> Address: '+input.address.address+', '+input.address.city+', '+input.address.province+', '+input.address.postalCode+'</p> </br> <p> Home Owner: '+input.ownHome+'</p> </br> <p> Monthly Payment: '+input.monthlyPayment+'</p> </br> <p> Time at Address: '+input.timeAtAddress+'</p> </br> <p> Employment Status: '+input.employmentStatus+'</p> </br> <p> Employer: '+input.employmentDetails.employer+'</p> </br> <p> Duration: '+input.employmentDetails.duration+'</p> </br> <p> Position: '+input.employmentDetails.position+'</p> </br> <p> Monthly Income: '+input.monthlyIncome+'</p> </br> <p> Please follow up with this lead as soon as possible.</p>'
  const resend = new Resend(process.env.RESEND_API_KEY)
  const res = await resend.emails.send({
    from: "leadgen@inter-datum.com",
    to: "kaevind303@gmail.com",
    cc: "Paolosotelo@outlook.com",
    subject: "New Completed Lead!",
    html: html
})
console.log(res)
}
export async function SendPartialEmail(input:{vehicleType:string, phoneNumber:string, firstName:string, lastName:string}){
  const html ='<h1>New Lead Alert</h1> </br> <p> A new lead has been submitted on the website.</p> </br> <p>Details:</p> </br> <p> Name: '+input.firstName+' '+input.lastName+'</p> </br> <p> Phone Number: '+input.phoneNumber+'</p> </br> <p> Vehicle Type: '+input.vehicleType+'</p> </br> <p> Please follow up with this lead as soon as possible.</p>'
  const resend = new Resend(process.env.RESEND_API_KEY)
  const res = await resend.emails.send({
    from: "leadgen@inter-datum.com",
    to: "kaevind303@gmail.com",
    cc: "Paolosotelo@outlook.com",
    subject: "New Partial Lead!",
    html: html
})
console.log(res)
}
export async function SendPartialEmail2(input:{email:string, firstName:string, lastName:string}){
  const html ='<h1>New Lead Alert</h1> </br> <p> A new lead has been submitted on the website.</p> </br> <p>Details:</p> </br> <p> Name: '+input.firstName+' '+input.lastName+'</p> </br> <p> Email: '+input.email+'</p> </br> </br> <p> Please follow up with this lead as soon as possible.</p>'
  const resend = new Resend(process.env.RESEND_API_KEY)
  const res = await resend.emails.send({
    from: "leadgen@inter-datum.com",
    to: "kaevind303@gmail.com",
    cc: "Paolosotelo@outlook.com",
    subject: "New Partial Lead!",
    html: html
})
console.log(res)
}
