const express = require('express');
const mongoose = require('mongoose');
// const userModel = require('./schema');
const PostModal=require('./Newsc');
// const page=require("./page2Schema");
// const {checkExistingUser, generatePasswordHash} = require("./utility");
// const jwt = require('jsonwebtoken');
// const multer = require("multer")();
// const bcrypt = require("bcryptjs");
// const salt=10;
const cors = require('cors')
const app =express();
// require('dotenv').config();
// app.use(multer.array());

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));


app.listen(3005,()=>{
    console.log('server running at 3005 port');
})
// app.use("/post",dataController)

mongoose.connect('mongodb://localhost/realstate',()=>{
    console.log('connected to DB')
}),
    (err)=>console.log(err)

    app.post("/", (req, res)=> {
        userModel.find({email: req.body.email}).then((userData)=> {
            
            if(userData.length) {
                bcrypt.compare(req.body.password, userData[0].password).then((val)=> {
                    if(val) {
                        const authToken = jwt.sign(userData[0].email, process.env.SECRET_KEY);
                        res.status(200).send({authToken});
                    } else {
                        console.log("Invalid Password")
                        res.status(400).send("Invalid Password");
                    }
                })
            } else {
                res.status(400).send("Unauthorized user");
            }
        })
    });

    app.post("/signup", async (req, res)=> {
        if(await checkExistingUser(req.body.email)) {
            res.status(400).send("email exist. Please try with different email");
        } else {
            generatePasswordHash(req.body.password).then((passwordHash)=> {
                userModel.create({email: req.body.email,password: passwordHash})
                                .then(()=> { 
                                    res.status(200).send(`${req.body.email} added successfully`); 
                                }).catch((err)=> {
                                    res.status(400).send(err.message)
                })
            });
        }
        
    });
    
    // app.post("/add", (req, res) => {

    //     upload.create({ PropertyType: req.body.PropertyType,Negotiable:req.body.Negotiable,Price:req.body.Price,Ownership:req.body.Ownership,PropertyAge:req.body.PropertyAge,PropertyApproved:req.body.PropertyApproved,PropertyDiscription:req.body.PropertyDiscription,BankLoan:req.body.BankLoan}).then((userData) => {
    //     res.status(200).send("posted sucessfully")
    
    //   }).catch((err) => {
    //     res.status(400).send(err.message)
    //   })
    
    // });
    app.post("/adding",(req,res)=>{
        console.log(req.body)
        PostModal.create({  PropertyType:req.body.PropertyType,
            Negotiable:req.body.Negotiable,
            price:req.body.price,
            Ownership:req.body.Ownership,
            PropertyAge:req.body.PropertyAge,
            PropertyApproved:req.body.PropertyApproved,
            PropertyDiscription:req.body.PropertyDiscription,
            BankLoan:req.body.BankLoan,
            length1:req.body.length1,
                Breath:req.body.Breath,
                Area:req.body.Area,
                AreaUnit:req.body.AreaUnit,
                bhk:req.body.bhk,
                floor:req.body.floor,
                Furnished:req.body.Furnished,
                car:req.body.car,
                Lift:req.body.Lift,
                Electricity:req.body.Electricity,
                Facing:req.body.Facing,
                name:req.body.name,
                mobile:req.body.mobile,
                poster:req.body.poster,
                sale:req.body.sale,
                fp:req.body.fp,
                Pp:req.body.Pp,
                Email:req.body.Email,
                city:req.body.city,
                area:req.body.area,
                pincode:req.body.pincode,
                Address:req.body.Address,
                landmark:req.body.landmark,
                lalitude:req.body.lalitude,
                longitude:req.body.longitude

     })
    .then((data)=>{
     res.status(200).send(data)
    }).catch((err)=>{
    console.log(err)
    })                        
    })
    // app.post("/adding2",(req,res)=>{
    //         console.log(req.body)
    //         postModal.insertMany({  length1:req.body.length1,
    //             Breath:req.body.Breath,
    //             Area:req.body.Area,
    //             AreaUnit:req.body.AreaUnit,
    //             bhk:req.body.bhk,
    //             floor:req.body.floor,
    //             Furnished:req.body.Furnished,
    //             car:req.body.car,
    //             Lift:req.body.Lift,
    //             Electricity:req.body.Electricity,
    //             Facing:req.body.Facing,
    //      })
    //      .then((data)=>{
    //         res.status(200).send(data)
    //        }).catch((err)=>{
    //        console.log(err)
    //     })                        
    // })
    //     //    })


    // app.get("/posts",(req,res)=>{
    //     postModal.find().sort({date:-1}).then((data)=>{
    //         res.status(200).send(data)
            
    //     }).catch((err)=>{
    //         res.status(400).send(err)
    //     })
    // })
    // // app.use("/user",userController);