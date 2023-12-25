function getSignup(req, res) {
  res.render("customer/auth/signup");
}

function getLogin(req, res) {
  res.render("customer/auth/login");
}

function getHome(req, res) {
  res.render("customer/home/home");
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  getHome: getHome,
};
