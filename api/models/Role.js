/**
 * Role.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string'
    },
    slug: {
      type: 'string'
    },
    users: {
      collection: 'user',
      via: 'assignedRole',
      through: 'userrole'
    },
    accesses: {
      collection: 'access',
      via: 'userRole',
      through: 'roleaccess'
    }
  }
};

