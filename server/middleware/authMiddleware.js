const auth = (req, res, next) => {


  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Token Missing");
  }

  try {
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);

    req.user = verifiedUser;
    next();
  } catch (err) {
    console.log(err.message);
    res.status(401).send("Invalid Token");
  }
};
module.exports = auth;