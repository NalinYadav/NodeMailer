require("dotenv").config()

const getKey=async (req,res)=>{
    
    const response={token : process.env.API_KEY}
    res.status(200).json(response)
}

module.exports={getKey}
