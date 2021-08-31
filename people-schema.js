const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
    id: String,
    name: String,
    age: Number
});

module.exports = dynamoose.model('people', peopleSchema);