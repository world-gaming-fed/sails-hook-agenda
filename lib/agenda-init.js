'use strict';

var _ = require('lodash');
var Agenda = require('agenda');

module.exports = function ToDefineAgenda(sails, cb) {
  cb = cb || _.noop;

  /**
   * Create a new Agenda instance
   */
  var agenda = new Agenda(sails.config.agenda.connection);

  sails.agenda = agenda;

  agenda.on('ready', function() {
    // Bind agenda to global sails
    agenda.start();
  });

  return cb();
};
