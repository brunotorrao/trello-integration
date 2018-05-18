'use strict';

const trelloHandler = require('./handler/TrelloHandler.js');

const setup = function() {
    process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];
};

exports.handleCardCreateEvent = function (event, context) {
    setup();

    trelloHandler.handleCardCreate(event);
};

exports.handleCardMovedEvent = function (event, context) {
    setup();

    trelloHandler.handleCardMoved(event);
};

exports.handleCardMovedEvent({}, {});
