var AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event)=>{
    let responseBody =""
    let statusCode = 0

    let{id,price} =JSON.parse(event.body);

    const params ={
        TableName : 'Items',
       /* Item properties will depend on your application concerns */
       item: {
        id: id,
        price: price
       }
 
    }
    try {
        await dinamodb.put(params).promise();
        statusCode = 200;
        responseBody = JSON.stringify('Item inserido com sucesso!');
    } catch (error) {
        statusCode = 200;
        responseBody = JSON.stringify(error);
    }
    const response ={
        statusCode: statusCode,
        body: responseBody,
    };
    return response;
};

