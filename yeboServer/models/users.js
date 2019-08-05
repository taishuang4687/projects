var mongoose = require('mongoose');
//使唯一值生效
mongoose.set('useCreateIndex',true);
var UserSchema = new mongoose.Schema({
    //用户名与密码都是唯一的
    username:{type:String,required:true,index:{unique:true}},
    password:{type:String,required:true},
    date:{type:Date,default:Date.now()}
});
var UserModel = mongoose.model('user',UserSchema);
UserModel.createIndexes();

var save = (data)=>{
    var user = new UserModel(data);
    return user.save()
            .then(()=>{
                return true;
            })
            .catch(()=>{
                return false;
            });
};

var findLogin = (data)=>{
    return UserModel.findOne(data);
};
var updatePassword = (username,password)=>{
    return UserModel.update({username},{$set:{password}})
            .then(()=>{
                return true;
            })
            .catch(()=>{
                return false;
            })
}
module.exports = {
    save,
    findLogin,
    updatePassword
};