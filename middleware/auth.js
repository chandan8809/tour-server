import jwt  from "jsonwebtoken";
const secret="test";
import UserModel from "../models/user.js"

const auth = async(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(" ")[1]
        const isCustomAuth=token.length<500;
        let decodedData;
        if(token && isCustomAuth){
            decodedData=jwt.verify(token,secret)
            req.userId=decodedData?.id;
        }else{
            decodedData=jwt.decode(token)
            const googleId=decodedData?.sub.toString();
            const user=await UserModel.findOne({googleId})
            req.userId=user?._id;
        
        }
        next()

    }catch(error){
        console.log(error)
    }
}

export default auth;

