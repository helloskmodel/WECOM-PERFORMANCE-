module.exports = function handler(req, res) {
  res.send(req.query.echostr);
};
