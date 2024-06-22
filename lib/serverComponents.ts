"use server"
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