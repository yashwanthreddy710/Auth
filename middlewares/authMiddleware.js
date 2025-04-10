const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {

    const token = req.header("authorized-tkn");

    if(!token){
        return res.status(401).json({msg: "Authorization denied as token is not provided"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch(err){
        res.status(401).json({msg: "token is invalid"})
    }
}
