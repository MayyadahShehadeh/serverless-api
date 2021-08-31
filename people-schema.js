const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
    id: String,
    name: String,
    age: String
});

module.exports = dynamoose.model('people', peopleSchema);