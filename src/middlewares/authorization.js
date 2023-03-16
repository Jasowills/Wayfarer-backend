import Authentication from "../utils/authentication";

class Authorization {
 static async checkToken(req, res, next) {
  const token = req.headers['x-access-token'] || req.query.token || req.body.token;
  console.log(token)
  if (!token) return res.status(401).send({ message: 'User not authorized' });
  try {
    const verifiedToken = await Authentication.verifyToken(token);
    if (!verifiedToken.success) {
      return res.status(401).send({ message: "not authorized" });
    }
    req.decoded = verifiedToken;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).send({ message: "not authorized" });
  }
}


  static async confirmAdmin(req, res, next) {
    if (req.decoded.isAdmin !== true) {
      return res.status(401).send({ error: "Unauthorized" });
    }
    return next();
  }
}

export default Authorization;
