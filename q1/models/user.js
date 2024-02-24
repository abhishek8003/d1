const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:[true,'username must be unique'],
        minLength:[3,'username msut contain 3 characters'],
        validate:{
            validator:function(v){
                let words=['stupid','very_stupid_word'];
                for(x of words){
                    if(v.includes(`${x}`)){
                        return false;
                    }
                }
                return true;
            },
            message: 'Username contains offensive words'
        }
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator:function(v){
                if(v.includes('@')&&v.includes('.com')){
                    return true;
                }
                else{
                    return false;
                }
            },
            message:'Please enter a valid Email!'
        }

    },
    date_of_birth:{
        type:Date,
        validate:{
            validator:function(v){
                if(v>new Date()){
                    return false;
                }
                else{
                    return true;
                }
            },
        message:'date must not be in future!'
        }
    }
});

const user=mongoose.model('user',userSchema);
module.exports=user;