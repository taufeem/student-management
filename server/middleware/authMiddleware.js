const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send("Token Missing");
  }

  const token = authHeader.split(" ")[1];

  try {
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);

    req.user = verifiedUser;
    next();
  } catch (err) {
    res.status(401).send("Invalid Token");
  }
};

module.exports = auth;
