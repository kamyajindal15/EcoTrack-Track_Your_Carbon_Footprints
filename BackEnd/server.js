const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const app = express();

//MiddleWare
app.use(express.json());
app.use(cors());

//mongodb
const mongoURI='mongodb://localhost:27017/HackThon_Project';
mongoose.connect(mongoURI);

//User Schema
const UserSchema=new mongoose.Schema({
    email: { type: String, unique: true, required: true},
    username:{type: String, unique: true, require: true},
    password: String,
});
const User=mongoose.model('User',UserSchema);


function verifyToken(req,res,next)
{
    const token=req.headers['authorization'];

    if(!token)
    {
        return res.status(403).send('A token is required for authentication');
    }

    try
    {
        req.user = jwt.verify(token.split(' ')[1], 'YOUR_SECRET_KEY');
        next();
    }
    catch(err)
    {
        return res.status(401).send('Invalid Token');
    }
}


app.post('/register',async (req,res)=>{
    try
    {
        const hashedPassword = bcrypt.hashSync(req.body.password,8);
        const user = new User({
            email: req.body.email,
            username:req.body.username,
            password:hashedPassword
        });
        await user.save();
        res.status(201).send('User Registered successfully');
    }
    catch (error)
    {
        res.status(500).send('Error registering user');
    }
});

app.post('/login',async (req,res)=>{
    try
    {
        const user = await User.findOne({
            username:req.body.username
        });

        if(user && bcrypt.compareSync(req.body.password, user.password))
        {
            const token = jwt.sign({userId:user._id},'YOUR_SECRET_KEY');
            res.json({token});
        }
        else
        {
            res.status(401).send('Invalid Credentials');
        }
    }
    catch (error)
    {
        res.status(500).send('Error during Login');
    }
});

const port = 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});