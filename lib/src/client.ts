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

import { TextMeCore } from "./core";
import { ClientConfig, SMSResponse, ViewAllSMSResponse } from "./models";

/**
 * This class provides the necessary methods needed to implement TextME SMS.
 *
 * @export
 * @class TextMeClient
*/
export class TextMeClient {

    private _config: ClientConfig;
    private _textMeCore: TextMeCore

    /**
    * This is the constructor method that returns an instance of the TextMeClient.
    *
    * @param {ClientConfig} config - The configuration object.
    *
    * @example
    * ```
    * const _config = {
            apiKey: "<Your API Key>",
            senderID: "<Your Sender ID>"
        };
    * const smsClient = new TextMeClient(config);
    * ```
    *
    * @link https://github.com/iconicto/textme-sms-sdk/tree/master#constructor
    * @preserve
    */
    constructor(config: ClientConfig) {
        this._config = config;
        this._textMeCore = new TextMeCore(this._config);
    }


    /**
     * This method send an outbound SMS.
     * @param {string} to - The recipient's phone number. (No special characters)
     * @param {String} message - The SMS message.
     *
     * @return {Promise<SMSResponse>} - A Promise that resolves with the
     * [`SMSResponse`](#SMSResponse) object.
     *
     * @example
     * ```
     * smsClient.sendSMS("94771111111", "Hello World")
        .then((response) => {
            console.log(response);
            res.status(200).send(response);
        })
        .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
     * ```
     *
     * @link https://github.com/iconicto/textme-sms-sdk/tree/master#sendSMS
     *
     * @memberof TextMeClient
     *
    */
    public async sendSMS(to: string, message: string): Promise<SMSResponse> {
        return this._textMeCore.sendSMS(to, message);
    }

    /**
     * This method will return a specific SMS.
     * @param {string} uid - The UID of the particular SMS you want to get
     *
     * @return {Promise<SMSResponse>} - A Promise that resolves with the
     * [`SMSResponse`](#SMSResponse) object.
     *
     * @example
     * ```
     * smsClient.viewSMS("61eeb48238752")
        .then((response) => {
            console.log(response);
            res.status(200).send(response);
        })
        .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
     * ```
     *
     * @link https://github.com/iconicto/textme-sms-sdk/tree/master#viewSMS
     *
     * @memberof TextMeClient
     *
    */
    public async viewSMS(uid: string): Promise<SMSResponse> {
        return this._textMeCore.viewSMS(uid);
    }

    /**
     * This method return all the SMSs sent.
     *
     * @return {Promise<SMSResponse>} - A Promise that resolves with the
     * [`ViewAllSMSResponse`](#ViewAllSMSResponse) object.
     *
     * @example
     * ```
     * smsClient.viewAllSMS()
        .then((response) => {
            console.log(response);
            res.status(200).send(response);
        })
        .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
     * ```
     *
     * @link https://github.com/iconicto/textme-sms-sdk/tree/master#viewAllSMS
     *
     * @memberof TextMeClient
     *
    */
    public async viewAllSMS(): Promise<ViewAllSMSResponse> {
        return this._textMeCore.viewAllSMS()
    }

}
