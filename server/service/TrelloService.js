const request = require('request');
// const aws = require('aws-sdk');
const TrelloService = {

    createCard(key, token, listId, event) {

        var options = {
            method : 'POST',
            url : 'https://api.trello.com/1/cards',
            qs: {
                name: event.userName,
                desc:
                    `pr_number:${event.pullRequestNumber} \n PR: ${event.pullRequestLink}`,
                idList: listId,
                keepFromSource: 'all',
                key: key,
                token: token
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
        })
    }
};

module.exports = TrelloService;