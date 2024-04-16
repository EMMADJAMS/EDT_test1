import {Schema} from 'mongoose'


const UniversitySchema = new Schema({
    Name:{type: String, required: true},
    city:{type: String, required: false},
    Phone_N:{type: String, required: true},
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    website: {
        type: String,
        trim: true,
        validate: {
            validator: function(value:any) {
                const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
                return urlRegex.test(value);
            },
            message: 'Please enter a valid website URL'
        }
    },
    Address:{type: String },
    desscription:{type: String, required: true},
    key_info:{type: String },
    
})