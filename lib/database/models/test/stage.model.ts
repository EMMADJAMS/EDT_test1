import {model, models, Schema} from 'mongoose'
import { buffer } from 'stream/consumers'
import university from './university.model'
import program from './program.model'


const reportSchema = new Schema({
    title:{type: String , required:true},
    status:{type: String , required:true},
    UpdateAt:{type:Date, default: Date.now}
})

const stageSchema = new Schema({
    title:{type: String , required:true},
    report:[reportSchema],
    percent:{type:Number, required:true},
    createdAt:{type:Date, default: Date.now}
})

const stage = models?.stage || model('stage',stageSchema)

export default stage