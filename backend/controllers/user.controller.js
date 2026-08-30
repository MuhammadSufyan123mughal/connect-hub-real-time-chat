import { catchAsyncError } from "../middlewares/catchAsyncError.middleware.js";
import  { User } from "../models/user.model.js"
import bcrypt from "bcryptjs";
import { generateJWTToken } from "../utils/jwtToken.js";


export const signup = catchAsyncError(async (req, res, next) => {
const { fullName, email, password } = req.body;
if(!fullName || !email || !password) {
    return res.status(400).json({
        success: false,
        message: "Please provide complete details.",
    });
}
 const emailRegex = /^\S+@\S+\.\S+$/;
 if(!emailRegex.test(email)){
    return res.status(400).json({
        success: false,
        message: "Invalid email format.",
    });
 }


 if(password.length < 8){
    return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long.",
    });
 }
 const isEmailAlreadyUsed = await User.findOne({ email });

if(isEmailAlreadyUsed){
    return res.status(400).json({
        success: false,
        message: "Email is already registered.",
    });
}

const hashedPassword = await bcrypt.hash(password, 10);

const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
    avatar: {
        public_id: "",
        url: "",
    },
});

      generateJWTToken(user, "User registered successfuly", 201, res)
});




export const signin = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if(!email || !password){
    return res.status(400).json({
        success: false,
        message: "Please provide email and password.",
    });
  }
const emailRegex = /^\S+@\S+\.\S+$/;
 if(!emailRegex.test(email)){
    return res.status(400).json({
        success: false,
        message: "Invalid email format.",
    });
 }
 const ser = await User.findOne({ email });
 if(!user){
     return res.status(400).json({
        success: false,
        message: "Invalid Credentials.",
     });
 }
  const isPasswordMatched = await bcrypt.compare(password, user.password);
   if(!isPasswordMatched){
     return res.status(400).json({
        success: false,
        message: "Invalid Credentials.",
     });
 }
 generateJWTToken(user, "User logged in successfully", 200, res);
});






export const signout  = catchAsyncError(async (req, res, next) => {
    res.status(200).cookie("token", "", {
        maxAge: 0,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "developmment" ? true : false,
    }).json({
        success: true,
        message: "User logged out successfuly.",
    });
});
export const getUser = catchAsyncError(async (req, res, next) => {});
export const updateProfile = catchAsyncError(async (req, res, next) => {});