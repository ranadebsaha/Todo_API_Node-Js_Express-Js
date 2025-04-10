const express=require('express');
const db=require('./db/config');
const Todo=require('./db/Todo');
const User=require('./db/User');
const mongoose=require('mongoose');
const jwt = require('jsonwebtoken');
const jwtkey='todo'

const app=express();
app.use(express.json());

app.post('/register',async (req,resp)=>{
    if(req.body.email && req.body.password){
    let user=new User(req.body);
    let result=await user.save();
    if(result){
        resp.send(result);
    }else{
        resp.status(404).send(result);
    }
}else{
    resp.status(401).send({result: 'enter details'});
}
});

app.post('/login',async (req,resp)=>{
    if(req.body.email && req.body.password){
        let user=await User.findOne(req.body);
        if(user){
            jwt.sign({user},jwtkey,{expiresIn:"3h"},(err,token)=>{
                if(err){
                    resp.send(err)
                }else{
                    resp.send({user,auth:token});
                }
            });
        }else{
            resp.send({result:"No user Found"});
        }
}else{
    resp.status(401).send({result: 'enter details'});
}
});

app.post('/create',verifyToken,async (req,resp)=>{
    if(req.body.name && req.body.author){
    let todo=new Todo(req.body);
    let result=await todo.save();
    if(result){
        resp.send({result});
    }else{
        resp.status(404).send(result);
    }
}else{
    resp.status(401).send({result: 'enter todo name'});
}
});

app.get('/todos/:author',verifyToken,async (req,resp)=>{
    let todos= await Todo.find({author:req.params.author});
    if(todos){
        resp.send(todos);
    }else{
        resp.send({result: "No Todos Found"});
    }
});

app.put('/update/:id',verifyToken,async (req,resp)=>{
    if(req.params){
    let todo=await Todo.findOne({_id:req.params.id});
    if(todo){
        let result=await Todo.updateOne(
            {_id:req.params.id},
            {$set:req.body} 
        )
        if(result){
            resp.send(result);
        }else{
            resp.status(400).send(result);
        }
    }else{
        resp.status(404).send({result:"todo not found"});
    }
}else{
    resp.status(404).send({result:"provide a id"});
}
});

app.delete('/delete/:id',verifyToken,async(req,resp)=>{
    if(req.params){
        let todo=await Todo.findOne({_id:req.params.id});
        if(todo){
            let result=await Todo.deleteOne(
                {_id:req.params.id} )
            if(result){
                resp.send(result);
            }else{
                resp.status(400).send(result);
            }
        }else{
            resp.status(404).send({result:"todo not found"});
        }
    }else{
        resp.status(404).send({result:"provide a id"});
    }
});

function verifyToken(req,resp,next){
    let token=req.headers['auth'];
    if(token){
        token=token.split(' ')[1];
        jwt.verify(token,jwtkey,(err,valid)=>{
            if(err){
                resp.status(401).send({result: 'provide valid token'});
            }else{
                next();
            }
        })
    }else{
        resp.status(400).send({result: 'please add token'});
    }
}

app.listen(5000);