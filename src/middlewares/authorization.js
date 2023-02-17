import Authentication from "../utils/authentication";

class Authorization {
 
  static async checkToken(req, res, next) {
    const token = req.headers['x-access-token'] || req.query.token || req.body.token;
    if (!token) return res.send({  message: 'User not authorized'}, 401);
    const verifiedToken = await Authentication.verifyToken(token);
    if (!verifiedToken.success) {
     return res.send({
        message: "not authorized"
      })
    }
    req.decoded = verifiedToken;
    next();
  }


  // static async confirmUser(req, res, next) {
  //   if (req.decoded.id !== req.body.id) {
  //     return res.send({
  //       message: "Not authorized"
  //     })
  //   }
  //   next();
  // }

  

  
   
  static async confirmAdmin(req, res, next) {
    if (req.decoded.isAdmin !== true) {
      return res.status(401).send({
        error: "Unauthorised"
      });
    }
    return next();
  }
}

module.exports = Authorization ;