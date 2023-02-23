const users = require("../models/userSchema")
const moment = require("moment")
//
exports.userpost = async (req, res) => {
    const file = req.file.filename;
    const { fname, lname, email, mobile, gender, location, status } = req.body;

    if (!fname || !lname || !email || !mobile || !gender || !location || !status || !file) {
        res.status(401).json("All Inputs is required")
    }

    try {
        const preuser = await users.findOne({ email: email });

        if (preuser) {
            res.status(401).json("This user already exist in our databse")
        } else {

            const datecreated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

            const userData = new users({
                fname, lname, email, mobile, gender, location, status, profile: file, datecreated
            });
            await userData.save();
            res.status(200).json(userData);
        }
    } catch (error) {
        res.status(401).json(error);
        console.log("catch block error")
    }
};


//get user
exports.userget = async (req, res) => {
    
    const search = req.query.search || ""
    const query = {
        fname : {$regex:search,$options:"i"}
    }
    try{
       
        const userdata = await users.find(query)
        res.status(200).json(userdata)
    }catch(error){
        res.status(401).json(error)
    }
}

exports.singleuserget = async(req,res) => {
   
    const {id} = req.params;

    try{
        const userdata  = await users.findOne({_id:id});
        res.status(200).json(userdata)

    }catch(error){

        res.status(401).json(error)
    }

}

//user edit
exports.useredit  = async(req,res) => {
    const {id} = req.params;

    const { fname, lname, email, mobile, gender, location, status,user_profile } = req.body;
    const file = req.file ? req.file.filename : user_profile

    const dateUpdated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

    try{
       
        const updateuser = await users.findByIdAndUpdate({_id:id},{

            fname, lname, email, mobile, gender, location, status, profile: file, dateUpdated
        },{
            new:true
        })
        await updateuser.save()
        res.status(200).json(updateuser);

    }catch(error){

        res.status(401).json(error)
    }


}

//delete user
exports.userdelete = async(req,res) => {
    const {id} = req.params
    try{
        const deleteuser = await users.findByIdAndDelete({_id:id})
        res.status(200).json(deleteuser)
    }catch(error){
        res.status(401).json(error)
    }
}