!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("cross-fetch")):"function"==typeof define&&define.amd?define(["exports","cross-fetch"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TextMeClient={},e.fetch$1)}(this,(function(e,t){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(t);
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function n(e,t,o,i){return new(o||(o=Promise))((function(n,s){function r(e){try{a(i.next(e))}catch(e){s(e)}}function c(e){try{a(i.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,c)}a((i=i.apply(e,t||[])).next())}))}const s="https://portal.textme.lk/api/v3/sms/send/",r="https://portal.textme.lk/api/v3/sms";class c extends Error{constructor(e,t,o,i,n,s){super(null!=i?i:s),this.name=this.constructor.name,this.code=e,this.file=t,this.method=o,this.description=n,this.error=s,Object.setPrototypeOf(this,new.target.prototype)}}class a{constructor(){}static getAuthorizationHeaders(e){return{Accept:"application/json",Authorization:`Bearer ${e}`,"Access-Control-Allow-Origin":"http://localhost:3000"}}}class d{constructor(e){this._config=e}sendSMS(e,t){return n(this,void 0,void 0,(function*(){const o=yield fetch(s,{body:JSON.stringify({message:t,recipient:e,sender_id:this._config.senderID}),credentials:"include",headers:a.getAuthorizationHeaders(this._config.apiKey),method:"POST"});if(200!==o.status){const e=o.json().toString();return Promise.reject(new c("SMS_CORE-SMS-NF","textme-core","sendSMS","Failed to get a response from send SMS Endpoint",e))}return Promise.resolve(o.json())}))}viewSMS(e){return n(this,void 0,void 0,(function*(){const t=yield fetch(r+`/${e}`,{headers:a.getAuthorizationHeaders(this._config.apiKey),method:"GET"});if(200!==t.status){const e=t.json().toString();return Promise.reject(new c("SMS_CORE-VIEWSMS-NF","textme-core","viewSMS","Failed to get a response from view SMS Endpoint",e))}return Promise.resolve(t.json())}))}viewAllSMS(){return n(this,void 0,void 0,(function*(){const e=yield fetch(r,{headers:a.getAuthorizationHeaders(this._config.apiKey),method:"GET"});if(200!==e.status){const t=e.json().toString();return Promise.reject(new c("SMS_CORE-VIEWSMS-NF","textme-core","viewAllSMS","Failed to get a response from view all SMS Endpoint",t))}return Promise.resolve(e.json())}))}}globalThis.fetch||(globalThis.fetch=i.default,globalThis.Headers=t.Headers,globalThis.Request=t.Request,globalThis.Response=t.Response),e.TextMeClient=class{
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
constructor(e){this._config=e,this._textMeCore=new d(this._config)}sendSMS(e,t){return n(this,void 0,void 0,(function*(){return this._textMeCore.sendSMS(e,t)}))}viewSMS(e){return n(this,void 0,void 0,(function*(){return this._textMeCore.viewSMS(e)}))}viewAllSMS(){return n(this,void 0,void 0,(function*(){return this._textMeCore.viewAllSMS()}))}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=textme.production.js.map
