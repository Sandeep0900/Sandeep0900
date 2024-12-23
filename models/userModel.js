import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    subject:{
        type: String,
        require: true,
    },
    message:{
        type: String,
        requite: true,
    }
})

const userModel = mongoose.model('youAll', userSchema);

export default userModel;