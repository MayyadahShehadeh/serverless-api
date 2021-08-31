const peopleSchema = require('../people-schema');

exports.handler = async (event) => {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        let result = null;
        if (id) {
            await peopleSchema.delete({ id });
        }
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
}