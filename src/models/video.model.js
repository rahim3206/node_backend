import mongoose from "mongoose";
import { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    title : {
        type:String,
        required:true,
    },
    description : {
        type:String,
        required:true,
    },
    views : {
        type:Number,
        required:true,
        default : 0
    },
    description : {
        type:String,
        required:true,
    },
    likes : {
        type:Number,
        required:true,
        default : 0
    },
    uploatedDate : {
        type:Date,
        required:true,
        default : 0
    },
    thumbnail : {
        type:String,
        required:true
    },
    video : {
        type:String,
        required:true
    },
    user_id : {
        type: Schema.Types.ObjectId,
        ref : "User"
    },
    duration : {
        type:Number,
        required:true,
        default : 0
    },
    isPublished : {
        type:Number,
        required:true,
        default : 0
    }
},{ timestamps: true })

videoSchema.plugin(mongooseAggregatePaginate)

const Video = mongoose.model('Video',videoSchema)
module.exports = { Video }