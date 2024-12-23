import userModel from "../models/userModel.js"

const homeController = async(req, res) =>{
    try {
        res.render('index');
    } catch (error) {
        console.log(error.message);
    }
}
// user Contact Controller
const ContactUserController = async(req, res) =>{

        if(!req.body){
            res.end('index');
        }

    try {
        const data = await userModel({
            name:req.body.name,
            email:req.body.email,
            subject:req.body.subject,
            message:req.body.message,
        })
        if(data){
            await data.save();
            console.log("user saved Successfully.....!");
        }
        res.render('index');
    } catch (error) {
        console.log(error.message);
    }
    req.body = {};
}


export {homeController, ContactUserController}