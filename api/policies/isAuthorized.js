/**
 * isAuthorized
 *
 * @module      :: Policy
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {
  if (req.currentUser) {
    next();
  } else {
    res.forbidden('You are not permitted to perform this action.');;
  }
};
