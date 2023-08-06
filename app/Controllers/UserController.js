require("dotenv").config();
const { sequelize } = require("../Models/index");
const models = require("../Models/index");
const {User} = require("../Models/UserModel");

const register = async (req,res) =>{
    try {
        if (req.body.name && req.body.lastname && req.body.email && req.body.birthdate && req.body.phone) {
            const emailExist = await User.findOne({where:{email:req.body.email}});
            if (emailExist) return res.status(400).json({success:false,message:"El Email ya Existe"});

            const newUser = User.build({ 
                name : req.body.name, 
                second_name : req.body.second_name,
                lastname : req.body.lastname, 
                lastname_mother : req.body.lastname_mother, 
                email : req.body.email, 
                birthdate : req.body.birthdate, 
                phone : req.body.phone, 
            });
            await newUser.save();
            res.status(200).json({success:true,data:newUser,message:"Usuario Creado Exitosamente"});
        }else{
            res.status(400).json({success: false, error: "Datos Incorrectos"});
        }
    } catch (error) {
        res.status(400).json({success: false, message: error });
    }
}

const getUsers = async (req,res) =>{
    try {
        await User.findAll().then(function (result) {
            res.status(200).json({success:true,data:result});
        }).catch(function(err) {
            res.status(400).json({success:false,data:null,message:err});
        });
    } catch (error) {
        res.json({success: false, message: error });
    }
}

const getUser = async (req,res) =>{
    try {
        await User.findOne({where:{id : req.params.id_user}}).then(function (result) {
            res.status(200).json({success:true,data:result});
        }).catch(function(err) {
            res.status(400).json({success:false,data:null,message:err});
        });
    } catch (error) {
        res.json({success: false, message: error });
    }
}

module.exports = {
    register,getUsers,getUser
};
