const jwt = require('../utils/jwt');

module.exports = (roles) => {
  return (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).send('Access denied');
  
    try {
      const decoded = jwt.verifyToken(token);
      if(!roles.includes(decoded.role)) throw new Error();
      req.user = decoded;
      next();
    } catch (ex) {
      res.status(400).send('Invalid token');
    }
  }
};
