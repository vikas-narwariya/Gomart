import express, { Router } from "express";
import  mongoose  from "mongoose";
import route from "./route/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use('/users', route);
app.use('/login', route);

const PORT = 8000;
const URL = 'mongodb+srv://vikas:vikas123@cluster0.9uhp0.mongodb.net/Login?retryWrites=true&w=majority'

mongoose.connect(URL).then(() => {
    
app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT ${PORT}`);
});
}).catch(error => {
    console.log('Error: ', error.message);
})


// const User = new mongoose.model("User", userSchema)

//Routes

// app.listen(8000,() => {
//     console.log("BE started at port 8000")
// })


// mongoose.connect("mongodb+srv://vikas:vikas123@cluster0.9uhp0.mongodb.net/Login?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, () => {
//     console.log("DB connected")
// })

// const loginSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// })

// const Login = new mongoose.model("Login", loginSchema)

//Routes
// app.post("/admin-login", (req, res)=> {
//     const { email, password} = req.body
//     Login.findOne({ email: email}, (err, user) => {
//         if(login){
//             if(password === login.password ) {
//                 res.send({message: "Login Successfull", login: login})
//             } else {
//                 res.send({ message: "Password didn't match"})
//             }
//         } else {
//             res.send({message: "User not registered"})
//         }
//     })
// }) 

// app.post("/register", (req, res)=> {
//     const { name, email, password} = req.body
//     Login.findOne({email: email}, (err, user) => {
//         if(login){
//             res.send({message: "User already registerd"})
//         } else {
//             const login = new Login({
//                 name,
//                 email,
//                 password
//             })
//             login.save(err => {
//                 if(err) {
//                     res.send(err)
//                 } else {
//                     res.send( { message: "Successfully Registered, Please login now." })
//                 }
//             })
//         }
//     })
    
// }) 

// app.listen(9002,() => {
//     console.log("BE started at port 9002")
// })