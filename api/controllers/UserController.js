/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  login: function (req, res) {
    try {
      let user = req.param("user");
      console.log(user)
      User.findOrCreate({email: user.email}, function(error, foundUser) {
        return res.json({
          status: "success"
        });
      });
    } catch(e) {
      return res.json({
        status: "error",
        message: JSON.stringify(e)
      });
    }
  },
};

