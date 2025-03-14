"use server"
import { PrismaClient } from "@prisma/client"

import twilio from "twilio";
import { Resend } from "resend";
var nodemailer = require('nodemailer');
const twilioApiKey = process.env.TWILIO_API_KEY || "No Key Found"


// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_API_KEY;
console.log(authToken,accountSid)
const client = twilio(accountSid, authToken);

export async function SendMessage(to:string, message:string) {
  const res = await client.messages.create({
    body: message,
    from: "+17786018032",
    to: to,
  });

  console.log(res.body);
}




export async function SendFinalEmail(input:{email:string, vehicleType:string, phoneNumber:string, firstName:string, lastName:string, budget:string, DOB:string, address:any, ownHome:boolean, monthlyPayment:string, timeAtAddress:string, employmentStatus:string, employmentDetails:{employer:string,duration:string,position:string}, monthlyIncome:string}){
  const html = 
  '<h1>Completed Alert</h1> </br> <p> A new lead has been submitted on the website.</p> </br> <p>Details:</p> </br> <p> Name: '+input.firstName+' '+input.lastName+'</p> </br> <p> Email: '+input.email+'</p> </br> <p> Phone Number: '+input.phoneNumber+'</p> </br> <p> Vehicle Type: '+input.vehicleType+'</p> </br> <p> Budget: '+input.budget+'</p> </br> <p> Date of Birth: '+input.DOB+'</p> </br> <p> Address: '+input.address.address+', '+input.address.city+', '+input.address.province+', '+input.address.postalCode+'</p> </br> <p> Home Owner: '+input.ownHome+'</p> </br> <p> Monthly Payment: '+input.monthlyPayment+'</p> </br> <p> Time at Address: '+input.timeAtAddress+'</p> </br> <p> Employment Status: '+input.employmentStatus+'</p> </br> <p> Employer: '+input.employmentDetails.employer+'</p> </br> <p> Duration: '+input.employmentDetails.duration+'</p> </br> <p> Position: '+input.employmentDetails.position+'</p> </br> <p> Monthly Income: '+input.monthlyIncome+'</p> </br> <p> Please follow up with this lead as soon as possible.</p>'
  const resend = new Resend(process.env.RESEND_API_KEY)
  const res = await resend.emails.send({
    from: "sales@powersport-financing.ca",
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
    from: "sales@powersport-financing.ca",
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
    from: "sales@powersport-financing.ca",
    to: "kaevind303@gmail.com",
    cc: "Paolosotelo@outlook.com",
    subject: "New Partial Lead!",
    html: html
})
console.log(res)
}
