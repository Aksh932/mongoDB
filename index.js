const mongoose = require('mongoose');

main()
    .then(() => {console.log("connection")})
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name : String,
  email : String,
  age : Number,
});

const User = mongoose.model("User" , userSchema);
// const Employee = mongoose.model("Employee",userSchema );

//insert data--------------->
// let user2 = new  User({
//   name:"sachu",
//   email:"sachu@gmail.com",
//   age:52,
// })
// user2.save()
// .then((res) => { console.log(res);})
// .catch((err) => { console.log(err);})

//find data-------------->

// User.find({ age : {$gt:50}})
// .then((res) => {console.log(res)})
// .catch((err) => {console.log(err)});

//update -------------------->

// User.updateOne({name:"sachu"},{age:50})
// .then((res) => {console.log(res)})
// .catch((err) => {console.log(err)});

// User.findOneAndUpdate({name:"sachu"},{age:30},{new:true})
// .then((res) => {console.log(res)})
// .catch((err) => {console.log(err)});

//delete data ----------------->

User.deleteOne({name:"askhay"})
.then((res) => {console.log(res)})
.catch((err) => {console.log(err)});