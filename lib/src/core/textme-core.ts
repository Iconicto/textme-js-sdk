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

import { SERVICE_RESOURCES } from "../constants";
import { SMSException } from "../exception";
import { ClientConfig, SMSResponse, ViewAllSMSResponse } from "../models";
import { TextUtils } from "../utils";

export class TextMeCore {

    private _config: ClientConfig;

    constructor(config: ClientConfig) {
        this._config = config;
    }

    public async sendSMS(to: string, message: string): Promise<SMSResponse> {

        const smsResponse = await fetch(SERVICE_RESOURCES.sendSmsURL, {
            body: JSON.stringify({
                message: message,
                recipient: to,
                sender_id: this._config.senderID
            }),
            headers: TextUtils.getAuthorizationHeaders(this._config.apiKey),
            method: "POST"
        });

        if (smsResponse.status !== 200) {
            const apiError = smsResponse.json().toString();
            return Promise.reject(new SMSException(
                "SMS_CORE-SMS-NF",
                "textme-core",
                "sendSMS",
                "Failed to get a response from send SMS Endpoint",
                apiError
            ));
        }

        return Promise.resolve(smsResponse.json())

    }

    public async viewSMS(uid: string): Promise<SMSResponse> {

        const viewSmsResponse = await fetch(SERVICE_RESOURCES.viewSmsURL + `/${uid}`, {
            headers: TextUtils.getAuthorizationHeaders(this._config.apiKey),
            method: "GET"
        });

        if (viewSmsResponse.status !== 200) {
            const apiError = viewSmsResponse.json().toString();
            return Promise.reject(new SMSException(
                "SMS_CORE-VIEWSMS-NF",
                "textme-core",
                "viewSMS",
                "Failed to get a response from view SMS Endpoint",
                apiError
            ));
        }

        return Promise.resolve(viewSmsResponse.json())

    }

    public async viewAllSMS(): Promise<ViewAllSMSResponse> {

        const viewSmsResponse = await fetch(SERVICE_RESOURCES.viewSmsURL, {
            headers: TextUtils.getAuthorizationHeaders(this._config.apiKey),
            method: "GET"
        });

        if (viewSmsResponse.status !== 200) {
            const apiError = viewSmsResponse.json().toString();
            return Promise.reject(new SMSException(
                "SMS_CORE-VIEWSMS-NF",
                "textme-core",
                "viewAllSMS",
                "Failed to get a response from view all SMS Endpoint",
                apiError
            ));
        }

        return Promise.resolve(viewSmsResponse.json())

    }
}
