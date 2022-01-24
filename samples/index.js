/**
 * Copyright (c) 2022, Iconicto Inc. (http://www.iconicto.com) All Rights Reserved.
 *
 * Iconicto Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const express = require("express");
const cookieParser = require("cookie-parser");
const { TextMeClient } = require("textme-sms-sdk");
const config = require("./config");

//Constants
const PORT = 5000;

//Initialize Express App
const app = express();
app.use(cookieParser());
app.use(express.json());

//Initialize the TextMe Client
const smsClient = new TextMeClient(config);

app.get("/", (req, res) => {
  res.status(200).send("Thank you for choosing TextMe.lk");
});

/* Read the `to` and `message` properties in the body and pass them to the client
    Eg: 
        {
            "to": "94771111111",
            "message": "Hello from TextMe SDK"
        }
*/
app.post("/send", (req, res) => {
  console.log(req.body);
  smsClient
    .sendSMS(req.body.to, req.body.message)
    .then((response) => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

/*
Read the SMS UID from the query paramers and pass into the client
Eg URL: http://localhost:5000/view?uid=61bd23rt4b8237e 
*/

app.get("/view", (req, res) => {
  smsClient
    .viewSMS(req.query.uid)
    .then((response) => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

//Get a list of all the SMS
app.get("/viewall", (req, res) => {
  smsClient
    .viewAllSMS()
    .then((response) => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

//Start the app and listen on PORT 5000
app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});
