const trelloService = require('../service/TrelloService');
const emailService = require('../service/EmailService.js');

const TrelloHandler = {

    handleCardCreate(event) {
        let listId = process.env.listId;

        trelloService.createCard(this.auth(), listId, event)
    },

    handleCardMoved(event) {

        // event.data.listAfter.id para onde foi // proposta or done - 5afed6ca6f8a0a9045587b39 / 5afd8a68aa7c8fe6b2a4f366
        // event.data.card.id
        // event.data.name

        // let card = trelloService.getCard(this.auth(), )
        emailService.sendMail();

    },

    auth() {
        return {key: process.env.key, token: process.env.token };
    }

};

module.exports = TrelloHandler;