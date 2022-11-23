[![TextMe](https://portal.textme.lk/images/logo/ab25c4ade8c582f8896dad64c6ab258f.png)](https://portal.textme.lk)

# TextME Javascript SDK

![Builder](https://github.com/Iconicto/textme-js-sdk/workflows/Builder/badge.svg)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/Iconicto/textme-js-sdk/blob/master/LICENCE)
[![Twitter](https://img.shields.io/twitter/follow/Iconicto.svg?style=social&label=Follow)](https://twitter.com/tikirimaarie)


## Table of Content

- [Introduction](#introduction)
- [Prerequisite](#prerequisite)
- [Install](#install)
- [Getting Started](#getting-started)
- [APIs](#apis)
  - [constructor](#constructor)
  - [sendSMS](#sendSMS)
  - [viewSMS](#viewSMS)
  - [viewAllSMS](#viewAllSMS)
- [Models](#models)
  - [ClientConfig](#ClientConfig)
  - [ApiEndpoints](#ApiEndpoints)
  - [SMSResponse](#SMSResponse)
  - [ViewAllSMSResponse](#ViewAllSMSResponse)
  - [AllSMSData](#AllSMSData)
  - [AllSMSLink](#AllSMSLink)
- [Develop](#develop)
- [Contribute](#contribute)
- [License](#license)

## Introduction

Text Me SMS API allows you to send and receive SMS messages to and from any country in the world through a REST API. Each message is identified by a unique random ID so that users can always check the status of a message using the given endpoint.

## Prerequisite

Create an account in [TextMe](http://portal.textme.lk/) if you don't already have one. The sender ID you choose will be referred to as `<sender_id>` throughout this documentation.

## Install


Install the library from the npm registry.

```
npm install @iconicto/textme-js-sdk
```

Or simply load the SDK by importing the script into the header of your HTML file.

```javascript
<script src="https://unpkg.com/@iconicto/textme-js-sdk@0.0.1/dist/textme.production.js"></script>

<script>
    const smsclient = new TextMeClient.TextMeClient({
      apiKey: "4|rg6coE8RIS6lQeQf6IbvAna52f4gZqELZ3Bvl1Tp",
      senderID: "<sender_id>"
    });
</script>
```

## Getting Started 

### ExpressJS Example

```javascript
// The SDK provides a client that can be used to carry out the functionalities.
const { TextMeClient } = require('@iconicto/textme-js-sdk');

// Create a config object containing the necessary configurations.
const config = {
    apiKey: "API Key" ,
    senderID: "<sender_id>"
};

// Instantiate the TextMeClient and pass the config object as an argument into the constructor.
const textmeClient = new TextMeClient(config);

//If you are using ExpressJS, you may try something like this.
app.post("/send", (req, res) => {
  textmeClient
    .sendSMS(req.body.to, req.body.message)
    .then((response) => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
  });
});

```

### ReactJS Example
```javascript
// The SDK provides a client that can be used to carry out the functionalities.
import { TextMeClient } from "@iconicto/textme-js-sdk";

// Create a config object containing the necessary configurations.
const config = {
    apiKey: "API Key" ,
    senderID: "<sender_id>"
};
// Instantiate the TextMeClient and pass the config object as an argument into the constructor.
const smsclient = new TextMeClient(config);

//Send an SMS
const sendSMS = () => {
  smsclient
    .sendSMS("94771655198", "Hello World")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

sendSMS();

```



## APIs

The SDK provides a client class called `TextMeClient` that provides you with the necessary methods to implement the functionalities.
You can instantiate the class and use the object to access the provided methods.

### constructor

```TypeScript
new TextMeClient(config: ClientConfig);
```

#### Arguments

1. config: [`ClientConfig`](#ClientConfig)

   This contains the configuration information needed to implement the functionalities.

   #### Example

   ```TypeScript
   const config = {
        apiKey: "API Key" ,
        senderID: "<sender_id>"
    };
   ```
---

### sendSMS

```Typescript
sendSMS(to: string, message: string): Promise<SMSResponse>
```

#### Arguments

1. to: `string`

   This is the recipient's phone number. Please note that special characters (Eg: +, -) are not allowed.
   The correct format is as follows.
   `94777111111 (Sri Lanka)`

2. message: `string`

   This SMS text you want to send in.


#### Returns

A Promise that resolves with a Promise that resolves with the [`SMSResponse`](#SMSResponse) object.

#### Description

This method can be used to send a single SMS to a specific user.

#### Example (Express JS)

```Typescript
textmeClient
    .sendSMS(req.body.to, req.body.message)
    .then((response) => {
        console.log(response);
        res.status(200).send(response);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send(err);
});
```

---

### viewSMS

```TypeScript
viewSMS(uid: string): Promise<SMSResponse>
```
#### Arguments

1. uid: `string`

   The UID of the particular message that needs to be viewed.


#### Returns

A Promise that resolves with a Promise that resolves with the [`SMSResponse`](#SMSResponse) object.


#### Description

This method can be used to view a specific message. It takes the UID of a messsage as the argument and returns a [`SMSResponse`](#SMSResponse) object of the relevant SMS.

#### Example (Express JS)


```TypeScript
textmeClient
    .viewSMS(req.query.uid)
    .then((response) => {
        console.log(response);
        res.status(200).send(response);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send(err);
    });
```

---

### viewAllSMS

```TypeScript
viewAllSMS(): Promise<ViewAllSMSResponse>
```

#### Returns

A Promise that resolves with a Promise that resolves with the [`ViewAllSMSResponse`](#ViewAllSMSResponse) object.


#### Description

This method returns all the SMSs that have been sent from the user's account.

#### Example (Express JS)

```TypeScript
textmeClient
    .viewAllSMS()
    .then((response) => {
        console.log(response);
        res.status(200).send(response);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send(err);
    });
```
---

## Models

### ClientConfig

This model has the following attributes.
| Attribute         | Type     | Description                 |
| -------------- | -------- | --------------------------- |
| `apiKey`  | `string` | The API Key for the TextMe platform.           |
| `senderId`      | `string` | The sender ID associated with TextMe account.               |

### SMSResponse

This model has the following attributes.
| Attribute         | Type     | Description                 |
| -------------- | -------- | --------------------------- |
| `status`  | `string` | The status code of the response.           |
| `message`      | `string` | The status message of the response.               |
| `data`    | `SMSResponseData` | The data portion of the response. |

---

### SMSResponseData

This model has the following attributes.
| Attribute         | Type     | Description                 |
| -------------- | -------- | --------------------------- |
| `uid`  | `string` | The UID of the message.           |
| `to`      | `string` | The recipient of the message.               |
| `from`    | `SMSResponseData` | The sender of the message. |
| `message`    | `SMSResponseData` | The message string. |
| `status`    | `SMSResponseData` | The message status. |
| `cost`    | `SMSResponseData` | The cost of the message. |

---

### ViewAllSMSResponse

This model has the following attributes.
| Attribute         | Type     | Description                 |
| -------------- | -------- | --------------------------- |
| `status`  | `string` | The status code of the response.           |
| `message`      | `string` | The status message of the response.               |
| `data`    | `AllSMSData` | The data portion of the response. |

---

### AllSMSData

This model has the following attributes.
| Attribute         | Type     | Description                 |
| -------------- | -------- | --------------------------- |
| `current_page`  | `number` | The current index of the page.           |
| `data`      | `SMSResponseData[]` | The data array of the response.               |
| `first_page_url`    | `string` | The URL of the first page of the results. |
| `from`    | `string` | The sender. |
| `last_page`    | `number` | The index of the last page of results. |
| `links`    | `AllSMSLink` | Pagination URL list. |
| `next_page_url`    | `string` | The URL of the next page of the results. |
| `path`    | `string` | The base URL of the API request. |
| `per_page`    | `number` | Results per page. |
| `prev_page_url`    | `string` | The URL of the previous page of the results. |
| `to`    | `number` | The recipient of the message. |
| `total`    | `string` | The total number of pages. |

---

### AllSMSLink

This model has the following attributes.
| Attribute         | Type     | Description                 |
| -------------- | -------- | --------------------------- |
| `url`  | `null | string` | The pagination URL.           |
| `label`      | `string` | The pagination page number.               |
| `active`    | `boolean` | If the URL is active or not |

---

## Develop

### Prerequisites

- `Node.js` (version 10 or above).
- `npm` package manager.

### Installing Dependencies

The repository is a mono repository. The SDK repository is found in the [lib](https://github.com/Iconicto/textme-sms-sdk/issues/tree/master/lib) directory. You can install the dependencies by running the following command at the root.

```
npm run build
```

## Contribute

Please read [Contributing to the Code Base](https://iconicto.com/) for details on our code of conduct, and the process for submitting pull requests to us.

### Reporting issues

We encourage you to report issues, improvements, and feature requests creating [Github Issues](https://github.com/Iconicto/textme-sms-sdk/issues).

Important: And please be advised that security issues must be reported to security@Iconicto.com, not as GitHub issues, in order to reach the proper audience. We strongly advise following the Iconicto Security Vulnerability Reporting Guidelines when reporting the security issues.

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
