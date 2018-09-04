// const mongoose = require('mongoose');
// const userSchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     name: { type: String,require: true},
//     email: { 
//         type: String, 
//         required: true, 
//         unique: true, 
//         match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
//     },
//     password: { type: String, required: true },
//     avatr:{type: String, required: true},
//     level:{type: Number, default: 1},
//     theme: { type: String, required: true },
//     permission: { type: String, required: true },
//     gender:{type: String},
//     qq: { type: String }, 
//     qqName: { type: String }, 
//     qqAvatr: { type: String }, 
//     token: {type: String}
// },{ collection: 'user'});
// module.exports = mongoose.model('User', userSchema);

//qq wechat weibo github
import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String,require: true},
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true },
    avatr:{type: String, required: true},
    level:{type: Number, default: 1},
    theme: { type: String, required: true },
    permission: { type: String, required: true },
    gender:{type: String},
    qq: { type: String }, 
    qqName: { type: String }, 
    qqAvatr: { type: String }, 
    token: {type: String}
},{ collection: 'user'});

export default mongoose.model('User', UserSchema)