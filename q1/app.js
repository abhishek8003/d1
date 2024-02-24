const mongoose=require('mongoose');
const user=require('./models/user.js');
async function main(){ 
  await mongoose.connect('mongodb://127.0.0.1:27017/q1');
}
console.log(user);
(async(

)=>{
    try{
        let res=await main();
        console.log('connected to mongoDB');
        let u1=new user({
            username:'abhijfghhek',
            email:'abhishek@abhifk.com',
            date_of_birth:new Date('2001-01-26')
        });
        await u1.save();
    }
    catch(err){
        if(err.errors){
            console.log(err.errors)
            for(let e in err.errors){
               console.log(err.errors[e].properties.message);
            }
        }
        else{
            console.log('unexpected error',err)
        }
    }

})();
