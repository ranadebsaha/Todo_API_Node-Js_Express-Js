const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({
    author:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        default: false
    }
});

module.exports=mongoose.model('todos',todoSchema);