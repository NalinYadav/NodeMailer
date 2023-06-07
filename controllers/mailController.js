const nodemailer=require("nodemailer")
require("dotenv").config()

let mailer=nodemailer.createTransport({
    service : "gmail", 
    auth: {
      user: "my3391719@gmail.com",
      pass: process.env.PASSWORD,
    },
  });


const sendMail=async (req,res)=>{
    
    if(!req.body.recepient){
        return res.status(400).json("Enter recepient")
    }

    if(req.headers.authorization!=process.env.API_KEY)
    {
        return res.status(401).json("Invalid API key")
    }

    let details={
        from:"my3391719@gmail.com",
        to: req.body.recepient,
        subject: req.body.subject,
        text: req.body.text
    }

    try{
        const response=await mailer.sendMail(details)
        return res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

module.exports={sendMail}
