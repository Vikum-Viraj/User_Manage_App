const users = require("../models/userSchema")
const moment = require("moment")

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
    
    try{
        const userdata = await users.find()
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