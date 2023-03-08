const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://sdk.amazonaws.com/js/aws-sdk-2.1319.0.min.js"></script>
</head>
<body>
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
                            Data:"<h1>Testing</h1>"
                        }
                    },
                    Subject:{
                    Charset:'UTF-8',
                    Data:"Wap Institute"
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
