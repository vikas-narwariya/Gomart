import express from 'express';
import { getProduct, addProduct, getProductById, editProduct, deleteProduct, addUser , addSupplier} from '../controller/usercontroller.js';


const route = express.Router();

route.get('/',getProduct); 
route.post('/add', addProduct);

route.get('/:id', getProductById);
route.put('/:id', editProduct);
route.delete('/:id', deleteProduct);
// route.post('/regiter', addUser);






route.post("/admin-login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

route.post("/admin-register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new addUser({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 



route.post("/supplier-login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, supplier) => {
        if(supplier){
            if(password === supplier.password ) {
                res.send({message: "Login Successfull", supplier: supplier})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

route.post("/supplier-register", (req, res)=> {
    const { name, email, password} = req.body
    Supplier.findOne({email: email}, (err, supplier) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const supplier = new addSupplier({
                name,
                email,
                password
            })
            supplier.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 




// route.post('/login', addRegister);

// admin registration
// route.post("/admin", async (req, res) => {
//     const { name, email, phone, password, cpassword } = req.body;
//     if (!name || !email || !phone || !password || !cpassword) {
//       return res.status(422).json({ error: "Plz fill" });
//     }
//     try {
//       const userExist = await User.findOne({ email: email });
//       if (userExist) {
//         return res.status(422).json({ error: "Email Already exists" });
//       } else if (password != cpassword) {
//         return res.status(422).json({ error: "Password does not match !" });
//       } else {
//         const user = new User({ name, email, phone, password, cpassword });
  
//         await user.save();
//         res.status(201).json({ message: "User Registered sucessfully !" });
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   });
export default route;