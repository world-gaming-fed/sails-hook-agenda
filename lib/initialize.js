'use strict';

var agendaInit = require('./agenda-init');

/**
 * Initialization of hook
 *
 * @param {Sails} app
 * @returns {Function}
 */
module.exports = function ToInitialize(sails) {

  return function(cb) {
    agendaInit(sails, cb);
  };

};
