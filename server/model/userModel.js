const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
      name:{
          type: String,
          required: true,
          minlength: 3,
          maxlength:30,
      },
      email:{
          type: String,
          required: true,
          unique: true,
          minlength: 3,
          maxlength: 300,
      },
      password:{
         type: String,
         required: true,
         minlength: 3,
         maxlength:1024,
      }
},{timestamps: true})

const userModel = mongoose.model('chatUser',userSchema);
module.exports = userModel;