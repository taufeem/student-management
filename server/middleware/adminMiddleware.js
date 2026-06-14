const adminOnly = (req, res, next) => {
  console.log(req.body);
  
  if (req.user.role !== "admin") {
    return res.status(403).send("Access Denied");
  }

  next();
};

module.exports = adminOnly;
