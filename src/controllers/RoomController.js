module.exports = {
  create(req, res) {
    let roomId = 1123123;
    res.redirect(`/room/${roomId}`);
  }
};
