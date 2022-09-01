const mongoose = require("mongoose")
// const userSchema = new mongoose.Schema({
//     email: {
//       type: String,
//       required: true,
//       unique:true,
//     },
//     password: String,
//     confirmpassword: String,
//   });

  

const NewSchema = new mongoose.Schema({
    PropertyType:{
        type:String,
        required:true

    },
    Negotiable :{
        type:String,
        required:true

    },
    Price :{
        type:Number,
        required:true

    },
    Ownership :{
        type:String,
        required:true,

    },
    PropertyAge :{
        type:String,
        required:true,

    },
    PropertyApproved :{
        type:String,
        required:true,

    },
    PropertyDiscription :{
        type:String,
        required:true,

    },
    Bank_Loan :String,
    // {

    //     type:String,
    //     // required:true,
   
    // }
    length1:String,
    Breath:String,
    Area:String,
    AreaUnit:String,
    bhk:String,
    floor:String,
    Furnished:String,
    car:String,
    Lift:String,
    Electricity:String,
    Facing:String,
    name:String,
    mobile:String,
    poster:String,
    sale:String,
    fp:String,
    Pp:String,
    Email:String,
    city:String,
    area:String,
    pincode:String,
    Address:String,
    landmark:String,
    lalitude:String,
    longitude:String


    

})

const  PostModal = mongoose.model("new",NewSchema)

module.exports = PostModal;
