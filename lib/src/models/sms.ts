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

export interface SMSResponse {
    status: string,
    message: string,
    data: SMSResponseData
}

export interface SMSResponseData {
    uid: string,
    to: string,
    from: string,
    message: string,
    status: string,
    cost: number
}

export interface ViewAllSMSResponse {
    status: string;
    message: string;
    data: AllSMSData;
}

export interface AllSMSData {
    current_page: number;
    data: SMSResponseData[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: AllSMSLink[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
}

export interface AllSMSLink {
    url: null | string;
    label: string;
    active: boolean;
}

