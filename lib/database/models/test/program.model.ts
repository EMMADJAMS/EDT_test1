import {model, models, Schema} from 'mongoose'
import { buffer } from 'stream/consumers'
import university from './university.model'


const categorySchema = new Schema({
    title:{type: String, required: true},
})

const programSchema = new Schema({
    category:[categorySchema],
    title : {type: String, required: true},
    university : [university],
    price:{type:Number, required:true}
})
const program = models?.university || model('program',programSchema)

export default university