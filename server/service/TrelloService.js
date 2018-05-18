const request = require('request');
const TrelloService = {

    createCard(auth, listId, event) {

        let options = {
            method : 'POST',
            url : 'https://api.trello.com/1/cards',
            qs: {
                name: event.userName,
                desc:
                    `pr_number:${event.pullRequestNumber} \n PR: ${event.pullRequestLink}`,
                idList: listId,
                keepFromSource: 'all',
                key: auth.key,
                token: auth.token
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
        })
    },

    getCard(auth, cardId) {
        let options = {
            method : 'POST',
            url : `https://api.trello.com/1/cards/${cardId}`,
            qs: {
                key: auth.key,
                token: auth.token
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
            return body;
        })
    }
};

module.exports = TrelloService;