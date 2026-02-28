exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify("🚀 Lambda deployed using Serverless CI/CD!")
    };
};