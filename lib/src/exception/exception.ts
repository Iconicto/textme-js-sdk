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

export class SMSException extends Error {
    public name: string;
    public code: string | undefined;
    public file: string;
    public method: string;
    public description: string | undefined;
    public error: string | undefined;

    public constructor(
        code: string | undefined,
        file: string,
        method: string,
        message?: string,
        description?: string,
        error?: string | undefined
    ) {
        super(message ?? error);
        this.name = this.constructor.name;
        this.code = code;
        this.file = file;
        this.method = method;
        this.description = description;
        this.error = error;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
