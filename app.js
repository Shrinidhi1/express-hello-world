const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const mysql = require("mysql");
const db = mysql.createConnection({
    host:"database-1.c8qclamzprbi.us-east-1.rds.amazonaws.com",
    port:"3306",
    user:"admin",
    password:"password",
    database:"mydb",
    
});

db.connect(err=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("Database connected")
});

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cloud Deployment</title>
    <script src="https://sdk.amazonaws.com/js/aws-sdk-2.1319.0.min.js"></script>
</head>
<body>
    <h1> Send Email </h1>
    <h3> From: mpriya1043@gmail.com </h3>
    <h3> To: nayanadg24@gmail.com </h3>
    <p> Subject: Amazon SaaS Email </p>
    <p> Content: Email sent </p>
    <button onclick="demo()">Send</button>
    <script>
        const configure={
            accessKeyId:"AKIAWIR7K4P4TFCLTQEI",
            secretAccessKey:"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",
            apiVersion:'2010-12-01',
            region:'us-east-1'
        }
        const ses = new AWS.SES(configure);

        function demo()
        {
            const params =
            {
                Destination:{
                    ToAddresses:[
                        "nayanadg24@gmail.com",
                    ]
                },
                Message:{
                    Body:{
                        Html:{
                            Charset:"UTF-8",
                            Data:"<h1>Email sent</h1>"
                        }
                    },
                    Subject:{
                    Charset:'UTF-8',
                    Data:"Amazon SaaS Email"
                }
                },
                
                Source:'mpriya1043@gmail.com'
            };
            ses.sendEmail(params,(err,data)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                console.log("Success")
            })
        }
    </script>
</body>
</html>
`
