import {model, models, Schema} from 'mongoose'
import { buffer } from 'stream/consumers'
import university from './university.model'
import program from './program.model'
import stage from './stage.model'
import User from './user.model'



const applicationSchema = new Schema({
    program:[program],
    user:[User],
    stage:[stage],
    createdAt:{type:Date, default:Date.now },
})


const application = models?.application || model('application',applicationSchema)

export default application