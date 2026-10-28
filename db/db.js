
const mongoose = require('mongoose')
async function dbconnection(){
   try{
    await mongoose.connect(process.env.MONGO_URL)
    
    console.log("Database connection Successfully")
}catch(error){
    console.log("Database connection failed")
    console.log(error);

}
} 


module.exports = dbconnection
