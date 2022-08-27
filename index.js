const { EC2Client } = require("@aws-sdk/client-ec2");
const { StopInstancesCommand } = require("@aws-sdk/client-ec2")

exports.handler = async (event) => {
    console.log("Stopping EC2 instances.")
    var params = {
        InstanceIds: [ ''],
        Force: false,
    };
    try {
    const ec2 = new EC2Client({region: "us-east-1"});
    const resp = await ec2.send(new StopInstancesCommand(params));
    const response = {
        statusCode: 200,
        body: JSON.stringify(resp),
    };
    return response;
    } catch(err) {
        console.log(err, err.stack);
    }
};
