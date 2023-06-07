const express =require('express');
const app=express()
const mailRoute=require('./routes/mail.js')
const apiKeyRoute=require('./routes/apiKey.js')

app.use(express.json())
app.use('/api/email',mailRoute)
app.use('/api/apiKey',apiKeyRoute)

/* app.use('/api/sms',smsRoute) for extending api to sms services*/ 


app.listen('5000',()=>{
    console.log('Backend running on port 5000')
})



