const peopleSchema = require('../people-schema');

exports.handler = async (event) => {
  try {
    const id = event.pathParameters ? event.pathParameters.id : null;
    const { name, age } = JSON.parse(event.body);

    const result = await peopleSchema.update({ id: id } ,{ name, age });
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (e) {
    return {
      status: 500,
      message: e.message,
    };
  }
};