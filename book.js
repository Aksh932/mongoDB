const mongoose = require("mongoose");

main()
.then((res) =>{console.log("connected")})
.catch((err) => {console.log(err)});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookschema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },
});

const Book = mongoose.model("Book",bookschema);

let book1 = new Book({ 
    title:"jangalbook",
    author:"manoj",
    price:2500,
})
book1.save()
.then((res) =>{console.log(res)})
.catch((err) => {console.log(err)});