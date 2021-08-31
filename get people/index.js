const peopleSchema = require('../people-schema');

exports.handler = async(event)=> {
   try {
        const id = event.pathParameters ? event.pathParameters.id : null;
         
        if (id) {
            // get specific info for only this id
            result = await peopleSchema.query('id').eq(id).exec();
            result = result[0];
        } else {
            //get all objects
            result = await peopleSchema.scan().exec();
        }

        return {
            statusCode: 200,
            body: JSON.stringify(result)
        }
   } catch(e) {
        return {
            statusCode: 500,
            err: e.message
        }
   }
   
}