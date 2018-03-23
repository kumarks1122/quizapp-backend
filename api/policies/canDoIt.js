/**
 * canDoIt
 *
 * @module      :: Policy
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {
  permissionSlug = `${req.options.controller}_${req.options.action}`
  return next();
};
