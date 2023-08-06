require("dotenv").config();
const jwt = require("jsonwebtoken");
const verifytoken = async (req,res,next) => {
    const strToken = req.headers.authorization;
    if (!strToken) return res.status(401).json({success: false, token: null, message: "Acceso Denegado" })
    try {
        const token = strToken.split(" ")[1];
        const verify = jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user = verify ;
        next();
    } catch (error) {
        return res.status(400).json({success: false, message:"Token no Valido"})
    }
}

module.exports = verifytoken ;