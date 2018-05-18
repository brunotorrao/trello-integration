const trelloService = require('../service/TrelloService');

const TrelloHandler = {

    handleEvent(event) {
        let key = process.env.key;
        let token = process.env.token;
        let listId = process.env.listId;

        trelloService.createCard(key, token, listId, event)
    }

};

module.exports = TrelloHandler;