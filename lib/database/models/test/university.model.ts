import {model, models, Schema} from 'mongoose'
import { buffer } from 'stream/consumers'




const logoSchema = new Schema({
    data:{type: buffer, required:true},
    mimetype:{type: String, required: true},
})

const Universitychema = new Schema({
    Name:{type: String, required: true},
    city:{type: String, required: false},
    logo:[logoSchema]
})

const university = models?.university || model('university',Universitychema)

export default university