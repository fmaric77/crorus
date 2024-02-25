// netlify/functions/words.js
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, '..', '..', '100+.json'), 'utf8');
        return {
            statusCode: 200,
            body: data
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message })
        };
    }
};
