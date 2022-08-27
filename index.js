const { EC2Client } = require("@aws-sdk/client-ec2");
const { StopInstancesCommand } = require("@aws-sdk/client-ec2")

exports.handler = async (event) => {
    console.log("Stopping EC2 instances.")
    var params = {
        InstanceIds: [ 'i-0ffccf711611c718f', 'i-04eb54af89bebb45e' , 'i-003dbfb76fc965b8f', 'i-00fae5130e9ce4406', 'i-0d6812bc52a0c2bb5'],
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
