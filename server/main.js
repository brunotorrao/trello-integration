'use strict';

const trelloHandler = require('./handler/TrelloHandler.js');

exports.handleEvent = function (event, context) {

    process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];

    trelloHandler.handleEvent(event)
};
