const mongoose= require('mongoose');
const Service_Review_Schema =mongoose.Schema(
    {
    User_Name :{
        type : String,
        required :[true,'please enter a value']
    },
    Rating :{
        type : Number,
        required : true,
        default : 0
    },
    Comment : {
        type : String,
        required :[true,'please enter a value']
    }
    },
    {
        timestamps : true
    }

)
const Service_Review = mongoose.model("Service_Review",Service_Review_Schema);
module.exports = Service_Review;