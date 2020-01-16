const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const dishSchema=new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age : {
        type :Number,
        required :true
    }
},{
    timestamps: true

});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;