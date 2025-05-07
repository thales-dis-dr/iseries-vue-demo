
var webapi = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(webapi) {
  webapi = webapi || {};



// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof webapi !== 'undefined' ? webapi : {};


// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
/*!
 * EventEmitter v5.2.8 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - https://oli.me.uk/
 * @preserve
 */
!function(e){"use strict";function t(){}function n(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function r(e){return function(){return this[e].apply(this,arguments)}}function i(e){return"function"==typeof e||e instanceof RegExp||!(!e||"object"!=typeof e)&&i(e.listener)}var s=t.prototype,o=e.EventEmitter;s.getListeners=function(e){var t,n,r=this._getEvents();if(e instanceof RegExp){t={};for(n in r)r.hasOwnProperty(n)&&e.test(n)&&(t[n]=r[n])}else t=r[e]||(r[e]=[]);return t},s.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},s.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},s.addListener=function(e,t){if(!i(t))throw new TypeError("listener must be a function");var r,s=this.getListenersAsObject(e),o="object"==typeof t;for(r in s)s.hasOwnProperty(r)&&-1===n(s[r],t)&&s[r].push(o?t:{listener:t,once:!1});return this},s.on=r("addListener"),s.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},s.once=r("addOnceListener"),s.defineEvent=function(e){return this.getListeners(e),this},s.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},s.removeListener=function(e,t){var r,i,s=this.getListenersAsObject(e);for(i in s)s.hasOwnProperty(i)&&-1!==(r=n(s[i],t))&&s[i].splice(r,1);return this},s.off=r("removeListener"),s.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},s.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},s.manipulateListeners=function(e,t,n){var r,i,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(r=n.length;r--;)s.call(this,t,n[r]);else for(r in t)t.hasOwnProperty(r)&&(i=t[r])&&("function"==typeof i?s.call(this,r,i):o.call(this,r,i));return this},s.removeEvent=function(e){var t,n=typeof e,r=this._getEvents();if("string"===n)delete r[e];else if(e instanceof RegExp)for(t in r)r.hasOwnProperty(t)&&e.test(t)&&delete r[t];else delete this._events;return this},s.removeAllListeners=r("removeEvent"),s.emitEvent=function(e,t){var n,r,i,s,o=this.getListenersAsObject(e);for(s in o)if(o.hasOwnProperty(s))for(n=o[s].slice(0),i=0;i<n.length;i++)r=n[i],!0===r.once&&this.removeListener(e,r.listener),r.listener.apply(this,t||[])===this._getOnceReturnValue()&&this.removeListener(e,r.listener);return this},s.trigger=r("emitEvent"),s.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},s.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},s._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},s._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return e.EventEmitter=o,t},"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:e.EventEmitter=t}("undefined"!=typeof window?window:this||{});
// "use strict";
//if(!exports) exports={};
//Object.defineProperty(exports, "__esModule", { value: true });
var ConnectionEvents = {};
(function (ConnectionEvents) {
    ConnectionEvents[ConnectionEvents["OK"] = 0] = "OK";
    ConnectionEvents[ConnectionEvents["CONNECT"] = 1] = "CONNECT";
    ConnectionEvents[ConnectionEvents["CONNECTED"] = 2] = "CONNECTED";
    ConnectionEvents[ConnectionEvents["CLOSE"] = 3] = "CLOSE";
    ConnectionEvents[ConnectionEvents["CLOSED"] = 4] = "CLOSED";
    ConnectionEvents[ConnectionEvents["CAPTURE"] = 5] = "CAPTURE";
    ConnectionEvents[ConnectionEvents["CAPTURED"] = 6] = "CAPTURED";
    ConnectionEvents[ConnectionEvents["DISCONNECT"] = 7] = "DISCONNECT";
    ConnectionEvents[ConnectionEvents["NOT_AUTHORIZED"] = 8] = "NOT_AUTHORIZED";
    ConnectionEvents[ConnectionEvents["SESSION_OPEN"] = 9] = "SESSION_OPEN";
    ConnectionEvents[ConnectionEvents["SESSION_OPENED"] = 10] = "SESSION_OPENED";
    ConnectionEvents[ConnectionEvents["SESSION_CLOSE"] = 11] = "SESSION_CLOSE";
    ConnectionEvents[ConnectionEvents["SESSION_CLOSED"] = 12] = "SESSION_CLOSED";
    ConnectionEvents[ConnectionEvents["CAPTURE_ERROR"] = 13] = "CAPTURE_ERROR";
    ConnectionEvents[ConnectionEvents["INVALID_SESSION"] = 14] = "INVALID_SESSION";
    ConnectionEvents[ConnectionEvents["SESSION_IN_USE"] = 15] = "SESSION_IN_USE";
    ConnectionEvents[ConnectionEvents["RETRIEVE_IMAGE"] = 16] = "RETRIEVE_IMAGE";
    ConnectionEvents[ConnectionEvents["RETURNED_IMAGE"] = 17] = "RETURNED_IMAGE";
    ConnectionEvents[ConnectionEvents["RETRIEVE_BARCODE"] = 18] = "RETRIEVE_BARCODE";
    ConnectionEvents[ConnectionEvents["RETURNED_BARCODE"] = 19] = "RETURNED_BARCODE";
    ConnectionEvents[ConnectionEvents["RETRIEVE_MRZ"] = 20] = "RETRIEVE_MRZ";
    ConnectionEvents[ConnectionEvents["RETURNED_MRZ"] = 21] = "RETURNED_MRZ";
    ConnectionEvents[ConnectionEvents["INVALID_KEY"] = 22] = "INVALID_KEY";
    ConnectionEvents[ConnectionEvents["CAPTURE_DOCFOUND"] = 23] = "CAPTURE_DOCFOUND";
    ConnectionEvents[ConnectionEvents["CAPTURE_IMAGE_CAPTURED"] = 24] = "CAPTURE_IMAGE_CAPTURED";
    ConnectionEvents[ConnectionEvents["CAPTURE_MRZ"] = 25] = "CAPTURE_MRZ";
    ConnectionEvents[ConnectionEvents["CAPTURE_BARCODE"] = 26] = "CAPTURE_BARCODE";
    ConnectionEvents[ConnectionEvents["RETRIEVE_ERROR"] = 27] = "RETRIEVE_ERROR";
    ConnectionEvents[ConnectionEvents["INVALID_COMMAND"] = 28] = "INVALID_COMMAND";
    ConnectionEvents[ConnectionEvents["CAPTURE_SMARTCARD_FILE"] = 29] = "CAPTURE_SMARTCARD_FILE";
    ConnectionEvents[ConnectionEvents["GET_EXTRADATA"] = 30] = "GET_EXTRADATA";
    ConnectionEvents[ConnectionEvents["EXTRADATA"] = 31] = "EXTRADATA";
    ConnectionEvents[ConnectionEvents["GET_SETTINGS"] = 32] = "GET_SETTINGS";
    ConnectionEvents[ConnectionEvents["RETURNED_SETTINGS"] = 33] = "RETURNED_SETTINGS";
    ConnectionEvents[ConnectionEvents["GET_SETTINGS_ERROR"] = 34] = "GET_SETTINGS_ERROR";
    ConnectionEvents[ConnectionEvents["SET_SETTINGS"] = 35] = "SET_SETTINGS";
    ConnectionEvents[ConnectionEvents["SETTINGS_UPDATED"] = 36] = "SETTINGS_UPDATED";
    ConnectionEvents[ConnectionEvents["SET_SETTINGS_ERROR"] = 37] = "SET_SETTINGS_ERROR";
    ConnectionEvents[ConnectionEvents["CAPTURE_STOP"] = 38] = "CAPTURE_STOP";
    ConnectionEvents[ConnectionEvents["CAPTURE_STOPPED"] = 39] = "CAPTURE_STOPPED";
    ConnectionEvents[ConnectionEvents["CAPTURE_STOP_ERROR"] = 40] = "CAPTURE_STOP_ERROR";
    ConnectionEvents[ConnectionEvents["CAPTURE_AAMVA"] = 41] = "CAPTURE_AAMVA";
    ConnectionEvents[ConnectionEvents["LISTEN_START"] = 42] = "LISTEN_START";
    ConnectionEvents[ConnectionEvents["LISTEN_STOP"] = 43] = "LISTEN_STOP";
    ConnectionEvents[ConnectionEvents["LISTEN_STARTED"] = 44] = "LISTEN_STARTED";
    ConnectionEvents[ConnectionEvents["LISTEN_STOPPED"] = 45] = "LISTEN_STOPPED";
    ConnectionEvents[ConnectionEvents["EVENT"] = 46] = "EVENT";
    ConnectionEvents[ConnectionEvents["GET_LOGS"] = 47] = "GET_LOGS";
    ConnectionEvents[ConnectionEvents["RETURNED_LOGS"] = 48] = "RETURNED_LOGS";
    ConnectionEvents[ConnectionEvents["GET_LOGS_ERROR"] = 49] = "GET_LOGS_ERROR";
    ConnectionEvents[ConnectionEvents["CAPTURE_DATA"] = 50] = "CAPTURE_DATA";
    ConnectionEvents[ConnectionEvents["CAPTURE_DATA_CAPTURED"] = 51] = "CAPTURE_DATA_CAPTURED";
    ConnectionEvents[ConnectionEvents["RETRIEVE_DATA"] = 52] = "RETRIEVE_DATA";
    ConnectionEvents[ConnectionEvents["RETURNED_DATA"] = 53] = "RETURNED_DATA";
    ConnectionEvents[ConnectionEvents["LISTEN_ERROR_START"] = 54] = "LISTEN_ERROR_START";
    ConnectionEvents[ConnectionEvents["LISTEN_ERROR_STOP"] = 55] = "LISTEN_ERROR_STOP";
    ConnectionEvents[ConnectionEvents["LISTEN_ERROR_STARTED"] = 56] = "LISTEN_ERROR_STARTED";
    ConnectionEvents[ConnectionEvents["LISTEN_ERROR_STOPPED"] = 57] = "LISTEN_ERROR_STOPPED";
    ConnectionEvents[ConnectionEvents["ERROR"] = 58] = "ERROR";
    ConnectionEvents[ConnectionEvents["INTERNAL_ERROR"] = 59] = "INTERNAL_ERROR";
    ConnectionEvents[ConnectionEvents["UNPROVISIONED_DEVICE"] = 60] = "UNPROVISIONED_DEVICE";
    ConnectionEvents[ConnectionEvents["ASSUREID_CREDENTIALS"] = 61] = "ASSUREID_CREDENTIALS";
    ConnectionEvents[ConnectionEvents["ASSUREID_VERIFY_DOCUMENT"] = 62] = "ASSUREID_VERIFY_DOCUMENT";
    ConnectionEvents[ConnectionEvents["ASSUREID_RETRIEVE_RESULTS"] = 63] = "ASSUREID_RETRIEVE_RESULTS";
    ConnectionEvents[ConnectionEvents["ASSUREID_INSTANCE_ID"] = 64] = "ASSUREID_INSTANCE_ID";
    ConnectionEvents[ConnectionEvents["ASSUREID_RESULTS"] = 65] = "ASSUREID_RESULTS";
    ConnectionEvents[ConnectionEvents["ASSUREID_ERROR"] = 66] = "ASSUREID_ERROR";
    ConnectionEvents[ConnectionEvents["DEVICE_INFO"] = 70] = "DEVICE_INFO";
    ConnectionEvents[ConnectionEvents["FIRMWARE_UPDATE"] = 71] = "FIRMWARE_UPDATE";
    ConnectionEvents[ConnectionEvents["FIRMWARE_UPDATE_RESULT"] = 72] = "FIRMWARE_UPDATE_RESULT";
    ConnectionEvents[ConnectionEvents["CHECK_FIRMWARE_UPDATE"] = 73] = "CHECK_FIRMWARE_UPDATE";
    ConnectionEvents[ConnectionEvents["CHECK_FIRMWARE_UPDATE_RESULT"] = 74] = "CHECK_FIRMWARE_UPDATE_RESULT";
    ConnectionEvents[ConnectionEvents["LISTEN_UPDATE_START"] = 75] = "LISTEN_UPDATE_START";
    ConnectionEvents[ConnectionEvents["LISTEN_UPDATE_STARTED"] = 76] = "LISTEN_UPDATE_STARTED";
    ConnectionEvents[ConnectionEvents["LISTEN_UPDATE_STOP"] = 76] = "LISTEN_UPDATE_STOP";
    ConnectionEvents[ConnectionEvents["LISTEN_UPDATE_STOPPED"] = 77] = "LISTEN_UPDATE_STOPPED";
    ConnectionEvents[ConnectionEvents["UPDATE_STATUS"] = 78] = "UPDATE_STATUS";
    ConnectionEvents[ConnectionEvents["UPLOAD"] = 79] = "UPLOAD";
    ConnectionEvents[ConnectionEvents["UPLOAD_RECEIVED"] = 80] = "UPLOAD_RECEIVED";
    ConnectionEvents[ConnectionEvents["REBOOT"] = 81] = "REBOOT";
    ConnectionEvents[ConnectionEvents["REBOOTING"] = 82] = "REBOOTING";
    ConnectionEvents[ConnectionEvents['LISTEN_UPDATE_STOP']=83]='LISTEN_UPDATE_STOP';   
    ConnectionEvents[ConnectionEvents['CLEAR_DATA']=84]='CLEAR_DATA';
    ConnectionEvents[ConnectionEvents['PROVISION']=85]='PROVISION';
    ConnectionEvents[ConnectionEvents['PROVISIONED']=86]='PROVISIONED';   
    ConnectionEvents[ConnectionEvents['UNPROVISION']=87]='UNPROVISION'; 
    ConnectionEvents[ConnectionEvents['UNPROVISIONED']=88]='UNPROVISIONED';   
    ConnectionEvents[ConnectionEvents['GET_TOKEN']=89]='GET_TOKEN';
    ConnectionEvents[ConnectionEvents['TOKEN']=90]='TOKEN';
    ConnectionEvents[ConnectionEvents['AUTHENTICATE']=91]='AUTHENTICATE';
    ConnectionEvents[ConnectionEvents['AUTHENTICATED']=92]='AUTHENTICATED';  
    ConnectionEvents[ConnectionEvents['INVALID_TOKEN']=93]='INVALID_TOKEN';
})(ConnectionEvents);


var ReaderDataTypes = {};
    (function (ReaderDataTypes) {
    ReaderDataTypes[ReaderDataTypes["SCDG1_CODELINE"] = 0] = "SCDG1_CODELINE";
    ReaderDataTypes[ReaderDataTypes["SCDG1_CODELINE_DATA"] = 1] = "SCDG1_CODELINE_DATA";
    ReaderDataTypes[ReaderDataTypes["SCDG2_PHOTO"] = 2] = "SCDG2_PHOTO";
    ReaderDataTypes[ReaderDataTypes["SCDG3_FINGERPRINTS"] = 3] = "SCDG3_FINGERPRINTS";
    ReaderDataTypes[ReaderDataTypes["SCDG1_VALIDATE"] = 4] = "SCDG1_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG2_VALIDATE"] = 5] = "SCDG2_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG3_VALIDATE"] = 6] = "SCDG3_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG4_VALIDATE"] = 7] = "SCDG4_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG5_VALIDATE"] = 8] = "SCDG5_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG6_VALIDATE"] = 9] = "SCDG6_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG7_VALIDATE"] = 10] = "SCDG7_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG8_VALIDATE"] = 11] = "SCDG8_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG9_VALIDATE"] = 12] = "SCDG9_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG10_VALIDATE"] = 13] = "SCDG10_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG11_VALIDATE"] = 14] = "SCDG11_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG12_VALIDATE"] = 15] = "SCDG12_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG13_VALIDATE"] = 16] = "SCDG13_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG14_VALIDATE"] = 17] = "SCDG14_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG15_VALIDATE"] = 18] = "SCDG15_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG16_VALIDATE"] = 19] = "SCDG16_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCSIGNEDATTRS_VALIDATE"] = 20] = "SCSIGNEDATTRS_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCSIGNATURE_VALIDATE"] = 21] = "SCSIGNATURE_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCAIRBAUD"] = 22] = "SCAIRBAUD";
    ReaderDataTypes[ReaderDataTypes["SCCHIPID"] = 23] = "SCCHIPID";
    ReaderDataTypes[ReaderDataTypes["SCEF_COM_FILE"] = 24] = "SCEF_COM_FILE";
    ReaderDataTypes[ReaderDataTypes["SCEF_SOD_FILE"] = 25] = "SCEF_SOD_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG1_FILE"] = 26] = "SCDG1_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG2_FILE"] = 27] = "SCDG2_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG3_FILE"] = 28] = "SCDG3_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG4_FILE"] = 29] = "SCDG4_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG5_FILE"] = 30] = "SCDG5_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG6_FILE"] = 31] = "SCDG6_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG7_FILE"] = 32] = "SCDG7_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG8_FILE"] = 33] = "SCDG8_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG9_FILE"] = 34] = "SCDG9_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG10_FILE"] = 35] = "SCDG10_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG11_FILE"] = 36] = "SCDG11_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG12_FILE"] = 37] = "SCDG12_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG13_FILE"] = 38] = "SCDG13_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG14_FILE"] = 39] = "SCDG14_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG15_FILE"] = 40] = "SCDG15_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG16_FILE"] = 41] = "SCDG16_FILE";
    ReaderDataTypes[ReaderDataTypes["SCEF_CVCA_FILE"] = 42] = "SCEF_CVCA_FILE";
    ReaderDataTypes[ReaderDataTypes["SCBAC_STATUS"] = 43] = "SCBAC_STATUS";
    ReaderDataTypes[ReaderDataTypes["ACTIVE_AUTHENTICATION"] = 44] = "ACTIVE_AUTHENTICATION";
    ReaderDataTypes[ReaderDataTypes["VALIDATE_DOC_SIGNER_CERT"] = 45] = "VALIDATE_DOC_SIGNER_CERT";
    ReaderDataTypes[ReaderDataTypes["SCTERMINAL_AUTHENTICATION_STATUS"] = 46] = "SCTERMINAL_AUTHENTICATION_STATUS";
    ReaderDataTypes[ReaderDataTypes["SCCHIP_AUTHENTICATION_STATUS"] = 47] = "SCCHIP_AUTHENTICATION_STATUS";
    ReaderDataTypes[ReaderDataTypes["SCCROSSCHECK_EFCOM_EFSOD"] = 48] = "SCCROSSCHECK_EFCOM_EFSOD";
    ReaderDataTypes[ReaderDataTypes["PASSIVE_AUTHENTICATION"] = 49] = "PASSIVE_AUTHENTICATION";
    ReaderDataTypes[ReaderDataTypes["SAC_STATUS"] = 50] = "SAC_STATUS";
    ReaderDataTypes[ReaderDataTypes["SCEF_CARD_ACCESS_FILE"] = 51] = "SCEF_CARD_ACCESS_FILE";
    ReaderDataTypes[ReaderDataTypes["EFCOM_DG_MAP"] = 52] = "EFCOM_DG_MAP";
    ReaderDataTypes[ReaderDataTypes["EFSOD_HASH_MAP"] = 53] = "EFSOD_HASH_MAP";
    ReaderDataTypes[ReaderDataTypes["DOC_SIGNER_CERT"] = 54] = "DOC_SIGNER_CERT";
    ReaderDataTypes[ReaderDataTypes["SCDG1_EID_DOCUMENT_TYPE"] = 55] = "SCDG1_EID_DOCUMENT_TYPE";
    ReaderDataTypes[ReaderDataTypes["SCDG2_EID_ISSUING_ENTITY"] = 56] = "SCDG2_EID_ISSUING_ENTITY";
    ReaderDataTypes[ReaderDataTypes["SCDG3_EID_VALIDITY_PERIOD"] = 57] = "SCDG3_EID_VALIDITY_PERIOD";
    ReaderDataTypes[ReaderDataTypes["SCDG4_EID_GIVEN_NAMES"] = 58] = "SCDG4_EID_GIVEN_NAMES";
    ReaderDataTypes[ReaderDataTypes["SCDG5_EID_FAMILY_NAMES"] = 59] = "SCDG5_EID_FAMILY_NAMES";
    ReaderDataTypes[ReaderDataTypes["SCDG6_EID_NOM_DE_PLUME"] = 60] = "SCDG6_EID_NOM_DE_PLUME";
    ReaderDataTypes[ReaderDataTypes["SCDG7_EID_ACADEMIC_TITLE"] = 61] = "SCDG7_EID_ACADEMIC_TITLE";
    ReaderDataTypes[ReaderDataTypes["SCDG8_EID_DATE_OF_BIRTH"] = 62] = "SCDG8_EID_DATE_OF_BIRTH";
    ReaderDataTypes[ReaderDataTypes["SCDG9_EID_PLACE_OF_BIRTH"] = 63] = "SCDG9_EID_PLACE_OF_BIRTH";
    ReaderDataTypes[ReaderDataTypes["SCDG10_EID_NATIONALITY"] = 64] = "SCDG10_EID_NATIONALITY";
    ReaderDataTypes[ReaderDataTypes["SCDG11_EID_SEX"] = 65] = "SCDG11_EID_SEX";
    ReaderDataTypes[ReaderDataTypes["SCDG12_EID_OPTIONAL_DATA_R"] = 66] = "SCDG12_EID_OPTIONAL_DATA_R";
    ReaderDataTypes[ReaderDataTypes["SCDG13_EID_BIRTH_NAME"] = 67] = "SCDG13_EID_BIRTH_NAME";
    ReaderDataTypes[ReaderDataTypes["SCDG14_EID_WRITTEN_SIGNATURE"] = 68] = "SCDG14_EID_WRITTEN_SIGNATURE";
    ReaderDataTypes[ReaderDataTypes["SCDG17_EID_PLACE_OF_RESIDENCE"] = 69] = "SCDG17_EID_PLACE_OF_RESIDENCE";
    ReaderDataTypes[ReaderDataTypes["SCDG18_EID_MUNICIPALITY_ID"] = 70] = "SCDG18_EID_MUNICIPALITY_ID";
    ReaderDataTypes[ReaderDataTypes["SCDG19_EID_RESIDENCE_PERMIT_1"] = 71] = "SCDG19_EID_RESIDENCE_PERMIT_1";
    ReaderDataTypes[ReaderDataTypes["SCDG20_EID_RESIDENCE_PERMIT_2"] = 72] = "SCDG20_EID_RESIDENCE_PERMIT_2";
    ReaderDataTypes[ReaderDataTypes["SCDG21_EID_OPTIONAL_DATA_RW"] = 73] = "SCDG21_EID_OPTIONAL_DATA_RW";
    ReaderDataTypes[ReaderDataTypes["SCDG1_VALIDATE_EID"] = 74] = "SCDG1_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG2_VALIDATE_EID"] = 75] = "SCDG2_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG3_VALIDATE_EID"] = 76] = "SCDG3_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG4_VALIDATE_EID"] = 77] = "SCDG4_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG5_VALIDATE_EID"] = 78] = "SCDG5_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG6_VALIDATE_EID"] = 79] = "SCDG6_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG7_VALIDATE_EID"] = 80] = "SCDG7_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG8_VALIDATE_EID"] = 81] = "SCDG8_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG9_VALIDATE_EID"] = 82] = "SCDG9_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG10_VALIDATE_EID"] = 83] = "SCDG10_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG11_VALIDATE_EID"] = 84] = "SCDG11_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG12_VALIDATE_EID"] = 85] = "SCDG12_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG13_VALIDATE_EID"] = 86] = "SCDG13_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG14_VALIDATE_EID"] = 87] = "SCDG14_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG15_VALIDATE_EID"] = 88] = "SCDG15_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG16_VALIDATE_EID"] = 89] = "SCDG16_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG17_VALIDATE_EID"] = 90] = "SCDG17_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG18_VALIDATE_EID"] = 91] = "SCDG18_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG19_VALIDATE_EID"] = 92] = "SCDG19_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG20_VALIDATE_EID"] = 93] = "SCDG20_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG21_VALIDATE_EID"] = 94] = "SCDG21_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG22_VALIDATE_EID"] = 95] = "SCDG22_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCSIGNEDATTRS_VALIDATE_CARD_SECURITY_FILE"] = 96] = "SCSIGNEDATTRS_VALIDATE_CARD_SECURITY_FILE";
    ReaderDataTypes[ReaderDataTypes["SCSIGNEDATTRS_VALIDATE_CHIP_SECURITY_FILE"] = 97] = "SCSIGNEDATTRS_VALIDATE_CHIP_SECURITY_FILE";
    ReaderDataTypes[ReaderDataTypes["SCSIGNATURE_VALIDATE_CARD_SECURITY_FILE"] = 98] = "SCSIGNATURE_VALIDATE_CARD_SECURITY_FILE";
    ReaderDataTypes[ReaderDataTypes["SCSIGNATURE_VALIDATE_CHIP_SECURITY_FILE"] = 99] = "SCSIGNATURE_VALIDATE_CHIP_SECURITY_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG1_FILE_EID"] = 100] = "SCDG1_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG2_FILE_EID"] = 101] = "SCDG2_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG3_FILE_EID"] = 102] = "SCDG3_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG4_FILE_EID"] = 103] = "SCDG4_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG5_FILE_EID"] = 104] = "SCDG5_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG6_FILE_EID"] = 105] = "SCDG6_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG7_FILE_EID"] = 106] = "SCDG7_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG8_FILE_EID"] = 107] = "SCDG8_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG9_FILE_EID"] = 108] = "SCDG9_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG10_FILE_EID"] = 109] = "SCDG10_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG11_FILE_EID"] = 110] = "SCDG11_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG12_FILE_EID"] = 111] = "SCDG12_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG13_FILE_EID"] = 112] = "SCDG13_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG14_FILE_EID"] = 113] = "SCDG14_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG15_FILE_EID"] = 114] = "SCDG15_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG16_FILE_EID"] = 115] = "SCDG16_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG17_FILE_EID"] = 116] = "SCDG17_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG18_FILE_EID"] = 117] = "SCDG18_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG19_FILE_EID"] = 118] = "SCDG19_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG20_FILE_EID"] = 119] = "SCDG20_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG21_FILE_EID"] = 120] = "SCDG21_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG22_FILE_EID"] = 121] = "SCDG22_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["VALIDATE_DOC_SIGNER_CERT_CARD_SECURITY_FILE"] = 122] = "VALIDATE_DOC_SIGNER_CERT_CARD_SECURITY_FILE";
    ReaderDataTypes[ReaderDataTypes["VALIDATE_DOC_SIGNER_CERT_CHIP_SECURITY_FILE"] = 123] = "VALIDATE_DOC_SIGNER_CERT_CHIP_SECURITY_FILE";
    ReaderDataTypes[ReaderDataTypes["SCEF_CHIP_SECURITY_FILE"] = 124] = "SCEF_CHIP_SECURITY_FILE";
    ReaderDataTypes[ReaderDataTypes["SCEF_CARD_SECURITY_FILE"] = 125] = "SCEF_CARD_SECURITY_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG1_FILE_EDL"] = 126] = "SCDG1_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG2_FILE_EDL"] = 127] = "SCDG2_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG3_FILE_EDL"] = 128] = "SCDG3_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG4_FILE_EDL"] = 129] = "SCDG4_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG5_FILE_EDL"] = 130] = "SCDG5_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG6_FILE_EDL"] = 131] = "SCDG6_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG7_FILE_EDL"] = 132] = "SCDG7_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG8_FILE_EDL"] = 133] = "SCDG8_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG9_FILE_EDL"] = 134] = "SCDG9_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG10_FILE_EDL"] = 135] = "SCDG10_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG11_FILE_EDL"] = 136] = "SCDG11_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG12_FILE_EDL"] = 137] = "SCDG12_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG13_FILE_EDL"] = 138] = "SCDG13_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG14_FILE_EDL"] = 139] = "SCDG14_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG1_VALIDATE_EDL"] = 140] = "SCDG1_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG2_VALIDATE_EDL"] = 141] = "SCDG2_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG3_VALIDATE_EDL"] = 142] = "SCDG3_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG4_VALIDATE_EDL"] = 143] = "SCDG4_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG5_VALIDATE_EDL"] = 144] = "SCDG5_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG6_VALIDATE_EDL"] = 145] = "SCDG6_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG7_VALIDATE_EDL"] = 146] = "SCDG7_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG8_VALIDATE_EDL"] = 147] = "SCDG8_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG9_VALIDATE_EDL"] = 148] = "SCDG9_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG10_VALIDATE_EDL"] = 149] = "SCDG10_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG11_VALIDATE_EDL"] = 150] = "SCDG11_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG12_VALIDATE_EDL"] = 151] = "SCDG12_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG13_VALIDATE_EDL"] = 152] = "SCDG13_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG14_VALIDATE_EDL"] = 153] = "SCDG14_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG1_EDL_DATA"] = 154] = "SCDG1_EDL_DATA";
    ReaderDataTypes[ReaderDataTypes["SCDG6_EDL_PHOTO"] = 155] = "SCDG6_EDL_PHOTO";
    ReaderDataTypes[ReaderDataTypes["SCDG7_EDL_FINGERPRINTS"] = 156] = "SCDG7_EDL_FINGERPRINTS";
    ReaderDataTypes[ReaderDataTypes["BACKEY_CORRECTION"] = 157] = "BACKEY_CORRECTION";
    ReaderDataTypes[ReaderDataTypes["CODELINE"] = 158] = "CODELINE";
    ReaderDataTypes[ReaderDataTypes["CODELINE_DATA"] = 159] = "CODELINE_DATA";
    ReaderDataTypes[ReaderDataTypes["CHECKSUM"] = 160] = "CHECKSUM";
    ReaderDataTypes[ReaderDataTypes["CHECKSUMEXTENDED"] = 161] = "CHECKSUMEXTENDED";
    ReaderDataTypes[ReaderDataTypes["IMAGEIR"] = 162] = "IMAGEIR";
    ReaderDataTypes[ReaderDataTypes["IMAGEIRREAR"] = 163] = "IMAGEIRREAR";
    ReaderDataTypes[ReaderDataTypes["IMAGEVIS"] = 164] = "IMAGEVIS";
    ReaderDataTypes[ReaderDataTypes["IMAGEVISREAR"] = 165] = "IMAGEVISREAR";
    ReaderDataTypes[ReaderDataTypes["IMAGEVIS_OVD1"] = 166] = "IMAGEVIS_OVD1";
    ReaderDataTypes[ReaderDataTypes["IMAGEVIS_OVD2"] = 167] = "IMAGEVIS_OVD2";
    ReaderDataTypes[ReaderDataTypes["IMAGEPHOTO"] = 168] = "IMAGEPHOTO";
    ReaderDataTypes[ReaderDataTypes["IMAGEUV"] = 169] = "IMAGEUV";
    ReaderDataTypes[ReaderDataTypes["IMAGEUVREAR"] = 170] = "IMAGEUVREAR";
    ReaderDataTypes[ReaderDataTypes["IMAGECOAXVIS"] = 171] = "IMAGECOAXVIS";
    ReaderDataTypes[ReaderDataTypes["IMAGECOAXIR"] = 172] = "IMAGECOAXIR";
    ReaderDataTypes[ReaderDataTypes["IMAGEBARCODE"] = 173] = "IMAGEBARCODE";
    ReaderDataTypes[ReaderDataTypes["IMAGEBARCODEREAR"] = 174] = "IMAGEBARCODEREAR";
    ReaderDataTypes[ReaderDataTypes["SECURITYCHECK"] = 175] = "SECURITYCHECK";
    ReaderDataTypes[ReaderDataTypes["BARCODE_1D_INDUSTRIAL_2_OF_5"] = 176] = "BARCODE_1D_INDUSTRIAL_2_OF_5";
    ReaderDataTypes[ReaderDataTypes["BARCODE_1D_INTERLEAVED_2_OF_5"] = 177] = "BARCODE_1D_INTERLEAVED_2_OF_5";
    ReaderDataTypes[ReaderDataTypes["BARCODE_1D_IATA_2_OF_5"] = 178] = "BARCODE_1D_IATA_2_OF_5";
    ReaderDataTypes[ReaderDataTypes["BARCODE_1D_3_OF_9"] = 179] = "BARCODE_1D_3_OF_9";
    ReaderDataTypes[ReaderDataTypes["BARCODE_1D_128"] = 180] = "BARCODE_1D_128";
    ReaderDataTypes[ReaderDataTypes["BARCODE_1D_CODE_93"] = 181] = "BARCODE_1D_CODE_93";
    ReaderDataTypes[ReaderDataTypes["BARCODE_1D_CODABAR"] = 182] = "BARCODE_1D_CODABAR";
    ReaderDataTypes[ReaderDataTypes["BARCODE_1D_UPC_EAN"] = 183] = "BARCODE_1D_UPC_EAN";
    ReaderDataTypes[ReaderDataTypes["BARCODE_PDF417"] = 184] = "BARCODE_PDF417";
    ReaderDataTypes[ReaderDataTypes["BARCODE_AZTECCODE"] = 185] = "BARCODE_AZTECCODE";
    ReaderDataTypes[ReaderDataTypes["BARCODE_QRCODE"] = 186] = "BARCODE_QRCODE";
    ReaderDataTypes[ReaderDataTypes["BARCODE_DATAMATRIX"] = 187] = "BARCODE_DATAMATRIX";
    ReaderDataTypes[ReaderDataTypes["AAMVA_DATA"] = 188] = "AAMVA_DATA";
    ReaderDataTypes[ReaderDataTypes["IDV_REMOTE_DOCUMENT_VERIFICATION"] = 189] = "IDV_REMOTE_DOCUMENT_VERIFICATION";
    ReaderDataTypes[ReaderDataTypes["IDV_REMOTE_CHIP_VERIFICATION"] = 190] = "IDV_REMOTE_CHIP_VERIFICATION";
    ReaderDataTypes[ReaderDataTypes["IDV_REMOTE_FACE_MATCH"] = 191] = "IDV_REMOTE_FACE_MATCH";
    ReaderDataTypes[ReaderDataTypes["DIGITAL_GREEN_CERTIFICATE"] = 192] = "DIGITAL_GREEN_CERTIFICATE";
    ReaderDataTypes[ReaderDataTypes["DGC_SIGNATURE_VALIDATE"] = 193] = "DGC_SIGNATURE_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["DGC_DOC_SIGNER_CERT_VALIDATE"] = 194] = "DGC_DOC_SIGNER_CERT_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["MDL_DEVICE_ENGAGEMENT"] = 195] = "MDL_DEVICE_ENGAGEMENT";
    ReaderDataTypes[ReaderDataTypes["MDL_DATA"] = 196] = "MDL_DATA";
    ReaderDataTypes[ReaderDataTypes["MDL_PHOTO"] = 197] = "MDL_PHOTO";
    ReaderDataTypes[ReaderDataTypes["MDL_SIGNATURE_IMAGE"] = 198] = "MDL_SIGNATURE_IMAGE";
    ReaderDataTypes[ReaderDataTypes["MDL_DATA_STATUS"] = 199] = "MDL_DATA_STATUS";
})(ReaderDataTypes);

var EventCodes = {};
(function (EventCodes) {
    EventCodes[EventCodes["DOC_ON_WINDOW"] =  0] = "DOC_ON_WINDOW";
    EventCodes[EventCodes["DOC_REMOVED"] =  1] = "DOC_REMOVED";
    EventCodes[EventCodes["START_OF_DOCUMENT_DATA"] =  2] = "START_OF_DOCUMENT_DATA";
    EventCodes[EventCodes["END_OF_DOCUMENT_DATA"] =  3] = "END_OF_DOCUMENT_DATA";
    EventCodes[EventCodes["AUTOMATIC_STATE_CHANGE"] = 4] = "AUTOMATIC_STATE_CHANGE";
    EventCodes[EventCodes["RF_CHIP_OPENED_SUCCESSFULLY"] =  5] = "RF_CHIP_OPENED_SUCCESSFULLY";
    EventCodes[EventCodes["RF_APPLICATION_OPENED_SUCCESSFULLY"] =  6] = "RF_APPLICATION_OPENED_SUCCESSFULLY";
    EventCodes[EventCodes["RF_CHIP_OPEN_FAILED"] =  7] = "RF_CHIP_OPEN_FAILED";
    EventCodes[EventCodes["READER_ERROR_RESOLVED"] =  8] = "READER_ERROR_RESOLVED";
    EventCodes[EventCodes["SETTINGS_INITIALISED"] =  9] = "SETTINGS_INITIALISED";
    EventCodes[EventCodes["PLUGINS_INITIALISED"] =  10] = "PLUGINS_INITIALISED";
    EventCodes[EventCodes["START_OF_PLUGINS_DECODE"] =  11] = "START_OF_PLUGINS_DECODE";
    EventCodes[EventCodes["RF_CHIP_OPEN_TIMEOUT"] =  12] = "RF_CHIP_OPEN_TIMEOUT";
    EventCodes[EventCodes["RF_CHIP_REMOVAL_SUCCESS"] =  13] = "RF_CHIP_REMOVAL_SUCCESS";
    EventCodes[EventCodes["RF_CHIP_REMOVAL_TIMEOUT"] =  14] = "RF_CHIP_REMOVAL_TIMEOUT";
    EventCodes[EventCodes["READY_FOR_SMARTCARD"] =  15] = "READY_FOR_SMARTCARD";
    EventCodes[EventCodes["BEGIN_RESOLVING_ERROR"] =  16] = "BEGIN_RESOLVING_ERROR";     
    EventCodes[EventCodes["COM_PORT_OPEN"] =  17] = "COM_PORT_OPEN";     
    EventCodes[EventCodes["COM_PORT_CLOSED"] =  18] = "COM_PORT_CLOSED";      
    EventCodes[EventCodes["READING_DATA"] =  19] = "READING_DATA";
    EventCodes[EventCodes["DATA_READ"] =  20] = "DATA_READ";
    EventCodes[EventCodes["START_OF_SWIPE_DATA"] =  21] = "START_OF_SWIPE_DATA";
    EventCodes[EventCodes["END_OF_SWIPE_DATA"] =  22] = "END_OF_SWIPE_DATA";
    EventCodes[EventCodes["DEVICE_CONNECTED"] =  23] = "DEVICE_CONNECTED";
    EventCodes[EventCodes["DEVICE_DISCONNECTED"] =  24] = "DEVICE_DISCONNECTED";
    EventCodes[EventCodes["SWIPE_READER_CONNECTED"] =  25] = "SWIPE_READER_CONNECTED";
    EventCodes[EventCodes["SWIPE_READER_DISCONNECTED"] =  26] = "SWIPE_READER_DISCONNECTED";
    EventCodes[EventCodes["READER_STATE_CHANGED"] =  27] = "READER_STATE_CHANGED";
    EventCodes[EventCodes["UHF_READ_TIMEOUT"] =  28] = "UHF_READ_TIMEOUT";
    EventCodes[EventCodes["UHF_READ_COMPLETE"] =  29] = "UHF_READ_COMPLETE";
    EventCodes[EventCodes["DOC_FEED_COMPLETE"] =  30] = "DOC_FEED_COMPLETE";
    EventCodes[EventCodes["DOC_FEED_FAILED"] =  31] = "DOC_FEED_FAILED";
    EventCodes[EventCodes["DIRT_DETECTED_ON_SCANNER_WINDOW"] =  32] = "DIRT_DETECTED_ON_SCANNER_WINDOW";
    EventCodes[EventCodes["SWIPE_REQUESTED"] =  33] = "SWIPE_REQUESTED";
    EventCodes[EventCodes["UHF_REQUESTED"] =  34] = "UHF_REQUESTED";
    EventCodes[EventCodes["RF_CHIP_DETECTED"] =  35] = "RF_CHIP_DETECTED";
    EventCodes[EventCodes["FLIP_DOCUMENT_OVER"] =  36] = "FLIP_DOCUMENT_OVER";
    EventCodes[EventCodes["READER_CONNECTED"] =  37] = "READER_CONNECTED";
    EventCodes[EventCodes["READER_DISCONNECTED"] =  38] = "READER_DISCONNECTED";
    EventCodes[EventCodes["NUM_EVENT_CODES"] =  39] = "NUM_EVENT_CODES";
    })(EventCodes);


var ErrorCodes = {};
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["NO_ERROR_OCCURRED"] =  0] = "NO_ERROR_OCCURRED";
    ErrorCodes[ErrorCodes["UNKNOWN_ERROR_OCCURRED"] =  1] = "UNKNOWN_ERROR_OCCURRED";
    ErrorCodes[ErrorCodes["ERROR_FEATURE_NOT_ENABLED"] =  2] = "ERROR_FEATURE_NOT_ENABLED";
    ErrorCodes[ErrorCodes["ERROR_FEATURE_NOT_SUPPORTED"] =  3] = "ERROR_FEATURE_NOT_SUPPORTED";
    ErrorCodes[ErrorCodes["ERROR_NOT_INITIALISED"] =  4] = "ERROR_NOT_INITIALISED";
    ErrorCodes[ErrorCodes["ERROR_ALREADY_INITIALISED"] =  5] = "ERROR_ALREADY_INITIALISED";
    ErrorCodes[ErrorCodes["ERROR_INITIALISATION_FAILED"] =  6] = "ERROR_INITIALISATION_FAILED";
    ErrorCodes[ErrorCodes["ERROR_DEVICE_SUSPENDED"] =  7] = "ERROR_DEVICE_SUSPENDED";
    ErrorCodes[ErrorCodes["ERROR_DEVICE_ALREADY_IN_USE"] =  8] = "ERROR_DEVICE_ALREADY_IN_USE";
    ErrorCodes[ErrorCodes["ERROR_READER_NOT_CONNECTED"] =  9] = "ERROR_READER_NOT_CONNECTED";
    ErrorCodes[ErrorCodes["ERROR_UNKNOWN_DATA_FORMAT"] =  10] = "ERROR_UNKNOWN_DATA_FORMAT";
    ErrorCodes[ErrorCodes["ERROR_FILE_DOES_NOT_EXIST"] =  11] = "ERROR_FILE_DOES_NOT_EXIST";
    ErrorCodes[ErrorCodes["ERROR_READING_FILE"] =  12] = "ERROR_READING_FILE";
    ErrorCodes[ErrorCodes["ERROR_WRITING_FILE"] =  13] = "ERROR_WRITING_FILE";
    ErrorCodes[ErrorCodes["ERROR_CANNOT_OBTAIN_VERSION"] =  14] = "ERROR_CANNOT_OBTAIN_VERSION";
    ErrorCodes[ErrorCodes["ERROR_CANNOT_OBTAIN_MODULE_INFO"] =  15] = "ERROR_CANNOT_OBTAIN_MODULE_INFO";
    ErrorCodes[ErrorCodes["ERROR_CANNOT_LOCATE_SERIAL"] =  16] = "ERROR_CANNOT_LOCATE_SERIAL";
    ErrorCodes[ErrorCodes["ERROR_LOADING_DLL"] =  17] = "ERROR_LOADING_DLL";
    ErrorCodes[ErrorCodes["ERROR_NO_ROOT_INI_FILE"] =  18] = "ERROR_NO_ROOT_INI_FILE";
    ErrorCodes[ErrorCodes["ERROR_INVALID_CUSTOM_SETTINGS_PATH"] =  19] = "ERROR_INVALID_CUSTOM_SETTINGS_PATH";
    ErrorCodes[ErrorCodes["ERROR_INVALID_CONFIG_FILE_FORMAT"] =  20] = "ERROR_INVALID_CONFIG_FILE_FORMAT";
    ErrorCodes[ErrorCodes["ERROR_OS_ERROR"] =  21] = "ERROR_OS_ERROR";
    ErrorCodes[ErrorCodes["ERROR_ALLOCATING_MEMORY"] =  22] = "ERROR_ALLOCATING_MEMORY";
    ErrorCodes[ErrorCodes["ERROR_PARAMETER_INVALID"] =  23] = "ERROR_PARAMETER_INVALID";
    ErrorCodes[ErrorCodes["ERROR_INDEX_OUT_OF_BOUNDS"] =  24] = "ERROR_INDEX_OUT_OF_BOUNDS";
    ErrorCodes[ErrorCodes["ERROR_STRING_BUFFER_TOO_SMALL"] =  25] = "ERROR_STRING_BUFFER_TOO_SMALL";
    ErrorCodes[ErrorCodes["ERROR_DATA_BUFFER_TOO_SMALL"] =  26] = "ERROR_DATA_BUFFER_TOO_SMALL";
    ErrorCodes[ErrorCodes["ERROR_IMAGE_TOO_SMALL"] =  27] = "ERROR_IMAGE_TOO_SMALL";
    ErrorCodes[ErrorCodes["ERROR_IMAGE_WRONG_FORMAT"] =  28] = "ERROR_IMAGE_WRONG_FORMAT";
    ErrorCodes[ErrorCodes["ERROR_IMAGE_LOCKBITS_FAILED"] =  29] = "ERROR_IMAGE_LOCKBITS_FAILED";
    ErrorCodes[ErrorCodes["ERROR_TIMED_OUT"] =  30] = "ERROR_TIMED_OUT";
    ErrorCodes[ErrorCodes["ERROR_CURRENTLY_IN_USE"] =  31] = "ERROR_CURRENTLY_IN_USE";
    ErrorCodes[ErrorCodes["ERROR_OPERATION_CANCELLED"] =  32] = "ERROR_OPERATION_CANCELLED";
    ErrorCodes[ErrorCodes["ERROR_ALREADY_STARTED"] =  33] = "ERROR_ALREADY_STARTED";
    ErrorCodes[ErrorCodes["ERROR_NOT_STARTED"] =  34] = "ERROR_NOT_STARTED";
    ErrorCodes[ErrorCodes["ERROR_CAMERA_NOT_FOUND"] =  35] = "ERROR_CAMERA_NOT_FOUND";
    ErrorCodes[ErrorCodes["ERROR_OPENING_CAMERA"] =  36] = "ERROR_OPENING_CAMERA";
    ErrorCodes[ErrorCodes["ERROR_CAMERA_DRIVER_ERROR"] =  37] = "ERROR_CAMERA_DRIVER_ERROR";
    ErrorCodes[ErrorCodes["ERROR_PREVIOUS_CAMERA_DRIVER_ERROR"] =  38] = "ERROR_PREVIOUS_CAMERA_DRIVER_ERROR";
    ErrorCodes[ErrorCodes["ERROR_CAMERA_AND_SETTINGS_MISMATCH"] =  39] = "ERROR_CAMERA_AND_SETTINGS_MISMATCH";
    ErrorCodes[ErrorCodes["ERROR_WRONG_SIZE_SETTINGS_BUFFER"] =  40] = "ERROR_WRONG_SIZE_SETTINGS_BUFFER";
    ErrorCodes[ErrorCodes["ERROR_USB1_NOT_SUPPORTED"] =  41] = "ERROR_USB1_NOT_SUPPORTED";
    ErrorCodes[ErrorCodes["ERROR_INCORRECT_DRIVERS"] =  42] = "ERROR_INCORRECT_DRIVERS";
    ErrorCodes[ErrorCodes["ERROR_GPIO"] =  43] = "ERROR_GPIO";
    ErrorCodes[ErrorCodes["ERROR_RF_DEVICE_NOT_FOUND"] =  44] = "ERROR_RF_DEVICE_NOT_FOUND";
    ErrorCodes[ErrorCodes["ERROR_UNRECOGNISED_DEVICE"] =  45] = "ERROR_UNRECOGNISED_DEVICE";
    ErrorCodes[ErrorCodes["ERROR_DEVICE_NOT_PRESENT"] =  46] = "ERROR_DEVICE_NOT_PRESENT";
    ErrorCodes[ErrorCodes["ERROR_CANNOT_DISABLE_DEVICE"] =  47] = "ERROR_CANNOT_DISABLE_DEVICE";
    ErrorCodes[ErrorCodes["ERROR_CANNOT_ENABLE_DEVICE"] =  48] = "ERROR_CANNOT_ENABLE_DEVICE";
    ErrorCodes[ErrorCodes["ERROR_VOLUME_MISSING"] =  49] = "ERROR_VOLUME_MISSING";
    ErrorCodes[ErrorCodes["ERROR_NO_AVAILABLE_DRIVES"] =  50] = "ERROR_NO_AVAILABLE_DRIVES";
    ErrorCodes[ErrorCodes["ERROR_CANNOT_GET_DEVICE_DETAILS"] =  51] = "ERROR_CANNOT_GET_DEVICE_DETAILS";
    ErrorCodes[ErrorCodes["ERROR_UNKNOWN_USB_REPORT"] =  52] = "ERROR_UNKNOWN_USB_REPORT";
    ErrorCodes[ErrorCodes["ERROR_GETTING_USB_VALUE"] =  53] = "ERROR_GETTING_USB_VALUE";
    ErrorCodes[ErrorCodes["ERROR_CAMERA_DEVICE_DISABLED"] =  54] = "ERROR_CAMERA_DEVICE_DISABLED";
    ErrorCodes[ErrorCodes["ERROR_RF_BIOCHIP_DEAD"] =  55] = "ERROR_RF_BIOCHIP_DEAD";
    ErrorCodes[ErrorCodes["ERROR_RF_INVALID_DATAGROUP"] =  56] = "ERROR_RF_INVALID_DATAGROUP";
    ErrorCodes[ErrorCodes["ERROR_RF_SELECT_APP_FAILED"] =  57] = "ERROR_RF_SELECT_APP_FAILED";
    ErrorCodes[ErrorCodes["ERROR_RF_DG_NOT_PRESENT"] =  58] = "ERROR_RF_DG_NOT_PRESENT";
    ErrorCodes[ErrorCodes["ERROR_RF_GET_DATA_ITEM_FAILED"] =  59] = "ERROR_RF_GET_DATA_ITEM_FAILED";
    ErrorCodes[ErrorCodes["ERROR_RF_VALIDATE_DATA_ITEM_FAILED"] =  60] = "ERROR_RF_VALIDATE_DATA_ITEM_FAILED";
    ErrorCodes[ErrorCodes["ERROR_RF_DECODE_DATA_ITEM_FAILED"] =  61] = "ERROR_RF_DECODE_DATA_ITEM_FAILED";
    ErrorCodes[ErrorCodes["ERROR_RF_DECODE_DATA_ITEM_EMPTY"] =  62] = "ERROR_RF_DECODE_DATA_ITEM_EMPTY";
    ErrorCodes[ErrorCodes["ERROR_RF_BAC_FAILURE"] =  63] = "ERROR_RF_BAC_FAILURE";
    ErrorCodes[ErrorCodes["ERROR_RF_ACTIVE_AUTHENTICATION_FAILURE"] =  64] = "ERROR_RF_ACTIVE_AUTHENTICATION_FAILURE";
    ErrorCodes[ErrorCodes["ERROR_RF_SIGNED_ATTRS_FAILED"] =  65] = "ERROR_RF_SIGNED_ATTRS_FAILED";
    ErrorCodes[ErrorCodes["ERROR_RF_SIGNATURE_FAILED"] =  66] = "ERROR_RF_SIGNATURE_FAILED";
    ErrorCodes[ErrorCodes["ERROR_RF_READER_DEAD"] =  67] = "ERROR_RF_READER_DEAD";
    ErrorCodes[ErrorCodes["ERROR_RF_APDU_NO_TAG_IN_FIELD"] =  68] = "ERROR_RF_APDU_NO_TAG_IN_FIELD";
    ErrorCodes[ErrorCodes["ERROR_RF_APDU_NO_RESPONSE"] =  69] = "ERROR_RF_APDU_NO_RESPONSE";
    ErrorCodes[ErrorCodes["ERROR_RF_APDU_CRC_FAILURE"] =  70] = "ERROR_RF_APDU_CRC_FAILURE";
    ErrorCodes[ErrorCodes["ERROR_RF_APDU_GENERAL_FAILURE"] =  71] = "ERROR_RF_APDU_GENERAL_FAILURE";
    ErrorCodes[ErrorCodes["ERROR_RF_APDU_ERR_RESPONSE"] =  72] = "ERROR_RF_APDU_ERR_RESPONSE";
    ErrorCodes[ErrorCodes["ERROR_RF_APDU_UNKNOWN_COMMAND"] =  73] = "ERROR_RF_APDU_UNKNOWN_COMMAND";
    ErrorCodes[ErrorCodes["ERROR_RF_APDU_OP_MODE_FAILURE"] =  74] = "ERROR_RF_APDU_OP_MODE_FAILURE";
    ErrorCodes[ErrorCodes["ERROR_RF_APDU_PARAM_OUT_OF_RANGE"] =  75] = "ERROR_RF_APDU_PARAM_OUT_OF_RANGE";
    ErrorCodes[ErrorCodes["ERROR_RF_APDU_ACCESS_DENIED"] =  76] = "ERROR_RF_APDU_ACCESS_DENIED";
    ErrorCodes[ErrorCodes["ERROR_RF_APDU_UNKNOWN_ERROR"] =  77] = "ERROR_RF_APDU_UNKNOWN_ERROR";
    ErrorCodes[ErrorCodes["ERROR_RF_DECODE_EF_COM_FAILURE"] =  78] = "ERROR_RF_DECODE_EF_COM_FAILURE";
    ErrorCodes[ErrorCodes["ERROR_RF_DECODE_EF_SOD_FAILURE"] =  79] = "ERROR_RF_DECODE_EF_SOD_FAILURE";
    ErrorCodes[ErrorCodes["ERROR_RF_DECODE_EF_CHIP_SECURITY_FAILURE"] =  80] = "ERROR_RF_DECODE_EF_CHIP_SECURITY_FAILURE";
    ErrorCodes[ErrorCodes["ERROR_RF_DECODE_EF_CARD_SECURITY_FAILURE"] =  81] = "ERROR_RF_DECODE_EF_CARD_SECURITY_FAILURE";
    ErrorCodes[ErrorCodes["ERROR_RF_DECODE_EF_CARD_ACCESS_FAILURE"] =  82] = "ERROR_RF_DECODE_EF_CARD_ACCESS_FAILURE";
    ErrorCodes[ErrorCodes["ERROR_RF_CHIP_AUTHENTICATION_FAILED"] =  83] = "ERROR_RF_CHIP_AUTHENTICATION_FAILED";
    ErrorCodes[ErrorCodes["ERROR_RF_CERTS_LOAD_FAILED"] =  84] = "ERROR_RF_CERTS_LOAD_FAILED";
    ErrorCodes[ErrorCodes["ERROR_RF_TERMINAL_AUTHENICATION_FAILED"] =  85] = "ERROR_RF_TERMINAL_AUTHENICATION_FAILED";
    ErrorCodes[ErrorCodes["ERROR_RF_UNAUTHORISED_SENSITIVE_DG"] =  86] = "ERROR_RF_UNAUTHORISED_SENSITIVE_DG";
    ErrorCodes[ErrorCodes["ERROR_RF_NO_CHIP_SELECTED"] =  87] = "ERROR_RF_NO_CHIP_SELECTED";
    ErrorCodes[ErrorCodes["ERROR_RF_ABORTED"] =  88] = "ERROR_RF_ABORTED";
    ErrorCodes[ErrorCodes["ERROR_RF_READER_INDEX_UNKNOWN"] =  89] = "ERROR_RF_READER_INDEX_UNKNOWN";
    ErrorCodes[ErrorCodes["ERROR_OPENING_COM_PORT"] =  90] = "ERROR_OPENING_COM_PORT";
    ErrorCodes[ErrorCodes["ERROR_SETTING_COM_PORT_TIMEOUTS"] =  91] = "ERROR_SETTING_COM_PORT_TIMEOUTS";
    ErrorCodes[ErrorCodes["ERROR_SETTING_COM_PORT"] =  92] = "ERROR_SETTING_COM_PORT";
    ErrorCodes[ErrorCodes["ERROR_CLOSING_COM_PORT"] =  93] = "ERROR_CLOSING_COM_PORT";
    ErrorCodes[ErrorCodes["ERROR_READING_COM_PORT"] =  94] = "ERROR_READING_COM_PORT";
    ErrorCodes[ErrorCodes["ERROR_WRITING_COM_PORT"] =  95] = "ERROR_WRITING_COM_PORT";
    ErrorCodes[ErrorCodes["ERROR_CONNECTING_DEVICE"] =  96] = "ERROR_CONNECTING_DEVICE";
    ErrorCodes[ErrorCodes["ERROR_DISCONNECTING_DEVICE"] =  97] = "ERROR_DISCONNECTING_DEVICE";
    ErrorCodes[ErrorCodes["ERROR_SWIPE_READER_NOT_CONNECTED"] =  98] = "ERROR_SWIPE_READER_NOT_CONNECTED";
    ErrorCodes[ErrorCodes["ERROR_MSR_NOT_CONNECTED"] =  99] = "ERROR_MSR_NOT_CONNECTED";
    ErrorCodes[ErrorCodes["ERROR_SW_UNKNOWN_PROTOCOL"] =  100] = "ERROR_SW_UNKNOWN_PROTOCOL";
    ErrorCodes[ErrorCodes["ERROR_SW_NO_SERIAL_DATA"] =  101] = "ERROR_SW_NO_SERIAL_DATA";
    ErrorCodes[ErrorCodes["ERROR_SW_COMMAND_PARAMETER_INVALID"] =  102] = "ERROR_SW_COMMAND_PARAMETER_INVALID";
    ErrorCodes[ErrorCodes["ERROR_SW_UNKNOWN_PROTOCOL_COMMAND"] =  103] = "ERROR_SW_UNKNOWN_PROTOCOL_COMMAND";
    ErrorCodes[ErrorCodes["ERROR_SW_BAD_CHARACTER"] =  104] = "ERROR_SW_BAD_CHARACTER";
    ErrorCodes[ErrorCodes["ERROR_SW_CANNOT_PROCESS_COMMANDS"] =  105] = "ERROR_SW_CANNOT_PROCESS_COMMANDS";
    ErrorCodes[ErrorCodes["ERROR_SW_INVALID_PROTOCOL_COMMAND"] =  106] = "ERROR_SW_INVALID_PROTOCOL_COMMAND";
    ErrorCodes[ErrorCodes["ERROR_SW_PROTOCOL_COMMAND_FAILED"] =  107] = "ERROR_SW_PROTOCOL_COMMAND_FAILED";
    ErrorCodes[ErrorCodes["ERROR_SW_COMMAND_NOT_ACKNOWLEDGED"] =  108] = "ERROR_SW_COMMAND_NOT_ACKNOWLEDGED";
    ErrorCodes[ErrorCodes["ERROR_SW_RTE_SOH_MISSING"] =  109] = "ERROR_SW_RTE_SOH_MISSING";
    ErrorCodes[ErrorCodes["ERROR_SW_RTE_INCORRECT_MESSAGE_LENGTH"] =  110] = "ERROR_SW_RTE_INCORRECT_MESSAGE_LENGTH";
    ErrorCodes[ErrorCodes["ERROR_SW_RTE_STX_MISSING"] =  111] = "ERROR_SW_RTE_STX_MISSING";
    ErrorCodes[ErrorCodes["ERROR_SW_RTE_ETX_MISSING"] =  112] = "ERROR_SW_RTE_ETX_MISSING";
    ErrorCodes[ErrorCodes["ERROR_SW_RTE_NO_MESSAGE_CONTENT"] =  113] = "ERROR_SW_RTE_NO_MESSAGE_CONTENT";
    ErrorCodes[ErrorCodes["ERROR_SW_RTE_BAD_MESSAGE_CHECKSUM"] =  114] = "ERROR_SW_RTE_BAD_MESSAGE_CHECKSUM";
    ErrorCodes[ErrorCodes["ERROR_SW_RTE_BAD_TRACK_CHECKSUM"] =  115] = "ERROR_SW_RTE_BAD_TRACK_CHECKSUM";
    ErrorCodes[ErrorCodes["ERROR_SW_RTE_BAD_BLOCK_CHECKSUM"] =  116] = "ERROR_SW_RTE_BAD_BLOCK_CHECKSUM";
    ErrorCodes[ErrorCodes["ERROR_SW_RTE_QA_STX_MISSING"] =  117] = "ERROR_SW_RTE_QA_STX_MISSING";
    ErrorCodes[ErrorCodes["ERROR_SW_RTE_QA_ETX_MISSING"] =  118] = "ERROR_SW_RTE_QA_ETX_MISSING";
    ErrorCodes[ErrorCodes["ERROR_SW_RTE_QA_NO_MESSAGE_CONTENT"] =  119] = "ERROR_SW_RTE_QA_NO_MESSAGE_CONTENT";
    ErrorCodes[ErrorCodes["ERROR_SW_RTE_QA_INCORRECT_LINE_COUNT"] =  120] = "ERROR_SW_RTE_QA_INCORRECT_LINE_COUNT";
    ErrorCodes[ErrorCodes["ERROR_SW_RTE_QA_INCORRECT_PARAM_COUNT"] =  121] = "ERROR_SW_RTE_QA_INCORRECT_PARAM_COUNT";
    ErrorCodes[ErrorCodes["ERROR_SW_MUSE_STX_MISSING"] =  122] = "ERROR_SW_MUSE_STX_MISSING";
    ErrorCodes[ErrorCodes["ERROR_SW_MUSE_ETX_MISSING"] =  123] = "ERROR_SW_MUSE_ETX_MISSING";
    ErrorCodes[ErrorCodes["ERROR_SW_MUSE_NO_MESSAGE_CONTENT"] =  124] = "ERROR_SW_MUSE_NO_MESSAGE_CONTENT";
    ErrorCodes[ErrorCodes["ERROR_SW_MUSE_UNKNOWN_DEVICE_TYPE"] =  125] = "ERROR_SW_MUSE_UNKNOWN_DEVICE_TYPE";
    ErrorCodes[ErrorCodes["ERROR_SW_MUSE_BAD_CRC16"] =  126] = "ERROR_SW_MUSE_BAD_CRC16";
    ErrorCodes[ErrorCodes["ERROR_SW_CUTE_SOD_MISSING"] =  127] = "ERROR_SW_CUTE_SOD_MISSING";
    ErrorCodes[ErrorCodes["ERROR_SW_CUTE_STX_MISSING"] =  128] = "ERROR_SW_CUTE_STX_MISSING";
    ErrorCodes[ErrorCodes["ERROR_SW_CUTE_ETX_MISSING"] =  129] = "ERROR_SW_CUTE_ETX_MISSING";
    ErrorCodes[ErrorCodes["ERROR_SW_CUTE_EOD_MISSING"] =  130] = "ERROR_SW_CUTE_EOD_MISSING";
    ErrorCodes[ErrorCodes["ERROR_SW_CUTE_NO_MESSAGE_CONTENT"] =  131] = "ERROR_SW_CUTE_NO_MESSAGE_CONTENT";
    ErrorCodes[ErrorCodes["ERROR_SW_CUTE_UNKNOWN_DEVICE_TYPE"] =  132] = "ERROR_SW_CUTE_UNKNOWN_DEVICE_TYPE";
    ErrorCodes[ErrorCodes["ERROR_SW_MAGMSR_TRACK_ERROR"] =  133] = "ERROR_SW_MAGMSR_TRACK_ERROR";
    ErrorCodes[ErrorCodes["ERROR_UHF_READER_DEAD"] =  134] = "ERROR_UHF_READER_DEAD";
    ErrorCodes[ErrorCodes["ERROR_UHF_READ_TAGID"] =  135] = "ERROR_UHF_READ_TAGID";
    ErrorCodes[ErrorCodes["ERROR_UHF_READ_EPC"] =  136] = "ERROR_UHF_READ_EPC";
    ErrorCodes[ErrorCodes["ERROR_UHF_READ_MEMORY_BANK"] =  137] = "ERROR_UHF_READ_MEMORY_BANK";
    ErrorCodes[ErrorCodes["ERROR_UHF_READ_ERROR"] =  138] = "ERROR_UHF_READ_ERROR";
    ErrorCodes[ErrorCodes["ERROR_UHF_TAG_MEMORY_MAP_UNKNOWN"] =  139] = "ERROR_UHF_TAG_MEMORY_MAP_UNKNOWN";
    ErrorCodes[ErrorCodes["ERROR_UHF_TAG_LOST"] =  140] = "ERROR_UHF_TAG_LOST";
    ErrorCodes[ErrorCodes["ERROR_DECODE_ERROR"] =  141] = "ERROR_DECODE_ERROR";
    ErrorCodes[ErrorCodes["ERROR_INVALID_STATE_CHANGE"] =  142] = "ERROR_INVALID_STATE_CHANGE";
    ErrorCodes[ErrorCodes["ERROR_BLOCKING_ONLY"] =  143] = "ERROR_BLOCKING_ONLY";
    ErrorCodes[ErrorCodes["ERROR_MID_STATECHANGE"] =  144] = "ERROR_MID_STATECHANGE";
    ErrorCodes[ErrorCodes["ERROR_NO_DOC_ON_WINDOW"] =  145] = "ERROR_NO_DOC_ON_WINDOW";
    ErrorCodes[ErrorCodes["ERROR_MMMR_SETTNGS_NOT_FOUND"] =  146] = "ERROR_MMMR_SETTNGS_NOT_FOUND";
    ErrorCodes[ErrorCodes["ERROR_MEMORY_PARSING_ERROR"] =  147] = "ERROR_MEMORY_PARSING_ERROR";
    ErrorCodes[ErrorCodes["ERROR_UNINITIALISED_EEPROM"] =  148] = "ERROR_UNINITIALISED_EEPROM";
    ErrorCodes[ErrorCodes["ERROR_NO_MOTOR_FEED_CALL_ISSUED"] =  149] = "ERROR_NO_MOTOR_FEED_CALL_ISSUED";
    ErrorCodes[ErrorCodes["ERROR_PLUGIN_ERROR"] =  150] = "ERROR_PLUGIN_ERROR";
    ErrorCodes[ErrorCodes["ERROR_PARAMETER_INCORRECT"] =  151] = "ERROR_PARAMETER_INCORRECT";
    ErrorCodes[ErrorCodes["ERROR_LAYOUT_LOAD_FAILURE"] =  152] = "ERROR_LAYOUT_LOAD_FAILURE";
    ErrorCodes[ErrorCodes["ERROR_UNKNOWN_DATA_ITEM"] =  153] = "ERROR_UNKNOWN_DATA_ITEM";
    ErrorCodes[ErrorCodes["ERROR_LAYOUT_DATABASE_ISSUE"] =  154] = "ERROR_LAYOUT_DATABASE_ISSUE";
    ErrorCodes[ErrorCodes["ERROR_IMAGE_NOT_AVAILABLE"] =  155] = "ERROR_IMAGE_NOT_AVAILABLE";
    ErrorCodes[ErrorCodes["ERROR_CANNOT_FIND_LAYOUT_OBJECT"] =  156] = "ERROR_CANNOT_FIND_LAYOUT_OBJECT";
    ErrorCodes[ErrorCodes["ERROR_INVALID_STATE_FOR_REQUEST"] =  157] = "ERROR_INVALID_STATE_FOR_REQUEST";
    ErrorCodes[ErrorCodes["ERROR_LICENSE_FILE_DOES_NOT_EXIST"] =  158] = "ERROR_LICENSE_FILE_DOES_NOT_EXIST";
    ErrorCodes[ErrorCodes["ERROR_NO_LICENSE_FILE_LOADED"] =  159] = "ERROR_NO_LICENSE_FILE_LOADED";
    ErrorCodes[ErrorCodes["ERROR_LICENSE_FILE_EXPIRED"] =  160] = "ERROR_LICENSE_FILE_EXPIRED";
    ErrorCodes[ErrorCodes["ERROR_LICENSE_FILE_INVALID"] =  161] = "ERROR_LICENSE_FILE_INVALID";
    ErrorCodes[ErrorCodes["ERROR_LICENSE_CUSTOMER_NUMBER_INVALID"] =  162] = "ERROR_LICENSE_CUSTOMER_NUMBER_INVALID";
    ErrorCodes[ErrorCodes["ERROR_LICENSE_COMPUTER_NAME_INVALID"] =  163] = "ERROR_LICENSE_COMPUTER_NAME_INVALID";
    ErrorCodes[ErrorCodes["ERROR_LICENSE_MACHINE_FINGERPRINT_INVALID"] =  164] = "ERROR_LICENSE_MACHINE_FINGERPRINT_INVALID";
    ErrorCodes[ErrorCodes["ERROR_OCR_FAILURE"] =  165] = "ERROR_OCR_FAILURE";
    ErrorCodes[ErrorCodes["ERROR_GET_DATA_ITEM_FAILURE"] =  166] = "ERROR_GET_DATA_ITEM_FAILURE";
    ErrorCodes[ErrorCodes["ERROR_INSUFFICIENT_PERMISIONS"] =  167] = "ERROR_INSUFFICIENT_PERMISIONS";
    ErrorCodes[ErrorCodes["ERROR_PLUGABLE_ERROR"] =  168] = "ERROR_PLUGABLE_ERROR";
    ErrorCodes[ErrorCodes["ERROR_BARCODE_PLUGIN_UNAVAILABLE"] =  169] = "ERROR_BARCODE_PLUGIN_UNAVAILABLE";
    ErrorCodes[ErrorCodes["ERROR_NO_FLIPSIDE_AVAILABLE"] =  170] = "ERROR_NO_FLIPSIDE_AVAILABLE";
    ErrorCodes[ErrorCodes["ERROR_INVALID_STATE_FOR_DATA_RETRIEVAL"] =  171] = "ERROR_INVALID_STATE_FOR_DATA_RETRIEVAL";
    ErrorCodes[ErrorCodes["ERROR_READING_REFERENCE_FILE_PROCESS"] =  172] = "ERROR_READING_REFERENCE_FILE_PROCESS";
    ErrorCodes[ErrorCodes["ERROR_READING_REFERENCE_FILE_IDENTIFIER"] =  173] = "ERROR_READING_REFERENCE_FILE_IDENTIFIER";
    ErrorCodes[ErrorCodes["ERROR_INCORRECT_PIXEL_FORMAT_PROCESS"] =  174] = "ERROR_INCORRECT_PIXEL_FORMAT_PROCESS";
    ErrorCodes[ErrorCodes["ERROR_INCORRECT_PIXEL_FORMAT_IDENTIFIER"] =  175] = "ERROR_INCORRECT_PIXEL_FORMAT_IDENTIFIER";
    ErrorCodes[ErrorCodes["ERROR_REFERENCE_FILE_USAGE"] =  176] = "ERROR_REFERENCE_FILE_USAGE";
    ErrorCodes[ErrorCodes["ERROR_CREATING_EIGEN_REFERENCE_FILE"] =  177] = "ERROR_CREATING_EIGEN_REFERENCE_FILE";
    ErrorCodes[ErrorCodes["ERROR_READING_EIGEN_REFERENCE_FILE"] =  178] = "ERROR_READING_EIGEN_REFERENCE_FILE";
    ErrorCodes[ErrorCodes["ERROR_WRITING_EIGEN_REFERENCE_FILE"] =  179] = "ERROR_WRITING_EIGEN_REFERENCE_FILE";
    ErrorCodes[ErrorCodes["ERROR_MISMATCHING_EIGEN_REFERENCE_FILE"] =  180] = "ERROR_MISMATCHING_EIGEN_REFERENCE_FILE";
    ErrorCodes[ErrorCodes["ERROR_CREATING_EIGEN_MATRIX"] =  181] = "ERROR_CREATING_EIGEN_MATRIX";
    ErrorCodes[ErrorCodes["ERROR_READING_EIGEN_MATRIX"] =  182] = "ERROR_READING_EIGEN_MATRIX";
    ErrorCodes[ErrorCodes["ERROR_CREATING_EIGEN_COEFFICIENT"] =  183] = "ERROR_CREATING_EIGEN_COEFFICIENT";
    ErrorCodes[ErrorCodes["ERROR_CALCULATING_EIGEN_VECTOR"] =  184] = "ERROR_CALCULATING_EIGEN_VECTOR";
    ErrorCodes[ErrorCodes["ERROR_LOADING_IMAGE_INTO_OCR_TOOLKIT"] =  185] = "ERROR_LOADING_IMAGE_INTO_OCR_TOOLKIT";
    ErrorCodes[ErrorCodes["ERROR_PARAMETER_INVALID_PROCESS"] =  186] = "ERROR_PARAMETER_INVALID_PROCESS";
    ErrorCodes[ErrorCodes["ERROR_PARAMETER_INVALID_IDENTIFIER"] =  187] = "ERROR_PARAMETER_INVALID_IDENTIFIER";
    ErrorCodes[ErrorCodes["ERROR_PARAMETER_INVALID_VERIFIER"] =  188] = "ERROR_PARAMETER_INVALID_VERIFIER";
    ErrorCodes[ErrorCodes["ERROR_SEARCH_ZONE_INCORRECT"] =  189] = "ERROR_SEARCH_ZONE_INCORRECT";
    ErrorCodes[ErrorCodes["ERROR_REFERENCE_FILE_LEARN"] =  190] = "ERROR_REFERENCE_FILE_LEARN";
    ErrorCodes[ErrorCodes["ERROR_REFERENCE_FILE_REDUCTION"] =  191] = "ERROR_REFERENCE_FILE_REDUCTION";
    ErrorCodes[ErrorCodes["ERROR_REFERENCE_PIXEL_FORMAT_PROCESS"] =  192] = "ERROR_REFERENCE_PIXEL_FORMAT_PROCESS";
    ErrorCodes[ErrorCodes["ERROR_REFERENCE_PIXEL_FORMAT_IDENTIFIER"] =  193] = "ERROR_REFERENCE_PIXEL_FORMAT_IDENTIFIER";
    ErrorCodes[ErrorCodes["ERROR_SUBIMAGE_EXTRACT"] =  194] = "ERROR_SUBIMAGE_EXTRACT";
    ErrorCodes[ErrorCodes["ERROR_SW_TECS_GS_MISSING"] =  195] = "ERROR_SW_TECS_GS_MISSING";
    ErrorCodes[ErrorCodes["ERROR_SW_TECS_EOT_MISSING"] =  196] = "ERROR_SW_TECS_EOT_MISSING";
    ErrorCodes[ErrorCodes["ERROR_SW_TECS_NO_MESSAGE_CONTENT"] =  197] = "ERROR_SW_TECS_NO_MESSAGE_CONTENT";
    ErrorCodes[ErrorCodes["ERROR_SW_TECS_UNKNOWN_DEVICE_TYPE"] =  198] = "ERROR_SW_TECS_UNKNOWN_DEVICE_TYPE";
    ErrorCodes[ErrorCodes["ERROR_FACE_MATCH_INVALID_PRODUCT_KEY"] =  199] = "ERROR_FACE_MATCH_INVALID_PRODUCT_KEY";
    ErrorCodes[ErrorCodes["ERROR_FACE_MATCH_PRODUCT_KEY_EXPIRED"] =  200] = "ERROR_FACE_MATCH_PRODUCT_KEY_EXPIRED";
    ErrorCodes[ErrorCodes["ERROR_FACE_MATCH_GENERAL_FAILURE"] =  201] = "ERROR_FACE_MATCH_GENERAL_FAILURE";
    ErrorCodes[ErrorCodes["ERROR_MDL_INITIALIZATION_FAILED"] =  202] = "ERROR_MDL_INITIALIZATION_FAILED";
    ErrorCodes[ErrorCodes["ERROR_MDL_CONNECTION_TIMEOUT"] =  203] = "ERROR_MDL_CONNECTION_TIMEOUT";
    ErrorCodes[ErrorCodes["ERROR_MDL_CONNECTION_DISCONNECTED"] =  204] = "ERROR_MDL_CONNECTION_DISCONNECTED";
    ErrorCodes[ErrorCodes["ERROR_MDL_DATA_DECODE_ERROR"] =  205] = "ERROR_MDL_DATA_DECODE_ERROR";
    ErrorCodes[ErrorCodes["NUM_ERROR_CODES"] =  206] = "NUM_ERROR_CODES";
    })(ErrorCodes);

/* Version 1.0.0.3 */

Module["ConnectionEvents"] = ConnectionEvents;
Module["ReaderDataTypes"] = ReaderDataTypes;
Module["EventCodes"] = EventCodes;
Module["ErrorCodes"] = ErrorCodes;

// type LogLevelType = "debug" | "error" | "info" | "log" | "trace" | "warn";
LogLevelType = ["error", "warn" , "info" , "log" , "trace", "debug" ];
const WebApiLogger = (logLevel /*: LogLevelType*/, ...args) => {
  if (globalThis.webapiLoggerWriteLog) {
    globalThis.webapiLoggerWriteLog(logLevel, ...args);
  }
};

Module["webapi_enable_logging"] = function (level /*: LogLevelType | LogLevelType[] */) {
  // convert level to an array if it isn't one
  if(level)
  {
    if(!Array.isArray(level)) {
      const arr = []
      for(const t of LogLevelType){
        arr.push(t);
        
        // stop inserting
        if(t === level)
          break;
      }
      level = arr;
    }
  }

  globalThis.webapiLoggerWriteLog = (logLevel, ...args) => {
    if(level == undefined || level.includes(logLevel))
      console[logLevel](...args);
  };
};

function webapi_is_enable_logging(logLevel /*: LogLevelType*/) {
  return !!globalThis.webapiLoggerWriteLog;
}

Module["print"] = function (text) {
  WebApiLogger("debug", text);
};
Module["printErr"] = function (text) {
  text = Array.prototype.slice.call(arguments).join(" ");
  if (0) {
    // XXX disabled for safety typeof dump == 'function') {
    dump(text + "\n"); // fast, straight to the real console
  } else {
    WebApiLogger("error", text);
  }
};



// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;




// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

var nodeFS;
var nodePath;

if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }




  read_ = function shell_read(filename, binary) {
    var ret = tryParseAsDataURI(filename);
    if (ret) {
      return binary ? ret : ret.toString();
    }
    if (!nodeFS) nodeFS = require('fs');
    if (!nodePath) nodePath = require('path');
    filename = nodePath['normalize'](filename);
    return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
  };

  readBinary = function readBinary(filename) {
    var ret = read_(filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    assert(ret.buffer);
    return ret;
  };




  if (process['argv'].length > 1) {
    thisProgram = process['argv'][1].replace(/\\/g, '/');
  }

  arguments_ = process['argv'].slice(2);

  // MODULARIZE will export the module in the proper place outside, we don't need to export here

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  process['on']('unhandledRejection', abort);

  quit_ = function(status) {
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };



} else
if (ENVIRONMENT_IS_SHELL) {


  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      var data = tryParseAsDataURI(f);
      if (data) {
        return intArrayToString(data);
      }
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    var data;
    data = tryParseAsDataURI(f);
    if (data) {
      return data;
    }
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = function(status) {
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);
  }


} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }


  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {




  read_ = function shell_read(url) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
    } catch (err) {
      var data = tryParseAsDataURI(url);
      if (data) {
        return intArrayToString(data);
      }
      throw err;
    }
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function readBinary(url) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
      } catch (err) {
        var data = tryParseAsDataURI(url);
        if (data) {
          return data;
        }
        throw err;
      }
    };
  }

  readAsync = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      var data = tryParseAsDataURI(url);
      if (data) {
        onload(data.buffer);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };




  }

  setWindowTitle = function(title) { document.title = title };
} else
{
}


// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];
if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message





// {{PREAMBLE_ADDITIONS}}

var STACK_ALIGN = 16;

function dynamicAlloc(size) {
  var ret = HEAP32[DYNAMICTOP_PTR>>2];
  var end = (ret + size + 15) & -16;
  HEAP32[DYNAMICTOP_PTR>>2] = end;
  return ret;
}

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}





// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  var table = wasmTable;

  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < table.length; i++) {
      var item = table.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.


  var ret;
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    ret = freeTableIndexes.pop();
  } else {
    ret = table.length;
    // Grow the table
    try {
      table.grow(1);
    } catch (err) {
      if (!(err instanceof RangeError)) {
        throw err;
      }
      throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
    }
  }

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    table.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    var wrapped = convertJsFunctionToWasm(func, sig);
    table.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunctionWasm(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {

  return addFunctionWasm(func, sig);
}

function removeFunction(index) {
  removeFunctionWasm(index);
}



var funcWrappers = {};

function getFuncWrapper(func, sig) {
  if (!func) return; // on null pointer, return undefined
  assert(sig);
  if (!funcWrappers[sig]) {
    funcWrappers[sig] = {};
  }
  var sigCache = funcWrappers[sig];
  if (!sigCache[func]) {
    // optimize away arguments usage in common cases
    if (sig.length === 1) {
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func);
      };
    } else if (sig.length === 2) {
      sigCache[func] = function dynCall_wrapper(arg) {
        return dynCall(sig, func, [arg]);
      };
    } else {
      // general case
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func, Array.prototype.slice.call(arguments));
      };
    }
  }
  return sigCache[func];
}







function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

/** @param {Array=} args */
function dynCall(sig, ptr, args) {
  if (args && args.length) {
    return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
  } else {
    return Module['dynCall_' + sig].call(null, ptr);
  }
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};


// The address globals begin at. Very low in memory, for code size and optimization opportunities.
// Above 0 is static memory, starting with globals.
// Then the stack.
// Then 'dynamic' memory for sbrk.
var GLOBAL_BASE = 1024;





// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html


var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];


if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}




// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}






// Wasm globals

var wasmMemory;

// In fastcomp asm.js, we don't need a wasm Table at all.
// In the wasm backend, we polyfill the WebAssembly object,
// so this creates a (non-native-wasm) table for us.

var wasmTable = new WebAssembly.Table({
  'initial': 496,
  'maximum': 496,
  'element': 'anyfunc'
});




//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS = 0;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  argTypes = argTypes || [];
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_DYNAMIC = 2; // Cannot be freed except through sbrk
var ALLOC_NONE = 3; // Do not allocate

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((TypedArray|Array<number>|number), string, number, number=)} */
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var singleType = typeof types === 'string' ? types : null;

  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [_malloc,
    stackAlloc,
    dynamicAlloc][allocator](Math.max(size, singleType ? 1 : types.length));
  }

  if (zeroinit) {
    var stop;
    ptr = ret;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)>>0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(/** @type {!Uint8Array} */ (slab), ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}

// Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready
function getMemory(size) {
  if (!runtimeInitialized) return dynamicAlloc(size);
  return _malloc(size);
}




// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}





// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0 || i == maxBytesToRead / 2) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}



// Memory management

var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;
var ASMJS_PAGE_SIZE = 16777216;

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var STATIC_BASE = 1024,
    STACK_BASE = 5307696,
    STACKTOP = STACK_BASE,
    STACK_MAX = 64816,
    DYNAMIC_BASE = 5307696,
    DYNAMICTOP_PTR = 64656;



var TOTAL_STACK = 5242880;

var INITIAL_INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;









// In non-standalone/normal mode, we create the memory here.



// Create the main memory. (Note: this isn't used in STANDALONE_WASM mode since the wasm
// memory is created in the wasm, not in JS.)

  if (Module['wasmMemory']) {
    wasmMemory = Module['wasmMemory'];
  } else
  {
    wasmMemory = new WebAssembly.Memory({
      'initial': INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE
      ,
      'maximum': 104857600 / WASM_PAGE_SIZE
    });
  }


if (wasmMemory) {
  buffer = wasmMemory.buffer;
}

// If the user provides an incorrect length, just use that length instead rather than providing the user to
// specifically provide the memory length with Module['INITIAL_MEMORY'].
INITIAL_INITIAL_MEMORY = buffer.byteLength;
updateGlobalBufferAndViews(buffer);

HEAP32[DYNAMICTOP_PTR>>2] = DYNAMIC_BASE;














function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback(Module); // Pass the module as the first argument.
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Module['dynCall_v'](func);
      } else {
        Module['dynCall_vi'](func, callback.arg);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;


function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;
  if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
TTY.init();
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  FS.ignorePermissions = false;
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  runtimeExited = true;
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

/** @param {number|boolean=} ignore */
function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
/** @param {number|boolean=} ignore */
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc


var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_round = Math.round;
var Math_min = Math.min;
var Math_max = Math.max;
var Math_clz32 = Math.clz32;
var Math_trunc = Math.trunc;



// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what = 'abort(' + what + '). Build with -s ASSERTIONS=1 for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}


var memoryInitializer = null;











function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = "file://";

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}




var wasmBinaryFile = 'data:application/octet-stream;base64,AGFzbQEAAAAByQM4YAF/AX9gAX8AYAJ/fwBgA39/fwF/YAJ/fwF/YAN/f38AYAZ/f39/f38Bf2AEf39/fwBgBH9/f38Bf2AFf39/f38Bf2AFf39/f38AYAZ/f39/f38AYAAAYAABf2AHf39/f39/fwF/YAh/f39/f39/fwF/YAd/f39/f39/AGAFf35+fn4AYAV/f39/fgF/YAp/f39/f39/f39/AGAFf39+f38AYAR/f39/AX5gA39+fwF+YAR/fn5/AGAKf39/f39/f39/fwF/YAd/f39/f35+AX9gBn9/f39+fgF/YAV/f39/fAF/YAZ/fH9/f38Bf2AIf39/f39/f38AYA9/f39/f39/f39/f39/f38AYAJ/fgBgCX9/f39/f39/fwF/YAt/f39/f39/f39/fwF/YAx/f39/f39/f39/f38Bf2ACfn8Bf2AEf39/fgF+YAN/f34AYAN/fn4AYAJ/fQBgAn98AGAGf39/f398AX9gB39/fH9/f38Bf2ADfn9/AX9gAn5+AX9gA35+fgF/YAR+fn5+AX9gAn9/AX5gAn9/AX1gA39/fwF9YAJ+fgF9YAF/AXxgAn9/AXxgA39/fwF8YAJ+fgF8YAJ8fwF8ApIEFgNlbnYNX19hc3NlcnRfZmFpbAAHA2VudhhfX2N4YV9hbGxvY2F0ZV9leGNlcHRpb24AAANlbnYLX19jeGFfdGhyb3cABQNlbnYMZ2V0dGltZW9mZGF5AAQDZW52DV9fc3lzX2ZjbnRsNjQAAxZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxCGZkX2Nsb3NlAAADZW52Cl9fc3lzX29wZW4AAxZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxCGZkX3dyaXRlAAgDZW52C19fc3lzX2lvY3RsAAMWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MQdmZF9yZWFkAAgDZW52BWFib3J0AAwWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MRFlbnZpcm9uX3NpemVzX2dldAAEFndhc2lfc25hcHNob3RfcHJldmlldzELZW52aXJvbl9nZXQABANlbnYKX19tYXBfZmlsZQAEA2VudgxfX3N5c19tdW5tYXAABANlbnYKc3RyZnRpbWVfbAAJA2VudhZlbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwAAADZW52FWVtc2Ny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QRBrIgEkACABIAA2AgwQHiABQRBqJAALJwEBfyMAQRBrIgAkACAAQcyPAzYCDCAAKAIMQRRqEB0gAEEQaiQACywBAX8jAEEQayIBJAAgASAANgIMIAEoAgwiABCkASAAQQhqECEgAUEQaiQACycBAX8jAEEQayIAJAAgAEHMjwM2AgwgACgCDEEUahAfIABBEGokAAsrAQF/IwBBEGsiASQAIAEgADYCDCABKAIMIgBBCGoQNCAAEDEgAUEQaiQACx0BAX8jAEEQayIBJAAgASAANgIMECMgAUEQaiQACyIBAX8jAEEQayIBJAAgASAANgIMIAEoAgwQIiABQRBqJAALTQECfyMAQRBrIgEkACABQQhqIQIgASAANgIMIAEoAgwiABA4GiAAQQA2AgAgAEEANgIEIAFBADYCCCAAQQhqIAIgARClASABQRBqJAALKgECfyMAQRBrIgAkACAAQfiPAzYCDCAAKAIMIgEQJCABECUgAEEQaiQAC1QBAn8jAEEQayIBJAAgASAANgIMIAEoAgwiABBsIQIgACACIAAQbCAAEPYBQQN0aiAAEGwgABD3AUEDdGogABBsIAAQ9gFBA3RqENsBIAFBEGokAAtLAQF/IwBBEGsiASQAIAEgADYCCCABIAEoAggiADYCDCAAKAIABEAgABD4ASAAED0gACgCACAAEPkBEPoBCyABKAIMGiABQRBqJAALNwEBfyMAQRBrIgEkACABIAA2AgQgASABKAIEIgAgACgCABAqNgIIIAEoAgghACABQRBqJAAgAAs3AQF/IwBBEGsiASQAIAEgADYCBCABIAEoAgQiACAAKAIEECo2AgggASgCCCEAIAFBEGokACAACzgBAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMIAIoAggQKyEAIAJBEGokACAAQX9zQQFxCxgBAX8jAEEQayIBIAA2AgwgASgCDCgCAAs3AQF/IwBBEGsiAiQAIAIgADYCBCACIAE2AgAgAkEIaiACKAIAEHggAigCCCEAIAJBEGokACAACzkBAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMECkhACACKAIIECkhASACQRBqJAAgACABRgsiAQF/IwBBEGsiASAANgIMIAEoAgwiACAAKAIAQQFqNgIACxoAQfSPA0H0jwMoAgBBAWo2AgBB9I8DKAIAC54BAQZ/IwBB0ABrIgEkACABQSBqIQIgAUEQaiEDQQQhBSABQUBrIQRByI8DIQYgASAANgJMIAFBMGoiAEGACBAvIAQgBiAAEIkEIAEoAkwgBBAwIAQQMSAAEKcLGiACIAEoAkwQKSIAIAUgACgCACgCCBEFACABIAIQMiADIAEQMyABEDQgAxA1IQAgAxCnCxogAhA0IAFB0ABqJAAgAAtGAQF/IwBBIGsiAiQAIAIgADYCHCACIAE2AhggAigCHCIAIAJBEGogAkEIahA2IAAgAigCGCACKAIYEDcQpgsgAkEgaiQACz4BAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMIQAgAiACKAIIEDgQOSACIAAQOiACEDEgAkEQaiQACzwBAX8jAEEQayIBJAAgASAANgIIIAEgASgCCCIANgIMIAAoAgQEQCAAKAIEEDsLIAEoAgwaIAFBEGokAAuDAQECfyMAQSBrIgIkACACQRBqIQMgAiAANgIYIAIgATYCFCACIAIoAhgiADYCHCACKAIUED0QPiAAIAMQPyACIAIoAhQQQDYCBCACKAIEQQBLBEAgACACKAIEEEEgACACKAIUKAIAIAIoAhQoAgQgAigCBBBCCyACKAIcGiACQSBqJAALKwEBfyMAQRBrIgIkACACIAA2AgwgAiABEDIgACACEDwgAhA0IAJBEGokAAsoAQF/IwBBEGsiASQAIAEgADYCDCABKAIMIgAQQyAAEEQgAUEQaiQACyYBAX8jAEEQayIBJAAgASAANgIMIAEoAgwQRSEAIAFBEGokACAAC0oBAX8jAEEgayIDJAAgAyAANgIcIAMgATYCGCADIAI2AhQgAygCHCEAIAMoAhgQOBogABDmASADKAIUEDgaIAAQpwEgA0EgaiQACycBAX8jAEEQayIBJAAgASAANgIMIAEoAgwQ7wshACABQRBqJAAgAAsVAQF/IwBBEGsiASAANgIMIAEoAgwLSgEBfyMAQRBrIgIgADYCDCACIAE2AgggAigCDCIAIAIoAggoAgA2AgAgACACKAIIKAIENgIEIAIoAghBADYCACACKAIIQQA2AgQLQQEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwiACACKAIIEMQBIABBBGogAigCCEEEahDEASACQRBqJAALMAEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAEN8BQQFxBEAgABCdCwsgAUEQaiQACy4BAn8jAEEQayICJAAgAiAANgIMIAIgARAyIAAgAiADEIACIAIQNCACQRBqJAALKgEBfyMAQRBrIgEkACABIAA2AgwgASgCDEEIahCRASEAIAFBEGokACAACygBAX8jAEEgayIBJAAgASAANgIcIwBBEGsgASgCHDYCBCABQSBqJAALWQECfyMAQRBrIgIkACACQQRqIQMgAiAANgIMIAIgATYCCCACKAIMIgAQOBogAEEANgIAIABBADYCBCACQQA2AgQgAEEIaiADIAIoAggQOBCNAyACQRBqJAALIAEBfyMAQRBrIgEgADYCDCABKAIMIgAoAgQgACgCAGsLdAECfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgggAigCDCIAELoBSwRAELoLAAtBACEBIAAgABA9IAIoAggQvwEiAzYCBCAAIAM2AgAgACgCACACKAIIaiEDIAAQPSADNgIAIAAgARDFASACQRBqJAALXAEBfyMAQSBrIgQkACAEIAA2AhwgBCABNgIYIAQgAjYCFCAEIAM2AhAgBCAEKAIcIgAgBCgCEBCzASAAED0gBCgCGCAEKAIUIARBBGoQwwEgBBC1ASAEQSBqJAALSgECfyMAQRBrIgEkACABIAA2AgwgASgCDCIAEGwhAiAAIAIgABBsIAAQuwFqIAAQbCAAEEBqIAAQbCAAELsBahDbASABQRBqJAALSwEBfyMAQRBrIgEkACABIAA2AgggASABKAIIIgA2AgwgACgCAARAIAAQ4QEgABA9IAAoAgAgABDPARDJAQsgASgCDBogAUEQaiQACygBAX8jAEEQayIBJAAgASAANgIMIAEoAgwQdxA4IQAgAUEQaiQAIAALNQEDfyMAQRBrIgIkAEH4jwMhACACQQhqIgEQRyAAIAEQSCABECkhACABEDEgAkEQaiQAIAALhAEBB38jAEEwayIBJAAgAUEYaiECIAFBCGohByABQRBqIQNBASEGIAEgADYCLCABQShqIgUQOBogBSAGIAQQSSEEIAMgBSAGEEogAiAEIAMQSyACEEwhAyAHIAUQTSADEE4gASACEEwQTzYCBCAAIAEoAgQgAhBQEFEgAhBSIAFBMGokAAtOAQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AggCQCACKAIMIgAoAgQgABA9KAIARwRAIAAgAigCCBBTDAELIAAgAigCCBBUCyACQRBqJAALXwEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBCADKAIIAn8jAEEQayADKAIMNgIMQf///z8LSwRAQZQIENgBAAsgAygCCEEFdEEEENkBIQAgA0EQaiQAIAALNwEBfyMAQRBrIgMgADYCDCADIAE2AgggAyACNgIEIAMoAgwiACADKAIINgIAIAAgAygCBDYCBAs9AQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgwgA0EIaiADKAIEEDgQvQIgA0EQaiQACyoBAX8jAEEQayIBJAAgASAANgIMIAEoAgwQkQEoAgAhACABQRBqJAAgAAsdAQF/IwBBEGsiAiAANgIMIAIgATYCCCACKAIMGgtCAQJ/IwBBEGsiASQAIAFBCGohAiABIAA2AgQgASgCBCIAEOgBIABB/A82AgAgAEEMaiACEDggARCOAyABQRBqJAALLAEBfyMAQRBrIgEkACABIAA2AgwgASgCDEEMahCRARA4IQAgAUEQaiQAIAALQAECfyMAQRBrIgEkACABIAA2AgwgASABKAIMIgAQkQEoAgA2AgggABCRASACNgIAIAEoAgghACABQRBqJAAgAAuCAQEBfyMAQSBrIgMkACADIAA2AhwgAyABNgIYIAMgAjYCFCADQQA6ABMgABCkASAAIAMoAhg2AgAgACADKAIUNgIEIAAoAgAhASADIAAoAgA2AgQgAyABNgIAIwBBEGsgADYCDCADQQE6ABMgAy0AE0EBcUUEQCAAEDELIANBIGokAAsjAQF/IwBBEGsiASQAIAEgADYCDCABKAIMEI8DIAFBEGokAAtaAQF/IwBBIGsiAiQAIAIgADYCHCACIAE2AhggAkEIaiIAIAIoAhwiARCaAyABED0gAigCDBA4IAIoAhgQOBCbAyACIAIoAgxBCGo2AgwgABC1ASACQSBqJAALewEBfyMAQSBrIgIkACACIAA2AhwgAiABNgIYIAIgAigCHCIAED02AhQgAiAAIAAQ9wFBAWoQnAMgABD3ASACKAIUEJ0DIAIoAhQgAigCCBA4IAIoAhgQOBCbAyACIAIoAghBCGo2AgggACACEJ4DIAIQnwMgAkEgaiQAC38BAn8jAEEwayIBJAAgASAANgIsIAFB+I8DECY2AiggAUEoaiEAIAFBIGohAiABQfiPAxAnNgIgIAAgAhArQQFxBEAgAUEoahApECkgASgCLEYEQEH4jwMhACABQRhqIAFBKGpBABBWIAEgACABKAIYEFc2AhALCyABQTBqJAALOAEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBCADKAIMIAMoAggQKTYCACADQRBqJAALlwEBA38jAEEwayICJAAgAkEgaiEDIAJBEGohBCACIAE2AiAgAiAANgIcIAIgAigCHCIAEFg2AhAgAiADIAQQWTYCGCACIAAoAgAgAigCGEEDdGo2AgwgACACKAIMQQhqIAAoAgQgAigCDBBaEFsgACACKAIMQXhqEFwgAiAAIAIoAgwQKjYCKCACKAIoIQAgAkEwaiQAIAALMAEBfyMAQRBrIgEkACABIAA2AgQgASABKAIEECY2AgggASgCCCEAIAFBEGokACAACzgBAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMECkgAigCCBApayEAIAJBEGokACAAQQN1C0UBAX8jAEEQayIDJAAgAyAANgIMIAMgATYCCCADIAI2AgQgAygCDBA4IAMoAggQOCADKAIEEDgQsQMhACADQRBqJAAgAAtOAQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCIAIAIoAggQXCACIAAQ9wE2AgQgACACKAIIEPsBIAAgAigCBBCwAyACQRBqJAALFwEBfyMAQRBrIgIgADYCDCACIAE2AggLFgACQEHcjwMtAABBAXFFDQALIAAQXgswAQF/IwBBEGsiASQAIAFBsI8DNgIMIAEgADYCCCABKAIMIAEoAggQXyABQRBqJAALdQECfyMAQSBrIgIkACACIAA2AhwgAiABNgIYIAIgAigCHCIAEIYBNgIUIAAQsgNFBEAgABCzAwsgAigCFCEBIAJBCGoiAyAAEIoBIAEgAxCEARA4IAIoAhgQtAMgABCGASIAIAAoAgBBAWo2AgAgAkEgaiQAC4wBAQJ/IwBBQGoiBCQAIARBEGohBSAEIAA2AjwgBCABNgI4IAQgAjYCNCAEIAM2AjAgBCgCPCEBIARBIGoiACAEKAI4EGEgBSAE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ECADKAIIEH82AgAgABA0IANBQGskAAuQAgECfyMAQdAAayIDJAAgAyAANgJMIAMgATYCSCADIAI2AkQgA0E4ahByGiADIAQ2AjQDQCADKAI0IAMoAkRIBEAgA0E4aiADKAJMIAMoAjRqLQAAQRgiAHQgAHUQcyADIAMoAjRBAWo2AjQMAQsLIANBKGohASADQQhqIQAgA0EEaiEEIAMgA0E4aiICEG02AiAgAyACEG42AhggASADKAIgIAMoAhgQbyAAIAEgAygCSBB0IAMgABB1NgIEIAMgAygCBEEEahDfCzYCACADKAIAIAQoAAA2AAAgAygCAEEEaiAAEEUgAygCBBDpCxogAygCACEEIAAQpwsaIAEQNCACEKcLGiADQdAAaiQAIAQLMQEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAIAFBCGogARA2IAAQdiABQRBqJAAgAAsvAQF/IwBBEGsiAiQAIAIgADYCDCACIAE6AAsgAigCDCACLAALELALIAJBEGokAAukAgEKfyMAQZABayIDJAAgA0H4AGohBiADQdAAaiEHIANBMGohBCADQSBqIQUgA0EQaiEIQciPAyEKIANBQGshC0EQIQkgA0HgAGohDCADIAA2AowBIAMgATYCiAEgAyACNgKEASADIAMoAogBECY2AnAgAyADKAKIARAmNgJgIAMgDCAJEHw2AmggBiADKAJwIAMoAmgQbyADIAMoAogBECY2AkAgAyALIAkQfDYCSCADIAMoAogBECc2AjggByADKAJIIAMoAjgQbyAEIAogAygChAFBCGogBhCTBCAEECkhASAIIAcQMiAFIAEgCBBkIAgQNCAEECkgBRBmIAMgBRAyIAAgAxB9IAMQNCAFEDQgBBAxIAcQNCAGEDQgA0GQAWokAAsmAQF/IwBBEGsiASQAIAEgADYCDCABKAIMEHkhACABQRBqJAAgAAtgAQJ/IwBBEGsiASQAIAEgADYCDCABIAEoAgwQkQE2AgggASACNgIEA0AgASgCBEEDT0UEQCABKAIIIAEoAgRBAnRqQQA2AgAgASABKAIEQQFqNgIEDAELCyABQRBqJAALPQEBfyMAQRBrIgEkACABIAA2AgwCfyABKAIMIgAQ4wFBAXEEQCAAEEwMAQsgABDwAQshACABQRBqJAAgAAskAQF/IwBBEGsiAiAA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AygCBBCgASADQRBqJAALIAEBfyMAQRBrIgEgADYCDCABKAIMIgAoAgggACgCBEYLKAEBfyMAQRBrIgIgADYCDCACIAE2AgggAigCDCgCBCACKAIIKAIERgsvAQF/IwBBEGsiAiQAIAIgADYCBCACIAE2AgAgAigCBCACKAIAEJoBIAJBEGokAAtMAQF/IwBBIGsiAiQAIAIgADYCHCACIAE2AhggAigCGCEBIwBBEGsiACACKAIcNgIEIAAgATYCACAAKAIEIAAoAgA2AgQgAkEgaiQACysBAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIIEKcLGiACQRBqJAALOwEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBCADKAIMIAMoAgggAygCBBCcASADQRBqJAALNgEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBCADKAIMIAMoAggQnQEgA0EQaiQACyoBAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMEJ4BIAJBEGokAAsjAQF/IwBBEGsiASQAIAEgADYCDCABKAIMEOALIAFBEGokAAsvAQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCACKAIIEKEBIAJBEGokAAs7AQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgggAygCBEECdEEEEJsBIANBEGokAAtbAQJ/IwBBEGsiAiQAIAIgADYCBCACIAE2AgAgAigCBCEAA0AgAigCACAAKAIIRwRAIAAQkwEhASAAIAAoAghBfGoiAzYCCCABIAMQOBCiAQwBCwsgAkEQaiQACy8BAX8jAEEgayICJAAgAiAANgIcIAIgATYCGCACKAIcIAIoAhgQowEgAkEgaiQACy4BAX8jAEEQayICJAAgAiAANgIEIAIgATYCACACKAIEIAIoAgAQXCACQRBqJAALIwEBfyMAQRBrIgEgADYCDCABKAIMIgBBADYCACAAQQA2AgQLRwEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBCADKAIMIgAgAygCCBA4EKYBIAMoAgQQOBogABCnASADQRBqJAALOAEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwhACACKAIIEDgaIABBADYCACACQRBqJAALIwEBfyMAQRBrIgEkACABIAA2AgQgASgCBBA4GiABQRBqJAALNQEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwQKSACKAIIEClrIQAgAkEQaiQAIAALLwEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwgAigCCBCyASACQRBqJAAL1gEBAX8jAEEwayIEJAAgBCAANgIsIAQgATYCKCAEIAI2AiQgBCADNgIgIAQgBCgCLCIAKAIENgIcIAQgBCgCHCAEKAIgazYCGCAEIAQoAiggBCgCGGo2AhQgBEEIaiAAIAQoAiQgBCgCFGsQswEDQCAEKAIUIAQoAiRJBEAgABA9IAQoAgwQOCAEKAIUEDgQtgEgBCAEKAIUQQFqNgIUIAQgBCgCDEEBajYCDAwBCwsgBEEIahC1ASAEKAIoIAQoAiggBCgCGGogBCgCHBC3ASAEQTBqJAALYgECfyMAQSBrIgMkACADQRBqIQQgAyAANgIYIAMgATYCECADIAI2AgwgAyADKAIYNgIIIAMoAggQuAEhACADIAQoAgA2AgAgACADKAIAELgBIAMoAgwQOBC5ASADQSBqJAALmAEBAX8jAEEgayICJAAgAiAANgIYIAIgATYCFCACIAIoAhgiABC6ATYCECACKAIUIAIoAhBLBEAQugsACyACIAAQuwE2AgwCQCACKAIMIAIoAhBBAXZPBEAgAiACKAIQNgIcDAELIAIgAigCDEEBdDYCCCACIAJBCGogAkEUahC8ASgCADYCHAsgAigCHCEAIAJBIGokACAAC6wBAQF/IwBBIGsiBCQAIAQgADYCGCAEIAE2AhQgBCACNgIQIAQgAzYCDCAEIAQoAhgiADYCHCAEQQA2AgggAEEMaiAEQQhqIAQoAgwQvQEgAAJ/IAQoAhQEQCAAEL4BIAQoAhQQvwEMAQtBAAs2AgAgACAAKAIAIAQoAhBqIgE2AgggACABNgIEIAAoAgAgBCgCFGohASAAEJMBIAE2AgAgBCgCHBogBEEgaiQAC7EBAQF/IwBBMGsiAyQAIAMgATYCKCADIAI2AiAgAyAANgIcIAMoAhwiAEEIaiEBIANBCGogA0EoaigCADYCACADIANBIGooAgA2AgAgA0EQaiABIAMoAgggAygCABB6EMABA0AgAygCECADKAIURwRAIANBKGohASAAEL4BIAMoAhAQOCABECkQtgEgAyADKAIQQQFqNgIQIANBKGoQLAwBCwsgA0EQahDBASADQTBqJAALxAEBAX8jAEEQayIDJAAgAyAANgIMIAMgATYCCCADIAI2AgQgAygCDCIAEEMgAyADKAIIKAIENgIAIAAQPSAAKAIAIAMoAgQgAygCCEEEahDCASAAED0gAygCBCAAKAIEIAMoAghBCGoQwwEgACADKAIIQQRqEMQBIABBBGogAygCCEEIahDEASAAED0gAygCCBCTARDEASADKAIIIAMoAggoAgQ2AgAgACAAEEAQxQEgABDGASADKAIAIQAgA0EQaiQAIAALTAEBfyMAQRBrIgEkACABIAA2AgggASABKAIIIgA2AgwgABDHASAAKAIABEAgABC+ASAAKAIAIAAQyAEQyQELIAEoAgwaIAFBEGokAAszAQF/IwBBIGsiAiQAIAIgADYCGCACIAE2AhAgAkEQaiACQRhqEKgBIQAgAkEgaiQAIAALLgEBfyMAQRBrIgIkACACIAA2AgQgAiABNgIAIAIoAgQgAigCABB+IAJBEGokAAtNAQF/IwBBEGsiAyAANgIMIAMgATYCCCADIAI2AgQgAygCDCIAIAMoAgg2AgAgACADKAIIKAIENgIEIAAgAygCCCgCBCADKAIEajYCCAt9AQF/IwBBIGsiBCQAIAQgATYCGCAEIAI2AhAgBCAANgIMIAQgAzYCCANAIARBGGogBEEQahAoQQFxBEAgBEEYaiEAIAQoAgwgBCgCCCgCABA4IAAQKRC2ASAEQRhqECwgBCgCCCIAIAAoAgBBAWo2AgAMAQsLIARBIGokAAsiAQF/IwBBEGsiASAANgIMIAEoAgwiACgCACAAKAIENgIECz0BAX8jAEEgayIDJAAgAyAANgIcIAMgATYCGCADIAI2AhQgAygCHCADKAIYIAMoAhQQOBDKASADQSBqJAALQQEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBCADKAIMEDggAygCCBA4IAMoAgQQOBDMASADQRBqJAALJgEBfyMAQRBrIgEkACABIAA2AgggAUEIahApIQAgAUEQaiQAIAALYgEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBCADIAMoAgggAygCDGs2AgAgAygCAEEASwRAIAMoAgQgAygCDCADKAIAEOsLCyADKAIEIAMoAgBqGiADQRBqJAALUQEDfyMAQRBrIgEkACABQQhqIQIgAUEEaiEDIAEgADYCDCABIAEoAgwQPRDNATYCCCABQf////8HNgIEIAIgAxDOASgCACEAIAFBEGokACAACycBAX8jAEEQayIBJAAgASAANgIMIAEoAgwQzwEhACABQRBqJAAgAAszAQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCACKAIIENABIQAgAkEQaiQAIAALSQEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBCADKAIMIgAgAygCCBA4EKYBIABBBGogAygCBBA4ENUBIANBEGokAAsqAQF/IwBBEGsiASQAIAEgADYCDCABKAIMQQxqENcBIQAgAUEQaiQAIAALMwEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwgAigCCBDWASEAIAJBEGokACAAC00BAX8jAEEQayIDIAA2AgwgAyABNgIIIAMgAjYCBCADKAIMIgAgAygCCCgCADYCACAAIAMoAggoAgAgAygCBGo2AgQgACADKAIINgIICyIBAX8jAEEQayIBIAA2AgwgASgCDCIAKAIIIAAoAgA2AgALewEBfyMAQSBrIgQkACAEIAA2AhwgBCABNgIYIAQgAjYCFCAEIAM2AhAgBCAEKAIUIAQoAhhrNgIMIAQoAhAiACAAKAIAQQAiACAEKAIMa2o2AgAgBCgCDCAASgRAIAQoAhAoAgAgBCgCGCAEKAIMEOkLGgsgBEEgaiQAC3YBAX8jAEEgayIEJAAgBCAANgIcIAQgATYCGCAEIAI2AhQgBCADNgIQIAQgBCgCFCAEKAIYazYCDCAEKAIMQQBKBEAgBCgCECgCACAEKAIYIAQoAgwQ6QsaIAQoAhAiACAEKAIMIAAoAgBqNgIACyAEQSBqJAALYQECfyMAQRBrIgIkACACQQRqIQMgAiAANgIMIAIgATYCCCACIAIoAgwQOCgCADYCBCACKAIIEDgoAgAhACACKAIMIAA2AgAgAxA4KAIAIQAgAigCCCAANgIAIAJBEGokAAtSAQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCIAEGwhASAAIAEgABBsIAAQuwFqIAAQbCAAELsBaiAAEGwgAigCCGoQ2wEgAkEQaiQACwwAIwBBEGsgADYCDAsqAQF/IwBBEGsiASQAIAEgADYCDCABKAIMIgAgACgCBBDcASABQRBqJAALMgEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAEJMBKAIAIAAoAgBrIQAgAUEQaiQAIAALOwEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBCADKAIMIAMoAgggAygCBBDdASADQRBqJAALPQEBfyMAQSBrIgMkACADIAA2AhQgAyABNgIQIAMgAjYCDCADKAIUIAMoAhAgAygCDBA4EMsBIANBIGokAAs7AQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgggAygCBBA4LQAAOgAAIANBEGokAAtsAQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMgAygCCCADKAIMazYCACADKAIAQQBLBEAgAyADKAIEIAMoAgBrNgIEIAMoAgQgAygCDCADKAIAEOsLCyADKAIEGiADQRBqJAALJwEBfyMAQRBrIgEkACABIAA2AgwgASgCDBDSASEAIAFBEGokACAACzMBAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMIAIoAggQ0QEhACACQRBqJAAgAAsxAQF/IwBBEGsiASQAIAEgADYCDCABKAIMIgAQPSgCACAAKAIAayEAIAFBEGokACAAC00BAX8jAEEQayICJAAgAiAANgIEIAIgATYCAAJ/IAJBCGogAigCBCACKAIAENMBQQFxBEAgAigCAAwBCyACKAIECyEAIAJBEGokACAAC00BAX8jAEEQayICJAAgAiAANgIEIAIgATYCAAJ/IAJBCGogAigCACACKAIEENMBQQFxBEAgAigCAAwBCyACKAIECyEAIAJBEGokACAACycBAX8jAEEQayIBJAAgASAANgIEIAEoAgQQ1AEhACABQRBqJAAgAAsvAQF/IwBBEGsiAyAANgIMIAMgATYCCCADIAI2AgQgAygCCCgCACADKAIEKAIASQsOACMAQRBrIAA2AgxBfwsxAQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCACKAIIEDg2AgAgAkEQaiQAC08BAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACQQA2AgQgAigCCCACKAIMENQBSwRAQZQIENgBAAsgAigCCEEBENkBIQAgAkEQaiQAIAALKQEBfyMAQRBrIgEkACABIAA2AgwgASgCDEEEahApIQAgAUEQaiQAIAALNQEDfyMAQRBrIgEkAEG0hgMhAkEFIQMgASAANgIMQQgQASIAIAEoAgwQ2gEgACACIAMQAgALLgEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwQoAshACACQRBqJAAgAAtRAQJ/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCCCEDIAIoAgwiACIBEPEBIAFB5IUDNgIAIAFBBGogAxChCyAAQZSGAzYCACACQRBqJAALLAEBfyMAQSBrIgUgADYCHCAFIAE2AhggBSACNgIUIAUgAzYCECAFIAQ2AgwLLwEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwgAigCCBDeASACQRBqJAALOAEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBCADKAIIIAMoAgRBARCbASADQRBqJAALWwECfyMAQRBrIgIkACACIAA2AgQgAiABNgIAIAIoAgQhAANAIAIoAgAgACgCCEcEQCAAEL4BIQEgACAAKAIIQX9qIgM2AgggASADEDgQogEMAQsLIAJBEGokAAteAQJ/IwBBEGsiASQAQX8hAiABIAA2AggCQCABKAIIIgBBBGoQ4AEgAkYEQCAAIAAoAgAoAggRAQAgAUEBOgAPDAELIAFBADoADwsgAS0AD0EBcSEAIAFBEGokACAAC0EBAn8jAEEQayIBIAA2AgwgASgCDCEAIAFBfzYCCCAAIAEoAggiAiAAKAIAIgBqNgIAIAEgACACajYCBCABKAIECyoBAX8jAEEQayIBJAAgASAANgIMIAEoAgwiACAAKAIAEOIBIAFBEGokAAtsAQJ/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAiACKAIMIgAoAgQ2AgQDQCACKAIIIAIoAgRHBEAgABA9IQEgAiACKAIEQX9qIgM2AgQgASADEDgQogEMAQsLIAAgAigCCDYCBCACQRBqJAALMQECfyMAQRBrIgEkACABIAA2AgwgASgCDBCRAS0ACyEAIAFBEGokACAAQYABcSACRwsqAQF/IwBBEGsiASQAIAEgADYCDCABKAIMEJEBKAIEIQAgAUEQaiQAIAALLgEBfyMAQRBrIgEkACABIAA2AgwgASgCDBCRAS0ACyEAIAFBEGokACAAQf8BcQsWAQF/IwBBEGsiASAANgIEIAEoAgQaC1UBAX8jAEEgayIDJAAgAyAANgIcIAMgATYCGCADIAI6ABcgAygCHCIAIANBEGogA0EIahA2IAAgAygCGCADLQAXQRgiAXQgAXUQsQsgA0EgaiQAIAALRAEBfyMAQRBrIgEkACABIAA2AgwgAUEANgIIIAEoAgwiACABKAIIEOkBIABB7IMDNgIAIAAgASgCCDYCCCABQRBqJAALLwEBfyMAQRBrIgIgADYCDCACIAE2AgggAigCDCIAQbSDAzYCACAAIAIoAgg2AgQLIwEBfyMAQRBrIgEkACABIAA2AgwgASgCDBDrASABQRBqJAALJgEBfyMAQRBrIgEkACABIAA2AgwgASgCDEEEahDsASABQRBqJAALQgECfyMAQRBrIgEgADYCDCABKAIMIQAgAUEBNgIIIAAgASgCCCICIAAoAgAiAGo2AgAgASAAIAJqNgIEIAEoAgQaCzMBAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMEEUgAigCCGohACACQRBqJAAgAAszAQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDBB3IAIoAghqIQAgAkEQaiQAIAALTAEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwiACACKAIIEDgiASkCADcCACAAQQhqIAEoAgg2AgAgAigCCBB2IAJBEGokAAsqAQF/IwBBEGsiASQAIAEgADYCDCABKAIMEJEBEJEBIQAgAUEQaiQAIAALHAEBfyMAQRBrIgEgADYCDCABKAIMQbiFAzYCAAtGAQJ/IwBBEGsiASQAIAFBCGohAiABIAA2AgwgASgCDCIAEPMBIABBADYCECABQQA2AgggAEEUaiACIAEQ9AEgAUEQaiQAC0sBAX8jAEEQayIBJAAgASAANgIMIAEoAgwiAEEANgIAIABBADYCBCAAQQA2AgggAUEANgIIIABBDGogAUEIaiABEKUBIAFBEGokAAtHAQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgwiACADKAIIEDgQ9QEgAygCBBA4GiAAEKcBIANBEGokAAs0AQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCACKAIIEDgoAgA2AgAgAkEQaiQACycBAX8jAEEQayIBJAAgASAANgIMIAEoAgwQ+QEhACABQRBqJAAgAAsjAQF/IwBBEGsiASAANgIMIAEoAgwiACgCBCAAKAIAa0EDdQsqAQF/IwBBEGsiASQAIAEgADYCDCABKAIMIgAgACgCABD7ASABQRBqJAALNAEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAED0oAgAgACgCAGtBA3UhACABQRBqJAAgAAs7AQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgwgAygCCCADKAIEEPwBIANBEGokAAtsAQJ/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAiACKAIMIgAoAgQ2AgQDQCACKAIIIAIoAgRHBEAgABA9IQEgAiACKAIEQXhqIgM2AgQgASADEDgQ/QEMAQsLIAAgAigCCDYCBCACQRBqJAALOwEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBCADKAIIIAMoAgRBA3RBBBCbASADQRBqJAALLwEBfyMAQSBrIgIkACACIAA2AhwgAiABNgIYIAIoAhwgAigCGBD+ASACQSBqJAALLwEBfyMAQRBrIgIkACACIAA2AgQgAiABNgIAIAIoAgQgAigCABD/ASACQRBqJAALKQEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAggQMSACQRBqJAALlQEBAn8jAEEwayIDJAAgA0EYaiEEIAMgADYCLCADIAI2AiggAyABEFg2AhAgAyABEIECNgIIIAQgAygCECADKAIIIAMoAigQggICfyMAQRBrIgEgBDYCDCABKAIMKAIEQX9qLQAACwRAIANBADoAByADQRhqIANBB2oQgwILIAAgA0EYaiIAEGwQLyAAEDQgA0EwaiQACzABAX8jAEEQayIBJAAgASAANgIEIAEgASgCBBAnNgIIIAEoAgghACABQRBqJAAgAAuXAQECfyMAQdAAayIEJAAgBEEIaiEFIAQgADYCTCAEIAE2AkggBCACNgJAIAQgAzYCPCAEQShqIARByABqKAIANgIAIARBIGogBEFAaygCADYCACAEQTBq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BCADNgIMIAQgBCgCGCIANgIcIARBADYCCCAAQQxqIARBCGogBCgCDBC9ASAAAn8gBCgCFARAIAAQvgEgBCgCFBCkAwwBC0EACzYCACAAIAAoAgAgBCgCEEEDdGoiATYCCCAAIAE2AgQgACgCACAEKAIUQQN0aiEBIAAQkwEgATYCACAEKAIcGiAEQSBqJAALjwEBAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMIgAQJCAAED0gACgCACAAKAIEIAIoAghBBGoQpQMgACACKAIIQQRqEMQBIABBBGogAigCCEEIahDEASAAED0gAigCCBCTARDEASACKAIIIAIoAggoAgQ2AgAgACAAEPcBEKYDIAAQxgEgAkEQaiQAC0wBAX8jAEEQayIBJAAgASAANgIIIAEgASgCCCIANgIMIAAQpwMgACgCAARAIAAQvgEgACgCACAAEKgDEPoBCyABKAIMGiABQRBqJAALPQEBfyMAQSBrIgMkACADIAA2AhQgAyABNgIQIAMgAjYCDCADKAIUIAMoAhAgAygCDBA4EKEDIANBIGokAAs4AQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgggAygCBBA4EKIDIANBEGokAAteAQF/IwBBEGsiAiQAIAIgADYCCCACIAE2AgQgAiACKAIIIgA2AgwgACACKAIEKAIANgIAIAAgAigCBCgCBDYCBCAAKAIEBEAgACgCBBDqAQsgAigCDBogAkEQaiQAC1EBA38jAEEQayIBJAAgAUEIaiECIAFBBGohAyABIAA2AgwgASABKAIMED0QqQM2AgggAUH/////BzYCBCACIAMQzgEoAgAhACABQRBqJAAgAAs1AQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCACKAIIQQAQqgIhACACQRBqJAAgAAuGAQEBfyMAQRBrIgQkACAEIAA2AgwgBCABNgIIIAQgAjYCBCAEIAM2AgADQCAEKAIEIAQoAghHBEAgBCgCDCEAIAQoAgAoAgBBeGoQOCEBIAQgBCgCBEF4aiICNgIEIAAgASACEJEBEKsDIAQoAgAiACAAKAIAQXhqNgIADAELCyAEQRBqJAALWwEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwiABBsIQEgACABIAAQbCAA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CGohBCADQRhqEIYGIAQQ7AQCQCADKAJAQYDnfkcNAAsLIANBCGohAiADQQJqIQQgAyABQQhqEPYEQQdqQQN2NgIEIANBADoAAyMAQRBrIgEkACABIAA2AgwgABAhIAFBEGokACADKAIEIQEgA0EAOgACIAAgASAEEPkDIAMgAiAAEGwgABBAEIEFNgJAIAMoAkAEQCADQQhqIQEgA0EYahCGBiABEOwECyADQQhqIQIgA0EYahCGBiACEOwEIANBAToAAyADLQADQQFxRQRAIAAQNAsgA0HQAGokAAvHAQEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBAJAIAMoAgggAygCDCIAELsBTQRAIANBCGohASADIAAQQDYCACAAKAIAIAEgAxDOASgCACADKAIEEPoDAkAgAygCCCADKAIASwRAIAAgAygCCCADKAIAayADKAIEEJECDAELIAAgACgCACADKAIIahD7AwsMAQsgABDaAyAAIAAgAygCCBCsARBBIAAgAygCCCADKAIEEJECCyAAEMYBIANBEGokAAs9AQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgwgAygCCBA4IAMoAgQQnwQgA0EQaiQAC00BAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMIgAgAigCCBBcIAIgABBANgIEIAAgAigCCBDiASAAIAIoAgQQ3gMgAkEQaiQAC1kBAn8jAEEQayIBJAAgASAANgIMIwBBEGsiAiABKAIMIgA2AgwgAigCDEGEEjYCACAAQewRNgIAIABBBGpBAEHsABDqCxogAEEEakEAEKsGIAFBEGokACAAC0EBAn8jAEEQayIBJAAgASAANgIMIAEoAgwiAEHsETYCACAAQQRqIgIEQCACQewAEKgGCyAAEDgaIAFBEGokACAACy4BAX8jAEEQayIBJAAgASAANgIMIAEoAgwiAEHMABEAABogABDgCyABQRBqJAALOwEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgxBBGogAigCCBBsIAIoAggQQBCtBiACQRBqJAALWgEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgghASACQQA6AAcgAEEgEPYDIAFBBGogABBsEK4GIAJBAToAByACLQAHQQFx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AgQgAiABNgIAIAIoAgAhASMAQRBrIgAgAigCBDYCDCAAIAE2AgggACgCCEEAOgAAIAJBEGokAAteAQF/IwBBEGsiAyAANgIMIAMgATYCCCADIAI2AgQDQCADKAIIQQBLBEAgAygCDCADKAIELQAAOgAAIAMgAygCDEEBajYCDCADIAMoAghBf2o2AggMAQsLIAMoAgwaC0cBAX8jAEEQayIDJAAgAyAANgIMIAMgATYCCCADIAI2AgQgAygCDCIAIAMoAggQOBD3AiADKAIEEDgaIAAQogQgA0EQaiQAC1oBAn8jAEEQayIBJAAgASAANgIMIAFBADYCCCABIAEoAgwiABCRASgCADYCBCABKAIIIQIgABCRASACNgIAIAEoAgQEQCAAEMMCIAEoAgQQqgQLIAFBEGokAAsnAQF/IwBBEGsiASQAIAEgADYCBCABKAIEQc8AEQAAGiABQRBqJAALMgEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAQfQUNgIAIABBDGoQpAQgAUEQaiQAIAALIwEBfyMAQRBrIgEkACABIAA2AgwgASgCDBCpBCABQRBqJAALKwEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAEKMEGiAAEOALIAFBEGokAAs0AQF/IwBBEGsiASQAIAEgADYCDCABKAIMQQxqEJEBIgAgACgCACgCABEAABogAUEQaiQAC0oBA38jAEEQayIBJABBASECIAEgADYCDCABQQhqIgMgASgCDCIAQQxqEJEBEE0gAEEMahCRARogAyAAEJEBIAIQqAQgAUEQaiQACzwBAX8jAEEQayIDJAAgAyAANgIMIAMgATYCCCADIAI2AgQgAygCCCADKAIEQfwAbEEEEJsBIANBEGokAAsnAQF/IwBBEGsiASQAIAEgADYCDCABKAIMQcwAEQAAGiABQRBqJAALOQEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwiACgCACACKAIIIAAoAgQQqwQgAkEQaiQACzsBAX8jAEEQayIDJAAgAyAANgIMIAMgATYCCCADIAI2AgQgAygCDCADKAIIIAMoAgQQqAQgA0EQaiQAC28BA38jAEHQAGsiAyQAIANBEGohBCADQThqIQUgAyABNgJAIAMgAjYCOCADIAA2AjQgAygCNCEAIAMgA0FAaxA4KAIANgIoIAAgAygCKBC5AiAEIAUQOCgCADYCACAAIAMoAhAQrgQgA0HQAGokAAtaAQJ/IwBBEGsiASQAIAEgADYCDCABQQA2AgggASABKAIMIgAQkQEoAgA2AgQgASgCCCECIAAQkQEgAjYCACABKAIEBEAgABDDAiABKAIEELUECyABQRBqJAALOAEBfyMAQSBrIgIkACACIAE2AhAgAiAANgIEIAIoAgQgAkEQahC7AhA4QdAAEQQAGiACQSBqJAALMgEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAQeQVNgIAIABBDGoQsAQgAUEQaiQAIAALIwEBfyMAQRBrIgEkACABIAA2AgwgASgCDBC0BCABQRBqJAALKwEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAEK8EGiAAEOALIAFBEGokAAtKAQN/IwBBEGsiASQAQQEhAiABIAA2AgwgAUEIaiIDIAEoAgwiAEEMahCRARBNIABBDGoQkQEaIAMgABCRASACELMEIAFBEGokAAs8AQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgggAygCBEHAAWxBBBCbASADQRBqJAALJwEBfyMAQRBrIgEkACABIAA2AgwgASgCDEHKABEAABogAUEQaiQACzkBAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMIgAoAgAgAigCCCAAKAIEELYEIAJBEGokAAs7AQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgwgAygCCCADKAIEELMEIANBEGokAAtDAQF/IwBBEGsiBCQAIAQgATYCDCAEIAI2AgggBCADNgIEIAAgBCgCDBA4IAQoAggQOCAEKAIEEDgQugQgBEEQaiQAC4sBAQJ/IwBB4ABrIgMkACADQSBqIQQgAyABNgJQIAMgADYCTCADKAJMIQAgA0FAayADQdAAahA4KAIANgIAIAAgAygCQBC5AiAEIAIQOCIBKQIANwIAIARBCGogASgCCDYCACADQRBqIAMoAig2AgAgAyADKQMgNwMIIAAgA0EIahC7BCADQeAAaiQAC1oBAn8jAEEQayIBJAAgASAANgIMIAFBADYCCCABIAEoAgwiABCRASgCADYCBCABKAIIIQIgABCRASACNgIAIAEoAgQEQCAAEMMC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AQsgA0EQaiADQRBqIAIQ/AQiBg0CIAMoAhghByADKAIUIQUMAQsLIAAgA0EQahDvBCEGCyADKAJ4IgQEQCAEIAMoAnRBAnQQqAYgAygCeBDgCwsgA0EANgJ4IANCATcDcCADKAJoIgQEQCAEIAMoAmRBAnQQqAYgAygCaBDgCwsgA0EANgJoIANCATcDYCADKAJYIgQEQCAEIAMoAlRBAnQQqAYgAygCWBDgCwsgA0EANgJYIANCATcDUCADKAJIIgQEQCAEIAMoAkRBAnQQqAYgAygCSBDgCwsgA0EANgJIIANCATcDQCADKAKIASIEBEAgBCADKAKEAUECdBCoBiADKAKIARDgCwsgA0EANgKIASADQgE3A4ABIAMoAjgiBARAIAQgAygCNEECdBCoBiADKAI4EOALCyADQQA2AjggA0IBNwMwIAMoAigiBARAIAQgAygCJEECdBCoBiADKAIoEOALCyADQQA2AiggA0IBNwMgIAMoAhgiBARAIAQgAygCFEECdBCoBiADKAIYEOALCyADQQA2AhggA0IBNwMQIAMoAggiBARAIAQgAygCBEECdBCoBiADKAIIEOALCyADQQA2AgggA0IBNwMACyADQZABaiQAIAYL8wkBCH9BaiEDAkAgAkFgakGgA0sNACACQQdxDQAgAEHIAGpBkO4AQYAIEOkLGiAAQcgIakGQ9gBBgAgQ6QsaIABByBBqQZD+AEGACBDpCxogAEHIGGpBkIYBQYAIEOkLGiACQQN2IQJBACEDA0AgACAEQQJ0IgVqIAVBkI4BaigCACABIANqLQAAQRB0IAEgA0EBaiIDQQAgAyACSRsiA2otAABBCHRyIAEgA0EBaiIDQQAgAyACSRsiA2otAAByQQh0IAEgA0EBaiIDQQAgAyACSRsiA2otAAByczYCACADQQFqIgNBACADIAJJGyEDIARBAWoiBEESRw0ACyAAQcgAaiEDQQAhAQNAQQAhBANAIAMgACAEQQJ0aigCACAHcyICQQ52QfwHcWpBgAhqKAIAIAMgAkEWdkH8B3FqKAIAaiADIAJBBnZB/AdxakGAEGooAgBzIAMgAkH/AXFBAnRqQYAYaigCAGogAXMhByACIQEgBEEBaiIEQRBHDQALIAAoAkAhASAAIAhBAnQiBGogACgCRCACcyIFNgIAIAAgBEEEcmogASAH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AyAAQSBqEPQFDQBBlJADQQE2AgALIABBIGpBgAMQqAYLIABBoANqJAALjw0BBH8jAEGgBmsiAyQAQUghBgJAIAJBgANLDQBBACEGIANBgANqQQBBoAMQ6gsaIANBCGoQ2QQgA0EwOgCXAyADIAI6AJMDIAMgAkEIdjoAkgMgA0EAOwGQAyADQZgDaiABIAIQ6QsgAmpBgAE6AAAgA0KYsujYwaOHjx83A8gCIANCkKLImMGihYsXNwPAAiADQoiSqNjAoYOHDzcDuAIgA0KAgoiYwKCBgwc3A7ACAkAgA0EIaiADQbACakGAAhDbBCIEDQAgA0IANwOoAiADQgA3A6ACIANBgANqIQEgAkEZaiIFIQIDQCACBEAgAyADLQCgAiABLQAAczoAoAIgAyADLQChAiABLQABczoAoQIgAyADLQCiAiABLQACczoAogIgAyADLQCjAiABLQADczoAowIgAyADLQCkAiABLQAEczoApAIgAyADLQClAiABLQAFczoApQIgAyADLQCmAiABLQAGczoApgIgAyADLQCnAiABLQAHczoApwIgAyADLQCoAiABLQAIczoAqAIgAyADLQCpAiABLQAJczoAqQIgAyADLQCqAiABLQAKczoAqgIgAyADLQCrAiABLQALczoAqwIgAyADLQCsAiABLQAMczoArAIgAyADLQCtAiABLQANczoArQIgAyADLQCuAiABLQAOczoArgIgAyADLQCvAiABLQAPczoArwJBACACQXBqIgQgBCACSxshAiABQRBqIQEgA0EIakEBIANBoAJqIANBoAJqEOEEIgRFDQEMAgsLIAMgAykDqAI3A9gCIAMgAykDoAI3A9ACIANCADcDoAIgA0IANwOoAiADIAMtAIMDQQFqOgCDAyADQYADaiEBIAUhAgNAIAIEQCADIAMtAKACIAEtAABzOgCgAiADIAMtAKECIAEtAAFzOgChAiADIAMtAKICIAEtAAJzOgCiAiADIAMtAKMCIAEtAANzOgCjAiADIAMtAKQCIAEtAARzOgCkAiADIAMtAKUCIAEtAAVzOgClAiADIAMtAKYCIAEtAAZzOgCmAiADIAMtAKcCIAEtAAdzOgCnAiADIAMtAKgCIAEtAAhzOgCoAiADIAMtAKkCIAEtAAlzOgCpAiADIAMtAKoCIAEtAApzOgCqAiADIAMtAKsCIAEtAAtzOgCrAiADIAMtAKwCIAEtAAxzOgCsAiADIAMtAK0CIAEtAA1zOgCtAiADIAMtAK4CIAEtAA5zOgCuAiADIAMtAK8CIAEtAA9zOgCvAkEAIAJBcGoiBCAEIAJLGyECIAFBEGohASADQQhqQQEgA0GgAmogA0GgAmoQ4QQiBEUNAQwCCwsgAyADKQOoAjcD6AIgAyADKQOgAjcD4AIgA0IANwOgAiADQgA3A6gCIAMgAy0AgwNBAWo6AIMDIANBgANqIQEDQCAFBEAgAyADLQCgAiABLQAAczoAoAIgAyADLQChAiABLQABczoAoQIgAyADLQCiAiABLQACczoAogIgAyADLQCjAiABLQADczoAowIgAyADLQCkAiABLQAEczoApAIgAyADLQClAiABLQAFczoApQIgAyADLQCmAiABLQAGczoApgIgAyADLQCnAiABLQAHczoApwIgAyADLQCoAiABLQAIczoAqAIgAyADLQCpAiABLQAJczoAqQIgAyADLQCqAiABLQAKczoAqgIgAyADLQCrAiABLQALczoAqwIgAyADLQCsAiABLQAMczoArAIgAyADLQCtAiABLQANczoArQIgAyADLQCuAiABLQAOczoArgIgAyADLQCvAiABLQAPczoArwJBACAFQXBqIgIgAiAFSxshBSABQRBqIQEgA0EIakEBIANBoAJqIANBoAJqEOEEIgRFDQEMAgsLIAMgAykDqAI3A/gCIAMgAykDoAI3A/ACIAMgAy0AgwNBAWo6AIMDIANBCGogA0HQAmpBgAIQ2wQiBA0AIANBCGpBASADQfACaiIBIAEQ4QQiBA0AIAAgASkAADcAACAAIAFBCGoiAikAADcACCADQQhqQQEgASABEOEEIgQNACAAIAEpAAA3ABAgACACKQAANwAYIANBCGpBASABIAEQ4QQiBA0AIAAgASkAADcAICAAIAEpAAg3AChBACEECyADQQhqENoEIANBgANqQaADEKgGIANB0AJqQTAQqAYgA0GwAmpBIBCoBiADQaACakEQEKgGIARFDQAgAEEwEKgGIAQhBgsgA0GgBmokACAGC+0CAQV/IwBBMGsiBCQAIARCADcDKCAEQgA3AyAgBEIANwMYQRAhAiAEQgA3AxAgBEIANwMIIARCADcDACAAQSBqIQUDQCACBEAgACAC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IgRB4acCai0AACICSxsNAAsgBa0hCQtCfyAIrSIKiCILIAlUDQAgASACTQ0AA0AgAq1C/wGDIAkgCoaEIQkCfyAAKAIEIgQgACgCaEkEQCAAIARBAWo2AgQgBC0AAAwBCyAAEOMGCyEEIAkgC1YNASABIARB4acCai0AACICSw0ACwsgASAEQeGnAmotAABNDQADQCABAn8gACgCBCIEIAAoAmhJBEAgACAEQQFqNgIEIAQtAAAMAQsgABDjBgtB4acCai0AAEsNAAtBmNwDQcQANgIAIAZBACADQgGDUBshBiADIQkLIAAoAmgEQCAAIAAoAgRBf2o2AgQLAkAgCSADVA0AAkAgA6dBAXENACAGDQBBmNwDQcQANgIAIANCf3whAwwDCyAJIANYDQBBmNwDQcQANgIADAILIAkgBqwiA4UgA30hAwwBC0IAIQMgAEIAEOIGCyAHQRBqJAAgAwt8AQF/IwBBkAFrIgQkACAEIAA2AiwgBCAANgIEIARBADYCACAEQX82AkwgBEF/IABB/////wdqIABBAEgbNgIIIARCABDiBiAEIAJBASADEOUGIQMgAQRAIAEgACAEKAIEIAQoAnhqIAQoAghrajYCAAsgBEGQAWokACADCzUAIAAgATcDACAAIAJC////////P4MgBEIwiKdBgIACcSACQjCIp0H//wFxcq1CMIaENwMIC8QCAQF/IwBB0ABrIgQkAAJAIANBgIABTgRAIARBIGogASACQgBCgICAgICAgP//ABD8BiAEKQMoIQIgBCkDICEBIANB//8BSARAIANBgYB/aiEDDAILIARBEGogASACQgBCgICAgICAgP//ABD8BiADQf3/AiADQf3/AkgbQYKAfmohAyAEKQMYIQIgBCkDECEBDAELIANBgYB/Sg0AIARBQGsgASACQgBCgICAgICAwAAQ/AYgBCkDSCECIAQpA0AhASADQYOAfkoEQCADQf7/AGohAwwBCyAEQTBqIAEgAkIAQoCAgICAgMAAEPwGIANBhoB9IANBhoB9ShtB/P8BaiEDIAQpAzghAiAEKQMwIQELIAQgASACQgAgA0H//wBqrUIwhhD8BiAAIAQpAwg3AwggACAEKQMANwMAIARB0ABqJAALlAgCBn8CfiMAQTBrIgYkAAJAIAJBAk0EQCABQQRqIQUgAkECdCICQbyq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QRBqJAALLwAjAEEQayIDJAAgAyABIAIQ8AYgACADKQMANwMAIAAgAykDCDcDCCADQRBqJAALFgAgAEUEQEEADwtBmNwDIAA2AgBBfwvbAQIBfwJ+QQEhBAJAIABCAFIgAUL///////////8AgyIFQoCAgICAgMD//wBWIAVCgICAgICAwP//AFEbDQAgAkIAUiADQv///////////wCDIgZCgICAgICAwP//AFYgBkKAgICAgIDA//8AURsNACAAIAKEIAUgBoSEUARAQQAPCyABIAODQgBZBEBBfyEEIAAgAlQgASADUyABIANRGw0BIAAgAoUgASADhYRCAFIPC0F/IQQgACACViABIANVIAEgA1EbDQAgACAChSABIAOFhEIAUiEECyAEC8cBAgF/An5BfyEDAkAgAEIAUiABQv///////////wCDIgRCgICAgICAwP//AFYgBEKAgICAgIDA//8AURsNAEEAIAJC////////////AIMiBUKAgICAgIDA//8AViAFQoCAgICAgMD//wBRGw0AIAAgBCAFhIRQBEBBAA8LIAEgAoNCAFkEQCAAQgBUIAEgAlMgASACURsNASAAIAEgAoWEQgBSDwsgAEIAViABIAJVIAEgAlEbDQAgACABIAKFhEIAUiEDCyADC2wBA34gACACQiCIIgMgAUIgiCIEfkIAfCACQv////8PgyICIAFC/////w+DIgF+IgVCIIggAiAEfnwiAkIgiHwgASADfiACQv////8Pg3wiAkIgiHw3AwggACAFQv////8PgyACQiCGhDcDAAtQAQF+AkAgA0HAAHEEQCABIANBQGqthiECQgAhAQwBCyADRQ0AIAIgA60iBIYgAUHAACADa62IhCECIAEgBIYhAQsgACABNwMAIAAgAjcDCAvhCQIEfwR+IwBB8ABrIgUkACAEQv///////////wCDIQoCQAJAIAFCf3wiCUJ/USACQv///////////wCDIgsgCSABVK18Qn98IglC////////v///AFYgCUL///////+///8AURtFBEAgA0J/fCIJQn9SIAogCSADVK18Qn98IglC////////v///AFQgCUL///////+///8AURsNAQsgAVAgC0KAgICAgIDA//8AVCALQoCAgICAgMD//wBRG0UEQCACQoCAgICAgCCEIQQgASEDDAILIANQIApCgICAgICAwP//AFQgCkKAgICAgIDA//8AURtFBEAgBEKAgICAgIAghCEEDAILIAEgC0KAgICAgIDA//8AhYRQBEBCgICAgICA4P//ACACIAEgA4UgAiAEhUKAgICAgICAgIB/hYRQIgYbIQRCACABIAYbIQMMAgsgAyAKQoCAgICAgMD//wCFhFANASABIAuEUARAIAMgCoRCAFINAiABIAODIQMgAiAEgyEEDAILIAMgCoRQRQ0AIAEhAyACIQQMAQsgAyABIAMgAVYgCiALViAKIAtRGyIHGyEKIAQgAiAHGyILQv///////z+DIQkgAiAEIAcbIgJCMIinQf//AXEhCCALQjCIp0H//wFxIgZFBEAgBUHgAGogCiAJIAogCSAJUCIGG3kgBkEGdK18pyIGQXFqEPYGIAUpA2ghCSAFKQNgIQpBECAGayEGCyABIAMgBxshAyACQv///////z+DIQQgCEUEQCAFQdAAaiADIAQgAyAEIARQIgcbeSAHQQZ0rXynIgdBcWoQ9gZBECAHayEIIAUpA1ghBCAFKQNQIQMLIARCA4YgA0I9iIRCgICAgICAgASEIQQgCUIDhiAKQj2IhCEBIAIgC4UhCQJ+IANCA4YiAyAGIAhrIgdFDQAaIAdB/wBLBEBCACEEQgEMAQsgBUFAayADIARBgAEgB2sQ9gYgBUEwaiADIAQgBxD5BiAFKQM4IQQgBSkDMCAFKQNAIAUpA0iEQgBSrYQLIQMgAUKAgICAgICABIQhDCAKQgOGIQICQCAJQn9XBEAgAiADfSIBIAwgBH0gAiADVK19IgSEUARAQgAhA0IAIQQMAwsgBEL/////////A1YNASAFQSBqIAEgBCABIAQgBFAiBxt5IAdBBnStfKdBdGoiBxD2BiAGIAdrIQYgBSkDKCEEIAUpAyAhAQwBCyACIAN8IgEgA1StIAQgDHx8IgRCgICAgICAgAiDUA0AIAFCAYMgBEI/hiABQgGIhIQhASAGQQFqIQYgBEIBiCEECyALQoCAgICAgICAgH+DIQIgBkH//wFOBEAgAkKAgICAgIDA//8AhCEEQgAhAwwBC0EAIQcCQCAGQQBKBEAgBiEHDAELIAVBEGogASAEIAZB/wBqEPYGIAUgASAEQQEgBmsQ+QYgBSkDACAFKQMQIAUpAxiEQgBSrYQhASAFKQMIIQQLIARCPYYgAUIDiIQiAyABp0EHcSIGQQRLrXwiASADVK0gBEIDiEL///////8/gyAChCAHrUIwhoR8IQQCQAJAIAZBBEcEQCABIQMMAQsgBCABQgGDIgIgAXwiAyACVK18IQQMAQsgBkUNAQsLIAAgAzcDACAAIAQ3AwggBUHwAGokAAvHAQIDfwJ+IwBBEGsiAyQAAn4gAbwiBEH/////B3EiAkGAgIB8akH////3B00EQCACrUIZhkKAgICAgICAwD98DAELIAJBgICA/AdPBEAgBK1CGYZCgICAgICAwP//AIQMAQsgAkUEQEIADAELIAMgAq1CACACZyICQdEAahD2BiADKQMAIQUgAykDCEKAgICAgIDAAIVBif8AIAJrrUIwhoQLIQYgACAFNwMAIAAgBiAEQYCAgIB4ca1CIIaENwMIIANBEGokAAtQAQF+AkAgA0HAAHEEQCACIANBQGqtiCEBQgAhAgwBCyADRQ0AIAJBwAAgA2uthiABIAOtIgSIhCEBIAIgBIghAgsgACABNwMAIAAgAjcDCAu2AwIDfwF+IwBBIGsiAyQAAkAgAUL///////////8AgyIFQoCAgICAgMC/QHwgBUKAgICAgIDAwL9/fFQEQCABQhmIpyECIABQIAFC////D4MiBUKAgIAIVCAFQoCAgAhRG0UEQCACQYGAgIAEaiECDAILIAJBgICAgARqIQIgACAFQoCAgAiFhEIAUg0BIAJBAXEgAmohAgwBCyAAUCAFQoCAgICAgMD//wBUIAVCgICAgICAwP//AFEbRQRAIAFCGYinQf///wFxQYCAgP4HciECDAELQYCAgPwHIQIgBUL///////+/v8AAVg0AQQAhAiAFQjCIpyIEQZH+AEkNACADQRBqIAAgAUL///////8/g0KAgICAgIDAAIQiBSAEQf+Bf2oQ9gYgAyAAIAVBgf8AIARrEPkGIAMpAwgiBUIZiKchAiADKQMAIAMpAxAgAykDGIRCAFKthCIAUCAFQv///w+DIgVCgICACFQgBUKAgIAIURtFBEAgAkEBaiECDAELIAAgBUKAgIAIhYRCAFINACACQQFxIAJqIQILIANBIGokACACIAFCIIinQYCAgIB4cXK+C/oBAgJ/A34jAEEQayICJAACfiABvSIFQv///////////wCDIgRCgICAgICAgHh8Qv/////////v/wBYBEAgBEI8hiEGIARCBIhCgICAgICAgIA8fAwBCyAEQoCAgICAgID4/wBaBEAgBUI8hiEGIAVCBIhCgICAgICAwP//AIQMAQsgBFAEQEIADAELIAIgBEIAIAWnZ0EgaiAEQiCIp2cgBEKAgICAEFQbIgNBMWoQ9gYgAikDACEGIAIpAwhCgICAgICAwACFQYz4ACADa61CMIaECyEEIAAgBjcDACAAIAQgBUKAgICAgICAgIB/g4Q3AwggAkEQaiQAC54LAgV/D34jAEHgAGsiBSQAIAJCIIYgAUIgiIQhDiAEQi+GIANCEYiEIQsgBEL///////8/gyIMQg+GIANCMYiEIRAgAiAEhUKAgICAgICAgIB/gyEKIAJC////////P4MiDUIgiCERIAxCEYghEiAEQjCIp0H//wFxIQYCQAJ/IAJCMIinQf//AXEiCEF/akH9/wFNBEBBACAGQX9qQf7/AUkNARoLIAFQIAJC////////////AIMiD0KAgICAgIDA//8AVCAPQoCAgICAgMD//wBRG0UEQCACQoCAgICAgCCEIQoMAgsgA1AgBEL///////////8AgyICQoCAgICAgMD//wBUIAJCgICAgICAwP//AFEbRQRAIARCgICAgICAIIQhCiADIQEMAgsgASAPQoCAgICAgMD//wCFhFAEQCACIAOEUARAQoCAgICAgOD//wAhCkIAIQEMAwsgCkKAgICAgIDA//8AhCEKQgAhAQwCCyADIAJCgICAgICAwP//AIWEUARAIAEgD4QhAkIAIQEgAlAEQEKAgICAgIDg//8AIQoMAwsgCkKAgICAgIDA//8AhCEKDAILIAEgD4RQBEBCACEBDAILIAIgA4RQBEBCACEBDAILIA9C////////P1gEQCAFQdAAaiABIA0gASANIA1QIgcbeSAHQQZ0rXynIgdBcWoQ9gYgBSkDWCINQiCGIAUpA1AiAUIgiIQhDiANQiCIIRFBECAHayEHCyAHIAJC////////P1YNABogBUFAayADIAwgAyAMIAxQIgkbeSAJQQZ0rXynIglBcWoQ9gYgBSkDSCICQg+GIAUpA0AiA0IxiIQhECACQi+GIANCEYiEIQsgAkIRiCESIAcgCWtBEGoLIQcgC0L/////D4MiAiABQv////8PgyIEfiITIANCD4ZCgID+/w+DIgEgDkL/////D4MiA358Ig5CIIYiDCABIAR+fCILIAxUrSACIAN+IhUgASANQv////8PgyIMfnwiDyAQQv////8PgyINIAR+fCIQIA4gE1StQiCGIA5CIIiEfCITIAIgDH4iFiABIBFCgIAEhCIOfnwiESADIA1+fCIUIBJC/////weDQoCAgIAIhCIBIAR+fCISQiCGfCIXfCEEIAYgCGogB2pBgYB/aiEGAkAgDCANfiIYIAIgDn58IgIgGFStIAIgASADfnwiAyACVK18IAMgDyAVVK0gECAPVK18fCICIANUrXwgASAOfnwgASAMfiIDIA0gDn58IgEgA1StQiCGIAFCIIiEfCACIAFCIIZ8IgEgAlStfCABIBIgFFStIBEgFlStIBQgEVStfHxCIIYgEkIgiIR8IgMgAVStfCADIBMgEFStIBcgE1StfHwiAiADVK18IgFCgICAgICAwACDUEUEQCAGQQFqIQYMAQsgC0I/iCEDIAFCAYYgAkI/iIQhASACQgGGIARCP4iEIQIgC0IBhiELIAMgBEIBhoQhBAsgBkH//wFOBEAgCkKAgICAgIDA//8AhCEKQgAhAQwBCwJ+IAZBAEwEQEEBIAZrIghBgAFPBEBCACEBDAMLIAVBMGogCyAEIAZB/wBqIgYQ9gYgBUEgaiACIAEgBhD2BiAFQRBqIAsgBCAIEPkGIAUgAiABIAgQ+QYgBSkDMCAFKQM4hEIAUq0gBSkDICAFKQMQhIQhCyAFKQMoIAUpAxiEIQQgBSkDACECIAUpAwgMAQsgAUL///////8/gyAGrUIwhoQLIAqEIQogC1AgBEJ/VSAEQoCAgICAgICAgH9RG0UEQCAKIAJCAXwiASACVK18IQoMAQsgCyAEQoCAgICAgICAgH+FhFBFBEAgAiEBDAELIAogAiACQgGDfCIBIAJUrXwhCgsgACABNwMAIAAgCjcDCCAFQeAAaiQAC0EBAX8jAEEQayIFJAAgBSABIAIgAyAEQoCAgICAgICAgH+FEPcGIAAgBSkDADcDACAAIAUpAwg3AwggBUEQaiQAC38CAn8BfiMAQRBrIgMkACAAAn4gAUUEQEIADAELIAMgASABQR91IgJqIAJzIgKtQgAgAmciAkHRAGoQ9gYgAykDCEKAgICAgIDAAIVBnoABIAJrrUIwhnwgAUGAgICAeHGtQiCGhCEEIAMpAwALNwMAIAAgBDcDCCADQRBqJAALiBECBX8MfiMAQcABayIFJAAgBEL///////8/gyESIAJC////////P4MhECACIASFQoCAgICAgICAgH+DIREgBEIwiKdB//8BcSEHAkACQAJAIAJCMIinQf//AXEiCEF/akH9/wFNBEAgB0F/akH+/wFJDQELIAFQIAJC////////////AIMiC0KAgICAgIDA//8AVCALQoCAgICAgMD//wBRG0UEQCACQoCAgICAgCCEIREMAgsgA1AgBEL///////////8AgyICQoCAgICAgMD//wBUIAJCgICAgICAwP//AFEbRQRAIARCgICAgICAIIQhESADIQEMAgsgASALQoCAgICAgMD//wCFhFAEQCADIAJCgICAgICAwP//AIWEUARAQgAhAUKAgICAgIDg//8AIREMAwsgEUKAgICAgIDA//8AhCERQgAhAQwCCyADIAJCgICAgICAwP//AIWEUARAQgAhAQwCCyABIAuEUA0CIAIgA4RQBEAgEUKAgICAgIDA//8AhCERQgAhAQwCCyALQv///////z9YBEAgBUGwAWogASAQIAEgECAQUCIGG3kgBkEGdK18pyIGQXFqEPYGQRAgBmshBiAFKQO4ASEQIAUpA7ABIQELIAJC////////P1YNACAFQaABaiADIBIgAyASIBJQIgkbeSAJQQZ0rXynIglBcWoQ9gYgBiAJakFwaiEGIAUpA6gBIRIgBSkDoAEhAwsgBUGQAWogEkKAgICAgIDAAIQiFEIPhiADQjGIhCICQoTJ+c6/5ryC9QAgAn0iBBD1BiAFQYABakIAIAUpA5gBfSAEEPUGIAVB8ABqIAUpA4gBQgGGIAUpA4ABQj+IhCIEIAIQ9QYgBUHgAGogBEIAIAUpA3h9EPUGIAVB0ABqIAUpA2hCAYYgBSkDYEI/iIQiBCACEPUGIAVBQGsgBEIAIAUpA1h9EPUGIAVBMGogBSkDSEIBhiAFKQNAQj+IhCIEIAIQ9QYgBUEgaiAEQgAgBSkDOH0Q9QYgBUEQaiAFKQMoQgGGIAUpAyBCP4iEIgQgAhD1BiAFIARCACAFKQMYfRD1BiAGIAggB2tqIQcCfkIAIAUpAwhCAYYgBSkDAEI/iIRCf3wiC0L/////D4MiBCACQiCIIgp+IgwgC0IgiCILIAJC/////w+DIg9+fCICQiCIIAIgDFStQiCGhCAKIAt+fCACQiCGIgogBCAPfnwiAiAKVK18IAIgBCADQhGIQv////8PgyIMfiIPIAsgA0IPhkKAgP7/D4MiDX58IgpCIIYiDiAEIA1+fCAOVK0gCyAMfiAKIA9UrUIghiAKQiCIhHx8fCIKIAJUrXwgCkIAUq18fSICQv////8PgyIMIAR+Ig8gCyAMfiINIAQgAkIgiCIOfnwiAkIghnwiDCAPVK0gCyAOfiACIA1UrUIghiACQiCIhHx8IAxCACAKfSICQiCIIgogBH4iDyACQv////8PgyINIAt+fCICQiCGIg4gBCANfnwgDlStIAogC34gAiAPVK1CIIYgAkIgiIR8fHwiAiAMVK18IAJCfnwiDyACVK18Qn98IgpC/////w+DIgIgEEIChiABQj6IhEL/////D4MiBH4iDCABQh6IQv////8PgyILIApCIIgiCn58Ig0gDFStIA0gD0IgiCIMIBBCHohC///v/w+DQoCAEIQiEH58Ig4gDVStfCAKIBB+fCACIBB+IhMgBCAKfnwiDSATVK1CIIYgDUIgiIR8IA4gDUIghnwiDSAOVK18IA0gCyAMfiITIA9C/////w+DIg8gBH58Ig4gE1StIA4gAiABQgKGQvz///8PgyITfnwiFSAOVK18fCIOIA1UrXwgDiAKIBN+Ig0gDyAQfnwiCiAEIAx+fCIEIAIgC358IgJCIIggAiAEVK0gCiANVK0gBCAKVK18fEIghoR8IgogDlStfCAKIBUgDCATfiIEIAsgD358IgtCIIggCyAEVK1CIIaEfCIEIBVUrSAEIAJCIIZ8IARUrXx8IgQgClStfCICQv////////8AWARAIAFCMYYgBEL/////D4MiASADQv////8PgyILfiIKQgBSrX1CACAKfSIPIARCIIgiCiALfiINIAEgA0IgiCIMfnwiEEIghiIOVK19IAJC/////w+DIAt+IAEgEkL/////D4N+fCAKIAx+fCAQIA1UrUIghiAQQiCIhHwgBCAUQiCIfiADIAJCIIh+fCACIAx+fCAKIBJ+fEIghnx9IQsgB0F/aiEHIA8gDn0MAQsgBEIhiCEMIAFCMIYgAkI/hiAEQgGIhCIEQv////8PgyIBIANC/////w+DIgt+IgpCAFKtfUIAIAp9IhAgASADQiCIIgp+Ig8gDCACQh+GhCINQv////8PgyIOIAt+fCIMQiCGIhNUrX0gBCAUQiCIfiADIAJCIYh+fCACQgGIIgIgCn58IA0gEn58QiCGIAogDn4gAkL/////D4MgC358IAEgEkL/////D4N+fCAMIA9UrUIghiAMQiCIhHx8fSELIBAgE30LIQEgB0GAgAFOBEAgEUKAgICAgIDA//8AhCERQgAhAQwBCyAHQf//AGohCCAHQYGAf0wEQAJAIAgNACAEIAFCAYYgA1YgC0IBhiABQj+IhCIBIBRWIAEgFFEbrXwiASAEVK0gAkL///////8/g3wiA0KAgICAgIDAAINQDQAgAyARhCERDAILQgAhAQwBCyAEIAFCAYYgA1ogC0IBhiABQj+IhCIBIBRaIAEgFFEbrXwiASAEVK0gAkL///////8/gyAIrUIwhoR8IBGEIRELIAAgATcDACAAIBE3AwggBUHAAWokAA8LIABCADcDACAAQoCAgICAgOD//wAgESACIAOEUBs3AwggBUHAAWokAAvZAwICfwJ+IwBBIGsiAiQAAkAgAUL///////////8AgyIEQoCAgICAgMD/Q3wgBEKAgICAgIDAgLx/fFQEQCABQgSGIABCPIiEIQQgAEL//////////w+DIgBCgYCAgICAgIAIWgRAIARCgYCAgICAgIDAAHwhBQwCCyAEQoCAgICAgICAQH0hBSAAQoCAgICAgICACIVCAFINASAFQgGDIAV8IQUMAQsgAFAgBEKAgICAgIDA//8AVCAEQoCAgICAgMD//wBRG0UEQCABQgSGIABCPIiEQv////////8Dg0KAgICAgICA/P8AhCEFDAELQoCAgICAgID4/wAhBSAEQv///////7//wwBWDQBCACEFIARCMIinIgNBkfcASQ0AIAJBEGogACABQv///////z+DQoCAgICAgMAAhCIEIANB/4h/ahD2BiACIAAgBEGB+AAgA2sQ+QYgAikDCEIEhiACKQMAIgRCPIiEIQUgAikDECACKQMYhEIAUq0gBEL//////////w+DhCIEQoGAgICAgICACFoEQCAFQgF8IQUMAQsgBEKAgICAgICAgAiFQgBSDQAgBUIBgyAFfCEFCyACQSBqJAAgBSABQoCAgICA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DQAgBSABQQRqNgIMIAEgBSgCCDYCAAsgBCAGIAUoArwBIAMgABCECDYCACAFQdABaiAFQRBqIAUoAgwgAxCFCCAFQdgCaiAFQdACahCxBwRAIAMgAygCAEECcjYCAAsgBSgC2AIhBiACEKcLGiAFQdABahCnCxogBUHgAmokACAGCwkAIAAgARDFCAs/AQF/IwBBEGsiAyQAIANBCGogARCdByACIANBCGoQpQgiARDDCDYCACAAIAEQxAggA0EIahD0ByADQRBqJAAL9gIBAn8jAEEQayIKJAAgCiAANgIMAkACQAJAIAMoAgAgAkcNAEErIQsgACAJKAJgRwRAQS0hCyAJKAJkIABHDQELIAMgAkEBajYCACACIAs6AAAMAQsCQCAGEHlFDQAgACAFRw0AQQAhACAIKAIAIgkgB2tBnwFKDQIgBCgCACEAIAggCUEEajYCACAJIAA2AgAMAQtBfyEAIAkgCUHoAGogCkEMahDBCCAJayIJQdwASg0BIAlBAnUhBgJAAkACQCABQXhqDgMAAgABCyAGIAFIDQEMAwsgAUEQRw0AIAlB2ABIDQAgAygCACIJIAJGDQIgCSACa0ECSg0CIAlBf2otAABBMEcNAkEAIQAgBEEANgIAIAMgCUEBajYCACAJIAZB4NICai0AADoAAAwCCyADIAMoAgAiAEEBajYCACAAIAZB4NICai0AADoAACAEIAQoAgBBAWo2AgBBACEADAELQQAhACAEQQA2AgALIApBEGokACAACw8AIAEgAiADIAQgBRCwCAusAwEDfyMAQeACayIFJAAgBSABNgLQAiAFIAA2AtgCIAIQgQghACACIAVB4AFqEKwIIQEgBUHQAWogAiAFQcwCahCtCCAFQcABahByIgIgAhDtAhDuAiAFIAJBABDuASIGNgK8ASAFIAVBEGo2AgwgBUEANgIIA0ACQCAFQdgCaiAFQdACahCtB0UNACAFKAK8ASACEHkgBmpGBEAgAhB5IQcgAiACEHlBAXQQ7gIgAiACEO0CEO4CIAUgByACQQAQ7gEiBmo2ArwBCyAFQdgCahCuByAAIAYgBUG8AWogBUEIaiAFKALMAiAFQdABaiAFQRBqIAVBDGogARCuCA0AIAVB2AJqELAHGgwBCwsCQCAFQdABahB5RQ0AIAUoAgwiASAFQRBqa0GfAUoNACAF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CyADIAJBBHI2AgALPAAgASACIAMgBEEDEJYJIQEgAygCACECAkAgAUHtAkoNACACQQRxDQAgACABNgIADwsgAyACQQRyNgIACz4AIAEgAiADIARBAhCWCSEBIAMoAgAhAgJAIAFBDEoNACACQQRxDQAgACABQX9qNgIADwsgAyACQQRyNgIACzsAIAEgAiADIARBAhCWCSEBIAMoAgAhAgJAIAFBO0oNACACQQRxDQAgACABNgIADwsgAyACQQRyNgIAC2EBAX8jAEEQayIEJAAgBCABNgIIA0ACQCAAIARBCGoQrQdFDQAgA0GAwAAgABCuBxCvB0UNACAAELAHGgwBCwsgACAEQQhqELEHBEAgAiACKAIAQQJyNgIACyAEQRBqJAALgwEAIABBCGogACgCCCgCCBEAACIAEKcIQQAgAEEMahCnCGtGBEAgBCAEKAIAQQRyNgIADwsgAiADIAAgAEEYaiAFIARBABCmCCAAayEAAkAgASgCACIEQQxHDQAgAA0AIAFBADYCAA8LAkAgBEELSg0AIABBDEcNACABIARBDGo2AgALCzsAIAEgAiADIARBAhCWCSEBIAMoAgAhAgJAIAFBPEoNACACQQRxDQAgACABNgIADwsgAyACQQRyNgIACzsAIAEgAiADIARBARCWCSEBIAMoAgAhAgJAIAFBBkoNACACQQRxDQAgACABNgIADwsgAyACQQRyNgIACygAIAEgAiADIARBBBCWCSEBIAMtAABBBHFFBEAgACABQZRxajYCAAsLZQEBfyMAQRBrIgQkACAEIAE2AghBBiEBAkACQCAAIARBCGoQsQcNAEEEIQEgAyAAEK4HEIwJQSVHDQBBAiEBIAAQsAcgBEEIahCxB0UNAQsgAiACKAIAIAFyNgIACyAEQRBqJAALSgAjAEGAAWsiAiQAIAIgAkH0AGo2AgwgAEEIaiACQRBqIAJBDGogBCAFIAYQpQkgAkEQaiACKAIMIAEQlwshASACQYABaiQAIAELZAEBfyMAQRBrIgYkACAGQQA6AA8gBiAFOgAOIAYgBDoADSAGQSU6AAwgBQRAIAZBDWogBkEOahCmCQsgAiABIAEgAigCABCnCSAGQQxqIAMgACgCABAPIAFqNgIAIAZBEGokAAs7AQF/IwBBEGsiAiQAIAIgABA4LQAAOgAPIAAgARA4LQAAOgAAIAEgAkEPahA4LQAAOgAAIAJBEGokAAsHACABIABrC0oAIwBBoANrIgIkACACIAJBoANqNgIMIABBCGogAkEQaiACQQxqIAQgBSAGEKkJIAJBEGogAigCDCABEJgLIQEgAkGgA2okACABC34BAX8jAEGQAWsiBiQAIAYgBkGEAWo2AhwgACAGQSBqIAZBHGogAyAEIAUQpQkgBkIANwMQIAYgBkEgajYCDCABIAZBDGogASACKAIAEKoJIAZBEGogACgCABCrCSIAQX9GBEAQyAcACyACIAEgAEECdGo2AgAgBkGQAWokAAsKACABIABrQQJ1Cz4BAX8jAEEQayIFJAAgBSAENgIMIAVBCGogBUEMahCiCCEEIAAgASACIAMQ4wchACAEEKMIIAVBEGokACAACwUAQf8ACwcAIAAQchoLDAAgAEEBQS0Q5wEaCwwAIABBgoaAIDYAAAsIAEH/////BwsIACAAELIJGgsnAQF/IwBBEGsiASQAIAAgAUEIaiABEPAHIAAQswkgAUEQaiQAIAALLQEBfyAAIQFBACEAA0AgAEEDRwRAIAEgAEECdGpBADYCACAAQQFqIQAMAQsLCwwAIABBAUEtEOYIGgvnAwEBfyMAQaACayIAJAAgACACNgKQAiAAIAE2ApgCIABB3QE2AhAgAEGYAWogAEGgAWogAEEQahD7ByEBIABBkAFqIAQQnQcgAEGQAWoQngchByAAQQA6AI8BAkAgAEGYAmogAiADIABBkAFqIAQoAgQgBSAAQY8BaiAHIAEgAEGUAWogAEGEAmoQtglFDQAgAEHr1AIoAAA2AIcBIABB5NQCKQAANwOAASAHIABBgAFqIABBigFqIABB9gBqEJ4IIABB3AE2AhAgAEEIakEAIABBEGoQ+wchByAAQRBqIQICQCAAKAKUASABELcJa0HjAE4EQCAHIAAoApQBIAEQtwlrQQJqEN8LEPwHIAcQtwlFDQEgBxC3CSECCyAALQCPAQRAIAJBLToAACACQQFqIQILIAEQtwkhBANAAkAgBCAAKAKUAU8EQCACQQA6AAAgACAGNgIAIABBEGogABDeB0EBRw0BIAcQ/gcMBAsgAiAAQfYAaiAAQYABaiAEEKEIIABrIABqLQAKOgAAIAJBAWohAiAEQQFqIQQMAQsLEMgHAAsQyAcACyAAQZgCaiAAQZACahCjBwRAIAUgBSgCAEECcjYCAAsgACgCmAIhBCAAQZABahD0ByABEP4HIABBoAJqJAAgBAurDgEJfyMAQbAEayILJAAgCyAKNgKkBCALIAE2AqgEIAtB3QE2AmggCyALQYgBaiALQZABaiALQegAahD7ByIPKAIAIgE2AoQBIAsgAUGQA2o2AoABIAtB6ABqEHIhESALQdgAahByIQ4gC0HIAGoQciEMIAtBOGoQciENIAtBKGoQciEQIAIgAyALQfgAaiALQfcAaiALQfYAaiARIA4gDCANIAtBJGoQuAkgCSAIELcJNgIAIARBgARxIhJBCXYhE0EAIQFBACECA0AgAiEKAkACQAJAAkAgAUEERg0AIAAgC0GoBGoQnwdFDQBBACEEAkACQAJAAkACQAJAIAtB+ABqIAFqLAAADgUBAAQDBQkLIAFBA0YNByAHQYDAACAAEKAHEKEHBEAgC0EYaiAAELkJIBAgCywAGBCwCwwCCyAFIAUoAgBBBHI2AgBBACEADAYLIAFBA0YNBgsDQCAAIAtBqARqEJ8HRQ0GIAdBgMAAIAAQoAcQoQdFDQYgC0EYaiAAELkJIBAgCywAGBCwCwwAAAsACyAMEHlBACANEHlrRg0EAkAgDBB5BEAgDRB5DQELIAwQeSEEIAAQoAchAiAEBEAgDEEAEO4BLQAAIAJB/wFxRgRAIAAQogcaIAwgCiAMEHlBAUsbIQIMCAsgBkEBOgAADAYLIA1BABDuAS0AACACQf8BcUcNBSAAEKIHGiAGQQE6AAAgDSAKIA0QeUEBSxshAgwGCyAAEKAHQf8BcSAMQQAQ7gEtAABGBEAgABCiBxogDCAKIAwQeUEBSxshAgwGCyAAEKAHQf8BcSANQQAQ7gEtAABGBEAgABCiBxogBkEBOgAAIA0gCiANEHlBAUsbIQIMBgsgBSAFKAIAQQRyNgIAQQAhAAwDCwJAIAFBAkkNACAKDQBBACECIAFBAkYgCy0Ae0EAR3EgE3JBAUcNBQsgCyAOEG02AhAgC0EYaiALQRBqELoJIQQCQCABRQ0AIAEgC2otAHdBAUsNAANAAkAgCyAOEG42AhAgBCALQRBqELsJRQ0AIAdBgMAAIAQQKSwAABChB0UNACAEECwMAQsLIAsgDhBtNgIQAn8gC0EQaiECIAQQKSACEClrIgQgEBB5TQsEQCALIBAQbjYCECALQRBqQQAgBGsQxwkgEBBuIA4QbRDGCQ0BCyALIA4QbTYCCCALQRBqIAtBCGoQugkaIAsgCygCEDYCGAsgCyALKAIYNgIQA0ACQCALIA4QbjYCCCALQRBqIAtBCGoQuwlFDQAgACALQagEahCfB0UNACAAEKAHQf8BcSALQRBqECktAABHDQAgABCiBxogC0EQahAsDAELCyASRQ0DIAsgDhBuNgIIIAtBEGogC0EIahC7CUUNAyAFIAUoAgBBBHI2AgBBACEADAILA0ACQCAAIAtBqARqEJ8HRQ0AAn8gB0GAECAAEKAHIgIQoQcEQCAJKAIAIgMgCygCpARGBEAgCCAJIAtBpARqELwJIAkoAgAhAwsgCSADQQFqNgIAIAMgAjoAACAEQQFqDAELIBEQeSEDIARFDQEgA0UNASALLQB2IAJB/wFxRw0BIAsoAoQBIgIgCygCgAFGBEAgDyALQYQBaiALQYABahC9CSALKAKEASECCyALIAJBBGo2AoQBIAIgBDYCAEEACyEEIAAQogcaDAELCyAPKAIAIQMCQCAERQ0AIAMgCygChAEiAkYNACALKAKAASACRgRAIA8gC0GEAWogC0GAAWoQvQkgCygChAEhAgsgCyACQQRqNgKEASACIAQ2AgALAkAgCygCJEEBSA0AAkAgACALQagEahCjB0UEQCAAEKAHQf8BcSALLQB3Rg0BCyAFIAUoAgBBBHI2AgBBACEADAMLA0AgABCiBxogCygCJEEBSA0BAkAgACALQagEahCjB0UEQCAHQYAQIAAQoAcQoQcNAQsgBSAFKAIAQQRyNgIAQQAhAAwECyAJKAIAIAsoAqQERgRAIAggCSALQaQEahC8CQsgABCgByEEIAkgCSgCACICQQFqNgIAIAIgBDoAACALIAsoAiRBf2o2AiQMAAALAAsgCiECIAkoAgAgCBC3CUcNAyAFIAUoAgBBBHI2AgBBACEADAELAkAgCkUNAEEBIQQDQCAEIAoQeU8NAQJAIAAgC0GoBGoQowdFBEAgABCgB0H/AXEgCiAEEO0BLQAARg0BCyAFIAUoAgBBBHI2AgBBACEADAMLIAAQogcaIARBAWohBAwAAAsAC0EBIQAgDygCACALKAKEAUYNAEEAIQAgC0EANgIYIBEgDygCACALKAKEASALQRhqEIUIIAsoAhgEQCAFIAUoAgBBBHI2AgAMAQtBASEACyAQEKcLGiANEKcLGiAMEKcLGiAOEKcLGiAREKcLGiAPEO0IIAtBsARqJAAgAA8LIAohAgsgAUEBaiEBDAAACwALCQAgABA4KAIAC6ECAQF/IwBBEGsiCiQAIAkCfyAABEAgCiABEMAJIgAQwQkgAiAKKAIANgAAIAogABDCCSAIIAoQwwkgChCnCxogCiAAEPcHIAcgChDDCSAKEKcLGiADIAAQwgg6AAAgBCAAEMMIOgAAIAogABDECCAFIAoQwwkgChCnCxogCiAAEPYHIAYgChDDCSAKEKcLGiAAEMQJDAELIAogARDFCSIAEMEJIAIgCigCADYAACAKIAAQwgkgCCAKEMMJIAoQpwsaIAogABD3ByAHIAoQwwkgChCnCxogAyAAEMIIOgAAIAQgABDDCDoAACAKIAAQxAggBSAKEMMJIAoQpwsaIAogABD2ByAGIAoQwwkgChCnCxogABDECQs2AgAgCkEQaiQACyUBAX8gASgCABCqB0EYdEEYdSECIAAgASgCADYCBCAAIAI6AAALDQAgACABECk2AgAgAAsOACAAECkgARApRkEBcwvgAQEGfyMAQRBrIgUkACAAENgIKAIAIQYCfyACKAIAIAAQtwlrIgNB/////wdJBEAgA0EBdAwBC0F/CyIDQQEgAxshAyABKAIAIQcgABC3CSEIIAZB3QFGBH9BAAUgABC3CQsgAxDiCyIEBEAgBkHdAUcEQCAAEMgJGgsgBUHcATYCBCAAIAVBCGogBCAFQQRqEPsHIgYiBBDICRD8ByAEENgIKAIAIQQgABDYCCAENgIAIAYQ/gcgASAAELcJIAcgCGtqNgIAIAIgABC3CSADajYCACAFQRBqJAAPCxDIBwAL4wEBBn8jAEEQayIFJAAgABDYCCgCACEGAn8gAigCACAAKAIAayIDQf////8HSQRAIANBAXQMAQtBfwsiA0EEIAMbIQMgASgCACEHIAAoAgAhCCAGQd0BRgR/QQAFIAAoAgALIAMQ4gsiBARAIAZB3QFHBEAgABDJCRoLIAVB3AE2AgQgACAFQQhqIAQgBUEEahD7ByIGIgQQyQkQ6wggBBDYCCgCACEEIAAQ2AggBDYCACAGEO0IIAEgACgCACAHIAhrajYCACACIAAoAgAgA0F8cWo2AgAgBUEQaiQADwsQyAcAC7wCAQJ/IwBBoAFrIgAkACAAIAI2ApABIAAgATYCmAEgAEHdATYCFCAAQRhqIABBIGogAEEUahD7ByEHIABBEGogBBCdByAAQRBqEJ4HIQEgAEEAOgAPAkAgAEGYAWogAiADIABBEGogBCgCBCAFIABBD2ogASAHIABBFGogAEGEAWoQtglFDQAgBhDfAyAALQAPBEAgBiABQS0QzQcQsAsLIAFBMBDNByEBIAcQtwkiBCAAKAIUIghBf2oiAiAEIAJLGyEDIAFB/wFxIQEDQAJAIAYgBCACSQR/IAQtAAAgAUYNASAEBSADCyAIEL8JDAILIARBAWohBAwAAAsACyAAQZgBaiAAQZABahCjBwRAIAUgBSgCAEECcjYCAAsgACgCmAEhBCAAQRBqEPQHIAcQ/gcgAEGgAWokACAEC9MBAQR/IwBBIGsiBSQAIAAQeSEEIAAQ7QIhAwJAIAEgAhD4AiIGRQ0AIAEQOCAAEM8IIAAQzwggABB5ahCZCwRAIAAgBUEQaiABIAIgABCpAhDzAiIBEEUgARB5EK8LIAEQpwsaDAELIAMgBGsgBkkEQCAAIAMgBCAGaiADayAEIAQQrQsLIAAQdyAEaiEDA0AgASACRwRAIAMgARD/AiABQQFqIQEgA0EBaiEDDAELCyAFQQA6AA8gAyAFQQ9qEP8CIAAgBCAGahCaCwsgBUEgaiQACwsAIABB5OUDEPkHCxEAIAAgASABKAIAKAIsEQIACxEAIAAgASABKAIAKAIgEQIACwkAIAAgARDZCQsPACAAIAAoAgAoAiQRAAALCwAgAEHc5QMQ+QcLdAEBfyMAQSBrIgMkACADIAE2AhAgAyAANgIYIAMgAjYCCANAAkAgA0EYaiADQRBqECgiAkUNACADQRhqECkhACADQQhqECkhASAALQAAIAEtAABHDQAgA0EYahAsIANBCGoQLAwBCwsgA0EgaiQAIAJBAXMLOQEBfyMAQRBrIgIkACACIAAoAgA2AgggAkEIaiIAIAAoAgAgAWo2AgAgAigCCCEBIAJBEGokACABCxgBAX8gABA4KAIAIQEgABA4QQA2AgAgAQsUAQF/IAAoAgAhASAAQQA2AgAgAQv1AwEBfyMAQfAEayIAJAAgACACNgLgBCAAIAE2AugEIABB3QE2AhAgAEHIAWogAEHQAWogAEEQahD7ByEBIABBwAFqIAQQnQcgAEHAAWoQrAchByAAQQA6AL8BAkAgAEHoBGogAiADIABBwAFqIAQoAgQgBSAAQb8BaiAHIAEgAEHEAWogAEHgBGoQywlFDQAgAEHr1AIoAAA2ALcBIABB5NQCKQAANwOwASAHIABBsAFqIABBugFqIABBgAFqEMAIIABB3AE2AhAgAEEIakEAIABBEGoQ+wchByAAQRBqIQICQCAAKALEASABKAIAa0GJA04EQCAHIAAoAsQBIAEoAgBrQQJ1QQJqEN8LEPwHIAcQtwlFDQEgBxC3CSECCyAALQC/AQRAIAJBLToAACACQQFqIQILIAEoAgAhBANAAkAgBCAAKALEAU8EQCACQQA6AAAgACAGNgIAIABBEGogABDeB0EBRw0BIAcQ/gcMBAsgAiAAQbABaiAAQYABaiAAQagBaiAEEMEIIABBgAFqa0ECdWotAAA6AAAgAkEBaiECIARBBGohBAwBCwsQyAcACxDIBwALIABB6ARqIABB4ARqELEHBEAgBSAFKAIAQQJyNgIACyAAKALoBCEEIABBwAFqEPQHIAEQ7QggAEHwBGokACAEC40OAQl/IwBBsARrIgskACALIAo2AqQEIAsgATYCqAQgC0HdATYCYCALIAtBiAFqIAtBkAFqIAtB4ABqEPsHIg8oAgAiATYChAEgCyABQZADajYCgAEgC0HgAGoQciERIAtB0ABqELIJIQ4gC0FAaxCyCSEMIAtBMGoQsgkhDSALQSBqELIJIRAgAiADIAtB+ABqIAtB9ABqIAtB8ABqIBEgDiAMIA0gC0EcahDMCSAJIAgoAgA2AgAgBEGABHEiEkEJdiETQQAhAUEAIQIDQCACIQoCQAJAAkACQCABQQRGDQAgACALQagEahCtB0UNAEEAIQQCQAJAAkACQAJAAkAgC0H4AGogAWosAAAOBQEABAMFCQsgAUEDRg0HIAdBgMAAIAAQrgcQrwcEQCALQRBqIAAQzQkgECALKAIQELgLDAILIAUgBSgCAEEEcjYCAEEAIQAMBgsgAUEDRg0GCwNAIAAgC0GoBGoQrQdFDQYgB0GAwAAgABCuBxCvB0UNBiALQRBqIAAQzQkgECALKAIQELgLDAAACwALIAwQpwhBACANEKcIa0YNBAJAIAwQpwgEQCANEKcIDQELIAwQpwghBCAAEK4HIQIgBARAIAwQ4AgoAgAgAkYEQCAAELAHGiAMIAogDBCnCEEBSxshAgwICyAGQQE6AAAMBgsgAiANEOAIKAIARw0FIAAQsAcaIAZBAToAACANIAogDRCnCEEBSxshAgwGCyAAEK4HIAwQ4AgoAgBGBEAgABCwBxogDCAKIAwQpwhBAUsbIQIMBgsgABCuByANEOAIKAIARgRAIAAQsAcaIAZBAToAACANIAogDRCnCEEBSxshAgwGCyAFIAUoAgBBBHI2AgBBACEADAMLAkAgAUECSQ0AIAoNAEEAIQIgAUECRiALLQB7QQBHcSATckEBRw0FCyALIA4Q3Ag2AgggC0EQaiALQQhqEM4JIQQCQCABRQ0AIAEgC2otAHdBAUsNAANAAkAgCyAOEN0INgIIIAQgC0EIahDeCEUNACAHQYDAACAEKAIAKAIAEK8HRQ0AIAQQ3wgMAQsLIAsgDhDcCDYCCCAEKAIAIAsoAghrQQJ1IgQgEBCnCE0EQCALIBAQ3Qg2AgggC0EIakEAIARrENgJIBAQ3QggDhDcCBDXCQ0BCyALIA4Q3Ag2AgAgC0EIaiALEM4JGiALIAsoAgg2AhALIAsgCygCEDYCCANAAkAgCyAOEN0INgIAIAtBCGogCxDeCEUNACAAIAtBqARqEK0HRQ0AIAAQrgcgCygCCCgCAEcNACAAELAHGiALQQhqEN8IDAELCyASRQ0DIAsgDhDdCDYCACALQQhqIAsQ3ghFDQMgBSAFKAIAQQRyNgIAQQAhAAwCCwNAAkAgACALQagEahCtB0UNAAJ/IAdBgBAgABCuByICEK8HBEAgCSgCACIDIAsoAqQERgRAIAggCSALQaQEahC9CSAJKAIAIQMLIAkgA0EEajYCACADIAI2AgAgBEEBagwBCyAREHkhAyAERQ0BIANFDQEgAiALKAJwRw0BIAsoAoQBIgIgCygCgAFGBEAgDyALQYQBaiALQYABahC9CSALKAKEASECCyALIAJBBGo2AoQBIAIgBDYCAEEACyEEIAAQsAcaDAELCyAPKAIAIQMCQCAERQ0AIAMgCygChAEiAkYNACALKAKAASACRgRAIA8gC0GEAWogC0GAAWoQvQkgCygChAEhAgsgCyACQQRqNgKEASACIAQ2AgALAkAgCygCHEEBSA0AAkAgACALQagEahCxB0UEQCAAEK4HIAsoAnRGDQELIAUgBSgCAEEEcjYCAEEAIQAMAwsDQCAAELAHGiALKAIcQQFIDQECQCAAIAtBqARqELEHRQRAIAdBgBAgABCuBxCvBw0BCyAFIAUoAgBBBHI2AgBBACEADAQLIAkoAgAgCygCpARGBEAgCCAJIAtBpARqEL0JCyAAEK4HIQQgCSAJKAIAIgJBBGo2AgAgAiAENgIAIAsgCygCHEF/ajYCHAwAAAsACyAKIQIgCCgCACAJKAIARw0DIAUgBSgCAEEEcjYCAEEAIQAMAQsCQCAKRQ0AQQEhBANAIAQgChCnCE8NAQJAIAAgC0GoBGoQsQdFBEAgABCuByAKIAQQqAgoAgBGDQELIAUgBSgCAEEEcjYCAEEAIQAMAwsgABCwBxogBEEBaiEEDAAACwALQQEhACAPKAIAIAsoAoQBRg0AQQAhACALQQA2AhAgESAPKAIAIAsoAoQBIAtBEGoQhQggCygCEARAIAUgBSgCAEEEcjYCAAwBC0EBIQALIBAQswsaIA0QswsaIAwQswsaIA4QswsaIBEQpwsaIA8Q7QggC0GwBGokACAADwsgCiECCyABQQFqIQEMAAALAAuhAgEBfyMAQRBrIgokACAJAn8gAARAIAogARDUCSIAEMEJIAIgCigCADYAACAKIAAQwgkgCCAKENUJIAoQswsaIAogABD3ByAHIAoQ1QkgChCzCxogAyAAEMIINgIAIAQgABDDCDYCACAKIAAQxAggBSAKEMMJIAoQpwsaIAogABD2ByAGIAoQ1QkgChCzCxogABDECQwBCyAKIAEQ1gkiABDBCSACIAooAgA2AAAgCiAAEMIJIAggChDVCSAKELMLGiAKIAAQ9wcgByAKENUJIAoQswsaIAMgABDCCDYCACAEIAAQwwg2AgAgCiAAEMQIIAUgChDDCSAKEKcLGiAKIAAQ9gcgBiAKENUJIAoQswsaIAAQxAkLNgIAIApBEGokAAsfAQF/IAEoAgAQtAchAiAAIAEoAgA2AgQgACACNgIACw4AIAAgASgCADYCACAAC6ECAQF/IwBBwANrIgAkACAAIAI2ArADIAAgATYCuAMgAEHdATYCFCAAQRhqIABBIGogAEEUahD7ByEHIABBEGogBBCdByAAQRBqEKwHIQEgAEEAOgAPIABBuANqIAIgAyAAQRBqIAQoAgQgBSAAQQ9qIAEgByAAQRRqIABBsANqEMsJBEAgBhDQCSAALQAPBEAgBiABQS0QzgcQuAsLIAFBMBDOByEBIAcoAgAhBCAAKAIUIgNBfGohAgNAAkAgBCACTw0AIAQoAgAgAUcNACAEQQRqIQQMAQsLIAYgBCADENMJCyAAQbgDaiAAQbADahCxBwRAIAUgBSgCAEECcjYCAAsgACgCuAMhBCAAQRBqEPQHIAcQ7QggAEHAA2okACAEC1gBAn8jAEEQayIBJAACQCAAEI8JBEAgACgCACECIAFBADYCDCACIAFBDGoQzwcgAEEAENEJDAELIAFBADYCCCAAIAFBCGoQzwcgAEEAENIJCyABQRBqJAALCQAgACABNgIECwkAIAAgAToACwvTAQEEfyMAQRBrIgUkACAAEKcIIQQgABDzCiEDAkAgASACEPIKIgZFDQAgASAAEOAIIAAQ4AggABCnCEECdGoQmQsEQCAAIAUgASACIAAQmwsiARDgCCABEKcIELcLIAEQswsaDAELIAMgBGsgBkkEQCAAIAMgBCAGaiADayAEIAQQtgsLIAAQ4AggBEECdGohAwNAIAEgAkcEQCADIAEQzwcgAUEEaiEBIANBBGohAwwBCwsgBUEANgIAIAMgBRDPByAAIAQgBmoQ9AoLIAVBEGokAAsLACAAQfTlAxD5BwsJACAAIAEQ2gkLCwAgAEHs5QMQ+QcLcQEBfyMAQSBrIgMkACADIAE2AhAgAyAANgIYIAMgAjYCCANAAkAgA0EYaiADQRBqEN4IIgJFDQAgA0EYaigCACgCACADQQhqKAIAKAIARw0AIANBGGoQ3wggA0EIahDfCAwBCwsgA0EgaiQAIAJBAXMLPAEBfyMAQRBrIgIkACACIAAoAgA2AgggAkEIaiIAIAAoAgAgAUECdGo2AgAgAigCCCEBIAJBEGokACABC3gBAn8jAEEQayICJAAgABDjAQRAIAAQqQIgABBMIAAQ8AIQyQELIAEQqQIaIAAQqQIaIAEQkQEhAyAAEJEBIgAgAygCCDYCCCAAIAMpAgA3AgAgAUEAEPoCIAEQ8AEhACACQQA6AA8gACACQQ9qEP8CIAJBEGokAAtXAQF/IwBBEGsiAiQAIAAQjwkEQCAAIAAoAgAgABD4ChD3CgsgACABKAIINgIIIAAgASkCADcCACABQQAQ0gkgAkEANgIMIAEgAkEMahDPByACQRBqJAAL4QQBC38jAEHQA2siACQAIAAgBTcDECAAIAY3AxggACAAQeACajYC3AIgAEHgAmogAEEQahDCBiEHIABB3AE2AvABIABB6AFqQQAgAEHwAWoQ+wchDiAAQdwBNgLwASAAQeABakEAIABB8AFqEPsHIQogAEHwAWohCAJAIAdB5ABPBEAQnwghByAAIAU3AwAgACAGNwMIIABB3AJqIAdB79QCIAAQ1gghByAAKALcAiIIRQ0BIA4gCBD8ByAKIAcQ3wsQ/AcgChA4KAIAQQBHQQFzDQEgChC3CSEICyAAQdgBaiADEJ0HIABB2AFqEJ4HIhEgACgC3AIiCSAHIAlqIAgQngggAgJ/IAcEQCAAKALcAi0AAEEtRiEPCyAPCyAAQdgBaiAAQdABaiAAQc8BaiAAQc4BaiAAQcABahByIhAgAEGwAWoQciIJIABBoAFqEHIiCyAAQZwBahDcCSAAQdwBNgIwIABBKGpBACAAQTBqEPsHIQwCfyAHIAAoApwBIgJKBEAgCxB5IAcgAmtBAXRBAXJqDAELIAsQeUECagshDSAAQTBqIQIgCRB5IA1qIAAoApwBaiINQeUATwRAIAwgDRDfCxD8ByAMELcJIgJFDQELIAIgAEEkaiAAQSBqIAMoAgQgCCAHIAhqIBEgDyAAQdABaiAALADPASAALADOASAQIAkgCyAAKAKcARDdCSABIAIgACgCJCAAKAIgIAMgBBDMCCEHIAwQ/gcgCxCnCxogCRCnCxogEBCnCxogAEHYAWoQ9AcgChD+ByAOEP4HIABB0ANqJAAgBw8LEMgHAAvbAgEBfyMAQRBrIgokACAJAn8gAARAIAIQwAkhAAJAIAEEQCAKIAAQwQkgAyAKKAIANgAAIAogABDCCSAIIAoQwwkgChCnCxoMAQsgCiAAEN4JIAMgCigCADYAACAKIAAQ9wcgCCAKEMMJIAoQpwsaCyAEIAAQwgg6AAAgBSAAEMMIOgAAIAogABDECCAGIAoQwwkgChCnCxogCiAAEPYHIAcgChDDCSAKEKcLGiAAEMQJDAELIAIQxQkhAAJAIAEEQCAKIAAQwQkgAyAKKAIANgAAIAogABDCCSAIIAoQwwkgChCnCxoMAQsgCiAAEN4JIAMgCigCADYAACAKIAAQ9wcgCCAKEMMJIAoQpwsaCyAEIAAQwgg6AAAgBSAAEMMIOgAAIAogABDECCAGIAoQwwkgChCnCxogCiAAEPYHIAcgChDDCSAKEKcLGiAAEMQJCzYCACAKQRBqJAAL+QUBCn8jAEEQayIVJAAgAiAANgIAIANBgARxIRcDQAJAAkACQAJAIBZBBEYEQCANEHlBAUsEQCAVIA0QbTYCCCACIBVBCGpBARDHCSANEG4gAigCABDfCTYCAAsgA0GwAXEiD0EQRg0CIA9BIEcNASABIAIoAgA2AgAMAgsCQAJAAkACQAJAIAggFmosAAAOBQABAwIECAsgASACKAIANgIADAcLIAEgAigCADYCACAGQSAQzQchDyACIAIoAgAiEEEBajYCACAQIA86AAAMBgsgDRDgAw0FIA1BABDtAS0AACEPIAIgAigCACIQQQFqNgIAIBAgDzoAAAwFCyAMEOADIQ8gF0UNBCAPDQQgAiAMEG0gDBBuIAIoAgAQ3wk2AgAMBAsgAigCACEYIARBAWogBCAHGyIEIQ8DQAJAIA8gBU8NACAGQYAQIA8sAAAQoQdFDQAgD0EBaiEPDAELCyAOIhBBAU4EQANAAkAgEEEBSCIRDQAgDyAETQ0AIA9Bf2oiDy0AACERIAIgAigCACISQQFqNgIAIBIgEToAACAQQX9qIRAMAQsLIBEEf0EABSAGQTAQzQcLIRIDQCACIAIoAgAiEUEBajYCACAQQQFOBEAgESASOgAAIBBBf2ohEAwBCwsgESAJOgAACyAEIA9GBEAgBkEwEM0HIQ8gAiACKAIAIhBBAWo2AgAgECAPOgAADAMLAn9BfyALEOADDQAaIAtBABDtASwAAAshE0EAIRBBACEUA0AgBCAPRg0DAkAgECATRwRAIBAhEgwBCyACIAIoAgAiEUEBajYCACARIAo6AABBACESIBRBAWoiFCALEHlPBEAgECETDAELIAsgFBDtAS0AAEH/AEYEQEF/IRMMAQsgCyAUEO0BLAAAIRMLIA9Bf2oiDy0AACEQIAIgAigCACIRQQFqNgIAIBEgEDoAACASQQFqIRAMAAALAAsgASAANgIACyAVQRBqJAAPCyAYIAIoAgAQzQgLIBZBAWohFgwAAAsACxEAIAAgASABKAIAKAIoEQIACxEAIAAQuAEgARC4ASACEOYJC5ADAQd/IwBBwAFrIgAkACAAQbgBaiADEJ0HIABBuAFqEJ4HIQogAgJ/IAUQeQRAIAVBABDtAS0AACAKQS0QzQdB/wFxRiELCyALCyAAQbgBaiAAQbABaiAAQa8BaiAAQa4BaiAAQaABahByIgwgAEGQAWoQciIIIABBgAFqEHIiByAAQfwAahDcCSAAQdwBNgIQIABBCGpBACAAQRBqEPsHIQkCfyAFEHkgACgCfEoEQCAFEHkhAiAAKAJ8IQYgBxB5IAIgBmtBAXRqQQFqDAELIAcQeUECagshBiAAQRBqIQICQCAIEHkgBmogACgCfGoiBkHlAEkNACAJIAYQ3wsQ/AcgCRC3CSICDQAQyAcACyACIABBBGogACADKAIEIAUQRSAFEEUgBRB5aiAKIAsgAEGwAWogACwArwEgACwArgEgDCAIIAcgACgCfBDdCSABIAIgACgCBCAAKAIAIAMgBBDMCCEFIAkQ/gcgBxCnCxogCBCnCxogDBCnCxogAEG4AWoQ9AcgAEHAAWokACAFC+0EAQt/IwBBsAhrIgAkACAAIAU3AxAgACAGNwMYIAAgAEHAB2o2ArwHIABBwAdqIABBEGoQwgYhByAAQdwBNgKgBCAAQZgEakEAIABBoARqEPsHIQ4gAEHcATYCoAQgAEGQBGpBACAAQaAEahD7ByEKIABBoARqIQgCQCAHQeQATwRAEJ8IIQcgACAFNwMAIAAgBjcDCCAAQbwHaiAHQe/UAiAAENYIIQcgACgCvAciCEUNASAOIAgQ/AcgCiAHQQJ0EN8LEOsIIAooAgBBAEdBAXMNASAKKAIAIQgLIABBiARqIAMQnQcgAEGIBGoQrAciESAAKAK8ByIJIAcgCWogCBDACCACAn8gBwRAIAAoArwHLQAAQS1GIQ8LIA8LIABBiARqIABBgARqIABB/ANqIABB+ANqIABB6ANqEHIiECAAQdgDahCyCSIJIABByANqELIJIgsgAEHEA2oQ4gkgAEHcATYCMCAAQShqQQAgAEEwahD7ByEMAn8gByAAKALEAyICSgRAIAsQpwggByACa0EBdEEBcmoMAQsgCxCnCEECagshDSAAQTBqIQIgCRCnCCANaiAAKALEA2oiDUHlAE8EQCAMIA1BAnQQ3wsQ6wggDCgCACICRQ0BCyACIABBJGogAEEgaiADKAIEIAggCCAHQQJ0aiARIA8gAEGABGogACgC/AMgACgC+AMgECAJIAsgACgCxAMQ4wkgASACIAAoAiQgACgCICADIAQQ5AghByAMEO0IIAsQswsaIAkQswsaIBAQpwsaIABBiARqEPQHIAoQ7QggDhD+ByAAQbAIaiQAIAcPCxDIBwAL2wIBAX8jAEEQayIKJAAgCQJ/IAAEQCACENQJIQACQCABBEAgCiAAEMEJIAMgCigCADYAACAKIAAQwgkgCCAKENUJIAoQswsaDAELIAogABDeCSADIAooAgA2AAAgCiAAEPcHIAggChDVCSAKELMLGgsgBCAAEMIINgIAIAUgABDDCDYCACAKIAAQxAggBiAKEMMJIAoQpwsaIAogABD2ByAHIAoQ1QkgChCzCxogABDECQwBCyACENYJIQACQCABBEAgCiAAEMEJIAMgCigCADYAACAKIAAQwgkgCCAKENUJIAoQswsaDAELIAogABDeCSADIAooAgA2AAAgCiAAEPcHIAggChDVCSAKELMLGgsgBCAAEMIINgIAIAUgABDDCDYCACAKIAAQxAggBiAKEMMJIAoQpwsaIAogABD2ByAHIAoQ1QkgChCzCxogABDECQs2AgAgCkEQaiQAC4oGAQp/IwBBEGsiFSQAIAIgADYCACADQYAEcSEXAkADQAJAIBZBBEYEQCANEKcIQQFLBEAgFSANENwINgIIIAIgFUEIakEBENgJIA0Q3QggAigCABDkCTYCAAsgA0GwAXEiD0EQRg0DIA9BIEcNASABIAIoAgA2AgAMAwsCQAJAAkACQAJAAkAgCCAWaiwAAA4FAAEDAgQFCyABIAIoAgA2AgAMBAsgASACKAIANgIAIAZBIBDOByEPIAIgAigCACIQQQRqNgIAIBAgDzYCAAwDCyANEKkIDQIgDUEAEKgIKAIAIQ8gAiACKAIAIhBBBGo2AgAgECAPNgIADAILIAwQqQghDyAXRQ0BIA8NASACIAwQ3AggDBDdCCACKAIAEOQJNgIADAELIAIoAgAhGCAEQQRqIAQgBxsiBCEPA0ACQCAPIAVPDQAgBkGAECAPKAIAEK8HRQ0AIA9BBGohDwwBCwsgDiIQQQFOBEADQAJAIBBBAUgiEQ0AIA8gBE0NACAPQXxqIg8oAgAhESACIAIoAgAiEkEEajYCACASIBE2AgAgEEF/aiEQDAELCyARBH9BAAUgBkEwEM4HCyETIAIoAgAhEQNAIBFBBGohEiAQQQFOBEAgESATNgIAIBBBf2ohECASIREMAQsLIAIgEjYCACARIAk2AgALAkAgBCAPRgRAIAZBMBDOByEQIAIgAigCACIRQQRqIg82AgAgESAQNgIADAELAn9BfyALEOADDQAaIAtBABDtASwAAAshE0EAIRBBACEUA0AgBCAPRwRAAkAgECATRwRAIBAhEgwBCyACIAIoAgAiEUEEajYCACARIAo2AgBBACESIBRBAWoiFCALEHlPBEAgECETDAELIAsgFBDtAS0AAEH/AEYEQEF/IRMMAQsgCyAUEO0BLAAAIRMLIA9BfGoiDygCACEQIAIgAigCACIRQQRqNgIAIBEgEDYCACASQQFqIRAMAQsLIAIoAgAhDwsgGCAPEOUICyAWQQFqIRYMAQsLIAEgADYCAAsgFUEQaiQACxEAIAAQ5wkgARDnCSACEOYJC6EDAQd/IwBB8ANrIgAkACAAQegDaiADEJ0HIABB6ANqEKwHIQogAgJ/IAUQpwgEQCAFQQAQqAgoAgAgCkEtEM4HRiELCyALCyAAQegDaiAAQeADaiAAQdwDaiAAQdgDaiAAQcgDahByIgwgAEG4A2oQsgkiCCAAQagDahCyCSIHIABBpANqEOIJIABB3AE2AhAgAEEIakEAIABBEGoQ+wchCQJ/IAUQpwggACgCpANKBEAgBRCnCCECIAAoAqQDIQYgBxCnCCACIAZrQQF0akEBagwBCyAHEKcIQQJqCyEGIABBEGohAgJAIAgQpwggBmogACgCpANqIgZB5QBJDQAgCSAGQQJ0EN8LEOsIIAkoAgAiAg0AEMgHAAsgAiAAQQRqIAAgAygCBCAFEOAIIAUQ4AggBRCnCEECdGogCiALIABB4ANqIAAoAtwDIAAoAtgDIAwgCCAHIAAoAqQDEOMJIAEgAiAAKAIEIAAoAgAgAyAEEOQIIQUgCRDtCCAHELMLGiAIELMLGiAMEKcLGiAAQegDahD0ByAAQfADaiQAIAULGgAgASAAayIBBEAgAiAAIAEQ6wsLIAEgAmoLJwEBfyMAQRBrIgEkACABIAA2AgggAUEIaigCACEAIAFBEGokACAACxkAQX8CfyABEDUaQX8iAUEBdgsgAUF/RhsLTgAjAEEgayIBJAAgAUEQahByIgIQ6gkgBRA1IAUQNSAFEHlqEOsJIAIQNSEFIAAQchDqCSAFIAUQ7wsgBWoQ6wkgAhCnCxogAUEgaiQACysBAn8jAEEQayIBJAAgAUEIaiICIAAQODYCACACKAIAIQAgAUEQaiQAIAALPwEBfyMAQRBrIgMkACADIAA2AggDQCABIAJJBEAgA0EIaiABEOwJIAFBAWohAQwBCwsgAygCCBogA0EQaiQACw8AIAAoAgAgASwAABCwCwuLAQAjAEEgayIBJAAgAUEQahByIQQCfyABQQhqIgIQ8QkgAkHU3QI2AgAgAgsgBBDqCSAFEOAIIAUQ4AggBRCnCEECdGoQ7gkgBBA1IQUgABCyCSECAn8gAUEIaiIAEPEJIABBtN4CNgIAIAALIAIQ7wkgBSAFEO8LIAVqEPAJIAQQpwsaIAFBIGokAAurAQECfyMAQUBqIgQkACAEIAE2AjggBEEwaiEFAkADQCACIANJBEAgBCACNgIIIAAgBEEwaiACIAMgBEEIaiAEQRBqIAUgBEEMaiAAKAIAKAIMEQ8AQQJGDQIgBEEQaiEBIAQoAgggAkYNAgNAIAEgBCgCDE8EQCAEKAIIIQIMAwsgBEE4aiABEOwJIAFBAWohAQwAAAsACwsgBCgCOBogBEFAayQADwsQyAcACyUBAX8jAEEQayIBJAAgAUEIaiAAEOEIKAIAIQAgAUEQaiQAIAAL0AEBAn8jAEGgAWsiBCQAIAQgATYCmAEgBEGQAWohBQJAA0AgAiADSQRAIAQgAjYCCCAAIARBkAFqIAIgAkEgaiADIAMgAmtBIEobIARBCGogBEEQaiAFIARBDGogACgCACgCEBEPAEECRg0CIARBEGohASAEKAIIIAJGDQIDQCABIAQoAgxPBEAgBCgCCCECDAMLIAQgASgCADYCBCAEKAKYASAEQQRqKAIAELgLIAFBBGohAQwAAAsACwsgBCgCmAEaIARBoAFqJAAPCxDIBwALEAAgABD0CSAAQeDcAjYCAAshACAAQcjVAjYCACAAKAIIEJ8IRwRAIAAoAggQ3wcLIAALlQgBAX9BgPMDEPQJQYDzA0GA1QI2AgAQ9QkQ9glBHBD3CUGw9ANB9dQCEC9BkPMDEPgJIQBBkPMDEPkJQZDzAyAAEPoJQcDwAxD0CUHA8ANBuOECNgIAQcDwA0GM5QMQ+wkQ/AlByPADEPQJQcjwA0HY4QI2AgBByPADQZTlAxD7CRD8CRD9CUHQ8ANB2OYDEPsJEPwJQeDwAxD0CUHg8ANBxNkCNgIAQeDwA0HQ5gMQ+wkQ/AlB6PADEPQJQejwA0HY2gI2AgBB6PADQeDmAxD7CRD8CUHw8AMQ9AlB8PADQcjVAjYCAEH48AMQnwg2AgBB8PADQejmAxD7CRD8CUGA8QMQ9AlBgPEDQezbAjYCAEGA8QNB8OYDEPsJEPwJQYjxAxDxCUGI8QNB+OYDEPsJEPwJQZDxAxD0CUGY8QNBrtgAOwEAQZDxA0H41QI2AgBBnPEDEHIaQZDxA0GA5wMQ+wkQ/AlBsPEDEPQJQbjxA0KugICAwAU3AgBBsPEDQaDWAjYCAEHA8QMQchpBsPEDQYjnAxD7CRD8CUHQ8QMQ9AlB0PEDQfjhAjYCAEHQ8QNBnOUDEPsJEPwJQdjxAxD0CUHY8QNB7OMCNgIAQdjxA0Gk5QMQ+wkQ/AlB4PEDEPQJQeDxA0HA5QI2AgBB4PEDQazlAxD7CRD8CUHo8QMQ9AlB6PEDQajnAjYCAEHo8QNBtOUDEPsJEPwJQfDxAxD0CUHw8QNBgO8CNgIAQfDxA0Hc5QMQ+wkQ/AlB+PEDEPQJQfjxA0GU8AI2AgBB+PEDQeTlAxD7CRD8CUGA8gMQ9AlBgPIDQYjxAjYCAEGA8gNB7OUDEPsJEPwJQYjyAxD0CUGI8gNB/PECNgIAQYjyA0H05QMQ+wkQ/AlBkPIDEPQJQZDyA0Hw8gI2AgBBkPIDQfzlAxD7CRD8CUGY8gMQ9AlBmPIDQZT0AjYCAEGY8gNBhOYDEPsJEPwJQaDyAxD0CUGg8gNBuPUCNgIAQaDyA0GM5gMQ+wkQ/AlBqPIDEPQJQajyA0Hc9gI2AgBBqPIDQZTmAxD7CRD8CUGw8gMQ9AlBuPIDQeyCAzYCAEGw8gNB8OgCNgIAQbjyA0Gg6QI2AgBBsPIDQbzlAxD7CRD8CUHA8gMQ9AlByPIDQZCDAzYCAEHA8gNB+OoCNgIAQcjyA0Go6wI2AgBBwPIDQcTlAxD7CRD8CUHQ8gMQ9AlB2PIDEIYLQdDyA0Hk7AI2AgBB0PIDQczlAxD7CRD8CUHg8gMQ9AlB6PIDEIYLQeDyA0GA7gI2AgBB4PIDQdTlAxD7CRD8CUHw8gMQ9AlB8PIDQYD4AjYCAEHw8gNBnOYDEPsJEPwJQfjyAxD0CUH48gNB+PgCNgIAQfjyA0Gk5gMQ+wkQ/AkLEgAgAEEAEOkBIABBjNkCNgIAC04BAn8jAEEQayIAJABBkPMDEDgaQZDzA0IANwMAIABBADYCDCAAQQhqIQFBoPMDIABBDGoQOBD/CiABEDgaQaD0A0EAOgAAIABBEGokAAtEAQF/EPkKQRxJBEAQugsAC0GQ8wNBkPMDEPoKQRwQ+woiADYCAEGU8wMgADYCAEGQ8wMQ/AogAEHwAGo2AgBBABD9CgteAQJ/IwBBEGsiASQAIAEgABD+CiIAKAIEIQIDQCAAKAIIIAJHBEBBkPMDEPoKGiAAKAIEEIILIAAgACgCBEEEaiICNgIEDAELCyAAKAIAIAAoAgQ2AgQgAUEQaiQACxAAIAAoAgQgACgCAGtBAnULDAAgACAAKAIAEIQLCywAIAAoAgAaIAAoAgAgABCBC0ECdGoaIAAoAgAaIAAoAgAgABD4CUECdGoaC1kBAn8jAEEgayIBJAAgAUEANgIMIAFB3gE2AgggASABKQMINwMAIAACfyABQRBqIgIgASkCADcCBCACIAA2AgAgAgsQigogACgCBCEAIAFBIGokACAAQX9qC4cBAQJ/IwBBEGsiAyQAIAAQ6wEgA0EIaiAAEIAKIQJBkPMDEPgJIAFNBEAgAUEBahCBCgtBkPMDIAEQ/wkoAgAEQEGQ8wMgARD/CSgCABDfARoLIAIQyQkhAEGQ8wMgARD/CSAANgIAIAIoAgAhACACQQA2AgAgAARAIAAQ3wEaCyADQRBqJAALNABB0PADEPQJQdzwA0EAOgAAQdjwA0EANgIAQdDwA0GU1QI2AgBB2PADQby0AigCADYCAAtCAAJAQbzmAy0AAEEBcQ0AQbzmAxC7C0UNABDzCUG05gNBgPMDNgIAQbjmA0G05gM2AgBBvOYDEL8LC0G45gMoAgALDQAgACgCACABQQJ0agszAQF/IwBBEGsiAiQAIAIgATYCDCACQQhqIQEgACACQQxqEM8HIAEQOBogAkEQaiQAIAALTgEBf0GQ8wMQ+AkiASAASQRAIAAgAWsQhQoPCyABIABLBEBBkPMDKAIAIABBAnRqIQFBkPMDEPgJIQBBkPMDIAEQhAtBkPMDIAAQ+gkLC3YBAn8gAEGA1QI2AgAgAEEQaiEBA0AgAiABEPgJSQRAIAEgAhD/CSgCAARAIAEgAhD/CSgCABDfARoLIAJBAWohAgwBCwsgAEGwAWoQpwsaIAEQgwogASgCAARAIAEQ+QkgARD6CiABKAIAIAEQgQsQgwsLIAALNQAgACgCABogACgCACAAEIELQQJ0ahogACgCACAAEPgJQQJ0ahogACgCACAAEIELQQJ0ahoLCgAgABCCChDgCwucAQECfyMAQSBrIgIkAAJAQZDzAxD8CigCAEGU8wMoAgBrQQJ1IABPBEAgABD3CQwBC0GQ8wMQ+gohASACQQhqQZDzAxD4CSAAahCHC0GQ8wMQ+AkgARCICyIBIAAQiQsgARCKCyABIAEoAgQQkAsgASgCAARAIAEQiwsgASgCACABEIwLKAIAIAEoAgBrQQJ1EIMLCwsgAkEgaiQACxMAIAAgASgCACIBNgIAIAEQ6wELPgACQEHI5gMtAABBAXENAEHI5gMQuwtFDQBBwOYDEP4JEIYKQcTmA0HA5gM2AgBByOYDEL8LC0HE5gMoAgALFAAgABCHCigCACIANgIAIAAQ6wELHwAgAAJ/QczmA0HM5gMoAgBBAWoiADYCACAACzYCBAs+AQJ/IwBBEGsiAiQAIAAoAgBBf0cEQCACAn8gAkEIaiIDIAEQ4QgaIAMLEOEIGiAAIAIQnwsLIAJBEGokAAsUACAABEAgACAAKAIAKAIEEQEACwsNACAAKAIAKAIAEJELCyQAIAJB/wBNBH9BvLQCKAIAIAJBAXRqLwEAIAFxQQBHBUEACwtGAANAIAEgAkcEQCADIAEoAgBB/wBNBH9BvLQCKAIAIAEoAgBBAXRqLwEABUEACzsBACADQQJqIQMgAUEEaiEBDAELCyACC0UAA0ACQCACIANHBH8gAigCAEH/AEsNAUG8tAIoAgAgAigCAEEBdGovAQAgAXFFDQEgAgUgAwsPCyACQQRqIQIMAAALAAtFAAJAA0AgAiADRg0BAkAgAigCAEH/AEsNAEG8tAIoAgAgAigCAEEBdGovAQAgAXFFDQAgAkEEaiECDAELCyACIQMLIAMLHgAgAUH/AE0Ef0HAugIoAgAgAUECdGooAgAFIAELC0EAA0AgASACRwRAIAEgASgCACIAQf8ATQR/QcC6AigCACABKAIAQQJ0aigCAAUgAAs2AgAgAUEEaiEBDAELCyACCx4AIAFB/wBNBH9B0MYCKAIAIAFBAnRqKAIABSABCwtBAANAIAEgAkcEQCABIAEoAgAiAEH/AE0Ef0HQxgIoAgAgASgCAEECdGooAgAFIAALNgIAIAFBBGohAQwBCwsgAgsEACABCyoAA0AgASACRkUEQCADIAEsAAA2AgAgA0EEaiEDIAFBAWohAQwBCwsgAgsTACABIAIgAUGAAUkbQRh0QRh1CzUAA0AgASACRkUEQCAEIAEoAgAiACADIABBgAFJGzoAACAEQQFqIQQgAUEEaiEBDAELCyACCykBAX8gAEGU1QI2AgACQCAAKAIIIgFFDQAgAC0ADEUNACABEOALCyAACwoAIAAQmQoQ4AsLJwAgAUEATgR/QcC6AigCACABQf8BcUECdGooAgAFIAELQRh0QRh1C0AAA0AgASACRwRAIAEgASwAACIAQQBOBH9BwLoCKAIAIAEsAABBAnRqKAIABSAACzoAACABQQFqIQEMAQsLIAILJwAgAUEATgR/QdDGAigCACABQf8BcUECdGooAgAFIAELQRh0QRh1C0AAA0AgASACRwRAIAEgASwAACIAQQBOBH9B0MYCKAIAIAEsAABBAnRqKAIABSAACzoAACABQQFqIQEMAQsLIAILKgADQCABIAJGRQRAIAMgAS0AADoAACADQQFqIQMgAUEBaiEBDAELCyACCwwAIAEgAiABQX9KGws0AANAIAEgAkZFBEAgBCABLAAAIgAgAyAAQX9KGzoAACAEQQFqIQQgAUEBaiEBDAELCyACCxIAIAQgAjYCACAHIAU2AgBBAwsLACAEIAI2AgBBAwsEAEEBCzcAIwBBEGsiACQAIAAgBDYCDCAAIAMgAms2AgggAEEMaiAAQQhqEM4BKAIAIQMgAEEQaiQAIAMLCgAgABDyCRDgCwvZAwEEfyMAQRBrIgokACACIQgDQAJAIAMgCEYEQCADIQgMAQsgCCgCAEUNACAIQQRqIQgMAQsLIAcgBTYCACAEIAI2AgADQAJAAkACQCAFIAZGDQAgAiADRg0AIAogASkCADcDCEEBIQkCQAJAAkACQAJAIAUgBCAIIAJrQQJ1IAYgBWsgACgCCBCoCiILQQFqDgIABgELIAcgBTYCAANAAkAgAiAEKAIARg0AIAUgAigCACAAKAIIEKkKIghBf0YNACAHIAcoAgAgCGoiBTYCACACQQRqIQIMAQsLIAQgAjYCAAwBCyAHIAcoAgAgC2oiBTYCACAFIAZGDQIgAyAIRgRAIAQoAgAhAiADIQgMBwsgCkEEakEAIAAoAggQqQoiCEF/Rw0BC0ECIQkMAwsgCkEEaiECIAggBiAHKAIAa0sEQAwDCwNAIAgEQCACLQAAIQUgByAHKAIAIglBAWo2AgAgCSAFOgAAIAhBf2ohCCACQQFqIQIMAQsLIAQgBCgCAEEEaiICNgIAIAIhCANAIAMgCEYEQCADIQgMBQsgCCgCAEUNBCAIQQRqIQgMAAALAAsgBCgCACECCyACIANHIQkLIApBEGokACAJDwsgBygCACEFDAAACwALPgEBfyMAQRBrIgUkACAFIAQ2AgwgBUEIaiAFQQxqEKIIIQQgACABIAIgAxDiByEAIAQQowggBUEQaiQAIAALOgEBfyMAQRBrIgMkACADIAI2AgwgA0EIaiADQQxqEKIIIQIgACABEM0GIQAgAhCjCCADQRBqJAAgAAu8AwEDfyMAQRBrIgkkACACIQgDQAJAIAMgCEYEQCADIQgMAQsgCC0AAEUNACAIQQFqIQgMAQsLIAcgBTYCACAEIAI2AgADQAJAAn8CQCAFIAZGDQAgAiADRg0AIAkgASkCADcDCAJAAkACQAJAIAUgBCAIIAJrIAYgBWtBAnUgASAAKAIIEKsKIgpBf0YEQANAAkAgByAFNgIAIAIgBCgCAEYNAEEBIQYCQAJAAkAgBSACIAggAmsgCUEIaiAAKAIIEKwKIgVBAmoOAwgAAgELIAQgAjYCAAwFCyAFIQYLIAIgBmohAiAHKAIAQQRqIQUMAQsLIAQgAjYCAAwFCyAHIAcoAgAgCkECdGoiBTYCACAFIAZGDQMgBCgCACECIAMgCEYEQCADIQgMCAsgBSACQQEgASAAKAIIEKwKRQ0BC0ECDAQLIAcgBygCAEEEajYCACAEIAQoAgBBAWoiAjYCACACIQgDQCADIAhGBEAgAyEIDAYLIAgtAABFDQUgCEEBaiEIDAAACwALIAQgAjYCAEEBDAILIAQoAgAhAgsgAiADRwshCCAJQRBqJAAgCA8LIAcoAgAhBQwAAAsAC0ABAX8jAEEQayIGJAAgBiAFNgIMIAZBCGogBkEMahCiCCEFIAAgASACIAMgBBDkByEAIAUQowggBkEQaiQAIAALPgEBfyMAQRBrIgUkACAFIAQ2AgwgBUEIaiAFQQxqEKIIIQQgACABIAIgAxDQByEAIAQQowggBUEQaiQAIAALlAEBAX8jAEEQayIFJAAgBCACNgIAQQIhAgJAIAVBDGpBACAAKAIIEKkKIgFBAWpBAkkNAEEBIQIgAUF/aiIBIAMgBCgCAGtLDQAgBUEMaiECA38gAQR/IAItAAAhACAEIAQoAgAiA0EBajYCACADIAA6AAAgAUF/aiEBIAJBAWohAgwBBUEACwshAgsgBUEQaiQAIAILLQEBf0F/IQECQCAAKAIIEK8KBH8gAQUgACgCCCIADQFBAQsPCyAAELAKQQFGC0UBAn8jAEEQayIBJAAgASAANgIMIAFBCGogAUEMahCiCCEAIwBBEGsiAiQAIAJBEGokAEEAIQIgABCjCCABQRBqJAAgAgtCAQJ/IwBBEGsiASQAIAEgADYCDCABQQhqIAFBDGoQogghAEEEQQFB1I0DKAIAKAIAGyECIAAQowggAUEQaiQAIAILWwEEfwNAAkAgAiADRg0AIAYgBE8NAEEBIQcCQAJAIAIgAyACayABIAAoAggQsgoiCEECag4DAgIBAAsgCCEHCyAGQQFqIQYgBSAHaiEFIAIgB2ohAgwBCwsgBQtFAQF/IwBBEGsiBCQAIAQgAzYCDCAEQQhqIARBDGoQogghA0EAIAAgASACQYjlAyACGxDQByEAIAMQowggBEEQaiQAIAALFQAgACgCCCIARQRAQQEPCyAAELAKC00AIwBBEGsiACQAIAAgAjYCDCAAIAU2AgggAiADIABBDGogBSAGIABBCGoQtQohBSAEIAAoAgw2AgAgByAAKAIINgIAIABBEGokACAFC78FAQJ/IAIgADYCACAFIAM2AgAgAigCACEGAkACQANAIAYgAU8EQEEAIQAMAwtBAiEAIAYvAQAiA0H//8MASw0CAkACQCADQf8ATQRAQQEhACAEIAUoAgAiBmtBAUgNBSAFIAZBAWo2AgAgBiADOgAADAELIANB/w9NBEAgBCAFKAIAIgZrQQJIDQQgBSAGQQFqNgIAIAYgA0EGdkHAAXI6AAAgBSAFKAIAIgZBAWo2AgAgBiADQT9xQYABcjoAAAwBCyADQf+vA00EQCAEIAUoAgAiBmtBA0gNBCAFIAZBAWo2AgAgBiADQQx2QeABcjoAACAFIAUoAgAiBkEBajYCACAGIANBBnZBP3FBgAFyOgAAIAUgBSgCACIGQQFqNgIAIAYgA0E/cUGAAXI6AAAMAQsgA0H/twNNBEBBASEAIAEgBmtBBEgNBSAGLwECIgdBgPgDcUGAuANHDQIgBCAFKAIAa0EESA0FIAdB/wdxIANBCnRBgPgDcSADQcAHcSIAQQp0cnJBgIAEakH//8MASw0CIAIgBkECajYCACAFIAUoAgAiBkEBajYCACAGIABBBnZBAWoiAEECdkHwAXI6AAAgBSAFKAIAIgZBAWo2AgAgBiAAQQR0QTBxIANBAnZBD3FyQYABcjoAACAFIAUoAgAiBkEBajYCACAGIAdBBnZBD3EgA0EEdEEwcXJBgAFyOgAAIAUgBSgCACIDQQFqNgIAIAMgB0E/cUGAAXI6AAAMAQsgA0GAwANJDQQgBCAFKAIAIgZrQQNIDQMgBSAGQQFqNgIAIAYgA0EMdkHgAXI6AAAgBSAFKAIAIgZBAWo2AgAgBiADQQZ2QT9xQYABcjoAACAFIAUoAgAiBkEBajYCACAGIANBP3FBgAFyOgAACyACIAIoAgBBAmoiBjYCAAwBCwtBAg8LQQEPCyAAC00AIwBBEGsiACQAIAAgAjYCDCAAIAU2AgggAiADIABBDGogBSAGIABBCGoQtwohBSAEIAAoAgw2AgAgByAAKAIINgIAIABBEGokACAFC5kFAQV/IAIgADYCACAFIAM2AgACQAJAAkADQAJAIAIoAgAiAyABTw0AIAUoAgAiACAETw0AQQIhCSADLQAAIgZB///DAEsNBCACAn8gBkEYdEEYdUEATgRAIAAgBjsBACADQQFqDAELIAZBwgFJDQUgBkHfAU0EQCABIANrQQJIDQUgAy0AASIHQcABcUGAAUcNBCAHQT9xIAZBBnRBwA9xciIGQf//wwBLDQQgACAGOwEAIANBAmoMAQsgBkHvAU0EQCABIANrQQNIDQUgAy0AAiEIIAMtAAEhBwJAAkAgBkHtAUcEQCAGQeABRw0BIAdB4AFxQaABRg0CDAcLIAdB4AFxQYABRg0BDAYLIAdBwAFxQYABRw0FCyAIQcABcUGAAUcNBCAIQT9xIAdBP3FBBnQgBkEMdHJyIgZB//8DcUH//8MASw0EIAAgBjsBACADQQNqDAELIAZB9AFLDQVBASEJIAEgA2tBBEgNAyADLQADIQggAy0AAiEHIAMtAAEhAwJAAkACQAJAIAZBkH5qDgUAAgICAQILIANB8ABqQf8BcUEwTw0IDAILIANB8AFxQYABRw0HDAELIANBwAFxQYABRw0GCyAHQcABcUGAAUcNBSAIQcABcUGAAUcNBSAEIABrQQRIDQNBAiEJIAhBP3EiCCAHQQZ0IgpBwB9xIANBDHRBgOAPcSAGQQdxIgZBEnRycnJB///DAEsNAyAAIANBAnQiA0HAAXEgBkEIdHIgB0EEdkEDcSADQTxxcnJBwP8AakGAsANyOwEAIAUgAEECajYCACAAIApBwAdxIAhyQYC4A3I7AQIgAigCAEEEags2AgAgBSAFKAIAQQJqNgIADAELCyADIAFJIQkLIAkPC0EBDwtBAgsLACACIAMgBBC5Cgv1AwEGfyAAIQMDQAJAIAYgAk8NACADIAFPDQAgAy0AACIEQf//wwBLDQACfyADQQFqIARBGHRBGHVBAE4NABogBEHCAUkNASAEQd8BTQRAIAEgA2tBAkgNAiADLQABIgVBwAFxQYABRw0CIAVBP3EgBEEGdEHAD3FyQf//wwBLDQIgA0ECagwBCwJAAkAgBEHvAU0EQCABIANrQQNIDQQgAy0AAiEHIAMtAAEhBSAEQe0BRg0BIARB4AFGBEAgBUHgAXFBoAFGDQMMBQsgBUHAAXFBgAFHDQQMAgsgBEH0AUsNAyACIAZrQQJJDQMgASADa0EESA0DIAMtAAMhCCADLQACIQcgAy0AASEFAkACQAJAAkAgBEGQfmoOBQACAgIBAgsgBUHwAGpB/wFxQTBJDQIMBgsgBUHwAXFBgAFGDQEMBQsgBUHAAXFBgAFHDQQLIAdBwAFxQYABRw0DIAhBwAFxQYABRw0DIAhBP3EgB0EGdEHAH3EgBEESdEGAgPAAcSAFQT9xQQx0cnJyQf//wwBLDQMgBkEBaiEGIANBBGoMAgsgBUHgAXFBgAFHDQILIAdBwAFxQYABRw0BIAdBP3EgBEEMdEGA4ANxIAVBP3FBBnRyckH//8MASw0BIANBA2oLIQMgBkEBaiEGDAELCyADIABrCwQAQQQLTQAjAEEQayIAJAAgACACNgIMIAAgBTYCCCACIAMgAEEMaiAFIAYgAEEIahC8CiEFIAQgACgCDDYCACAHIAAoAgg2AgAgAEEQaiQAIAUL1wMBAX8gAiAANgIAIAUgAzYCACACKAIAIQMCQANAIAMgAU8EQEEAIQYMAgtBAiEGIAMoAgAiA0H//8MASw0BIANBgHBxQYCwA0YNAQJAAkAgA0H/AE0EQEEBIQYgBCAFKAIAIgBrQQFIDQQgBSAAQQFqNgIAIAAgAzoAAAwBCyADQf8PTQRAIAQgBSgCACIGa0ECSA0CIAUgBkEBajYCACAGIANBBnZBwAFyOgAAIAUgBSgCACIGQQFqNgIAIAYgA0E/cUGAAXI6AAAMAQsgBCAFKAIAIgZrIQAgA0H//wNNBEAgAEEDSA0CIAUgBkEBajYCACAGIANBDHZB4AFyOgAAIAUgBSgCACIGQQFqNgIAIAYgA0EGdkE/cUGAAXI6AAAgBSAFKAIAIgZBAWo2AgAgBiADQT9xQYABcjoAAAwBCyAAQQRIDQEgBSAGQQFqNgIAIAYgA0ESdkHwAXI6AAAgBSAFKAIAIgZBAWo2AgAgBiADQQx2QT9xQYABcjoAACAFIAUoAgAiBkEBajYCACAGIANBBnZBP3FBgAFyOgAAIAUgBSgCACIGQQFqNgIAIAYgA0E/cUGAAXI6AAALIAIgAigCAEEEaiIDNgIADAELC0EBDwsgBgtNACMAQRBrIgAkACAAIAI2AgwgACAFNgIIIAIgAyAAQQxqIAUgBiAAQQhqEL4KIQUgBCAAKAIMNgIAIAcgACgCCDYCACAAQRBqJAAgBQuoBAEGfyACIAA2AgAgBSADNgIAAkACQANAAkAgAigCACIDIAFPDQAgBSgCACILIARPDQAgAywAACIAQf8BcSEGAkAgAEEATgRAIAZB///DAE0EQEEBIQAMAgtBAg8LQQIhCSAGQcIBSQ0DIAZB3wFNBEAgASADa0ECSA0FIAMtAAEiB0HAAXFBgAFHDQRBAiEAIAdBP3EgBkEGdEHAD3FyIgZB///DAE0NAQwECyAGQe8BTQRAIAEgA2tBA0gNBSADLQACIQggAy0AASEHAkACQCAGQe0BRwRAIAZB4AFHDQEgB0HgAXFBoAFGDQIMBwsgB0HgAXFBgAFGDQEMBgsgB0HAAXFBgAFHDQULIAhBwAFxQYABRw0EQQMhACAIQT9xIAZBDHRBgOADcSAHQT9xQQZ0cnIiBkH//8MATQ0BDAQLIAZB9AFLDQMgASADa0EESA0EIAMtAAMhCiADLQACIQggAy0AASEHAkACQAJAAkAgBkGQfmoOBQACAgIBAgsgB0HwAGpB/wFxQTBJDQIMBgsgB0HwAXFBgAFGDQEMBQsgB0HAAXFBgAFHDQQLIAhBwAFxQYABRw0DIApBwAFxQYABRw0DQQQhACAKQT9xIAhBBnRBwB9xIAZBEnRBgIDwAHEgB0E/cUEMdHJyciIGQf//wwBLDQMLIAsgBjYCACACIAAgA2o2AgAgBSAFKAIAQQRqNgIADAELCyADIAFJIQkLIAkPC0EBCwsAIAIgAyAEEMAKC+kDAQd/IAAhAwNAAkAgCCACTw0AIAMgAU8NACADLAAAIgZB/wFxIQQCQCAGQQBOBEBBASEGIARB///DAE0NAQwCCyAEQcIBSQ0BIARB3wFNBEAgASADa0ECSA0CIAMtAAEiBUHAAXFBgAFHDQJBAiEGIAVBP3EgBEEGdEHAD3FyQf//wwBNDQEMAgsCQAJAIARB7wFNBEAgASADa0EDSA0EIAMtAAIhByADLQABIQUgBEHtAUYNASAEQeABRgRAIAVB4AFxQaABRg0DDAULIAVBwAFxQYABRw0EDAILIARB9AFLDQMgASADa0EESA0DIAMtAAMhCSADLQACIQcgAy0AASEFAkACQAJAAkAgBEGQfmoOBQACAgIBAgsgBUHwAGpB/wFxQTBJDQIMBgsgBUHwAXFBgAFGDQEMBQsgBUHAAXFBgAFHDQQLIAdBwAFxQYABRw0DIAlBwAFxQYABRw0DQQQhBiAJQT9xIAdBBnRBwB9xIARBEnRBgIDwAHEgBUE/cUEMdHJyckH//8MASw0DDAILIAVB4AFxQYABRw0CCyAHQcABcUGAAUcNAUEDIQYgB0E/cSAEQQx0QYDgA3EgBUE/cUEGdHJyQf//wwBLDQELIAhBAWohCCADIAZqIQMMAQsLIAMgAGsLFgAgAEH41QI2AgAgAEEMahCnCxogAAsKACAAEMEKEOALCxYAIABBoNYCNgIAIABBEGoQpwsaIAALCgAgABDDChDgCwsHACAALAAICwcAIAAsAAkLDAAgACABQQxqEKULCwwAIAAgAUEQahClCwsKACAAQcDWAhAvCwsAIABByNYCEMsKCywBAX8jAEEQayICJAAgACACQQhqIAIQ8AcgACABIAEQ4AcQsgsgAkEQaiQACwoAIABB3NYCEC8LCwAgAEHk1gIQywoLDQAgACABIAEQNxCoCws3AAJAQZTnAy0AAEEBcQ0AQZTnAxC7C0UNABDQCkGQ5wNBwOgDNgIAQZTnAxC/CwtBkOcDKAIAC9cBAQF/AkBB6OkDLQAAQQFxDQBB6OkDELsLRQ0AQcDoAyEAA0AgABByQQxqIgBB6OkDRw0AC0Ho6QMQvwsLQcDoA0HI+QIQzgpBzOgDQc/5AhDOCkHY6ANB1vkCEM4KQeToA0He+QIQzgpB8OgDQej5AhDOCkH86ANB8fkCEM4KQYjpA0H4+QIQzgpBlOkDQYH6AhDOCkGg6QNBhfoCEM4KQazpA0GJ+gIQzgpBuOkDQY36AhDOCkHE6QNBkfoCEM4KQdDpA0GV+gIQzgpB3OkDQZn6AhDOCgscAEHo6QMhAANAIABBdGoQpwsiAEHA6ANHDQALCzcAAkBBnOcDLQAAQQFxDQBBnOcDELsLRQ0AENMKQZjnA0Hw6QM2AgBBnOcDEL8LC0GY5wMoAgAL2AEBAX8CQEGY6wMtAABBAXENAEGY6wMQuwtFDQBB8OkDIQADQCAAELIJQQxqIgBBmOsDRw0AC0GY6wMQvwsLQfDpA0Gg+gIQ1QpB/OkDQbz6AhDVCkGI6gNB2PoCENUKQZTqA0H4+gIQ1QpBoOoDQaD7AhDVCkGs6gNBxPsCENUKQbjqA0Hg+wIQ1QpBxOoDQYT8AhDVCkHQ6gNBlPwCENUKQdzqA0Gk/AIQ1QpB6OoDQbT8AhDVCkH06gNBxPwCENUKQYDrA0HU/AIQ1QpBjOsDQeT8AhDVCgscAEGY6wMhAANAIABBdGoQswsiAEHw6QNHDQALCw4AIAAgASABEOAHELQLCzcAAkBBpOcDLQAAQQFxDQBBpOcDELsLRQ0AENcKQaDnA0Gg6wM2AgBBpOcDEL8LC0Gg5wMoAgALxQIBAX8CQEHA7QMtAABBAXENAEHA7QMQuwtFDQBBoOsDIQADQCAAEHJBDGoiAEHA7QNHDQALQcDtAxC/CwtBoOsDQfT8AhDOCkGs6wNB/PwCEM4KQbjrA0GF/QIQzgpBxOsDQYv9AhDOCkHQ6wNBkf0CEM4KQdzrA0GV/QIQzgpB6OsDQZr9AhDOCkH06wNBn/0CEM4KQYDsA0Gm/QIQzgpBjOwDQbD9AhDOCkGY7ANBuP0CEM4KQaTsA0HB/QIQzgpBsOwDQcr9AhDOCkG87ANBzv0CEM4KQcjsA0HS/QIQzgpB1OwDQdb9AhDOCkHg7ANBkf0CEM4KQezsA0Ha/QIQzgpB+OwDQd79AhDOCkGE7QNB4v0CEM4KQZDtA0Hm/QIQzgpBnO0DQer9AhDOCkGo7QNB7v0CEM4KQbTtA0Hy/QIQzgoLHABBwO0DIQADQCAAQXRqEKcLIgBBoOsDRw0ACws3AAJAQaznAy0AAEEBcQ0AQaznAxC7C0UNABDaCkGo5wNB0O0DNgIAQaznAxC/CwtBqOcDKAIAC8YCAQF/AkBB8O8DLQAAQQFxDQBB8O8DELsLRQ0AQdDtAyEAA0AgABCyCUEMaiIAQfDvA0cNAAtB8O8DEL8LC0HQ7QNB+P0CENUKQdztA0GY/gIQ1QpB6O0DQbz+AhDVCkH07QNB1P4CENUKQYDuA0Hs/gIQ1QpBjO4DQfz+AhDVCkGY7gNBkP8CENUKQaTuA0Gk/wIQ1QpBsO4DQcD/AhDVCkG87gNB6P8CENUKQcjuA0GIgAMQ1QpB1O4DQayAAxDVCkHg7gNB0IADENUKQezuA0HggAMQ1QpB+O4DQfCAAxDVCkGE7wNBgIEDENUKQZDvA0Hs/gIQ1QpBnO8DQZCBAxDVCkGo7wNBoIEDENUKQbTvA0GwgQMQ1QpBwO8DQcCBAxDVCkHM7wNB0IEDENUKQdjvA0HggQMQ1QpB5O8DQfCBAxDVCgscAEHw7wMhAANAIABBdGoQswsiAEHQ7QNHDQALCzcAAkBBtOcDLQAAQQFxDQBBtOcDELsLRQ0AEN0KQbDnA0GA8AM2AgBBtOcDEL8LC0Gw5wMoAgALUwEBfwJAQZjwAy0AAEEBcQ0AQZjwAxC7C0UNAEGA8AMhAANAIAAQckEMaiIAQZjwA0cNAAtBmPADEL8LC0GA8ANBgIIDEM4KQYzwA0GDggMQzgoLHABBmPADIQADQCAAQXRqEKcLIgBBgPADRw0ACws3AAJAQbznAy0AAEEBcQ0AQbznAxC7C0UNABDgCkG45wNBoPADNgIAQbznAxC/CwtBuOcDKAIAC1QBAX8CQEG48AMtAABBAXENAEG48AMQuwtFDQBBoPADIQADQCAAELIJQQxqIgBBuPADRw0AC0G48AMQvwsLQaDwA0GIggMQ1QpBrPADQZSCAxDVCgscAEG48AMhAANAIABBdGoQswsiAEGg8ANHDQALCzAAAkBBzOcDLQAAQQFxDQBBzOcDELsLRQ0AQcDnA0H81gIQL0HM5wMQvwsLQcDnAwsKAEHA5wMQpwsaCzEAAkBB3OcDLQAAQQFxDQBB3OcDELsLRQ0AQdDnA0GI1wIQywpB3OcDEL8LC0HQ5wMLCgBB0OcDELMLGgswAAJAQeznAy0AAEEBcQ0AQeznAxC7C0UNAEHg5wNBrNcCEC9B7OcDEL8LC0Hg5wMLCgBB4OcDEKcLGgsxAAJAQfznAy0AAEEBcQ0AQfznAxC7C0UNAEHw5wNBuNcCEMsKQfznAxC/CwtB8OcDCwoAQfDnAxCzCxoLMAACQEGM6AMtAABBAXENAEGM6AMQuwtFDQBBgOgDQdzXAhAvQYzoAxC/CwtBgOgDCwoAQYDoAxCnCxoLMQACQEGc6AMtAABBAXENAEGc6AMQuwtFDQBBkOgDQfTXAhDLCkGc6AMQvwsLQZDoAwsKAEGQ6AMQswsaCzAAAkBBrOgDLQAAQQFxDQBBrOgDELsLRQ0AQaDoA0HI2AIQL0Gs6AMQvwsLQaDoAwsKAEGg6AMQpwsaCzEAAkBBvOgDLQAAQQFxDQBBvOgDELsLRQ0AQbDoA0HU2AIQywpBvOgDEL8LC0Gw6AMLCgBBsOgDELMLGgsJACAAIAEQqgkLGwEBf0EBIQEgABCPCQR/IAAQ+ApBf2oFIAELCxkAIAAQjwkEQCAAIAEQ0QkPCyAAIAEQ0gkLCgAgABD2ChDgCwsfAQF/IABBCGoiASgCABCfCEcEQCABKAIAEN8HCyAACw4AIAEgAkECdEEEEJsBCw4AIAAoAghB/////wdxC0YBAn8jAEEQayIAJABBkPMDEPoKGiAAQf////8DNgIMIABB/////wc2AgggAEEMaiAAQQhqEM4BKAIAIQEgAEEQaiQAIAELBwAgAEEgagsJACAAIAEQgAsLBwAgAEEQags4AEGQ8wMoAgAaQZDzAygCAEGQ8wMQgQtBAnRqGkGQ8wMoAgBBkPMDEIELQQJ0ahpBkPMDKAIAGgsqAQF/IABBkPMDNgIAIABBlPMDKAIAIgI2AgQgACACIAFBAnRqNgIIIAALDgAgARA4GiAAQQA2AgALJwACQCABQRxLDQAgAC0AcA0AIABBAToAcCAADwsgAUECdEEEENkBCxMAIAAQ/AooAgAgACgCAGtBAnULCQAgAEEANgIACwsAIAAgASACEIULCywBAX8gACgCBCECA0AgASACRwRAIAAQ+goaIAJBfGohAgwBCwsgACABNgIECx4AIAAgAUYEQCAAQQA6AHAPCyABIAJBAnRBBBCbAQsKACAAEJ8INgIAC1sBAn8jAEEQayIBJAAgASAANgIMEPkKIgIgAE8EQEGQ8wMQgQsiACACQQF2SQRAIAEgAEEBdDYCCCABQQhqIAFBDGoQvAEoAgAhAgsgAUEQaiQAIAIPCxC6CwALdwEDfyMAQRBrIgQkACAEQQA2AgwgAEEMaiIGIARBDGoQOBD/CiAGQQRqIAMQ4QgaIAEEQCAAEIsLIAEQ+wohBQsgACAFNgIAIAAgBSACQQJ0aiICNgIIIAAgAjYCBCAAEIwLIAUgAUECdGo2AgAgBEEQaiQAIAALYQECfyMAQRBrIgIkACACIABBCGogARCNCyIBKAIAIQMDQCABKAIEIANHBEAgABCLCxogASgCABCCCyABIAEoAgBBBGoiAzYCAAwBCwsgASgCCCABKAIANgIAIAJBEGokAAtiAQF/QZDzAxCDCkGQ8wMQ+gpBkPMDKAIAQZTzAygCACAAQQRqIgEQjgtBkPMDIAEQygdBlPMDIABBCGoQygdBkPMDEPwKIAAQjAsQygcgACAAKAIENgIAQZDzAxD4CRD9CgsKACAAQQxqEI8LCwcAIABBDGoLKwEBfyAAIAEoAgA2AgAgASgCACEDIAAgATYCCCAAIAMgAkECdGo2AgQgAAsoACADIAMoAgAgAiABayICayIANgIAIAJBAU4EQCAAIAEgAhDpCxoLCwoAIABBBGooAgALJQADQCABIAAoAghHBEAgABCLCxogACAAKAIIQXxqNgIIDAELCws4AQJ/IAAoAgAgACgCCCICQQF1aiEBIAAoAgQhACABIAJBAXEEfyABKAIAIABqKAIABSAACxEBAAskACAAQQJPBH8gAEEEakF8cSIAIABBf2oiACAAQQJGGwVBAQsLCQAgACABNgIACxAAIAAgAUGAgICAeHI2AggLIABB/////wMgAEkEQEGgggMQ2AEACyAAQQJ0QQQQ2QELNAEBfyMAQRBrIgMkACADIAEgAhCfCBDxBiAAIAMpAwA3AwAgACADKQMINwMIIANBEGokAAtFAQF/IwBBEGsiAyQAIAMgAjYCCANAIAAgAUcEQCADQQhqIAAsAAAQvgcgAEEBaiEADAELCyADKAIIIQAgA0EQaiQAIAALRQEBfyMAQRBrIgMkACADIAI2AggDQCAAIAFHBEAgA0EIaiAAKAIAEMAHIABBBGohAAwBCwsgAygCCCEAIANBEGokACAACw0AIAAgAkkgASAATXELGQAgABDjAQRAIAAgARD+Ag8LIAAgARD6AgslACMAQRBrIgMkACADQQhqEDgaIAAgASACEPEHIANBEGokACAACwMAAAs4AQF/IABBCGoiASgCAEUEQCAAIAAoAgAoAhARAQAPCyABEOABQX9GBEAgACAAKAIAKAIQEQEACwsEAEEACy4AA0AgACgCAEEBRg0ACyAAKAIARQRAIABBATYCACABQd8BEQEAIABBfzYCAAsLNAEBfyAAQQEgABshAQJAA0AgARDfCyIADQFBjPUDKAIAIgAEQCAAEQwADAELCxAKAAsgAAs6AQJ/IAEQ7wsiAkENahCgCyIDQQA2AgggAyACNgIEIAMgAjYCACAAIANBDGogASACQQFqEOkLNgIACykBAX8gAgRAIAAhAwNAIAMgATYCACADQQRqIQMgAkF/aiICDQALCyAAC2kBAX8CQCAAIAFrQQJ1IAJJBEADQCAAIAJBf2oiAkECdCIDaiABIANqKAIANgIAIAINAAwCAAsACyACRQ0AIAAhAwNAIAMgASgCADYCACADQQRqIQMgAUEEaiEBIAJBf2oiAg0ACwsgAAsKAEG4hAMQ2AEAC2kBAn8jAEEQayIDJAAgARCpAhogA0EIahA4GiAAEOYBIAAhAgJAIAEQ4wFFBEAgARCRASEBIAIQkQEiAiABKAIINgIIIAIgASkCADcCAAwBCyAAIAEQTBA4IAEQ5AEQpgsLIANBEGokAAuJAQEDfyMAQRBrIgQkACAAEPkCIAJPBEACQCACQQpNBEAgACACEPoCIAAQ8AEhAwwBCyACEPsCIQMgACAAEKkCIANBAWoiBRC/ASIDEPwCIAAgBRD9AiAAIAIQ/gILIAMQOCABIAIQkQcgBEEAOgAPIAIgA2ogBEEPahD/AiAEQRBqJAAPCxCkCwALHQAgABDjAQRAIAAQqQIgABBMIAAQ8AIQyQELIAALdQEEfyMAQRBrIgQkAAJAIAAQ7QIiAyACTwRAIAAQdxA4IgMhBSACIgYEQCAFIAEgBhDrCwsgBEEAOgAPIAIgA2ogBEEPahD/AiAAIAIQmgsMAQsgACADIAIgA2sgABB5IgNBACADIAIgARCpCwsgBEEQaiQAC50CAQN/IwBBEGsiCCQAIAAQ+QIiCSABQX9zaiACTwRAIAAQdyEKAn8gCUEBdkFwaiABSwRAIAggAUEBdDYCCCAIIAEgAmo2AgwgCEEMaiAIQQhqELwBKAIAEPsCDAELIAlBf2oLIQIgABCpAiACQQFqIgkQvwEhAiAAEMYBIAQEQCACEDggChA4IAQQkQcLIAYEQCACEDggBGogByAGEJEHCyADIAVrIgMgBGsiBwRAIAIQOCAEaiAGaiAKEDggBGogBWogBxCRBwsgAUEBaiIEQQtHBEAgABCpAiAKIAQQyQELIAAgAhD8AiAAIAkQ/QIgACADIAZqIgQQ/gIgCEEAOgAHIAIgBGogCEEHahD/AiAIQRBqJAAPCxCkCwALJAEBfyAAEHkiAyABSQRAIAAgASADayACEKsLDwsgACABEKwLC3MBBH8jAEEQayIFJAAgAQRAIAAQ7QIhAyAAEHkiBCABaiEGIAMgBGsgAUkEQCAAIAMgBiADayAEIAQQrQsLIAAQdyIDEDggBGogASACEK4LIAAgBhCaCyAFQQA6AA8gAyAGaiAFQQ9qEP8CCyAFQRBqJAALZAECfyMAQRBrIgIkAAJAIAAQ4wEEQCAAEEwhAyACQQA6AA8gASADaiACQQ9qEP8CIAAgARD+AgwBCyAAEPABIQMgAkEAOgAOIAEgA2ogAkEOahD/AiAAIAEQ+gILIAJBEGokAAvcAQEDfyMAQRBrIgUkACAAEPkCIgYgAWsgAk8EQCAAEHchBwJ/IAZBAXZBcGogAUsEQCAFIAFBAXQ2AgggBSABIAJqNgIMIAVBDGogBUEIahC8ASgCABD7AgwBCyAGQX9qCyECIAAQqQIgAkEBaiIGEL8BIQIgABDGASAEBEAgAhA4IAcQOCAEEJEHCyADIARrIgMEQCACEDggBGogBxA4IARqIAMQkQcLIAFBAWoiAUELRwRAIAAQqQIgByABEMkBCyAAIAIQ/AIgACAGEP0CIAVBEGokAA8LEKQLAAsUACABBEAgACACEOYCIAEQ6gsaCwt9AQN/IwBBEGsiBSQAAkAgABDtAiIEIAAQeSIDayACTwRAIAJFDQEgABB3EDgiBCADaiABIAIQkQcgACACIANqIgIQmgsgBUEAOgAPIAIgBGogBUEPahD/AgwBCyAAIAQgAiADaiAEayADIANBACACIAEQqQsLIAVBEGokAAu/AQEDfyMAQRBrIgMkACADIAE6AA8CQAJAAkACQCAAEOMBBEAgABDwAiEBIAAQ5AEiBCABQX9qIgJGDQEMAwtBCiEEQQohAiAAEOUBIgFBCkcNAQsgACACQQEgAiACEK0LIAQhASAAEOMBDQELIAAQ8AEhAiAAIAFBAWoQ+gIMAQsgABBMIQIgACAEQQFqEP4CIAQhAQsgASACaiIAIANBD2oQ/wIgA0EAOgAOIABBAWogA0EOahD/AiADQRBqJAALiQEBA38jAEEQayIEJAAgABD5AiABTwRAAkAgAUEKTQRAIAAgARD6AiAAEPABIQMMAQsgARD7AiEDIAAgABCpAiADQQFqIgUQvwEiAxD8AiAAIAUQ/QIgACABEP4CCyADEDggASACEK4LIARBADoADyABIANqIARBD2oQ/wIgBEEQaiQADwsQpAsAC38BA38jAEEQayIDJABB7////wMgAk8EQAJAIAJBAU0EQCAAIAIQ0gkgACEEDAELIAAgAhCSC0EBaiIFEJULIgQQkwsgACAFEJQLIAAgAhDRCQsgBCABIAIQlgcgA0EANgIMIAQgAkECdGogA0EMahDPByADQRBqJAAPCxCkCwALGwAgABCPCQRAIAAgACgCACAAEPgKEPcKCyAAC3wBBH8jAEEQayIEJAACQCAAEPMKIgMgAk8EQCAAEOAIIgMhBSACIgYEfyAFIAEgBhCjCwUgBQsaIARBADYCDCADIAJBAnRqIARBDGoQzwcgACACEPQKDAELIAAgAyACIANrIAAQpwgiA0EAIAMgAiABELULCyAEQRBqJAALlQIBA38jAEEQayIIJABB7////wMiCSABQX9zaiACTwRAIAAQ4AghCgJ/IAlBAXZBcGogAUsEQCAIIAFBAXQ2AgggCCABIAJqNgIMIAhBDGogCEEIahC8ASgCABCSCwwBCyAJQX9qC0EBaiIJEJULIQIgBARAIAIgCiAEEJYHCyAGBEAgBEECdCACaiAHIAYQlgcLIAMgBWsiAyAEayIHBEAgBEECdCIEIAJqIAZBAnRqIAQgCmogBUECdGogBxCWBwsgAUEBaiIBQQJHBEAgACAKIAEQ9woLIAAgAhCTCyAAIAkQlAsgACADIAZqIgEQ0QkgCEEANgIEIAIgAUECdGogCEEEahDPByAIQRBqJAAPCxCkCwALygEBA38jAEEQayIFJABB7////wMiBiABayACTwRAIAAQ4AghBwJ/IAZBAXZBcGogAUsEQCAFIAFBAXQ2AgggBSABIAJqNgIMIAVBDGogBUEIahC8ASgCABCSCwwBCyAGQX9qC0EBaiIGEJULIQIgBARAIAIgByAEEJYHCyADIARrIgMEQCAEQQJ0IgQgAmogBCAHaiADEJYHCyABQQFqIgFBAkcEQCAAIAcgARD3CgsgACACEJMLIAAgBhCUCyAFQRBqJAAPCxCkCwALgwEBA38jAEEQayIFJAACQCAAEPMKIgQgABCnCCIDayACTwRAIAJFDQEgABDgCCIEIANBAnRqIAEgAhCWByAAIAIgA2oiAhD0CiAFQQA2AgwgBCACQQJ0aiAFQQxqEM8HDAELIAAgBCACIANqIARrIAMgA0EAIAIgARC1CwsgBUEQaiQAC8ABAQN/IwBBEGsiAyQAIAMgATYCDAJAAkACQAJAIAAQjwkEQCAAEPgKIQEgACgCBCIEIAFBf2oiAkYNAQwDC0EBIQRBASECIAAtAAsiAUEBRw0BCyAAIAJBASACIAIQtgsgBCEBIAAQjwkNAQsgACECIAAgAUEBahDSCQwBCyAAKAIAIQIgACAEQQFqENEJIAQhAQsgAiABQQJ0aiIAIANBDGoQzwcgA0EANgIIIABBBGogA0EIahDPByADQRBqJAALjgEBA38jAEEQayIEJABB7////wMgAU8EQAJAIAFBAU0EQCAAIAEQ0gkgACEFDAELIAAgARCSC0EBaiIDEJULIgUQkwsgACADEJQLIAAgARDRCQsgBSEDIAEiAAR/IAMgAiAAEKILBSADCxogBEEANgIMIAUgAUECdGogBEEMahDPByAEQRBqJAAPCxCkCwALCgBBxYQDENgBAAsiAQF/IwBBEGsiASQAIAEgABC8CxC9CyEAIAFBEGokACAACyMAIABBADYCDCAAIAE2AgQgACABNgIAIAAgAUEBajYCCCAACzQBAn8jAEEQayIBJAAgAUEIaiAAKAIEEOEIKAIALQAARQRAIAAQvgshAgsgAUEQaiQAIAILLgEBfwJAIAAoAggiAC0AACIBQQFHBH8gAUECcQ0BIABBAjoAAEEBBUEACw8LAAseAQF/IwBBEGsiASQAIAEgABC8CxDACyABQRBqJAALMwEBfyMAQRBrIgEkACABQQhqIAAoAgQQ4QgoAgBBAToAACAAKAIIQQE6AAAgAUEQaiQACwMAAAsGAEGghQMLFQAgAEHkhQM2AgAgAEEEahDECyAACy8BAX8CQCAAKAIAQXRqIgBBCGoiASABKAIAQX9qIgE2AgAgAUF/Sg0AIAAQ4AsLCwoAIAAQwwsQ4AsLDQAgABDDCxogABDgCwsLACAAIAFBABDICwspACACRQRAIAAgARC0Ag8LIAAgAUYEQEEBDwsgACgCBCABKAIEELwGRQsEAEEAC6YBAQJ/IwBBQGoiAyQAQQEhBAJAIAAgAUEAEMgLDQBBACEEIAFFDQAgAUGshwMQywsiAUUNACADQX82AhQgAyAANgIQIANBADYCDCADIAE2AgggA0EYakEAQScQ6gsaIANBATYCOCABIANBCGogAigCAEEBIAEoAgAoAhwRBwAgAygCICIEQQFGBEAgAiADKAIYNgIACyAEQQFGIQQLIANBQGskACAEC6ECAQR/IwBBQGoiAiQAIAAoAgAiBUF8aigCACEDIAVBeGooAgAhBSACQQA2AhQgAkH8hgM2AhAgAiAANgIMIAIgATYCCCACQRhqQQBBJxDqCxogACAFaiEAAkAgAyABQQAQyAsEQCACQQE2AjggAyACQQhqIAAgAEEBQQAgAygCACgCFBELACAAQQAgAigCIEEBRhshBAwBCyADIAJBCGogAEEBQQAgAygCACgCGBEKAAJAAkAgAigCLA4CAAECCyACKAIcQQAgAigCKEEBRhtBACACKAIkQQFGG0EAIAIoAjBBAUYbIQQMAQsgAigCIEEBRwRAIAIoAjANASACKAIkQQFHDQEgAigCKEEBRw0BCyACKAIYIQQLIAJBQGskACAEC10BAX8gACgCECIDRQRAIABBATYCJCAAIAI2AhggACABNgIQDwsCQCABIANGBEAgACgCGEECRw0BIAAgAjYCGA8LIABBAToANiAAQQI2AhggACAAKAIkQQFqNgIkCwsaACAAIAEoAghBABDICwRAIAEgAiADEMwLCwszACAAIAEoAghBABDICwRAIAEgAiADEMwLDwsgACgCCCIAIAEgAiADIAAo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ASACQQFqIgIgA08NASACQQNxDQALCwJAIANBfHEiBEHAAEkNACACIARBQGoiBUsNAANAIAIgASgCADYCACACIAEoAgQ2AgQgAiABKAIINgIIIAIgASgCDDYCDCACIAEoAhA2AhAgAiABKAIUNgIUIAIgASgCGDYCGCACIAEoAhw2AhwgAiABKAIgNgIgIAIgASgCJDYCJCACIAEoAig2AiggAiABKAIsNgIsIAIgASgCMDYCMCACIAEoAjQ2AjQgAiABKAI4NgI4IAIgASgCPDYCPCABQUBrIQEgAkFAayICIAVNDQALCyACIARPDQEDQCACIAEoAgA2AgAgAUEEaiEBIAJBBGoiAiAESQ0ACwwBCyADQQRJBEAgACECDAELIANBfGoiBCAASQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAiABLQABOgABIAIgAS0AAjoAAiACIAEtAAM6AAMgAUEEaiEBIAJBBGoiAiAETQ0ACwsgAiADSQRAA0AgAiABLQAAOgAAIAFBAWohASACQQFqIgIgA0cNAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAAC+kCAQF/AkAgACABRg0AIAEgAGsgAmtBACACQQF0a00EQCAAIAEgAhDpCxoPCyAAIAFzQQNxIQMCQAJAIAAgAUkEQCADBEAgACEDDAMLIABBA3FFBEAgACEDDAILIAAhAwNAIAJFDQQgAyABLQAAOgAAIAFBAWohASACQX9qIQIgA0EBaiIDQQNxDQALDAELAkAgAw0AIAAgAmpBA3EEQANAIAJFDQUgACACQX9qIgJqIgMgASACai0AADoAACADQQNxDQALCyACQQNNDQADQCAAIAJBfGoiAmogASACaigCADYCACACQQNLDQALCyACRQ0CA0AgACACQX9qIgJqIAEgAmotAAA6AAAgAg0ACwwCCyACQQNNDQADQCADIAEoAgA2AgAgAUEEaiEBIANBBGohAyACQXxqIgJBA0sNAAsLIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLC1kBAX8gACAALQBKIgFBf2ogAXI6AEogACgCACIBQQhxBEAgACABQSByNgIAQX8PCyAAQgA3AgQgACAAKAIsIgE2AhwgACABNgIUIAAgASAAKAIwajYCEEEAC6oBAQN/AkAgAigCECIDBH8gAwUgAhDsCw0BIAIoAhALIAIoAhQiBGsgAUkEQCACIAAgASACKAIkEQMAGg8LAkAgAiwAS0EASA0AIAEhBQNAIAUiA0UNASAAIANBf2oiBWotAABBCkcNAAsgAiAAIAMgAigCJBEDACADSQ0BIAAgA2ohACABIANrIQEgAigCFCEECyAEIAAgARDpCxogAiACKAIUIAFqNgIUCwsrAQF/IwBBEGsiASQAIAEgADYCDEHYpwIoAgBBkAggABDZBhogAUEQaiQAC5ABAQN/IAAhAQJAAkAgAEEDcUUNACAALQAARQRAQQAPCwNAIAFBAWoiAUEDcUUNASABLQAADQALDAELA0AgASICQQRqIQEgAigCACIDQX9zIANB//37d2pxQYCBgoR4cUUNAAsgA0H/AXFFBEAgAiAAaw8LA0AgAi0AASEDIAJBAWoiASECIAMNAAsLIAEgAGsLBAAjAAsGACAAJAALEAAjACAAa0FwcSIAJAAgAAsfAEGA+QMoAgBFBEBBhPkDIAE2AgBBgPkDIAA2AgALCxAAIABBGHQgAEEIdHJBEHYLBwAgABD2CwskACAAQQh0QYCA/AdxIABBGHRyIABBCHZBgP4DcSAAQRh2cnILCQAgASAAEQEACwkAIAEgABEAAAsRACABIAIgAyAEIAUgABEJAAsRACABIAIgAyAEIAUgABEKAAsLACABIAIgABECAAsTACAB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ZXJFAAAUxQAAdgkAADzFAABgCQAAiAkAAE42V2ViQXBpOG1iZWRFQ0RIRQBONldlYkFwaTRFQ0RIRQAAABTFAACvCQAAPMUAAJwJAADACQAATjZXZWJBcGk4bWJlZEhhc2hFAE42V2ViQXBpNEhhc2hFAAAAFMUAAOcJAAA8xQAA1AkAAPgJAABONldlYkFwaTZDcnlwdG9FAAAAABTFAAAMCgAAYWxsb2NhdG9yPFQ+OjphbGxvY2F0ZShzaXplX3QgbikgJ24nIGV4Y2VlZHMgbWF4aW11bSBzdXBwb3J0ZWQgc2l6ZQAAAAAA0AoAAGUAAABmAAAAZwAAAEcAAABoAAAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjZXZWJBcGk4bWJlZEhhc2hFTlNfOWFsbG9jYXRvcklTMl9FRUVFAAAAPMUAAIgKAAAgwgAAAAAAAEALAABpAAAAagAAAGsAAABHAAAAbAAAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU42V2ViQXBpOG1iZWRFQ0RIRU5TXzlhbGxvY2F0b3JJUzJfRUVFRQAAADzFAAD4CgAAIMIAAAAAAAC0CwAAbQAAAG4AAABvAAAARwAAAHAAAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONldlYkFwaTEwbWJlZENpcGhlckVOU185YWxsb2NhdG9ySVMyX0VFRUUAAAAAPMUAAGgLAAAgwgAAICBBRVMtRUNCLSUzZCAoJXMpOiAAICBBUkM0IHRlc3QgIyVkOiAAICBCYXNlNjQgZW5jb2RpbmcgdGVzdDogADAxMjM0NTY3ODlBQkNERUYAICBDQU1FTExJQS1FQ0ItJTNkICglcyk6IAAgIENDTTogc2V0dXAgZmFpbGVkACAgQ2hhQ2hhMjAgdGVzdCAldSAAICBDaGFDaGEyMC1Qb2x5MTMwNSB0ZXN0ICV1IABBRVMtMTI4LUVDQgB3YgAlcygpIHJldHVybmVkICVkICgtMHglMDR4KQoAICBERVMlYy1FQ0ItJTNkICglcyk6IAAtLS0tLUJFR0lOIERIIFBBUkFNRVRFUlMtLS0tLQBCTElORElORyBDT05URVhUADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMQAwMURCNDIAd2IAL2Rldi91cmFuZG9tAENJUEhFUiAtIFRoZSBzZWxlY3RlZCBmZWF0dXJlIGlzIG5vdCBhdmFpbGFibGUAICBBRVMtR0NNLSUzZCAjJWQgKCVzKTogAAB3YgAgIE1ENSB0ZXN0ICMlZDogAE1ENQBNRDUAJWQuJWQAUHJvYy1UeXBlOiA0LEVOQ1JZUFRFRABpbnZhbGlkIFBLACqGSIb3DQEFDAByYgBSU0EALS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KACAgUG9seTEzMDUgdGVzdCAldSAAICBSSVBFTUQtMTYwIHRlc3QgIyVkOiAAOTI5Mjc1ODQ1MzA2M0Q4MDNERDYwM0Q1RTc3N0Q3ODg4RUQxRDVCRjM1Nzg2MTkwRkEyRjIzRUJDMDg0OEFFQUREQTkyQ0E2QzNEODBCMzJDNEQxMDlCRTBGMzZENkFFNzEzMEI5Q0VEN0FDREY1NENGQzc1NTVBQzE0RUVCQUI5M0E4OTgxM0ZCRjNDNEY4MDY2RDJEODAwRjdDMzhBODFBRTMxOTQyOTE3NDAzRkY0OTQ2QjBBODNEM0QzRTA1RUU1N0M2RjVGNTYwNkZCNUQ0QkM2Q0QzNEVFMDgwMUE1RTk0QkI3N0IwNzUwNzIzM0EwQkM3QkFDOEY5MEY3OQAgIFNIQS0xIHRlc3QgIyVkOiAAdW5rbm93bgAvaG9tZS9icnljZS9kZXYvc291cmNlL2dpdGh1Yi93ZWJhcGktanMtY2xpZW50L21iZWR0bHMvbGlicmFyeS9zc2xfY2xpLmMAL2hvbWUvYnJ5Y2UvZGV2L3NvdXJjZS9naXRodWIvd2ViYXBpLWpzLWNsaWVudC9tYmVkdGxzL2xpYnJhcnkvc3NsX3Nydi5jAC9ob21lL2JyeWNlL2Rldi9zb3VyY2UvZ2l0aHViL3dlYmFwaS1qcy1jbGllbnQvbWJlZHRscy9saWJyYXJ5L3NzbF90bHMuYwAyLjE2LjMATUJFRFRMU19IQVZFX0FTTQAqhkiG9w0BAQgAQ04ALS0tLS1CRUdJTiBYNTA5IENSTC0tLS0tAC0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLQAtLS0tLUJFR0lOIENFUlRJRklDQVRFIFJFUVVFU1QtLS0tLQBVHRMAVR0PACAgWFRFQSB0ZXN0ICMlZDogAGRlYwAAZGVjACAgQ0NNLUFFUyAjJXU6IABzZXRrZXkoKSBlcnJvciBjb2RlOiAlaQoAQUVTLTE5Mi1FQ0IAcmIAZHVtcGluZyAnJXMnICgldSBieXRlcykKAGRlYwAtLS0tLUVORCBESCBQQVJBTUVURVJTLS0tLS0ARkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGOTlERUY4MzYxNDZCQzlCMUI0RDIyODMwADE0REVGOURFQTJGNzlDRDY1ODEyNjMxQTVDRjVEM0VEAHJiAHJiAENJUEhFUiAtIEJhZCBpbnB1dCBwYXJhbWV0ZXJzAGVuYwByYgBSSVBFTUQxNjAAUklQRU1EMTYwAC4lZABERUstSW5mbzogREVTLUVERTMtQ0JDLAAgIFBCS0RGMiAoU0hBMSkgIyVkOiAALS0tLS1CRUdJTiAARUMALS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCgBDMzZEMEVCN0ZDRDI4NTIyM0NGQjVBQUJBNUJEQTNEODJDMDFDQUQxOUVBNDg0QTg3RUE0Mzc3NjM3RTc1NTAwRkNCMjAwNUM1QzdERDZFQzRBQzAyM0NEQTI4NUQ3OTZDM0Q5RTc1RTFFRkM0MjQ4OEJCNEYxRDEzQUMzMEE1NwAgIFNIQS0lZCB0ZXN0ICMlZDogACAgU0hBLSVkIHRlc3QgIyVkOiAAVExTLUVDREhFLVJTQS1XSVRILUNIQUNIQTIwLVBPTFkxMzA1LVNIQTI1NgBjbGllbnQgc3RhdGU6ICVkAHNlcnZlciBzdGF0ZTogJWQAPT4gZGVyaXZlIGtleXMAICBUSU1JTkcgdGVzdCAjMSAoc2V0X2FsYXJtIC8gZ2V0X3RpbWVyKTogAG1iZWQgVExTIDIuMTYuMwBNQkVEVExTX0hBVkVfVElNRQAgKyAAVQQDAC0tLS0tRU5EIFg1MDkgQ1JMLS0tLS0ALS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQAtLS0tLUVORCBDRVJUSUZJQ0FURSBSRVFVRVNULS0tLS0AVR0OAGCGSAGG+EIBAQBlbmMAcGFzc2VkCiAgQmFzZTY0IGRlY29kaW5nIHRlc3Q6IAAlcyVzAGVuYwBjcnlwdF9hbmRfdGFnKCkgZXJyb3IgY29kZTogJWkKAEFFUy0yNTYtRUNCACAgQ1RSX0RSQkcgKFBSID0gVFJVRSkgOiAAICAlcwoAZW5jACAgREhNIHBhcmFtZXRlciBsb2FkOiAANUVBNkYzODlBMzhCOEJDODFFNzY3NzUzQjE1QUE1NTY5RTE3ODJFMzBBQkU3RDI1ADk4QUEAICBFTlRST1BZIHRlc3Q6IABDSVBIRVIgLSBGYWlsZWQgdG8gYWxsb2NhdGUgbWVtb3J5ACAgSE1BQ19EUkJHIChQUiA9IFRydWUpIDogAFNIQTEAU0hBMQBVBAMAREVLLUluZm86IERFUy1DQkMsAC0tLS0tQkVHSU4gUlNBIFBSSVZBVEUgS0VZLS0tLS0ARUNfREgALS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQoAQzAwMERGNTFBN0M3N0FFOEQ3QzczNzBDMUZGNTVCNjlFMjExQzJCOUU1REIxRUQwQkY2MUQwRDk4OTk2MjBGNDkxMEU0MTY4Mzg3RTNDMzBBQTFFMDBDMzM5QTc5NTA4ODQ1MkREOTZBOUE1RUE1RDlEQ0E2OERBNjM2MDMyQUYAVExTLUVDREhFLUVDRFNBLVdJVEgtQ0hBQ0hBMjAtUE9MWTEzMDUtU0hBMjU2AGhhbmRzaGFrZTogZG9uZQBoYW5kc2hha2U6IGRvbmUAY2lwaGVyIGluZm8gZm9yICVkIG5vdCBmb3VuZABmYWlsZWQgYXQgbGluZSAlZAoATUJFRFRMU19IQVZFX1RJTUVfREFURQAsIABjb21tb25OYW1lACVzQ1JMIHZlcnNpb24gICA6ICVkACVzLyVzAC0tLS0tQkVHSU4gTkVXIENFUlRJRklDQVRFIFJFUVVFU1QtLS0tLQBVHSMAKoZIhvcNAQkOACAgQUVTLUNCQy0lM2QgKCVzKTogADYwMkFCN0VDQTU5N0EzRDZCNTZGRjk4MjlBNUU4Qjg1OUU4NTdFQTk1QTAzNTEyRTJCQUU3MzkxNjg4RDI2NEFBNTY2M0IwMzQxREI5Q0NGRDJDNEM1RjQyMUZFQzgxNDgwMDFCNzJFODQ4QTM4Q0FFMUM2NUY3OEU1NkFCREVGRTEyRDNDMDM5QjhBMDJENkJFNTkzRjBCQkJEQTU2RjFFQ0Y2NzcxNTJFRjgwNDM3MEMxQTMwNUNBRjNCNUJGMTMwODc5QjU2QzYxREU1ODRBMEY1M0EyNDQ3QTUxRQAgIENBTUVMTElBLUNCQy0lM2QgKCVzKTogAEFFUy0xMjgtQ0ZCMTI4ACVzKFgpACAgREVTJWMtQ0JDLSUzZCAoJXMpOiAALS0tLS1CRUdJTiAAICBFQ1AgdGVzdCAjMSAoY29uc3RhbnQgb3BfY291bnQsIGJhc2UgcG9pbnQgRyk6IABDSVBIRVIgLSBUaGUgY29udGV4dCBpcyBpbnZhbGlkLiBGb3IgZXhhbXBsZSwgYmVjYXVzZSBpdCB3YXMgZnJlZWQAU0hBMzg0AFNIQTUxMgBVBAYAREVLLUluZm86IEFFUy0yNTYtQ0JDLAAtLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS0AcnNhLkUAVExTLURIRS1QU0stV0lUSC1DSEFDSEEyMC1QT0xZMTMwNS1TSEEyNTYAY29uZmlndXJlZCBtYXggbWFqb3IgdmVyc2lvbiBpcyBpbnZhbGlkLCBjb25zaWRlciB1c2luZyBtYmVkdGxzX3NzbF9jb25maWdfZGVmYXVsdHMoKQByZWNvcmQgaGVhZGVyAHVzaW5nIGV4dGVuZGVkIG1hc3RlciBzZWNyZXQAICBUSU1JTkcgdGVzdCAjMiAoc2V0L2dldF9kZWxheSAgICAgICAgKTogAE1CRURUTFNfQ0lQSEVSX01PREVfT0ZCACUwMlglcwBPAAolc1Jldm9rZWQgY2VydGlmaWNhdGVzOgAKJXNpc3N1ZXIgbmFtZSAgICAgICA6IAAKJXNzaWduZWQgdXNpbmcgIDogAC0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KACAgQUVTLUNGQjEyOC0lM2QgKCVzKTogACAgTVBJIHRlc3QgIzEgKG11bF9tcGkpOiAAICBDQU1FTExJQS1DVFItMTI4ICglcyk6IABBRVMtMTkyLUNGQjEyOAAlcyhZKQBmYWlsZWQgKCV1KQoAQ0lQSEVSIC0gQ2lwaGVyIGhhcmR3YXJlIGFjY2VsZXJhdG9yIGZhaWxlZABTSEE1MTIAaWQtYXQtY291bnRyeU5hbWUALS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLQBlY2tleS5RAHBhc3NlZAogIFBLQ1MjMSBlbmNyeXB0aW9uIDogAFRMUy1SU0EtUFNLLVdJVEgtQ0hBQ0hBMjAtUE9MWTEzMDUtU0hBMjU2AGNsaWVudCBoZWxsbywgbWF4IHZlcnNpb246IFslZDolZF0AY2xpZW50IGhlbGxvIHYzLCBtZXNzYWdlIHR5cGU6ICVkAHNlc3Npb24gaGFzaAAgIFRJTUlORyB0ZXN0ICMzIChoYXJkY2xvY2sgLyBnZXRfdGltZXIpOiAATUJFRFRMU19DSVBIRVJfTU9ERV9YVFMAOgBVBAoACiVzc2VyaWFsIG51bWJlcjogAAolc3N1YmplY3QgbmFtZSAgICAgIDogAAolcyUtMTRzOiAlZCBiaXRzCgAgIEFFUy1PRkItJTNkICglcyk6IABBRVMtMjU2LUNGQjEyOAB2YWx1ZSBvZiAnJXMnICglZCBiaXRzKSBpczoKAERITSAtIEJhZCBpbnB1dCBwYXJhbWV0ZXJzAHJiAENvdW50cnkALS0tLS1CRUdJTiBFTkNSWVBURUQgUFJJVkFURSBLRVktLS0tLQCqu8wDAgEA//////8RIjMKCwzM3d3d3d0AVExTLUVDREhFLUVDRFNBLVdJVEgtQUVTLTEyOC1DQkMtU0hBAHNzbF9nZW5lcmF0ZV9yYW5kb20AYmFkIGNsaWVudCBoZWxsbyBtZXNzYWdlAGV4dGVuZGVkIG1hc3RlciBzZWNyZXQATUJFRFRMU19DSVBIRVJfUEFERElOR19QS0NTNwAAb3JnYW5pemF0aW9uTmFtZQAgcmV2b2NhdGlvbiBkYXRlOiAlMDRkLSUwMmQtJTAyZCAlMDJkOiUwMmQ6JTAyZAAKJXNpc3N1ZWQgIG9uICAgICAgICA6ICUwNGQtJTAyZC0lMDJkICUwMmQ6JTAyZDolMDJkACAgQUVTLUNUUi0xMjggKCVzKTogAEFFUy0xMjgtT0ZCAAoAICBFQ1AgdGVzdCAjMiAoY29uc3RhbnQgb3BfY291bnQsIG90aGVyIHBvaW50KTogAERITSAtIFJlYWRpbmcgb2YgdGhlIERITSBwYXJhbWV0ZXJzIGZhaWxlZABDAC0tLS0tRU5EIEVOQ1JZUFRFRCBQUklWQVRFIEtFWS0tLS0tAHBhc3NlZAogIFBLQ1MjMSBkZWNyeXB0aW9uIDogAFRMUy1FQ0RIRS1FQ0RTQS1XSVRILUFFUy0yNTYtQ0JDLVNIQQBjbGllbnQgaGVsbG8sIHJhbmRvbSBieXRlcwBjbGllbnQgaGVsbG8gdjMsIG1lc3NhZ2UgbGVuLjogJWQAcHJmAE1CRURUTFNfQ0lQSEVSX1BBRERJTkdfT05FX0FORF9aRVJPUwAuLi4uAEwACiVzc2lnbmVkIHVzaW5nICA6IAAKJXNleHBpcmVzIG9uICAgICAgICA6ICUwNGQtJTAyZC0lMDJkICUwMmQ6JTAyZDolMDJkACAgQUVTLVhUUy0xMjggKCVzKTogADI1NjU2NzMzNjA1OUU1MkNBRTIyOTI1NDc0NzA1RjM5QTk0AEFFUy0xOTItT0ZCACAwMABVbmV4cGVjdGVkIGVycm9yLCByZXR1cm4gY29kZSA9ICUwOFgKAERITSAtIE1ha2luZyBvZiB0aGUgREhNIHBhcmFtZXRlcnMgZmFpbGVkAFUEBwAtLS0tLUJFR0lOIFJTQSBQVUJMSUMgS0VZLS0tLS0AVExTLUVDREhFLUVDRFNBLVdJVEgtQUVTLTEyOC1DQkMtU0hBMjU2AGNsaWVudCBoZWxsbywgc2Vzc2lvbiBpZCBsZW4uOiAlZABjbGllbnQgaGVsbG8gdjMsIHByb3RvY29sIHZlcnNpb246IFslZDolZF0AbWFzdGVyIHNlY3JldABNQkVEVExTX0NJUEhFUl9QQURESU5HX1pFUk9TX0FORF9MRU4APz8/AFUEBwAKAAolc3NpZ25lZCB1c2luZyAgICAgIDogAEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/Pn9/fz80NTY3ODk6Ozw9f39/QH9/fwABAgMEBQYHCAkKCwwNDg8QERITFBUWFxgZf39/f39/GhscHR4fICEiIyQlJicoKSorLC0uLzAxMjN/f39/f0VGRTAyMUMyNjQ1RkQxREM1ODZFNjkxODRBRjRBMzFFRDVGNTNFOTNCNUYxMjNGQTQxNjgwODY3QkExMTAxMzE5NDRGRTc5NTJFMjUxNzMzNzc4MENCMERCODBFNjFBQUU3QzhEREM2QzVDNkFBREVCMzRFQjM4QTJGNDBENUU2AEFFUy0xMjgtQ0JDACUwNHg6IAA0MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAODMzNURDMTYzQkIxMjRCNjUxMjlDOTZGREU5MzNEOEQ3MjNBNzBBQURDODczRDZENTRBN0JCMEQAQ0lQSEVSIC0gSW5wdXQgZGF0YSBjb250YWlucyBpbnZhbGlkIHBhZGRpbmcgYW5kIGlzIHJlamVjdGVkAFNIQQBTSEEyMjQAaWQtYXQtY29tbW9uTmFtZQBERUstSW5mbzogQUVTLQAtLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQBFQ0RTQQAtLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQoAMjRCRjYxODU0Njg3ODZGREQzMDMwODNEMjVFNjRFRkM2NkNBNDcyQkM0NEQyNTMxMDJGOEI0QTlEM0JGQTc1MDkxMzg2QzAwNzc5MzdGRTMzRkEzMjUyRDI4ODU1ODM3QUUxQjQ4NEE4QTlBNDVGN0VFOEMwQzYzNEY5OUU4Q0RERjc5QzVDRTA3RUU3MkM3RjEyMzE0MjE5ODE2NDIzNENBQkI3MjRDRjc4QjgxNzNCOUY4ODBGQzg2MzIyNDA3QUYxRkVERkRERTJCRUI2NzRDQTE1RjNFODFBMTUyMUUwNzE1MTNBMUU4NUI1REZBMDMxRjIxRUNBRTkxQTM0RABUTFMtREhFLVJTQS1XSVRILUNIQUNIQTIwLVBPTFkxMzA1LVNIQTI1NgBpbnZhbGlkIHN0YXRlICVkAGludmFsaWQgc3RhdGUgJWQAbWJlZHRsc19tZCBpbmZvIGZvciAlZCBub3QgZm91bmQAIGN5Y2xlcz0lbHUgcmF0aW89JWx1IG1pbGxpc2Vjcz0lbHUgc2Vjcz0lbHUgaGFyZGZhaWw9JWQgYT0lbHUgYj0lbHUKAE1CRURUTFNfQ0lQSEVSX01PREVfQ0JDACVzPQBDAAolc2lzc3VlciBuYW1lICAgOiAACkNlcnRpZmljYXRlIGlzIHVuaW5pdGlhbGlzZWQhCgAtLS0tLUVORCBORVcgQ0VSVElGSUNBVEUgUkVRVUVTVC0tLS0tAFUdDwAtLS0tLUJFR0lOIENFUlRJRklDQVRFIFJFUVVFU1QtLS0tLQoAQjJFN0VGRDM3MDc1QjlGMDNGRjk4OUM3QzUwNTFDMjAzNEQyQTMyMzgxMDI1MTEyN0U3QkY4NjI1QTRGNDlBNUYzRTI3RjREQThCRDU5QzQ3RDZEQUFCQTRDODEyN0JENUI1QzI1NzYzMjIyRkVGQ0NGQzM4QjgzMjM2NkMyOUUAQUVTLTE5Mi1DQkMAICUwMngAN0ZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGAENJUEhFUiAtIERlY3J5cHRpb24gb2YgYmxvY2sgcmVxdWlyZXMgYSBmdWxsIGJsb2NrAGRlYwBTSEEyMjQAU0hBMjU2AENvbW1vbiBOYW1lAERFSy1JbmZvOiBBRVMtMTI4LUNCQywALS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tAFJTQS1hbHQALS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCgAxMDAwMQBUTFMtUFNLLVdJVEgtQ0hBQ0hBMjAtUE9MWTEzMDUtU0hBMjU2AD0+IHdyaXRlIGNsaWVudCBoZWxsbwA9PiBwYXJzZSBjbGllbnQgaGVsbG8Ac2hvdWxkIG5ldmVyIGhhcHBlbgAgZWxhcHNlZChoaXJlcyk9JWx1IGVsYXBzZWQoY3R4KT0lbHUgc3RhdHVzKGN0eCk9JWQKAE1CRURUTFNfQ0lQSEVSX01PREVfQ0ZCAD8/PQBVBAYACiVzdGhpcyB1cGRhdGUgICA6ICUwNGQtJTAyZC0lMDJkICUwMmQ6JTAyZDolMDJkACVzY2VydC4gdmVyc2lvbiAgICAgOiAlZAoAJXNDU1IgdmVyc2lvbiAgIDogJWQAYIZIAYb4QgEBAC0tLS0tRU5EIENFUlRJRklDQVRFIFJFUVVFU1QtLS0tLQoAMDA2NkExOTgxODZDMThDMTBCMkY1RUQ5QjUyMjc1MkE5ODMwQjY5OTE2RTUzNUM4RjA0NzUxOEE4ODlBNDNBNTk0QjZCRUQyN0ExNjhEMzFENEE1MkY4ODkyNUFBOEY1AEFFUy0yNTYtQ0JDACAgQ1RSX0RSQkcgKFBSID0gRkFMU0UpOiAAICAgAHJiADU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NQBDSVBIRVIgLSBBdXRoZW50aWNhdGlvbiBmYWlsZWQgKGZvciBBRUFEIG1vZGVzKQAgIEFFUy1HQ00tJTNkICMlZCBzcGxpdCAoJXMpOiAAICBITUFDX0RSQkcgKFBSID0gRmFsc2UpIDogAFNIQTI1NgBTSEEzODQAQ04AREVLLUluZm86IEFFUy0xOTItQ0JDLAAtLS0tLUVORCBFQyBQUklWQVRFIEtFWS0tLS0tAHJzYS5OAC0tLS0tRU5EIEVDIFBSSVZBVEUgS0VZLS0tLS0KACAgUlNBIGtleSB2YWxpZGF0aW9uOiAAVExTLUVDREhFLVBTSy1XSVRILUNIQUNIQTIwLVBPTFkxMzA1LVNIQTI1NgBubyBSTkcgcHJvdmlkZWQAbWJlZHRsc19zc2xfZmV0Y2hfaW5wdXQAcHJlbWFzdGVyIHNlY3JldABNQkVEVExTX0NJUEhFUl9NT0RFX0NUUgAlcwBjb3VudHJ5TmFtZQAKJXNuZXh0IHVwZGF0ZSAgIDogJTA0ZC0lMDJkLSUwMmQgJTAyZDolMDJkOiUwMmQAJXNzZXJpYWwgbnVtYmVyICAgICA6IAAKJXNzdWJqZWN0IG5hbWUgIDogAC0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLQoANjYxM0YyNjE2MjIyM0RGNDg4RTlDRDQ4Q0MxMzJDN0EwQUM5M0M3MDFCMDAxQjA5MkU0RTVCOUY3M0JDRDI3QjlFRTUwRDA2NTdDNzdGMzc0RTkwM0NERkE0QzY0MgBBRVMtMjU2LU9GQgAlcyAjJWQ6CgBESE0gLSBSZWFkaW5nIG9mIHRoZSBwdWJsaWMgdmFsdWVzIGZhaWxlZABpZC1hdC1sb2NhbGl0eQAtLS0tLUVORCBSU0EgUFVCTElDIEtFWS0tLS0tACAgUEtDUyMxIGRhdGEgc2lnbiAgOiAAVExTLUVDREhFLUVDRFNBLVdJVEgtQUVTLTEyOC1HQ00tU0hBMjU2AGNsaWVudCBoZWxsbywgc2Vzc2lvbiBpZAByZXBsYXllZCByZWNvcmQsIGRpc2NhcmRpbmcAbm8gcHJlbWFzdGVyIChzZXNzaW9uIHJlc3VtZWQpAE1CRURUTFNfQ0lQSEVSX1BBRERJTkdfWkVST1MAICglcywgTUdGMS0lcywgMHglMDJYKQBsb2NhbGl0eQAKJXMlLTE4czogJWQgYml0cwAgIE1QSSB0ZXN0ICMyIChkaXZfbXBpKTogAEFFUy0xMjgtQ1RSAABzZWNwNTIxcjEAREhNIC0gTWFraW5nIG9mIHRoZSBwdWJsaWMgdmFsdWUgZmFpbGVkAExvY2FsaXR5AC0tLS0tQkVHSU4gUFVCTElDIEtFWS0tLS0tAHBhc3NlZAogIFBLQ1MjMSBzaWcuIHZlcmlmeTogAFRMUy1FQ0RIRS1FQ0RTQS1XSVRILUFFUy0yNTYtQ0JDLVNIQTM4NABubyB2ZXJpZnkgY29va2llIHRvIHNlbmQAcmVjb3JkIGNvbnRlbnRzAGtleSBleHBhbnNpb24ATUJFRFRMU19SRU1PVkVfQVJDNF9DSVBIRVJTVUlURVMAJXMga2V5IHNpemUAUgAKJXNiYXNpYyBjb25zdHJhaW50cyA6IENBPSVzADM2RTEzOUFFQTU1MjE1NjA5RDI4MTY5OThFRDAyMEJCQkQ5NkMzNzg5MEY2NTE3MUQ5NDhFOUJDN0NCQUE0RDkzMjVEMjRENkEzQzEyNzEwRjEwQTA5RkEwOEFCODcAQUVTLTE5Mi1DVFIAY3J0LT4AYnJhaW5wb29sUDUxMnIxAERITSAtIENhbGN1bGF0aW9uIG9mIHRoZSBESE0gc2VjcmV0IGZhaWxlZABMAC0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQBUTFMtRUNESEUtRUNEU0EtV0lUSC1BRVMtMjU2LUdDTS1TSEEzODQAY2xpZW50IGhlbGxvLCBjb29raWUAY2xpZW50IGhlbGxvIHYzLCBoYW5kc2hha2UgdHlwZTogJWQAY2lwaGVyc3VpdGUgPSAlcwBNQkVEVExTX1JFTU9WRV8zREVTX0NJUEhFUlNVSVRFUwAgIFguNTA5IGNlcnRpZmljYXRlIGxvYWQ6IAAqhkiG9w0BCQEAdHJ1ZQAgIE1QSSB0ZXN0ICMzIChleHBfbW9kKTogAEFFUy0yNTYtQ1RSAGludmFsaWQgUEsgY29udGV4dAoAc2VjcDM4NHIxAERITSAtIFRoZSBBU04uMSBkYXRhIGlzIG5vdCBmb3JtYXR0ZWQgY29ycmVjdGx5AFUECAAqhkjOPQEBAFRMUy1FQ0RIRS1FQ0RTQS1XSVRILUFFUy0yNTYtQ0NNAGNsaWVudCBoZWxsbywgYWRkIGNpcGhlcnN1aXRlOiAlMDR4AGNsaWVudCBoZWxsbyB2MywgaGFuZHNoYWtlIGxlbi46ICVkAHJhbmRvbSBieXRlcwBNQkVEVExTX0VDUF9EUF9TRUNQMTkyUjFfRU5BQkxFRABPVQBmYWxzZQAwMDNBMEFBRUREN0U3ODRGQzA3RDhGOUVDNkUzQkZENUMzREJBNzY0NTYzNjNBMTA4Njk2MjJFQUMyREQ4NEVDQzVCOEE3NERBQzREMDlFMDNCNUUwQkU3NzlGMkRGNjEAQUVTLTEyOC1YVFMAJXMlcwBicmFpbnBvb2xQMzg0cjEAREhNIC0gQWxsb2NhdGlvbiBvZiBtZW1vcnkgZmFpbGVkAGlkLWF0LXN0YXRlACqGSIb3DQEMAQEAVExTLUVDREhFLUVDRFNBLVdJVEgtQUVTLTI1Ni1DQ00tOABjbGllbnQgaGVsbG8sIGdvdCAlZCBjaXBoZXJzdWl0ZXMgKGV4Y2x1ZGluZyBTQ1NWcykAYmFkIGNsaWVudCBoZWxsbyBtZXNzYWdlX3NlcTogJWQgKGV4cGVjdGVkICVkKQBrZXkgYmxvY2sATUJFRFRMU19FQ1BfRFBfU0VDUDIyNFIxX0VOQUJMRUQAcGFzc2VkCiAgWC41MDkgc2lnbmF0dXJlIHZlcmlmeTogAFUECwAsIG1heF9wYXRobGVuPSVkACAgTVBJIHRlc3QgIzQgKGludl9tb2QpOiAAQUVTLTI1Ni1YVFMAc2hvdWxkIG5vdCBoYXBwZW4KAHNlY3AyNTZyMQBESE0gLSBSZWFkIG9yIHdyaXRlIG9mIGZpbGUgZmFpbGVkAFN0YXRlACqGSIb3DQEFDQBUTFMtRUNESEUtRUNEU0EtV0lUSC1BRVMtMTI4LUNDTQBhZGRpbmcgRU1QVFlfUkVORUdPVElBVElPTl9JTkZPX1NDU1YAQ2xpZW50SGVsbG8gZnJhZ21lbnRhdGlvbiBub3Qgc3VwcG9ydGVkAG1iZWR0bHNfbWRfc2V0dXAATUJFRFRMU19FQ1BfRFBfU0VDUDI1NlIxX0VOQUJMRUQAb3JnYW5pemF0aW9uYWxVbml0TmFtZQAKJXNzdWJqZWN0IGFsdCBuYW1lICA6IAAgIE1QSSB0ZXN0ICM1IChzaW1wbGUgZ2NkKTogAEFFUy0xMjgtR0NNAEVDREg6IFEAc2VjcDI1NmsxAERITSAtIERITSBoYXJkd2FyZSBhY2NlbGVyYXRvciBmYWlsZWQAU1QAVExTLUVDREhFLUVDRFNBLVdJVEgtQUVTLTEyOC1DQ00tOABhZGRpbmcgRkFMTEJBQ0tfU0NTVgBjbGllbnQgaGVsbG8sIHZlcnNpb24Aa2V5bGVuOiAlZCwgbWlubGVuOiAlZCwgaXZsZW46ICVkLCBtYWNsZW46ICVkAE1CRURUTFNfRUNQX0RQX1NFQ1AzODRSMV9FTkFCTEVEAFNUAAolc2NlcnQuIHR5cGUgICAgICAgIDogAGZhaWxlZCBhdCAlZAoAQUVTLTE5Mi1HQ00ARUNESDogUXAAYnJhaW5wb29sUDI1NnIxAERITSAtIFNldHRpbmcgdGhlIG1vZHVsdXMgYW5kIGdlbmVyYXRvciBmYWlsZWQAVQQKAFRMUy1FQ0RIRS1FQ0RTQS1XSVRILUNBTUVMTElBLTEyOC1DQkMtU0hBMjU2AGNsaWVudCBoZWxsbywgY29tcHJlc3MgbGVuLjogJWQAY2xpZW50IG9ubHkgc3VwcG9ydHMgc3NsIHNtYWxsZXIgdGhhbiBtaW5pbXVtIFslZDolZF0gPCBbJWQ6JWRdAG1iZWR0bHNfY2lwaGVyX3NldHVwAE1CRURUTFNfRUNQX0RQX1NFQ1A1MjFSMV9FTkFCTEVEAFUECAAKJXNrZXkgdXNhZ2UgICAgICAgICA6IABVbmV4cGVjdGVkIGVycm9yLCByZXR1cm4gY29kZSA9ICUwOFgKAEFFUy0yNTYtR0NNAEVDREg6IHoAc2VjcDIyNHIxAEVDUCAtIEJhZCBpbnB1dCBwYXJhbWV0ZXJzIHRvIGZ1bmN0aW9uAGlkLWF0LW9yZ2FuaXphdGlvbk5hbWUAVExTLUVDREhFLUVDRFNBLVdJVEgtQ0FNRUxMSUEtMjU2LUNCQy1TSEEzODQAY2xpZW50IGhlbGxvLCByYW5kb20gYnl0ZXMAbWJlZHRsc19jaXBoZXJfc2V0a2V5AE1CRURUTFNfRUNQX0RQX1NFQ1AxOTJLMV9FTkFCTEVEAHN0YXRlT3JQcm92aW5jZU5hbWUACiVzZXh0IGtleSB1c2FnZSAgICAgOiAAAAAAAAAApgsx0ay135jbcv0vt98a0O2v4biWfiZqRZB8upl/LPFHmaEk92yR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aW9uIGxlbmd0aDogJWQAY2xpZW50IGhlbGxvLCBjb29raWUAPD0gZGVyaXZlIGtleXMATUJFRFRMU19FQ1BfRFBfU0VDUDI1NksxX0VOQUJMRUQAc2VyaWFsTnVtYmVyACVzJXMKAEFFUy0yNTYtQ0NNAHNlY3AxOTJrMQBFQ1AgLSBUaGUgc2lnbmF0dXJlIGlzIG5vdCB2YWxpZABVBAsAVExTLUVDREhFLUVDRFNBLVdJVEgtM0RFUy1FREUtQ0JDLVNIQQBtYmVkdGxzX3NzbF93cml0ZV9oYW5kc2hha2VfbXNnAGNvb2tpZSB2ZXJpZmljYXRpb24gZmFpbGVkAG1iZWR0bHNfZGhtX2NhbGNfc2VjcmV0AE1CRURUTFNfRUNQX0RQX0JQMjU2UjFfRU5BQkxFRABVBAUAJXNVbmtub3duIHJlYXNvbiAodGhpcyBzaG91bGQgbm90IGhhcHBlbikKAEFSQzQtMTI4AEVDUCAtIE1lbW9yeSBhbGxvY2F0aW9uIGZhaWxlZABpZC1hdC1vcmdhbml6YXRpb25hbFVuaXROYW1lAFRMUy1FQ0RIRS1FQ0RTQS1XSVRILVJDNC0xMjgtU0hBAG1iZWR0bHNfc3NsX2ZsaWdodF90cmFuc21pdABjb29raWUgdmVyaWZpY2F0aW9uIHBhc3NlZABESE06IEsgAE1CRURUTFNfRUNQX0RQX0JQMzg0UjFfRU5BQkxFRABwb3N0YWxBZGRyZXNzAFUdJQAAAAcAQYizAQuRApoAAACbAAAAmwAAAJwAAACdAAAAQkxPV0ZJU0gtRUNCAEVDUCAtIEdlbmVyYXRpb24gb2YgcmFuZG9tIHZhbHVlLCBzdWNoIGFzIGVwaGVtZXJhbCBrZXksIGZhaWxlZABPcmcgVW5pdABUTFMtRUNESEUtUlNBLVdJVEgtQUVTLTEyOC1DQkMtU0hBADw9IHdyaXRlIGNsaWVudCBoZWxsbwBjb29raWUgdmVyaWZpY2F0aW9uIHNraXBwZWQAbWJlZHRsc19lY2RoX2NhbGNfc2VjcmV0AE1CRURUTFNfRUNQX0RQX0JQNTEyUjFfRU5BQkxFRABVBBAAAAYAAACeAAAAnwAAAKAAAAAAAAAAoQBBpLUBC8kIogAAAKIAAACjAAAApAAAAEJMT1dGSVNILUNCQwBFQ1AgLSBJbnZhbGlkIHByaXZhdGUgb3IgcHVibGljIGtleQBPVQBUTFMtRUNESEUtUlNBLVdJVEgtQUVTLTI1Ni1DQkMtU0hBAGNsaWVudCBoZWxsbywgY3VycmVudCB0aW1lOiAlbHUAY2xpZW50IGhlbGxvLCBjaXBoZXJzdWl0ZWxpc3QAPT4gZmV0Y2ggaW5wdXQATUJFRFRMU19FQ1BfRFBfQ1VSVkUyNTUxOV9FTkFCTEVEAHBvc3RhbENvZGUALCAAQkxPV0ZJU0gtQ0ZCNjQARUNQIC0gVGhlIGJ1ZmZlciBjb250YWlucyBhIHZhbGlkIHNpZ25hdHVyZSBmb2xsb3dlZCBieSBtb3JlIGRhdGEAKoZIhvcNAQkBAFRMUy1FQ0RIRS1SU0EtV0lUSC1BRVMtMTI4LUNCQy1TSEEyNTYAY2xpZW50IGhlbGxvLCBhZGRpbmcgc2VydmVyIG5hbWUgZXh0ZW5zaW9uOiAlcwBjbGllbnQgaGVsbG8sIGNvbXByZXNzaW9uAEJhZCB1c2FnZSBvZiBtYmVkdGxzX3NzbF9zZXRfYmlvKCkgb3IgbWJlZHRsc19zc2xfc2V0X2JpbygpAE1CRURUTFNfRUNQX0RQX0NVUlZFNDQ4X0VOQUJMRUQAVQQRACVzU1NMIENsaWVudABCTE9XRklTSC1DVFIARUNQIC0gVGhlIEVDUCBoYXJkd2FyZSBhY2NlbGVyYXRvciBmYWlsZWQAZW1haWxBZGRyZXNzAFRMUy1FQ0RIRS1SU0EtV0lUSC1BRVMtMTI4LUdDTS1TSEEyNTYAYnVmZmVyIHRvbyBzbWFsbABjbGllbnQgaGVsbG8gZXh0ZW5zaW9ucwByZXF1ZXN0aW5nIG1vcmUgZGF0YSB0aGFuIGZpdHMATUJFRFRMU19FQ1BfTklTVF9PUFRJTQBkblF1YWxpZmllcgAlc1NTTCBTZXJ2ZXIAQ0FNRUxMSUEtMTI4LUVDQgBFQ1AgLSBPcGVyYXRpb24gaW4gcHJvZ3Jlc3MsIGNhbGwgYWdhaW4gd2l0aCB0aGUgc2FtZSBwYXJhbWV0ZXJzIHRvIGNvbnRpbnVlAEUtbWFpbCBhZGRyZXNzAFRMUy1FQ0RIRS1SU0EtV0lUSC1BRVMtMjU2LUNCQy1TSEEzODQAY2xpZW50IGhlbGxvLCBhZGRpbmcgcmVuZWdvdGlhdGlvbiBleHRlbnNpb24AZm91bmQgU2VydmVyTmFtZSBleHRlbnNpb24AWW91IG11c3QgdXNlIG1iZWR0bHNfc3NsX3NldF90aW1lcl9jYigpIGZvciBEVExTAE1CRURUTFNfRUNEU0FfREVURVJNSU5JU1RJQwBVBC4AJXNFbWFpbAAAAAAFAAAApQAAAKYAAACnAAAAAAAAAKgAQfi9AQuZGakAAACqAAAAqwAAAKwAAABDQU1FTExJQS0xOTItRUNCAE1EIC0gVGhlIHNlbGVjdGVkIGZlYXR1cmUgaXMgbm90IGF2YWlsYWJsZQBVBAUAVExTLUVDREhFLVJTQS1XSVRILUFFUy0yNTYtR0NNLVNIQTM4NABjbGllbnQgaGVsbG8sIGFkZGluZyBzaWduYXR1cmVfYWxnb3JpdGhtcyBleHRlbnNpb24AZm91bmQgcmVuZWdvdGlhdGlvbiBleHRlbnNpb24AbmV4dCByZWNvcmQgaW4gc2FtZSBkYXRhZ3JhbSwgb2Zmc2V0OiAlZABNQkVEVExTX0tFWV9FWENIQU5HRV9QU0tfRU5BQkxFRAB0aXRsZQAlc09iamVjdCBTaWduaW5nAENBTUVMTElBLTI1Ni1FQ0IATUQgLSBCYWQgaW5wdXQgcGFyYW1ldGVycyB0byBmdW5jdGlvbgBpZC1hdC1zZXJpYWxOdW1iZXIAVExTLUVDREhFLVJTQS1XSVRILUNBTUVMTElBLTEyOC1DQkMtU0hBMjU2AGNsaWVudCBoZWxsbywgYWRkaW5nIHN1cHBvcnRlZF9lbGxpcHRpY19jdXJ2ZXMgZXh0ZW5zaW9uAGZvdW5kIHNpZ25hdHVyZV9hbGdvcml0aG1zIGV4dGVuc2lvbgBpbl9sZWZ0OiAlZCwgbmJfd2FudDogJWQATUJFRFRMU19LRVlfRVhDSEFOR0VfREhFX1BTS19FTkFCTEVEAFUEDAAlc1Jlc2VydmVkAENBTUVMTElBLTEyOC1DQkMATUQgLSBGYWlsZWQgdG8gYWxsb2NhdGUgbWVtb3J5AFNlcmlhbCBudW1iZXIAVExTLUVDREhFLVJTQS1XSVRILUNBTUVMTElBLTI1Ni1DQkMtU0hBMzg0AGludmFsaWQgY3VydmUgaW4gc3NsIGNvbmZpZ3VyYXRpb24AZm91bmQgc3VwcG9ydGVkIGVsbGlwdGljIGN1cnZlcyBleHRlbnNpb24APD0gZmV0Y2ggaW5wdXQATUJFRFRMU19LRVlfRVhDSEFOR0VfRUNESEVfUFNLX0VOQUJMRUQAc3VyTmFtZQAlc1NTTCBDQQBDQU1FTExJQS0xOTItQ0JDAE1EIC0gT3BlbmluZyBvciByZWFkaW5nIG9mIGZpbGUgZmFpbGVkAHNlcmlhbE51bWJlcgBUTFMtRUNESEUtUlNBLVdJVEgtQ0FNRUxMSUEtMTI4LUdDTS1TSEEyNTYAY2xpZW50IGhlbGxvLCBhZGRpbmcgc3VwcG9ydGVkX3BvaW50X2Zvcm1hdHMgZXh0ZW5zaW9uAGZvdW5kIHN1cHBvcnRlZCBwb2ludCBmb3JtYXRzIGV4dGVuc2lvbgB0aW1lciBoYXMgZXhwaXJlZABNQkVEVExTX0tFWV9FWENIQU5HRV9SU0FfUFNLX0VOQUJMRUQAVQQEACVzRW1haWwgQ0EAQ0FNRUxMSUEtMjU2LUNCQwBNRCAtIE1EIGhhcmR3YXJlIGFjY2VsZXJhdG9yIGZhaWxlZABVBBAAVExTLUVDREhFLVJTQS1XSVRILUNBTUVMTElBLTI1Ni1HQ00tU0hBMzg0AGNsaWVudCBoZWxsbywgYWRkaW5nIG1heF9mcmFnbWVudF9sZW5ndGggZXh0ZW5zaW9uAGZvdW5kIG1heCBmcmFnbWVudCBsZW5ndGggZXh0ZW5zaW9uAGZfcmVjdl90aW1lb3V0OiAldSBtcwBNQkVEVExTX0tFWV9FWENIQU5HRV9SU0FfRU5BQkxFRABTTgAlc09iamVjdCBTaWduaW5nIENBAENBTUVMTElBLTEyOC1DRkIxMjgAUEVNIC0gTm8gUEVNIGhlYWRlciBvciBmb290ZXIgZm91bmQAaWQtYXQtcG9zdGFsQWRkcmVzcwBUTFMtRUNESEUtUlNBLVdJVEgtM0RFUy1FREUtQ0JDLVNIQQBjbGllbnQgaGVsbG8sIGFkZGluZyB0cnVuY2F0ZWRfaG1hYyBleHRlbnNpb24AZm91bmQgdHJ1bmNhdGVkIGhtYWMgZXh0ZW5zaW9uAHNzbC0+Zl9yZWN2KF90aW1lb3V0KQBNQkVEVExTX0tFWV9FWENIQU5HRV9ESEVfUlNBX0VOQUJMRUQAZ2l2ZW5OYW1lACVzRGlnaXRhbCBTaWduYXR1cmUAQ0FNRUxMSUEtMTkyLUNGQjEyOABQRU0gLSBQRU0gc3RyaW5nIGlzIG5vdCBhcyBleHBlY3RlZABQb3N0YWwgYWRkcmVzcwBUTFMtRUNESEUtUlNBLVdJVEgtUkM0LTEyOC1TSEEAY2xpZW50IGhlbGxvLCBhZGRpbmcgZW5jcnlwdF90aGVuX21hYyBleHRlbnNpb24AZm91bmQgZW5jcnlwdCB0aGVuIG1hYyBleHRlbnNpb24AdGltZW91dABNQkVEVExTX0tFWV9FWENIQU5HRV9FQ0RIRV9SU0FfRU5BQkxFRABVBCoAJXNOb24gUmVwdWRpYXRpb24AQ0FNRUxMSUEtMjU2LUNGQjEyOABQRU0gLSBGYWlsZWQgdG8gYWxsb2NhdGUgbWVtb3J5AHBvc3RhbEFkZHJlc3MAVExTLURIRS1SU0EtV0lUSC1BRVMtMjU2LUdDTS1TSEEzODQAY2xpZW50IGhlbGxvLCBhZGRpbmcgZXh0ZW5kZWRfbWFzdGVyX3NlY3JldCBleHRlbnNpb24AZm91bmQgZXh0ZW5kZWQgbWFzdGVyIHNlY3JldCBleHRlbnNpb24AaGFuZHNoYWtlIHRpbWVvdXQATUJFRFRMU19LRVlfRVhDSEFOR0VfRUNESEVfRUNEU0FfRU5BQkxFRABHTgAlc0tleSBFbmNpcGhlcm1lbnQAQ0FNRUxMSUEtMTI4LUNUUgBQRU0gLSBSU0EgSVYgaXMgbm90IGluIGhleC1mb3JtYXQAVQQRAFRMUy1ESEUtUlNBLVdJVEgtQUVTLTEyOC1HQ00tU0hBMjU2AGNsaWVudCBoZWxsbywgYWRkaW5nIGFscG4gZXh0ZW5zaW9uAGZvdW5kIHNlc3Npb24gdGlja2V0IGV4dGVuc2lvbgBtYmVkdGxzX3NzbF9yZXNlbmQATUJFRFRMU19LRVlfRVhDSEFOR0VfRUNESF9FQ0RTQV9FTkFCTEVEAGluaXRpYWxzACVzRGF0YSBFbmNpcGhlcm1lbnQAQ0FNRUxMSUEtMTkyLUNUUgBQRU0gLSBVbnN1cHBvcnRlZCBrZXkgZW5jcnlwdGlvbiBhbGdvcml0aG0AaWQtYXQtcG9zdGFsQ29kZQBUTFMtREhFLVJTQS1XSVRILUFFUy0xMjgtQ0JDLVNIQTI1NgBjbGllbnQgaGVsbG8sIGFkZGluZyBzZXNzaW9uIHRpY2tldCBleHRlbnNpb24AZm91bmQgYWxwbiBleHRlbnNpb24Ac3NsX3Jlc2VuZF9oZWxsb19yZXF1ZXN0AE1CRURUTFNfS0VZX0VYQ0hBTkdFX0VDREhfUlNBX0VOQUJMRUQAVQQrACVzS2V5IEFncmVlbWVudABDQU1FTExJQS0yNTYtQ1RSAFBFTSAtIFByaXZhdGUga2V5IHBhc3N3b3JkIGNhbid0IGJlIGVtcHR5AFBvc3RhbCBjb2RlAFRMUy1ESEUtUlNBLVdJVEgtQUVTLTI1Ni1DQkMtU0hBMjU2AHNlbmRpbmcgc2Vzc2lvbiB0aWNrZXQgb2YgbGVuZ3RoICVkAHVua25vd24gZXh0ZW5zaW9uIGZvdW5kOiAlZCAoaWdub3JpbmcpAGZfcmVjdiByZXR1cm5lZCAlZCBieXRlcyBidXQgb25seSAlbHUgd2VyZSByZXF1ZXN0ZWQATUJFRFRMU19QS19QQVJTRV9FQ19FWFRFTkRFRABwc2V1ZG9ueW0AJXNLZXkgQ2VydCBTaWduAENBTUVMTElBLTEyOC1HQ00AUEVNIC0gR2l2ZW4gcHJpdmF0ZSBrZXkgcGFzc3dvcmQgZG9lcyBub3QgYWxsb3cgZm9yIGNvcnJlY3QgZGVjcnlwdGlvbgBwb3N0YWxDb2RlAFRMUy1ESEUtUlNBLVdJVEgtQUVTLTEyOC1DQkMtU0hBAD0+IHBhcnNlIHNlcnZlciBoZWxsbwByZWNlaXZlZCBGQUxMQkFDS19TQ1NWAD0+IGZsdXNoIG91dHB1dABNQkVEVExTX0VSUk9SX1NUUkVSUk9SX0RVTU1ZAFUEQQAlc0NSTCBTaWduAAAABQBBsNcBC+EFrQAAAK0AAACVAAAAlgAAAENBTUVMTElBLTE5Mi1HQ00AUEVNIC0gVW5hdmFpbGFibGUgZmVhdHVyZSwgZS5nLiBoYXNoaW5nL2VuY3J5cHRpb24gY29tYmluYXRpb24AVQQEAFRMUy1ESEUtUlNBLVdJVEgtQUVTLTI1Ni1DQkMtU0hBAG1iZWR0bHNfc3NsX3JlYWRfcmVjb3JkAGluYXByb3ByaWF0ZSBmYWxsYmFjawA8PSBmbHVzaCBvdXRwdXQATUJFRFRMU19HRU5QUklNRQBnZW5lcmF0aW9uUXVhbGlmaWVyACVzRW5jaXBoZXIgT25seQBDQU1FTExJQS0yNTYtR0NNAFBFTSAtIEJhZCBpbnB1dCBwYXJhbWV0ZXJzIHRvIGZ1bmN0aW9uAGlkLWF0LXN1ck5hbWUAVExTLURIRS1SU0EtV0lUSC1BRVMtMjU2LUNDTQByZW5lZ290aWF0aW9uIHJlcXVlc3RlZCwgYnV0IG5vdCBob25vcmVkIGJ5IHNlcnZlcgByZWNlaXZlZCBUTFNfRU1QVFlfUkVORUdPVElBVElPTl9JTkZPIABtZXNzYWdlIGxlbmd0aDogJWQsIG91dF9sZWZ0OiAlZABNQkVEVExTX0ZTX0lPAFUELAAlc0RlY2lwaGVyIE9ubHkAQ0FNRUxMSUEtMTI4LUNDTQBQSyAtIE1lbW9yeSBhbGxvY2F0aW9uIGZhaWxlZABTdXJuYW1lAFRMUy1ESEUtUlNBLVdJVEgtQUVTLTI1Ni1DQ00tOABub24taGFuZHNoYWtlIG1lc3NhZ2UgZHVyaW5nIHJlbmVnbwByZWNlaXZlZCBSRU5FR09USUFUSU9OIFNDU1YgZHVyaW5nIHJlbmVnb3RpYXRpb24Ac3NsLT5mX3NlbmQATUJFRFRMU19QS19SU0FfQUxUX1NVUFBPUlQAZG9tYWluQ29tcG9uZW50AD8/PwAAAAUAQbDdAQuJBq4AAACuAAAAmAAAAJkAAABDQU1FTExJQS0xOTItQ0NNAFBLIC0gVHlwZSBtaXNtYXRjaCwgZWcgYXR0ZW1wdCB0byBlbmNyeXB0IHdpdGggYW4gRUNEU0Ega2V5AFNOAFRMUy1ESEUtUlNBLVdJVEgtQUVTLTEyOC1DQ00AYmFkIHNlcnZlciBoZWxsbyBtZXNzYWdlAGxlZ2FjeSByZW5lZ290aWF0aW9uLCBicmVha2luZyBvZmYgaGFuZHNoYWtlAGZfc2VuZCByZXR1cm5lZCAlZCBieXRlcyBidXQgb25seSAlbHUgYnl0ZXMgd2VyZSBzZW50AE1CRURUTFNfUEtDUzFfVjE1AAmSJomT8ixkARkAJXMlcwBDQU1FTExJQS0yNTYtQ0NNAFBLIC0gQmFkIGlucHV0IHBhcmFtZXRlcnMgdG8gZnVuY3Rpb24AVQQqAFRMUy1ESEUtUlNBLVdJVEgtQUVTLTEyOC1DQ00tOAByZWNlaXZlZCBoZWxsbyB2ZXJpZnkgcmVxdWVzdAByZW5lZ290aWF0aW9uX2luZm8gZXh0ZW5zaW9uIG1pc3NpbmcgKHNlY3VyZSkAPT4gbWJlZHRsc19zc2xfcmVzZW5kAE1CRURUTFNfUEtDUzFfVjIxAERDAFRoZSBjZXJ0aWZpY2F0ZSB2YWxpZGl0eSBoYXMgZXhwaXJlZABERVMtRUNCAFBLIC0gUmVhZC93cml0ZSBvZiBmaWxlIGZhaWxlZABpZC1hdC1naXZlbk5hbWUAVExTLURIRS1SU0EtV0lUSC1DQU1FTExJQS0xMjgtQ0JDLVNIQTI1NgA8PSBwYXJzZSBzZXJ2ZXIgaGVsbG8AbGVnYWN5IHJlbmVnb3RpYXRpb24gbm90IGFsbG93ZWQAPD0gbWJlZHRsc19zc2xfcmVzZW5kAE1CRURUTFNfU0VMRl9URVNUAFRoZSBjZXJ0aWZpY2F0ZSBoYXMgYmVlbiByZXZva2VkIChpcyBvbiBhIENSTCkAAAMAAACvAAAAsABB0OMBC70CsQAAALIAAACzAAAAtAAAAERFUy1FREUtRUNCAFBLIC0gVW5zdXBwb3J0ZWQga2V5IHZlcnNpb24AR2l2ZW4gbmFtZQBUTFMtREhFLVJTQS1XSVRILUNBTUVMTElBLTI1Ni1DQkMtU0hBMjU2AHNlcnZlciBoZWxsbywgdmVyc2lvbgByZW5lZ290aWF0aW9uX2luZm8gZXh0ZW5zaW9uIHByZXNlbnQgKGxlZ2FjeSkAPT4gbWJlZHRsc19zc2xfZmxpZ2h0X3RyYW5zbWl0AE1CRURUTFNfU1NMX0FMTF9BTEVSVF9NRVNTQUdFUwBUaGUgY2VydGlmaWNhdGUgQ29tbW9uIE5hbWUgKENOKSBkb2VzIG5vdCBtYXRjaCB3aXRoIHRoZSBleHBlY3RlZCBDTgADAAAAtQAAALYAQaTmAQvlArcAAAC4AAAAuQAAALoAAABERVMtRURFMy1FQ0IAUEsgLSBJbnZhbGlkIGtleSB0YWcgb3IgdmFsdWUAR04AVExTLURIRS1SU0EtV0lUSC1DQU1FTExJQS0xMjgtQ0JDLVNIQQBzZXJ2ZXIgdmVyc2lvbiBvdXQgb2YgYm91bmRzIC0gIG1pbjogWyVkOiVkXSwgc2VydmVyOiBbJWQ6JWRdLCBtYXg6IFslZDolZF0AZ290IGNpcGhlcnN1aXRlcyBpbiBjb21tb24sIGJ1dCBub25lIG9mIHRoZW0gdXNhYmxlAGluaXRpYWxpc2UgZmxpZ2h0IHRyYW5zbWlzc2lvbgBNQkVEVExTX1NTTF9FTkNSWVBUX1RIRU5fTUFDAFRoZSBjZXJ0aWZpY2F0ZSBpcyBub3QgY29ycmVjdGx5IHNpZ25lZCBieSB0aGUgdHJ1c3RlZCBDQQAAAAQAAAC1AAAAtgBBoOkBC40JuwAAALwAAAC5AAAAugAAAERFUy1DQkMAUEsgLSBLZXkgYWxnb3JpdGhtIGlzIHVuc3VwcG9ydGVkIChvbmx5IFJTQSBhbmQgRUMgYXJlIHN1cHBvcnRlZCkAVQQrAFRMUy1ESEUtUlNBLVdJVEgtQ0FNRUxMSUEtMjU2LUNCQy1TSEEAc2VydmVyIGhlbGxvLCBjdXJyZW50IHRpbWU6ICVsdQBnb3Qgbm8gY2lwaGVyc3VpdGVzIGluIGNvbW1vbgBzd2FwIGVwb2NocyB0byBzZW5kIGZpbmlzaGVkIG1lc3NhZ2UATUJFRFRMU19TU0xfRVhURU5ERURfTUFTVEVSX1NFQ1JFVABUaGUgQ1JMIGlzIG5vdCBjb3JyZWN0bHkgc2lnbmVkIGJ5IHRoZSB0cnVzdGVkIENBAERFUy1FREUtQ0JDAFBLIC0gUHJpdmF0ZSBrZXkgcGFzc3dvcmQgY2FuJ3QgYmUgZW1wdHkAaWQtYXQtaW5pdGlhbHMAVExTLURIRS1SU0EtV0lUSC1DQU1FTExJQS0xMjgtR0NNLVNIQTI1NgBzZXJ2ZXIgaGVsbG8sIHJhbmRvbSBieXRlcwBzZWxlY3RlZCBjaXBoZXJzdWl0ZTogJXMAZnJhZ21lbnRpbmcgaGFuZHNoYWtlIG1lc3NhZ2UgKCV1ID4gJXUpAE1CRURUTFNfU1NMX0ZBTExCQUNLX1NDU1YAVGhlIENSTCBpcyBleHBpcmVkAERFUy1FREUzLUNCQwBQSyAtIEdpdmVuIHByaXZhdGUga2V5IHBhc3N3b3JkIGRvZXMgbm90IGFsbG93IGZvciBjb3JyZWN0IGRlY3J5cHRpb24ASW5pdGlhbHMAVExTLURIRS1SU0EtV0lUSC1DQU1FTExJQS0yNTYtR0NNLVNIQTM4NABzZXJ2ZXIgaGVsbG8sIGJhZCBjb21wcmVzc2lvbjogJWQAY2xpZW50IGhlbGxvIHYzLCBzaWduYXR1cmVfYWxnb3JpdGhtIGV4dDogJWQAaGFuZHNoYWtlIGhlYWRlcgBNQkVEVExTX1NTTF9DQkNfUkVDT1JEX1NQTElUVElORwBDZXJ0aWZpY2F0ZSB3YXMgbWlzc2luZwBDSEFDSEEyMABQSyAtIFRoZSBwdWJrZXkgdGFnIG9yIHZhbHVlIGlzIGludmFsaWQgKG9ubHkgUlNBIGFuZCBFQyBhcmUgc3VwcG9ydGVkKQBpbml0aWFscwBUTFMtREhFLVJTQS1XSVRILTNERVMtRURFLUNCQy1TSEEAY2lwaGVyc3VpdGUgaW5mbyBmb3IgJTA0eCBub3QgZm91bmQAbm8gaGFzaCBhbGdvcml0aG0gZm9yIHNpZ25hdHVyZSBhbGdvcml0aG0gJWQgLSBzaG91bGQgbm90IGhhcHBlbgBtYmVkdGxzX3NzbF93cml0ZV9yZWNvcmQATUJFRFRMU19TU0xfUkVORUdPVElBVElPTgBDZXJ0aWZpY2F0ZSB2ZXJpZmljYXRpb24gd2FzIHNraXBwZWQAAAAACQBByPIBC50CvQAAAL4AAAC+AAAAvwAAAMAAAABDSEFDSEEyMC1QT0xZMTMwNQBQSyAtIFRoZSBhbGdvcml0aG0gdGFnIG9yIHZhbHVlIGlzIGludmFsaWQAVQQsAFRMUy1SU0EtV0lUSC1BRVMtMjU2LUdDTS1TSEEzODQAc2VydmVyIGhlbGxvLCBzZXNzaW9uIGlkIGxlbi46ICVkADw9IHBhcnNlIGNsaWVudCBoZWxsbwA8PSBtYmVkdGxzX3NzbF9mbGlnaHRfdHJhbnNtaXQATUJFRFRMU19TU0xfTUFYX0ZSQUdNRU5UX0xFTkdUSABPdGhlciByZWFzb24gKGNhbiBiZSB1c2VkIGJ5IHZlcmlmeSBjYWxsYmFjaykAAAAJAEGE9QELDcEAAADBAAAAwgAAAMMAQaT1AQveAQEAAAAAAQAAAQEAAAAAAQABAAEAAAEBAAEBAQAAAAABAQAAAQABAAEBAQABAAABAQEAAQEAAQEBAQEBAQAAAAAAAAABAAABAAAAAQEAAQAAAAEAAQABAQAAAQEBAQAAAAEAAAEBAAEAAQABAQEBAAABAQABAQEBAAEBAQFAEAAQABAAAAAABABAEAQQAAAAEEAQABBAAAAAAAAAEEAABAAAAAQQQBAEEAAQBAAAEAQQQBAEAAAQAABAAAAAAAAEEEAAABAAEAAQQBAAAAAQBABAAAQAQAAEEAAQBBBAEABBjPcBC6UEQAAEEEAAABAAEAAQQBAEAAAABABAEAQAAAAEAAAQBBAAEAAAQAAAAEAABBAAEAAAQBAEAAAQABBAAAAAQAAAEAAABBBAAAQQAAAAEAAABABAEAAQAAAAAEAQBBBAAAQAQAAAEAAABBAAEAAQQBAAEAAAAABAEAQQABAEAAAQBABAEAAAQBAAAEAABAAAAAAQABAEEBAAACAAAEAgAEAAABBAQCAAAEAgEAAAABBAQCAAAEAAAEAAIBBAQAAAAEAAEAAAIBAAQAAAQAAgAAAAIBBAAAAAAAAAEABAABBAACAAQAAAAEBAABBAACAQAAAAEABAIBAAQCAAAAAAEEBAAABAQCAQQAAAAEBAAABAQCAAAAAgAEAAIBAAAAAQAEAgAEBAABBAQCAAAEAAEEAAABAAACAAAEAAAEAAIAAAACAQQAAAEAAAIBBAQCAAQEAAAABAIBBAQAAAQEAgAAAAABAAQCAQAAAAAEAAAAAAQCAQQEAAAEAAABAAQAAQQAAgAAAAAABAQCAAAAAgEABAABBAACABIIAAgSAAAIEgAACAAAAAgCCAAIEAgAABAIAAASAAAAAAAAAAIIAAACCAAIEggACBAAAAAAAAAIAAgAABAIAAAQAAAAAgAAAAAIAAASCAAIAAAAAAAIAAASAAAIAgAACBAIAAAQAAAIAgAACAAIAAACAAAIAggACBIIAAgQAAAIAAgAABAIAAACCAAIEggACBAEG9+wEL5QsggACAIAAAgACAAIEAgAABAAAAASCAAIEgAACBIAAAgAAAAIEggACBAAAAAQAAAAAgAAABAIAAASAAAIAggACBAIAAASAAAIAgAAAAAIAAASCAAIAAAAAAAIAAACAAAIAggAAggBCAAIAAgACAAAAggBAAAAAQACAAAAAgABCAIIAAgCAAAIAggBCAAIAQgAAAAIAAgACAAAAQACAAAAAgABCAAIAQACAAEAAggACAAAAAAAAAAIAAgAAAIIAQAAAAEIAgABAAIAAAgAAAAAAAgBAAIIAAAACAEIAAABCAIIAAAAAAAAAggBAAIAAQgAAAEAAggACAAAAQgACAEIAAgAAAAAAQgACAAIAgAAAAIIAQgCCAEAAgAAAAAIAAAAAAAIAggAAAAIAQgAAAEAAgAACAIAAQACCAAIAgAACAIAAQAACAEAAAAAAAAIAAgCCAAAAAAACAIAAQgCCAEIAAgBAAAAAgAAIAIAQCCAAEAAAAAAAIAAACCAAEAgggAAAIIAQCCCAEAAAgAAAAAAACAAAEAgAAAAAAAAQCACAEAggAAAAIAAQCCCAAAgAgAAAIAAQCAAAEAAAgBAAIIAQCACAAAAAgBAAIAAACCAAAAgggBAAIIAACAAAAAAAABAAIIAAAAAAEAAggAAAAIAACCAAEAggABAIAIAQCACAEAgAAAAIAIAAAAAAEAAgABAAAIAAACCAEAggAAAIIIAAACCAEAggAAAIAAAQCCCAEAAAgBAAIIAAAAAAAAgAAAAIIIAQAAAAAAgggAAAAIAQACAAAAgAABAAIAAQACAAAAgAgAAABAAAAAQgCAAAIAgABAEIAAAgAAAEAAAAAAEAAAAgCAAEIQAAACAAAAQACAAEIQAABAEIAAAhCAAEIAAAAAEAAAAACAAAIQAAACEAAAAAAAAEAQAABCEIAAQhCAAEAAgAACEIAAQBAAAAAAAAAAEIAAQgCAAAAAgAAAEIAAQgAAAAIAAABAEIAAQAAAAAAAgAAAEAAAAgCAAEAQgABCEAAAQACAAAAQAAACEIAAQgCAAEIQAABAAAAAAACAAAIQgABCEIAAQgAAAAAQgABCEIAAAgCAAAAAAAACEAAAABCAAEIAAABAAIAAQBAAAAIAAAAAAAAAAhAAAEIAgABAEAIAgAAAAICCAAAAAAIAAIIAAIACAAAAAAIAgIAAAIACAgAAgAIAAAICAAACAAAAgAIAgIICAACAAAAAggIAgAAAAAACAgAAAAAAgIIAAIAAAACAgAAAAIICAACCAgCAgAIAgAIAAICAAAAAgAIAgAICAAAAAgCAggAAgAAAAAACAACAggAAAAICAACAAgCAAAAAAIAAAICCAACAAgAAAAAAAIAAAgAAgAIAgIIAAIACAgAAAgAAgAAAAAAAAgAAggIAgAIAAACAAAAAAgIAgIICAAAAAgCAgAAAgIACAAACAAAAggIAgAICAIAAAAAAggIAgIACAAAAAgAAggAAgIAAAQBAQAAAAAAAAEABAQBAQQAAQEEBAEABAAAAAAAAQAABAAAAAQBAQQEAQEABAAABAQAAQQAAQEAAAABBAAAAAQEAAAABAABAAQAAQAEAQAABAEAAAABAQAAAQEEBAABBAABAAQAAAEEAAABBAABAAAAAAAEBAAABAQBAAAAAAEAAAEABAQBAQQAAAAAAAEBAAQBAQAAAAEAAAABAAQAAAQAAQEAAAEAAAQBAAQAAAEABAAABAAAAAQEAAEEBAEABAQBAQQAAQAAAAEBBAQAAQQAAAEEBAAABAQBAAAEAQEEBAAAAAQAAQAEAAEAAAAABAABAAAEAQAAAAAABAABAQUAAAAZAAkC0SwAAAgAAAAcAAACYS4AAAQAAAAYAIABri8AAAcAAAAbAIABBjEAAAMAAAAXAAABcDIAAAwAAAAWAAABrTMAAAYAAAAaAAABuzQAAAIAAAAVAOAAFzYAAAsAAAAUAOAARFUAAAEAAAATAMAAeFYAAAoAAAASAMAAnlcAQbCHAguhAf///////////v///////////////////wAAAAAAAAAAsblGwezeuP5JMCRyq+mnD+eAnOUZBSFkAAAAAAAAAAASEP+C/Qr/9ACIoUPrIL989pAwsA6ojRgAAAAAAAAAABFIeR6hd/lz1c0ka+0REGN42sj/lSsZBwAAAAAAAAAAMSjStLHJaxQ2+N6Z////////////////AAAAAAAAAAABAEHciAILoAH/////////////////////AAAAALT/VSNDOQsnuti/17ewRFBWMkH1q7MEDIUKBbQAAAAAIR1cEdaAMjQiEcJW08EDSrmQEzJ/v7RrvQwOtwAAAAA0fgCFmYHVRGRHB1qgdUPN5t8iTPsj97WIYze9AAAAAD0qXFxFKd0TPvC44KIW//////////////////8AAAAA////////////////AEGIigILugMBAAAA/////0tg0ic+PM479rBTzLAGHWW8hph2Vb3rs+eTOqrYNcZalsKY2EU5ofSgM+stgX0Dd/JApGPl5rz4R0Is4fLRF2v1Ub83aEC2y85eMWtXM84rFp4PfErr546bfxr+4kLjT1ElY/zCyrnzhJ4Xp6365rz//////////wAAAAD//////////wAAAAAAAAAA//////7/////////////////////////////////////////7yrs0+3IhSqd0S6KjTlWxlqHE1CPCBQDEkGB/m6cHRgZLfjjawWOmOTnPuKnLzGztwp2cjheVDpsKVW/XfICVTgqVILgQfdZmJuni2I7HW50rSDzHsexjjcFi74iyoeqXw7qkHwdQ3qdgX4dzrFgCsC48LUTMdrpfBSaKL0d9Pgp3JKSv5ieXW8sJpZK3hc2cynFzGoZ7Ox6p7BIsg0aWN8tN/SBTWPH//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8BAEHRjQILQD9Qa9QfRe/xNCw9iN9zNQe/sTu9wFIWe5N+7FE5GVbhCfGOkYm0uPMVs5lbctqi7kCFtqAhmpIfmhyOYbk+lVEAQaCOAgtBZr3lwjF+fvmbQmqFwbNIM96o/6InwR3+KFnn73deS6G6PU1rYK8o+CG1PwU5gWScQrSVI2bLPp7N6QQEtwaOhcYAQfCOAgtCUGbRn3aUvohAwnKihnA8NWEHrT8BuVDFQCb0Xply7pcsZj4nF72vF2hEm1dJRPWY2Rt9LLRfilwEwDuaeGopORgBAEHAjwILQglkOJEet2+7rkecibjJtTvQpQn3SAHMf2uWL7+Dh4ZR+v//////////////////////////////////////////AQBBkJACC6EBN+7///7/////////////////////////AAAAAAMAAAB9bODqsdGlHTT0t4ACfbAmrulXwA7xT9sAAAAAAAAAAJ0vXtmIqoJANIa+FdBjQYSnKFacbS8vmwAAAAAAAAAAjf3edGpGaQ8X/PIm/v//////////////AAAAAAAAAABt5f///v//////////////////////////////AAAAAAUAQcCRAgtPXKS3tg5lfg+pdXDk6WekaaEo/DDfmfBNM1tFoQAAAAClYW1V20vK4lm9sMD3GeP31vvKgkI0un/tnwh+AAAAAPexn3ZxqfDKhGHs0ujcAQBBnJICCykBAAAAL/z///7///////////////////////////////////8AAAAABwBB0JICC8EImBf4FluB8lnZKM4t2/ybAgcLh86VYqBVrLvc+X5mvnm41BD7j9BHnBlUhaZItBf9qAgRDvz7pF1lxKMmd9o6SEFBNtCMXtK/O6BIr+bcrrr+////////////////////d1NuHx1IEyAoICbVI/Y7bnKNg52QCmY+vKnuodtX+6nZtTDzREtK6Wxc3CbBVYD75/96QTB19u5XMCz8dQlafbYHjP8Y3MxrzuH3XCkWhJW/fNe72bUw80RLSulsXNwmYjLOmr1TRDrCI73j4Sfeua+3gfwvSEssy1d+y7mu0ouXaQQvx1QdXFSO7S0TRXfCyR1hFBpG+Jf9xNrDNfh+VKdWSJeCDh6Q96ZhtaN6OYxxjYOdkApmPryp7qHbV/upU+wHMRMAR4dxGh2QKafTrCMRt38Z2rEStFZU7QlxLxXfQeZQfm9dDyhtOKOCHrmMJijOIt3HqATr1DpQSoGlig/5kbrvZZEThyeyT46ivsKgrwXOCghyPAwVjD3GgsN7EUxQ+paGtzqUyduVAjm0fNVi6z6lDoguptLcB+F9ty98RPAWVLU5iyYoziLdx6gEHq/UR+Kyh++qRtY2NOAm6OgQvQz+yn/b40/xfuejR4hrP8G3gTqmov9Fz2jwZBwdFVM8JkEDgkIRgZF3IUZGDigpkflPBZzhZFjs/ikLt2JS1c+VjuuxXKTC+SB1Hb6KZWUE6QIyiDsQw39rr7Y6z6clBKxsbhYfs1ZU7QlxLxXfQeZQfm9dDyhtOKOCHrmM80g6WFZgqiiFxoItL/+BKOaAo+Yqoc2uQmjGmwCbTX1xCDNwypxj1g7SybOzjTDLB/zJM67m1D+LxOnbuJ3dqsqU/HdNrMHnucfyK6cXEX+1yJqLyfEuCqE6JahaXe0tvGOY6spBNKgQFvk9jd3LlMVMI6xFcTLiiTtgizGjMHgj9xaAY70JKN3lul63UECYZz4I3MqU/HdNrMHnucfyK6cXEX+1yJqLyfEuCqE6JahaXe0tvGOY6spBNKgQFvk9Ivi5vAkiNYtoXmpAR1BtfF99uZN7aNFQjdTQ4ngfO/+OCdD07mI7tMEW2bVwn+2Fk2pMnC4yIVpk2S7YveSugZII2DoPHs14BlTwqC8rytGuYyeK2EvKW15IX0pJ3tyyEYEfiFvFAKAae6UkAPcJ8v0ieM+pv+rA7DJjVl043n1pAKmcgpaHtd3aXQiB07EdRxCsfxlhhkEZJqlMQVw+VXAIM3DKnGPWDtLJs7ONMMsH/MkzrubUP4vE6du4nd2qAAAAAAAAAAAgHAAAAAAAAEA4AAAAAAAAYCQAAAAAAACAcAAAAAAAAKBsAAAAAAAAwEgAAAAAAADgVAAAAAAAAADhAAAAAAAAIP0AAAAAAABA2QAAAAAAAGDFAAAAAAAAgJEAAAAAAACgjQAAAAAAAMCpAAAAAAAA4LUAAAAAAADEAEGgmwILhweYL4pCkUQ3cc/7wLWl27XpW8JWOfER8Vmkgj+S1V4cq5iqB9gBW4MSvoUxJMN9DFV0Xb5y/rHegKcG3Jt08ZvBwWmb5IZHvu/GncEPzKEMJG8s6S2qhHRK3KmwXNqI+XZSUT6YbcYxqMgnA7DHf1m/8wvgxkeRp9VRY8oGZykpFIUKtyc4IRsu/G0sTRMNOFNUcwpluwpqdi7JwoGFLHKSoei/oktmGqhwi0vCo1FsxxnoktEkBpnWhTUO9HCgahAWwaQZCGw3Hkx3SCe1vLA0swwcOUqq2E5Pypxb828uaO6Cj3RvY6V4FHjIhAgCx4z6/76Q62xQpPej+b7yeHHGIq4o15gvikLNZe8jkUQ3cS87TezP+8C1vNuJgaXbtek4tUjzW8JWORnQBbbxEfFZm08Zr6SCP5IYgW3a1V4cq0ICA6OYqgfYvm9wRQFbgxKMsuROvoUxJOK0/9XDfQxVb4l78nRdvnKxlhY7/rHegDUSxyWnBtyblCZpz3Txm8HSSvGewWmb5OMlTziGR77vtdWMi8adwQ9lnKx3zKEMJHUCK1lvLOktg+SmbqqEdErU+0G93KmwXLVTEYPaiPl2q99m7lJRPpgQMrQtbcYxqD8h+5jIJwOw5A7vvsd/Wb/Cj6g98wvgxiWnCpNHkafVb4ID4FFjygZwbg4KZykpFPwv0kaFCrcnJskmXDghGy7tKsRa/G0sTd+zlZ0TDThT3mOvi1RzCmWosnc8uwpqduau7UcuycKBOzWCFIUscpJkA/FMoei/ogEwQrxLZhqokZf40HCLS8IwvlQGo1FsxxhS79YZ6JLREKllVSQGmdYqIHFXhTUO9LjRuzJwoGoQyNDSuBbBpBlTq0FRCGw3Hpnrjt9Md0gnqEib4bW8sDRjWsnFswwcOcuKQeNKqthOc+Njd0/KnFujuLLW828uaPyy713ugo90YC8XQ29jpXhyq/ChFHjIhOw5ZBoIAseMKB5jI/r/vpDpvYLe62xQpBV5xrL3o/m+K1Ny4/J4ccacYSbqzj4nygfCwCHHuIbRHuvgzdZ92up40W7uf0999bpvF3KqZ/AGppjIosV9YwquDfm+BJg/ERtHHBM1C3EbhH0EI/V32yiTJMdAe6vKMry+yRUKvp48TA0QnMRnHUO2Qj7LvtTFTCp+ZfycKX9Z7PrWOqtvy18XWEdKjBlEbHJ3YQByd2EAQcyiAgsByQBB86ICCwX//////wBBuKMCC1ktKyAgIDBYMHgAKG51bGwpAAAAAAAAAAARAAoAERERAAAAAAUAAAAAAAAJAAAAAAsAAAAAAAAAABEADwoREREDCgcAAQAJCwsAAAkGCwAACwAGEQAAABEREQBBoaQCCyELAAAAAAAAAAARAAoKERERAAoAAAIACQsAAAAJAAsAAAsAQdukAgsBDABB56QCCxUMAAAAAAwAAAAACQwAAAAAAAwAAAwAQZWlAgsBDgBBoaUCCxUNAAAABA0AAAAACQ4AAAAAAA4AAA4AQc+lAgsBEABB26UCCx4PAAAAAA8AAAAACRAAAAAAABAAABAAABIAAAASEhIAQZKmAgsOEgAAABISEgAAAAAAAAkAQcOmAgsBCwBBz6YCCxUKAAAAAAoAAAAACQsAAAAAAAsAAAsAQf2mAgsBDABBiacCC+0CDAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAwMTIzNDU2Nzg5QUJDREVGLTBYKzBYIDBYLTB4KzB4IDB4AGluZgBJTkYAbmFuAE5BTgAuAAAAABDHAAAAAAAA/////////////////////////////////////////////////////////////////wABAgMEBQYHCAn/////////CgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiP///////8KCwwNDg8QERITFBUWFxgZGhscHR4fICEiI/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAQIEBwMGBQBpbmZpbml0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AAAMxAAA2gEAAO4BAADcAQAA3QEAAO8BAEGIjAMLGQEAAADJEQAAAQAAAJMaAAABAAAA0QMAAAEAQdSNAwsCRO4AQZCOAwsBBQBBnI4DCwHMAEG0jgMLDsYAAADNAAAAaO4AAAAEAEHMjgMLAQEAQduOAwsFCv////8AQaCPAwsCEMcAjckNBG5hbWUBhMkNjwwADV9fYXNzZXJ0X2ZhaWwBGF9fY3hhX2FsbG9jYXRlX2V4Y2VwdGlvbgILX19jeGFfdGhyb3cDDGdldHRpbWVvZmRheQQMX19zeXNjYWxsMjIxBQ9fX3dhc2lfZmRfY2xvc2UGCl9fc3lzY2FsbDUHD19fd2FzaV9mZF93cml0ZQgLX19zeXNjYWxsNTQJDl9fd2FzaV9mZF9yZWFkCgVhYm9ydAsYX193YXNpX2Vudmlyb25fc2l6ZXNfZ2V0DBJfX3dhc2lfZW52aXJvbl9nZXQNCl9fbWFwX2ZpbGUOC19fc3lzY2FsbDkxDwpzdHJmdGltZV9sEBZlbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwERVlbXNjcmlwdGVuX21lbWNweV9iaWcSC3NldFRlbXBSZXQwExpsZWdhbGltcG9ydCRfX3dhc2lfZmRfc2VlaxQRX193YXNtX2NhbGxfY3RvcnMVF19fY3h4X2dsb2JhbF9hcnJheV9kdG9yFsYCc3RkOjpfXzI6OnF1ZXVlPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjpkZXF1ZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+ID46OnF1ZXVlKCkX3QFzdGQ6Ol9fMjo6ZGVxdWU8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6ZGVxdWUoKRjHAnN0ZDo6X18yOjpxdWV1ZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6ZGVxdWU8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPiA+Ojp+cXVldWUoKRneAXN0ZDo6X18yOjpkZXF1ZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+Ojp+ZGVxdWUoKRoZX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuNhsZX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuOBwUc2VydmVyX3Q6OnNlcnZlcl90KCkdFnNlc3Npb25fdDo6c2Vzc2lvbl90KCkeFXNlcnZlcl90Ojp+c2VydmVyX3QoKR8Xc2Vzc2lvbl90Ojp+c2Vzc2lvbl90KCkgGl9fY3h4X2dsb2JhbF9hcnJheV9kdG9yLjEwIXNzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46OnZlY3RvcigpIoEBc3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2U8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6X192ZWN0b3JfYmFzZSgpI3RzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46On52ZWN0b3IoKSSEAXN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6X19hbm5vdGF0ZV9kZWxldGUoKSBjb25zdCWCAXN0ZDo6X18yOjpfX3ZlY3Rvcl9iYXNlPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46On5fX3ZlY3Rvcl9iYXNlKCkmU3N0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpiZWdpbigpIGNvbnN0J1FzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6ZW5kKCkgY29uc3QolwFib29sIHN0ZDo6X18yOjpvcGVyYXRvciE9PHVuc2lnbmVkIGNoYXIgY29uc3QqPihzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhciBjb25zdCo+IGNvbnN0Jiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIgY29uc3QqPiBjb25zdCYpKT5zdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhciBjb25zdCo+OjpvcGVyYXRvciooKSBjb25zdCptc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fbWFrZV9pdGVyKHVuc2lnbmVkIGNoYXIgY29uc3QqKSBjb25zdCutAWJvb2wgc3RkOjpfXzI6Om9wZXJhdG9yPT08dW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGNoYXIgY29uc3QqPihzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhciBjb25zdCo+IGNvbnN0Jiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIgY29uc3QqPiBjb25zdCYpLDlzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhciBjb25zdCo+OjpvcGVyYXRvcisrKCktCGdldE5leHRJLg1tYWtlUHVibGljS2V5L4ABc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6YmFzaWNfc3RyaW5nPHN0ZDo6bnVsbHB0cl90PihjaGFyIGNvbnN0KikwU3N0ZDo6X18yOjpzaGFyZWRfcHRyPFdlYkFwaTo6RUNESD46Om9wZXJhdG9yPShzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxXZWJBcGk6OkVDREg+JiYpMTFzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxXZWJBcGk6OkVDREg+Ojp+c2hhcmVkX3B0cigpMpkBc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46OnZlY3RvcihzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYpM/MBc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBXZWJBcGk6OnRvQmFzZTY0PHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+ID4oc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4pNE9zdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6fnZlY3RvcigpNWRzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpjX3N0cigpIGNvbnN0NqQCc3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Ol9fcmVwLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Ol9fY29tcHJlc3NlZF9wYWlyPHN0ZDo6X18yOjpfX2RlZmF1bHRfaW5pdF90YWcsIHN0ZDo6X18yOjpfX2RlZmF1bHRfaW5pdF90YWc+KHN0ZDo6X18yOjpfX2RlZmF1bHRfaW5pdF90YWcmJiwgc3RkOjpfXzI6Ol9fZGVmYXVsdF9pbml0X3RhZyYmKTcwc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+OjpsZW5ndGgoY2hhciBjb25zdCopOKABc3RkOjpfXzI6OnJlbW92ZV9yZWZlcmVuY2U8c3RkOjpfXzI6OnNoYXJlZF9wdHI8V2ViQXBpOjpFQ0RIPiY+Ojp0eXBlJiYgc3RkOjpfXzI6Om1vdmU8c3RkOjpfXzI6OnNoYXJlZF9wdHI8V2ViQXBpOjpFQ0RIPiY+KHN0ZDo6X18yOjpzaGFyZWRfcHRyPFdlYkFwaTo6RUNESD4mKTlUc3RkOjpfXzI6OnNoYXJlZF9wdHI8V2ViQXBpOjpFQ0RIPjo6c2hhcmVkX3B0cihzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxXZWJBcGk6OkVDREg+JiYpOk1zdGQ6Ol9fMjo6c2hhcmVkX3B0cjxXZWJBcGk6OkVDREg+Ojpzd2FwKHN0ZDo6X18yOjpzaGFyZWRfcHRyPFdlYkFwaTo6RUNESD4mKTsxc3RkOjpfXzI6Ol9fc2hhcmVkX3dlYWtfY291bnQ6Ol9fcmVsZWFzZV9zaGFyZWQoKTyEAnN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gV2ViQXBpOjpCdWZmZXJDb252ZXJ0ZXI6OnRvQmFzZTY0PHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+ID4oc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4pPVxzdGQ6Ol9fMjo6X192ZWN0b3JfYmFzZTx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fYWxsb2MoKSBjb25zdD6RAXN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6c2VsZWN0X29uX2NvbnRhaW5lcl9jb3B5X2NvbnN0cnVjdGlvbihzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+IGNvbnN0Jik/gAFzdGQ6Ol9fMjo6X192ZWN0b3JfYmFzZTx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fdmVjdG9yX2Jhc2Uoc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiYmKUBSc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46OnNpemUoKSBjb25zdEFgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fdmFsbG9jYXRlKHVuc2lnbmVkIGxvbmcpQusBc3RkOjpfXzI6OmVuYWJsZV9pZjxfX2lzX2NwcDE3X2ZvcndhcmRfaXRlcmF0b3I8dW5zaWduZWQgY2hhcio+Ojp2YWx1ZSwgdm9pZD46OnR5cGUgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fY29uc3RydWN0X2F0X2VuZDx1bnNpZ25lZCBjaGFyKj4odW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nKUNfc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fYW5ub3RhdGVfZGVsZXRlKCkgY29uc3REXXN0ZDo6X18yOjpfX3ZlY3Rvcl9iYXNlPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6fl9fdmVjdG9yX2Jhc2UoKUVjc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6ZGF0YSgpIGNvbnN0RhVjcmVhdGVfY3J5cHRvX3Nlc3Npb25HfXN0ZDo6X18yOjplbmFibGVfaWY8IShpc19hcnJheTxzZXNzaW9uX3Q+Ojp2YWx1ZSksIHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPjo6dHlwZSBzdGQ6Ol9fMjo6bWFrZV9zaGFyZWQ8c2Vzc2lvbl90PigpSJwBc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjpwdXNoX2JhY2soc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiBjb25zdCYpSYYBc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPiA+OjphbGxvY2F0ZSh1bnNpZ25lZCBsb25nLCB2b2lkIGNvbnN0KilKjQJzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+ID4gPjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcihzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+ID4mLCB1bnNpZ25lZCBsb25nKUuwBHN0ZDo6X18yOjp1bmlxdWVfcHRyPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+LCBzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+ID4gPiA+Ojp1bmlxdWVfcHRyPHRydWUsIHZvaWQ+KHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+Kiwgc3RkOjpfXzI6Ol9fZGVwZW5kZW50X3R5cGU8c3RkOjpfXzI6Ol9fdW5pcXVlX3B0cl9kZWxldGVyX3NmaW5hZTxzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+ID4gPiA+LCB0cnVlPjo6X19nb29kX3J2YWxfcmVmX3R5cGUpTPMBc3RkOjpfXzI6OnVuaXF1ZV9wdHI8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4sIHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4gPiA+ID46OmdldCgpIGNvbnN0Td8Bc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+OjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4gPihzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+ID4gY29uc3QmKU6AAXN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+OjpfX3NoYXJlZF9wdHJfZW1wbGFjZShzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4pT1FzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPjo6Z2V0KClQ8QFzdGQ6Ol9fMjo6dW5pcXVlX3B0cjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPiwgc3RkOjpfXzI6Ol9fYWxsb2NhdG9yX2Rlc3RydWN0b3I8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPiA+ID4gPjo6cmVsZWFzZSgpUY0Cc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+OjpfX2NyZWF0ZV93aXRoX2NvbnRyb2xfYmxvY2s8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPiA+KHNlc3Npb25fdCosIHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+KilS9QFzdGQ6Ol9fMjo6dW5pcXVlX3B0cjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPiwgc3RkOjpfXzI6Ol9fYWxsb2NhdG9yX2Rlc3RydWN0b3I8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPiA+ID4gPjo6fnVuaXF1ZV9wdHIoKVPWAXZvaWQgc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjpfX2NvbnN0cnVjdF9vbmVfYXRfZW5kPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gY29uc3QmPihzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+IGNvbnN0JilU1QF2b2lkIHN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6X19wdXNoX2JhY2tfc2xvd19wYXRoPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gY29uc3QmPihzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+IGNvbnN0JilVFWRlbGV0ZV9jcnlwdG9fc2Vzc2lvblavAnN0ZDo6X18yOjpfX3dyYXBfaXRlcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+IGNvbnN0Kj46Ol9fd3JhcF9pdGVyPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qPihzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Pio+IGNvbnN0Jiwgc3RkOjpfXzI6OmVuYWJsZV9pZjxpc19jb252ZXJ0aWJsZTxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+Kiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiBjb25zdCo+Ojp2YWx1ZSwgdm9pZD46OnR5cGUqKVevAXN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6ZXJhc2Uoc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gY29uc3QqPilYeXN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6Y2JlZ2luKCkgY29uc3RZlAJkZWNsdHlwZSgoZnAuYmFzZSgpKSAtIChmcDAuYmFzZSgpKSkgc3RkOjpfXzI6Om9wZXJhdG9yLTxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+IGNvbnN0Kiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiBjb25zdCo+KHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+IGNvbnN0Kj4gY29uc3QmLCBzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiBjb25zdCo+IGNvbnN0Jila2QFzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+KiBzdGQ6Ol9fMjo6bW92ZTxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+Kiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Pio+KHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+Kiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiopW54Bc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjpfX2Rlc3RydWN0X2F0X2VuZChzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+KilcqAFzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46Ol9faW52YWxpZGF0ZV9pdGVyYXRvcnNfcGFzdChzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+KildDHNlbmRfbWVzc2FnZV6hA3N0ZDo6X18yOjpxdWV1ZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6ZGVxdWU8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPiA+OjpwdXNoKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmKV+9AnN0ZDo6X18yOjpkZXF1ZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpwdXNoX2JhY2soc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYpYBFjb21wbGV0ZVNlc3Npb25KU2Flc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gV2ViQXBpOjpmcm9tQmFzZTY0PGNoYXIqPihjaGFyKili7QFjb21wbGV0ZVNlc3Npb24oc2Vzc2lvbl90Kiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4sIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+LCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiljYVdlYkFwaTo6RUNESDo6Y29tcHV0ZVNlY3JldChzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPilkXFdlYkFwaTo6Q2lwaGVyOjp1cGRhdGUoc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4pZZcBc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Om9wZXJhdG9yPShzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiYmKWZfV2ViQXBpOjpDaXBoZXI6OmZpbmFsaXplKHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+KilngQFXZWJBcGk6OkJ1ZmZlckNvbnZlcnRlcjo6ZnJvbUJhc2U2NChzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JiloDWlzX2JpZ19lbmRpYW5pEHRvX2xpdHRsZV9lbmRpYW5qCWVuY3J5cHRKU2vEAWVuY3J5cHQoc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0Jiwgc2Vzc2lvbl90IGNvbnN0KilsTHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpkYXRhKCltZHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46OmJlZ2luKCkgY29uc3RuYnN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46OmVuZCgpIGNvbnN0b5cDc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46OnZlY3RvcjxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8Y2hhciBjb25zdCo+ID4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIgY29uc3QqPiwgc3RkOjpfXzI6OmVuYWJsZV9pZjwoX19pc19jcHAxN19mb3J3YXJkX2l0ZXJhdG9yPHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyIGNvbnN0Kj4gPjo6dmFsdWUpICYmIChpc19jb25zdHJ1Y3RpYmxlPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjppdGVyYXRvcl90cmFpdHM8c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIgY29uc3QqPiA+OjpyZWZlcmVuY2U+Ojp2YWx1ZSksIHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyIGNvbnN0Kj4gPjo6dHlwZSlwowFXZWJBcGk6OkNpcGhlcjo6dXBkYXRlKHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+LCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiopcQlkZWNyeXB0SlNyZXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46OmJhc2ljX3N0cmluZygpc2dzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpvcGVyYXRvcis9KGNoYXIpdGZkZWNyeXB0KHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Kiwgc2Vzc2lvbl90IGNvbnN0Kil1ZXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Omxlbmd0aCgpIGNvbnN0dl9zdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX3plcm8oKXdmc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19nZXRfcG9pbnRlcigpeDBzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8Y2hhcio+OjpfX3dyYXBfaXRlcihjaGFyKil5Y3N0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46OnNpemUoKSBjb25zdHq3AXN0ZDo6X18yOjppdGVyYXRvcl90cmFpdHM8c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIqPiA+OjpkaWZmZXJlbmNlX3R5cGUgc3RkOjpfXzI6OmRpc3RhbmNlPHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyKj4gPihzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8Y2hhcio+LCBzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8Y2hhcio+KXulAnN0ZDo6X18yOjplbmFibGVfaWY8X19pc19jcHAxN19mb3J3YXJkX2l0ZXJhdG9yPHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyKj4gPjo6dmFsdWUsIHZvaWQ+Ojp0eXBlIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpfX2NvbnN0cnVjdF9hdF9lbmQ8c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIqPiA+KHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyKj4sIHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyKj4sIHVuc2lnbmVkIGxvbmcpfEJzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhciBjb25zdCo+OjpvcGVyYXRvcisobG9uZykgY29uc3R98wFzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IFdlYkFwaTo6dG9TdHJpbmc8c3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gPihzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPil+PXN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyIGNvbnN0Kj46Om9wZXJhdG9yKz0obG9uZyl/+QNzdGQ6Ol9fMjo6ZW5hYmxlX2lmPChfX2lzX2NwcDE3X2ZvcndhcmRfaXRlcmF0b3I8c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiA+Ojp2YWx1ZSkgJiYgKGlzX2NvbnN0cnVjdGlibGU8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6Oml0ZXJhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+ID46OnJlZmVyZW5jZT46OnZhbHVlKSwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiA+Ojp0eXBlIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjppbnNlcnQ8c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiA+KHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyIGNvbnN0Kj4sIHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyKj4sIHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyKj4pgAGEAnN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gV2ViQXBpOjpCdWZmZXJDb252ZXJ0ZXI6OnRvU3RyaW5nPHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+ID4oc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4pgQHDAXN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpfX21vdmVfYXNzaWduKHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+Jiwgc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIHRydWU+KYIB7AFzdGQ6Ol9fMjo6X19kZXF1ZV9iYXNlPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46On5fX2RlcXVlX2Jhc2UoKYMB5AFzdGQ6Ol9fMjo6X19kZXF1ZV9iYXNlPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46OmNsZWFyKCmEAecBc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiA+OjpiZWdpbigphQHlAXN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4gPjo6ZW5kKCmGAeYBc3RkOjpfXzI6Ol9fZGVxdWVfYmFzZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpfX2FsbG9jKCmHAekCc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6ZGVhbGxvY2F0ZShzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCB1bnNpZ25lZCBsb25nKYgB8QFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+ID46On5fX3NwbGl0X2J1ZmZlcigpiQHkAXN0ZDo6X18yOjpfX2RlcXVlX2Jhc2U8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6YmVnaW4oKYoB4gFzdGQ6Ol9fMjo6X19kZXF1ZV9iYXNlPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46OmVuZCgpiwGuBnN0ZDo6X18yOjpvcGVyYXRvciE9KHN0ZDo6X18yOjpfX2RlcXVlX2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqLCBsb25nLCAwbD4gY29uc3QmLCBzdGQ6Ol9fMjo6X19kZXF1ZV9pdGVyYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiwgbG9uZywgMGw+IGNvbnN0JimMAbQDdm9pZCBzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpkZXN0cm95PHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPihzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKY0BkgNzdGQ6Ol9fMjo6X19kZXF1ZV9pdGVyYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiwgbG9uZywgMGw+OjpvcGVyYXRvcisrKCmOAewBc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiA+OjpzaXplKCkgY29uc3SPAesBc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiA+Ojpwb3BfZnJvbnQoKZAB3gFzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPjo6ZGVhbGxvY2F0ZShzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiwgdW5zaWduZWQgbG9uZymRAaIBc3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyPHVuc2lnbmVkIGxvbmcsIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46OnNlY29uZCgpkgHnAXN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4gPjo6Y2xlYXIoKZMB6QFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+ID46Ol9fYWxsb2MoKZQB8AFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+ID46OmNhcGFjaXR5KCkgY29uc3SVAeoCc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4gPjo6ZGVhbGxvY2F0ZShzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiwgdW5zaWduZWQgbG9uZymWAe0Bc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiA+OjplbXB0eSgpIGNvbnN0lwGuBnN0ZDo6X18yOjpvcGVyYXRvcj09KHN0ZDo6X18yOjpfX2RlcXVlX2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqLCBsb25nLCAwbD4gY29uc3QmLCBzdGQ6Ol9fMjo6X19kZXF1ZV9pdGVyYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiwgbG9uZywgMGw+IGNvbnN0JimYAd8Ddm9pZCBzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpfX2Rlc3Ryb3k8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+KHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCB0cnVlPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4mLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KimZAcwCc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiA+OjpfX2Rlc3RydWN0X2F0X2JlZ2luKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKimaAcwBc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID46OmRlc3Ryb3koc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiopmwFCc3RkOjpfXzI6Ol9fbGliY3BwX2RlYWxsb2NhdGUodm9pZCosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcpnAFjc3RkOjpfXzI6Ol9EZWFsbG9jYXRlQ2FsbGVyOjpfX2RvX2RlYWxsb2NhdGVfaGFuZGxlX3NpemVfYWxpZ24odm9pZCosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcpnQFOc3RkOjpfXzI6Ol9EZWFsbG9jYXRlQ2FsbGVyOjpfX2RvX2RlYWxsb2NhdGVfaGFuZGxlX3NpemUodm9pZCosIHVuc2lnbmVkIGxvbmcpngEtc3RkOjpfXzI6Ol9EZWFsbG9jYXRlQ2FsbGVyOjpfX2RvX2NhbGwodm9pZCopnwHKAnN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4gPjo6X19kZXN0cnVjdF9hdF9lbmQoc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqKaAB3wFzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPjo6ZGVhbGxvY2F0ZShzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiosIHVuc2lnbmVkIGxvbmcpoQH0AnN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4gPjo6X19kZXN0cnVjdF9hdF9lbmQoc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqLCBzdGQ6Ol9fMjo6aW50ZWdyYWxfY29uc3RhbnQ8Ym9vbCwgZmFsc2U+KaIBtQN2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+ID46OmRlc3Ryb3k8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+KHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqKaMB4AN2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+ID46Ol9fZGVzdHJveTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4oc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIHRydWU+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKimkATBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxXZWJBcGk6OkVDREg+OjpzaGFyZWRfcHRyKCmlAcMBc3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyPHVuc2lnbmVkIGNoYXIqLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fY29tcHJlc3NlZF9wYWlyPHN0ZDo6bnVsbHB0cl90LCBzdGQ6Ol9fMjo6X19kZWZhdWx0X2luaXRfdGFnPihzdGQ6Om51bGxwdHJfdCYmLCBzdGQ6Ol9fMjo6X19kZWZhdWx0X2luaXRfdGFnJiYppgF6c3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyX2VsZW08dW5zaWduZWQgY2hhciosIDAsIGZhbHNlPjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxzdGQ6Om51bGxwdHJfdCwgdm9pZD4oc3RkOjpudWxscHRyX3QmJimnAYMBc3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyX2VsZW08c3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiwgMSwgdHJ1ZT46Ol9fY29tcHJlc3NlZF9wYWlyX2VsZW0oc3RkOjpfXzI6Ol9fZGVmYXVsdF9pbml0X3RhZymoAcABZGVjbHR5cGUoKGZwLmJhc2UoKSkgLSAoZnAwLmJhc2UoKSkpIHN0ZDo6X18yOjpvcGVyYXRvci08dW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGNoYXIqPihzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhciBjb25zdCo+IGNvbnN0Jiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiBjb25zdCYpqQG6AXZvaWQgc3RkOjpfXzI6OmFkdmFuY2U8c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiA+KHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyKj4mLCBzdGQ6Ol9fMjo6aXRlcmF0b3JfdHJhaXRzPHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyKj4gPjo6ZGlmZmVyZW5jZV90eXBlKaoBggFzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19tb3ZlX3JhbmdlKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgY2hhciopqwGyAXVuc2lnbmVkIGNoYXIqIHN0ZDo6X18yOjpjb3B5PHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyKj4sIHVuc2lnbmVkIGNoYXIqPihzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+LCBzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+LCB1bnNpZ25lZCBjaGFyKimsAWZzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19yZWNvbW1lbmQodW5zaWduZWQgbG9uZykgY29uc3StAZ8Bc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mPjo6X19zcGxpdF9idWZmZXIodW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiYprgHCAnN0ZDo6X18yOjplbmFibGVfaWY8X19pc19jcHAxN19mb3J3YXJkX2l0ZXJhdG9yPHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyKj4gPjo6dmFsdWUsIHZvaWQ+Ojp0eXBlIHN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+Jj46Ol9fY29uc3RydWN0X2F0X2VuZDxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+ID4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPimvAb8Bc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fc3dhcF9vdXRfY2lyY3VsYXJfYnVmZmVyKHN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+Jj4mLCB1bnNpZ25lZCBjaGFyKimwAV9zdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiY+Ojp+X19zcGxpdF9idWZmZXIoKbEBgwJzdGQ6Ol9fMjo6aXRlcmF0b3JfdHJhaXRzPHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyKj4gPjo6ZGlmZmVyZW5jZV90eXBlIHN0ZDo6X18yOjpfX2Rpc3RhbmNlPHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyKj4gPihzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+LCBzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+LCBzdGQ6Ol9fMjo6cmFuZG9tX2FjY2Vzc19pdGVyYXRvcl90YWcpsgHiAXZvaWQgc3RkOjpfXzI6Ol9fYWR2YW5jZTxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+ID4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiYsIHN0ZDo6X18yOjppdGVyYXRvcl90cmFpdHM8c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiA+OjpkaWZmZXJlbmNlX3R5cGUsIHN0ZDo6X18yOjpyYW5kb21fYWNjZXNzX2l0ZXJhdG9yX3RhZymzAcgBc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9Db25zdHJ1Y3RUcmFuc2FjdGlvbjo6X0NvbnN0cnVjdFRyYW5zYWN0aW9uKHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+JiwgdW5zaWduZWQgbG9uZym0AZoCdm9pZCBzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fY29uc3RydWN0X3JhbmdlX2ZvcndhcmQ8c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiwgdW5zaWduZWQgY2hhcio+KHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mLCBzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+LCBzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+LCB1bnNpZ25lZCBjaGFyKiYptQF1c3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9Db25zdHJ1Y3RUcmFuc2FjdGlvbjo6fl9Db25zdHJ1Y3RUcmFuc2FjdGlvbigptgGzAXZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+Ojpjb25zdHJ1Y3Q8dW5zaWduZWQgY2hhciwgdW5zaWduZWQgY2hhcj4oc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiYsIHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBjaGFyJiYptwF2dW5zaWduZWQgY2hhciogc3RkOjpfXzI6Om1vdmVfYmFja3dhcmQ8dW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGNoYXIqPih1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGNoYXIqKbgBqwFzdGQ6Ol9fMjo6ZW5hYmxlX2lmPGlzX3RyaXZpYWxseV9jb3B5X2Fzc2lnbmFibGU8dW5zaWduZWQgY2hhcj46OnZhbHVlLCB1bnNpZ25lZCBjaGFyKj46OnR5cGUgc3RkOjpfXzI6Ol9fdW53cmFwX2l0ZXI8dW5zaWduZWQgY2hhcj4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPim5AY4Cc3RkOjpfXzI6OmVuYWJsZV9pZjwoaXNfc2FtZTxzdGQ6Ol9fMjo6cmVtb3ZlX2NvbnN0PHVuc2lnbmVkIGNoYXI+Ojp0eXBlLCB1bnNpZ25lZCBjaGFyPjo6dmFsdWUpICYmIChpc190cml2aWFsbHlfY29weV9hc3NpZ25hYmxlPHVuc2lnbmVkIGNoYXI+Ojp2YWx1ZSksIHVuc2lnbmVkIGNoYXIqPjo6dHlwZSBzdGQ6Ol9fMjo6X19jb3B5PHVuc2lnbmVkIGNoYXIsIHVuc2lnbmVkIGNoYXI+KHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgY2hhciopugFWc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Om1heF9zaXplKCkgY29uc3S7AVZzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6Y2FwYWNpdHkoKSBjb25zdLwBXXVuc2lnbmVkIGxvbmcgY29uc3QmIHN0ZDo6X18yOjptYXg8dW5zaWduZWQgbG9uZz4odW5zaWduZWQgbG9uZyBjb25zdCYsIHVuc2lnbmVkIGxvbmcgY29uc3QmKb0BzwFzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXI8dW5zaWduZWQgY2hhciosIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mPjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpudWxscHRyX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mPihzdGQ6Om51bGxwdHJfdCYmLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+Jim+AVdzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiY+OjpfX2FsbG9jKCm/AX1zdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46OmFsbG9jYXRlKHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mLCB1bnNpZ25lZCBsb25nKcABmgFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiY+OjpfQ29uc3RydWN0VHJhbnNhY3Rpb246Ol9Db25zdHJ1Y3RUcmFuc2FjdGlvbih1bnNpZ25lZCBjaGFyKiosIHVuc2lnbmVkIGxvbmcpwQF9c3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mPjo6X0NvbnN0cnVjdFRyYW5zYWN0aW9uOjp+X0NvbnN0cnVjdFRyYW5zYWN0aW9uKCnCAY8Dc3RkOjpfXzI6OmVuYWJsZV9pZjwoKHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCB0cnVlPjo6dmFsdWUpIHx8ICghKF9faGFzX2NvbnN0cnVjdDxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+LCBib29sKiwgYm9vbD46OnZhbHVlKSkpICYmIChpc190cml2aWFsbHlfbW92ZV9jb25zdHJ1Y3RpYmxlPGJvb2w+Ojp2YWx1ZSksIHZvaWQ+Ojp0eXBlIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19jb25zdHJ1Y3RfYmFja3dhcmRfd2l0aF9leGNlcHRpb25fZ3VhcmFudGVlczx1bnNpZ25lZCBjaGFyPihzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+JiwgYm9vbCosIGJvb2wqLCBib29sKiYpwwGOA3N0ZDo6X18yOjplbmFibGVfaWY8KChzdGQ6Ol9fMjo6aW50ZWdyYWxfY29uc3RhbnQ8Ym9vbCwgdHJ1ZT46OnZhbHVlKSB8fCAoIShfX2hhc19jb25zdHJ1Y3Q8c3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiwgYm9vbCosIGJvb2w+Ojp2YWx1ZSkpKSAmJiAoaXNfdHJpdmlhbGx5X21vdmVfY29uc3RydWN0aWJsZTxib29sPjo6dmFsdWUpLCB2b2lkPjo6dHlwZSBzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fY29uc3RydWN0X2ZvcndhcmRfd2l0aF9leGNlcHRpb25fZ3VhcmFudGVlczx1bnNpZ25lZCBjaGFyPihzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+JiwgYm9vbCosIGJvb2wqLCBib29sKiYpxAG/AXN0ZDo6X18yOjplbmFibGVfaWY8KGlzX21vdmVfY29uc3RydWN0aWJsZTx1bnNpZ25lZCBjaGFyKj46OnZhbHVlKSAmJiAoaXNfbW92ZV9hc3NpZ25hYmxlPHVuc2lnbmVkIGNoYXIqPjo6dmFsdWUpLCB2b2lkPjo6dHlwZSBzdGQ6Ol9fMjo6c3dhcDx1bnNpZ25lZCBjaGFyKj4odW5zaWduZWQgY2hhciomLCB1bnNpZ25lZCBjaGFyKiYpxQFpc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fYW5ub3RhdGVfbmV3KHVuc2lnbmVkIGxvbmcpIGNvbnN0xgFic3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9faW52YWxpZGF0ZV9hbGxfaXRlcmF0b3JzKCnHAVVzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiY+OjpjbGVhcigpyAFec3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mPjo6Y2FwYWNpdHkoKSBjb25zdMkBjwFzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46OmRlYWxsb2NhdGUoc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiYsIHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nKcoB3gF2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19jb25zdHJ1Y3Q8dW5zaWduZWQgY2hhciwgdW5zaWduZWQgY2hhciY+KHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCB0cnVlPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiYsIHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBjaGFyJinLAXF2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj46OmNvbnN0cnVjdDx1bnNpZ25lZCBjaGFyLCB1bnNpZ25lZCBjaGFyJj4odW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGNoYXImKcwBlwJzdGQ6Ol9fMjo6ZW5hYmxlX2lmPChpc19zYW1lPHN0ZDo6X18yOjpyZW1vdmVfY29uc3Q8dW5zaWduZWQgY2hhcj46OnR5cGUsIHVuc2lnbmVkIGNoYXI+Ojp2YWx1ZSkgJiYgKGlzX3RyaXZpYWxseV9jb3B5X2Fzc2lnbmFibGU8dW5zaWduZWQgY2hhcj46OnZhbHVlKSwgdW5zaWduZWQgY2hhcio+Ojp0eXBlIHN0ZDo6X18yOjpfX21vdmVfYmFja3dhcmQ8dW5zaWduZWQgY2hhciwgdW5zaWduZWQgY2hhcj4odW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBjaGFyKinNAXRzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Om1heF9zaXplKHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gY29uc3QmKc4BXXVuc2lnbmVkIGxvbmcgY29uc3QmIHN0ZDo6X18yOjptaW48dW5zaWduZWQgbG9uZz4odW5zaWduZWQgbG9uZyBjb25zdCYsIHVuc2lnbmVkIGxvbmcgY29uc3QmKc8BXXN0ZDo6X18yOjpfX3ZlY3Rvcl9iYXNlPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6Y2FwYWNpdHkoKSBjb25zdNABvgF1bnNpZ25lZCBsb25nIGNvbnN0JiBzdGQ6Ol9fMjo6bWF4PHVuc2lnbmVkIGxvbmcsIHN0ZDo6X18yOjpfX2xlc3M8dW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZz4gPih1bnNpZ25lZCBsb25nIGNvbnN0JiwgdW5zaWduZWQgbG9uZyBjb25zdCYsIHN0ZDo6X18yOjpfX2xlc3M8dW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZz4p0QG+AXVuc2lnbmVkIGxvbmcgY29uc3QmIHN0ZDo6X18yOjptaW48dW5zaWduZWQgbG9uZywgc3RkOjpfXzI6Ol9fbGVzczx1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nPiA+KHVuc2lnbmVkIGxvbmcgY29uc3QmLCB1bnNpZ25lZCBsb25nIGNvbnN0Jiwgc3RkOjpfXzI6Ol9fbGVzczx1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nPinSAZ8Bc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpfX21heF9zaXplKHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCB0cnVlPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiBjb25zdCYp0wFsc3RkOjpfXzI6Ol9fbGVzczx1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nPjo6b3BlcmF0b3IoKSh1bnNpZ25lZCBsb25nIGNvbnN0JiwgdW5zaWduZWQgbG9uZyBjb25zdCYpIGNvbnN01AE0c3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPjo6bWF4X3NpemUoKSBjb25zdNUBtwFzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+JiwgMSwgZmFsc2U+OjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mLCB2b2lkPihzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+JinWAUhzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+OjphbGxvY2F0ZSh1bnNpZ25lZCBsb25nLCB2b2lkIGNvbnN0KinXAVpzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXI8dW5zaWduZWQgY2hhciosIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mPjo6c2Vjb25kKCnYAStzdGQ6Ol9fMjo6X190aHJvd19sZW5ndGhfZXJyb3IoY2hhciBjb25zdCop2QE5c3RkOjpfXzI6Ol9fbGliY3BwX2FsbG9jYXRlKHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcp2gEsc3RkOjpsZW5ndGhfZXJyb3I6Omxlbmd0aF9lcnJvcihjaGFyIGNvbnN0KinbAZ8Bc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fYW5ub3RhdGVfY29udGlndW91c19jb250YWluZXIodm9pZCBjb25zdCosIHZvaWQgY29uc3QqLCB2b2lkIGNvbnN0Kiwgdm9pZCBjb25zdCopIGNvbnN03AFvc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mPjo6X19kZXN0cnVjdF9hdF9lbmQodW5zaWduZWQgY2hhciop3QFNc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPjo6ZGVhbGxvY2F0ZSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZyneAZkBc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mPjo6X19kZXN0cnVjdF9hdF9lbmQodW5zaWduZWQgY2hhciosIHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCBmYWxzZT4p3wEsc3RkOjpfXzI6Ol9fc2hhcmVkX2NvdW50OjpfX3JlbGVhc2Vfc2hhcmVkKCngAT5sb25nIHN0ZDo6X18yOjpfX2xpYmNwcF9hdG9taWNfcmVmY291bnRfZGVjcmVtZW50PGxvbmc+KGxvbmcmKeEBVHN0ZDo6X18yOjpfX3ZlY3Rvcl9iYXNlPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6Y2xlYXIoKeIBbnN0ZDo6X18yOjpfX3ZlY3Rvcl9iYXNlPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19kZXN0cnVjdF9hdF9lbmQodW5zaWduZWQgY2hhciop4wFoc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19pc19sb25nKCkgY29uc3TkAW5zdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX2dldF9sb25nX3NpemUoKSBjb25zdOUBb3N0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Ol9fZ2V0X3Nob3J0X3NpemUoKSBjb25zdOYBvgFzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX3JlcCwgMCwgZmFsc2U+OjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtKHN0ZDo6X18yOjpfX2RlZmF1bHRfaW5pdF90YWcp5wF4c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6YmFzaWNfc3RyaW5nKHVuc2lnbmVkIGxvbmcsIGNoYXIp6AE4c3RkOjpfXzI6Ol9fc2hhcmVkX3dlYWtfY291bnQ6Ol9fc2hhcmVkX3dlYWtfY291bnQobG9uZynpAS5zdGQ6Ol9fMjo6X19zaGFyZWRfY291bnQ6Ol9fc2hhcmVkX2NvdW50KGxvbmcp6gEtc3RkOjpfXzI6Ol9fc2hhcmVkX3dlYWtfY291bnQ6Ol9fYWRkX3NoYXJlZCgp6wEoc3RkOjpfXzI6Ol9fc2hhcmVkX2NvdW50OjpfX2FkZF9zaGFyZWQoKewBPmxvbmcgc3RkOjpfXzI6Ol9fbGliY3BwX2F0b21pY19yZWZjb3VudF9pbmNyZW1lbnQ8bG9uZz4obG9uZyYp7QF2c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6b3BlcmF0b3JbXSh1bnNpZ25lZCBsb25nKSBjb25zdO4BcHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Om9wZXJhdG9yW10odW5zaWduZWQgbG9uZynvAbwBc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6YmFzaWNfc3RyaW5nKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mJinwAWxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX2dldF9zaG9ydF9wb2ludGVyKCnxARtzdGQ6OmV4Y2VwdGlvbjo6ZXhjZXB0aW9uKCnyAesBc3RkOjpfXzI6Ol9fZGVxdWVfYmFzZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpfX2RlcXVlX2Jhc2UoKfMB8AFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+ID46Ol9fc3BsaXRfYnVmZmVyKCn0AfUBc3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyPHVuc2lnbmVkIGxvbmcsIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46Ol9fY29tcHJlc3NlZF9wYWlyPGludCwgc3RkOjpfXzI6Ol9fZGVmYXVsdF9pbml0X3RhZz4oaW50JiYsIHN0ZDo6X18yOjpfX2RlZmF1bHRfaW5pdF90YWcmJin1AWNzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTx1bnNpZ25lZCBsb25nLCAwLCBmYWxzZT46Ol9fY29tcHJlc3NlZF9wYWlyX2VsZW08aW50LCB2b2lkPihpbnQmJin2AXtzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46OmNhcGFjaXR5KCkgY29uc3T3AXdzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46OnNpemUoKSBjb25zdPgBeXN0ZDo6X18yOjpfX3ZlY3Rvcl9iYXNlPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46OmNsZWFyKCn5AYIBc3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2U8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6Y2FwYWNpdHkoKSBjb25zdPoBxwFzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+Jiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiosIHVuc2lnbmVkIGxvbmcp+wGlAXN0ZDo6X18yOjpfX3ZlY3Rvcl9iYXNlPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46Ol9fZGVzdHJ1Y3RfYXRfZW5kKHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qKfwBcnN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qLCB1bnNpZ25lZCBsb25nKf0B3AF2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46OmRlc3Ryb3k8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+KHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+Jiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piop/gGHAnZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6X19kZXN0cm95PHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPihzdGQ6Ol9fMjo6aW50ZWdyYWxfY29uc3RhbnQ8Ym9vbCwgdHJ1ZT4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+Jiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piop/wFgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID46OmRlc3Ryb3koc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiopgAKWAnN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gV2ViQXBpOjpCdWZmZXJDb252ZXJ0ZXI6OnRvU3RyaW5nPHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+ID4oc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4sIFdlYkFwaTo6RW5jb2RpbmcpgQKuAWRlY2x0eXBlKGZwLmVuZCgpKSBzdGQ6Ol9fMjo6ZW5kPHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+ID4oc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4mKYIC8AFzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBXZWJBcGk6OkJ1ZmZlckNvbnZlcnRlcjo6dG9FbmNvZGluZzxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+ID4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiwgV2ViQXBpOjpFbmNvZGluZymDAmBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6cHVzaF9iYWNrKHVuc2lnbmVkIGNoYXImJimEAjVXZWJBcGk6OkJ1ZmZlckNvbnZlcnRlcjo6Z2V0RW5jb2RlcihXZWJBcGk6OkVuY29kaW5nKYUCtAFXZWJBcGk6OkJ1ZmZlckNvbnZlcnRlcjo6Y29udmVydCh1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZywgc3RkOjpfXzI6OmZ1bmN0aW9uPHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPimGAnpzdGQ6Ol9fMjo6ZnVuY3Rpb248dm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+Ojp+ZnVuY3Rpb24oKYcCgQF2b2lkIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpfX2NvbnN0cnVjdF9vbmVfYXRfZW5kPHVuc2lnbmVkIGNoYXI+KHVuc2lnbmVkIGNoYXImJimIAoABdm9pZCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19wdXNoX2JhY2tfc2xvd19wYXRoPHVuc2lnbmVkIGNoYXI+KHVuc2lnbmVkIGNoYXImJimJAtMBc3RkOjpfXzI6OmZ1bmN0aW9uPHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPjo6b3BlcmF0b3IoKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSBjb25zdIoCcXN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+Ojp2ZWN0b3IodW5zaWduZWQgbG9uZywgdW5zaWduZWQgY2hhciBjb25zdCYpiwK3AnN0ZDo6X18yOjpmdW5jdGlvbjx2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46OmZ1bmN0aW9uPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHZvaWQ+KGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZykpjAJzV2ViQXBpOjpCdWZmZXJDb252ZXJ0ZXI6OmhleGlmeSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKY0CuQJzdGQ6Ol9fMjo6ZnVuY3Rpb248dm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+OjpmdW5jdGlvbjx2b2lkICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgdm9pZD4odm9pZCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZykpjgJ1V2ViQXBpOjpCdWZmZXJDb252ZXJ0ZXI6Om1ha2VDb3B5KHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpjwKOAXN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX3ZhbHVlX2Z1bmM8dm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+Ojp+X192YWx1ZV9mdW5jKCmQAu0Bc3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fdmFsdWVfZnVuYzx2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46Om9wZXJhdG9yKCkodW5zaWduZWQgY2hhciomJiwgdW5zaWduZWQgbG9uZyYmLCB1bnNpZ25lZCBsb25nKiYmLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiYmLCB1bnNpZ25lZCBsb25nJiYpIGNvbnN0kQJ9c3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fY29uc3RydWN0X2F0X2VuZCh1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBjaGFyIGNvbnN0JimSAiVzdGQ6Ol9fMjo6X190aHJvd19iYWRfZnVuY3Rpb25fY2FsbCgpkwIwc3RkOjpfXzI6OmJhZF9mdW5jdGlvbl9jYWxsOjpiYWRfZnVuY3Rpb25fY2FsbCgplALNAnN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX3ZhbHVlX2Z1bmM8dm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+OjpfX3ZhbHVlX2Z1bmM8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgdm9pZD4oaW50ICgqJiYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpKZUCInN0ZDo6X18yOjpoZXgoc3RkOjpfXzI6Omlvc19iYXNlJimWAn1zdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpiYXNpY19zdHJpbmdzdHJlYW0odW5zaWduZWQgaW50KZcCdXN0ZDo6X18yOjpiYXNpY19vc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjpvcGVyYXRvcjw8KHN0ZDo6X18yOjppb3NfYmFzZSYgKCopKHN0ZDo6X18yOjppb3NfYmFzZSYpKZgCNnN0ZDo6X18yOjpfX2lvbV90NDxjaGFyPiBzdGQ6Ol9fMjo6c2V0ZmlsbDxjaGFyPihjaGFyKZkCzgFzdGQ6Ol9fMjo6YmFzaWNfb3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiYgc3RkOjpfXzI6Om9wZXJhdG9yPDw8c3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4oc3RkOjpfXzI6OmJhc2ljX29zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6X19pb21fdDQ8Y2hhcj4gY29uc3QmKZoCE3N0ZDo6X18yOjpzZXR3KGludCmbAs4Bc3RkOjpfXzI6OmJhc2ljX29zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mIHN0ZDo6X18yOjpvcGVyYXRvcjw8PGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+KHN0ZDo6X18yOjpiYXNpY19vc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Jiwgc3RkOjpfXzI6Ol9faW9tX3Q2IGNvbnN0JimcAmhzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpzdHIoKSBjb25zdJ0CcnN0ZDo6X18yOjpiYXNpY19zdHJpbmdzdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46On5iYXNpY19zdHJpbmdzdHJlYW0oKZ4CzwJzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X192YWx1ZV9mdW5jPHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPjo6X192YWx1ZV9mdW5jPHZvaWQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCB2b2lkPih2b2lkICgqJiYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpKZ8CswRzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X192YWx1ZV9mdW5jPHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPjo6X192YWx1ZV9mdW5jPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4gPihpbnQgKComJikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4gY29uc3QmKaAC3AFib29sIHN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX25vdF9udWxsPGludCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+KGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZykpoQKhBHN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Z1bmM8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiwgdm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+OjpfX2Z1bmMoaW50ICgqJiYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+JiYpogKBAXN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Jhc2U8dm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+OjpfX2Jhc2UoKaMCrQRzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19hbGxvY19mdW5jPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4sIHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPjo6X19hbGxvY19mdW5jKGludCAoKiYmKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiYmKaQCxQJzdGQ6Ol9fMjo6dHVwbGU8aW50ICgqJiYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiBzdGQ6Ol9fMjo6Zm9yd2FyZF9hc190dXBsZTxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPihpbnQgKComJikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZykppQLnBXN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+ID46Ol9fY29tcHJlc3NlZF9wYWlyPGludCAoKiYmKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiYmPihzdGQ6Ol9fMjo6cGllY2V3aXNlX2NvbnN0cnVjdF90LCBzdGQ6Ol9fMjo6dHVwbGU8aW50ICgqJiYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiwgc3RkOjpfXzI6OnR1cGxlPHN0ZDo6X18yOjphbGxvY2F0b3I8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4mJj4ppgLRAnN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Z1bmM8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiwgdm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+Ojp+X19mdW5jKCmnAtMCc3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fZnVuYzxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46On5fX2Z1bmMoKS4xqALXAnN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Z1bmM8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiwgdm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+OjpfX2Nsb25lKCkgY29uc3SpAuUCc3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fYWxsb2NfZnVuYzxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46Ol9fZ2V0X2FsbG9jYXRvcigpIGNvbnN0qgKCA3N0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fZnVuYzxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4gPjo6YWxsb2NhdGUodW5zaWduZWQgbG9uZywgdm9pZCBjb25zdCopqwKmBHN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Z1bmM8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiwgdm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+OjpfX2Z1bmMoaW50ICgqIGNvbnN0JikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4mJimsAu0Fc3RkOjpfXzI6OnVuaXF1ZV9wdHI8c3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fZnVuYzxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4sIHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fZnVuYzxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4gPiA+ID46On51bmlxdWVfcHRyKCmtAs8Dc3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fZnVuYzxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46Ol9fY2xvbmUoc3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fYmFzZTx2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4qKSBjb25zdK4CqwRzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19mdW5jPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4sIHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPjo6X19mdW5jKGludCAoKiBjb25zdCYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+IGNvbnN0JimvAtECc3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fZnVuYzxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46OmRlc3Ryb3koKbAC3AJzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19mdW5jPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4sIHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPjo6ZGVzdHJveV9kZWFsbG9jYXRlKCmxArADc3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fZnVuYzxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46Om9wZXJhdG9yKCkodW5zaWduZWQgY2hhciomJiwgdW5zaWduZWQgbG9uZyYmLCB1bnNpZ25lZCBsb25nKiYmLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiYmLCB1bnNpZ25lZCBsb25nJiYpsgK2A3N0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2FsbG9jX2Z1bmM8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiwgdm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+OjpvcGVyYXRvcigpKHVuc2lnbmVkIGNoYXIqJiYsIHVuc2lnbmVkIGxvbmcmJiwgdW5zaWduZWQgbG9uZyomJiwgdW5zaWduZWQgY2hhciBjb25zdComJiwgdW5zaWduZWQgbG9uZyYmKbMC6wJzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19mdW5jPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4sIHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPjo6dGFyZ2V0KHN0ZDo6dHlwZV9pbmZvIGNvbnN0JikgY29uc3S0AjdzdGQ6OnR5cGVfaW5mbzo6b3BlcmF0b3I9PShzdGQ6OnR5cGVfaW5mbyBjb25zdCYpIGNvbnN0tQLbAnN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Z1bmM8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiwgdm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+Ojp0YXJnZXRfdHlwZSgpIGNvbnN0tgKEAXN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Jhc2U8dm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+Ojp+X19iYXNlKCkuMbcCvwJzdGQ6Ol9fMjo6dHVwbGU8aW50ICgqJiYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPjo6dHVwbGU8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgZmFsc2UsIGZhbHNlPihpbnQgKComJikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZykpuAK0A3N0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIDAsIGZhbHNlPjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxpbnQgKComJikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIDB1bD4oc3RkOjpfXzI6OnBpZWNld2lzZV9jb25zdHJ1Y3RfdCwgc3RkOjpfXzI6OnR1cGxlPGludCAoKiYmKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4sIHN0ZDo6X18yOjpfX3R1cGxlX2luZGljZXM8MHVsPim5AvIDc3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyX2VsZW08c3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiwgMSwgdHJ1ZT46Ol9fY29tcHJlc3NlZF9wYWlyX2VsZW08c3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiYmLCAwdWw+KHN0ZDo6X18yOjpwaWVjZXdpc2VfY29uc3RydWN0X3QsIHN0ZDo6X18yOjp0dXBsZTxzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+JiY+LCBzdGQ6Ol9fMjo6X190dXBsZV9pbmRpY2VzPDB1bD4pugKTBXN0ZDo6X18yOjpfX3R1cGxlX2ltcGw8c3RkOjpfXzI6Ol9fdHVwbGVfaW5kaWNlczwwdWw+LCBpbnQgKComJikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+OjpfX3R1cGxlX2ltcGw8MHVsLCBpbnQgKComJikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+KHN0ZDo6X18yOjpfX3R1cGxlX2luZGljZXM8MHVsPiwgc3RkOjpfXzI6Ol9fdHVwbGVfdHlwZXM8aW50ICgqJiYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiwgc3RkOjpfXzI6Ol9fdHVwbGVfaW5kaWNlczw+LCBzdGQ6Ol9fMjo6X190dXBsZV90eXBlczw+LCBpbnQgKComJikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZykpuwL3AnN0ZDo6X18yOjp0dXBsZV9lbGVtZW50PDB1bCwgc3RkOjpfXzI6OnR1cGxlPGludCAoKiYmKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4gPjo6dHlwZSYgc3RkOjpfXzI6OmdldDwwdWwsIGludCAoKiYmKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4oc3RkOjpfXzI6OnR1cGxlPGludCAoKiYmKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4mKbwC7gJzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Z1bmM8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiwgdm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+ID46Om1heF9zaXplKCkgY29uc3S9ApIRc3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyPHN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Z1bmM8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiwgdm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+Kiwgc3RkOjpfXzI6Ol9fYWxsb2NhdG9yX2Rlc3RydWN0b3I8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19mdW5jPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4sIHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiA+ID4gPjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fZnVuYzxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4qJiwgc3RkOjpfXzI6Ol9fYWxsb2NhdG9yX2Rlc3RydWN0b3I8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19mdW5jPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4sIHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiA+ID4gPihzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19mdW5jPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4sIHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiomLCBzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Z1bmM8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiwgdm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+ID4gPiYmKb4CsgRzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19hbGxvY19mdW5jPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4sIHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPjo6X19hbGxvY19mdW5jKGludCAoKiBjb25zdCYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+JiYpvwKuCHN0ZDo6X18yOjp1bmlxdWVfcHRyPHN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Z1bmM8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiwgdm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCBzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Z1bmM8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiwgdm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+ID4gPiA+OjpyZXNldChzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19mdW5jPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4sIHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiopwALNCXN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fZnVuYzxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4gPiA+LCAxLCBmYWxzZT46Ol9fY29tcHJlc3NlZF9wYWlyX2VsZW08c3RkOjpfXzI6Ol9fYWxsb2NhdG9yX2Rlc3RydWN0b3I8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19mdW5jPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4sIHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiA+ID4sIHZvaWQ+KHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fZnVuYzxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4gPiA+JiYpwQLWAnN0ZDo6X18yOjp0dXBsZTxpbnQgKCogY29uc3QmKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4gc3RkOjpfXzI6OmZvcndhcmRfYXNfdHVwbGU8aW50ICgqIGNvbnN0JikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+KGludCAoKiBjb25zdCYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpKcIC6wFzdGQ6Ol9fMjo6dHVwbGU8aW50ICgqIGNvbnN0JikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+Ojp0dXBsZTx0cnVlLCBmYWxzZT4oaW50ICgqIGNvbnN0JikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZykpwwLwBXN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcjxzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19mdW5jPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4sIHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiosIHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fZnVuYzxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4gPiA+ID46OnNlY29uZCgpxALUBXN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fZnVuYzxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4gPiA+OjpvcGVyYXRvcigpKHN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Z1bmM8aW50ICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiwgdm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+KinFArcEc3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fYWxsb2NfZnVuYzxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46Ol9fYWxsb2NfZnVuYyhpbnQgKCogY29uc3QmKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiBjb25zdCYpxgKnA3ZvaWQgc3RkOjpfXzI6Ol9faW52b2tlX3ZvaWRfcmV0dXJuX3dyYXBwZXI8dm9pZD46Ol9fY2FsbDxpbnQgKComKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgdW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZz4oaW50ICgqJikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHVuc2lnbmVkIGNoYXIqJiYsIHVuc2lnbmVkIGxvbmcmJiwgdW5zaWduZWQgbG9uZyomJiwgdW5zaWduZWQgY2hhciBjb25zdComJiwgdW5zaWduZWQgbG9uZyYmKccCygVkZWNsdHlwZShzdGQ6Ol9fMjo6Zm9yd2FyZDxpbnQgKComKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4oZnApKHN0ZDo6X18yOjpmb3J3YXJkPHVuc2lnbmVkIGNoYXIqPihmcDApLCBzdGQ6Ol9fMjo6Zm9yd2FyZDx1bnNpZ25lZCBsb25nPihmcDApLCBzdGQ6Ol9fMjo6Zm9yd2FyZDx1bnNpZ25lZCBsb25nKj4oZnAwKSwgc3RkOjpfXzI6OmZvcndhcmQ8dW5zaWduZWQgY2hhciBjb25zdCo+KGZwMCksIHN0ZDo6X18yOjpmb3J3YXJkPHVuc2lnbmVkIGxvbmc+KGZwMCkpKSBzdGQ6Ol9fMjo6X19pbnZva2U8aW50ICgqJikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmc+KGludCAoKiYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCB1bnNpZ25lZCBjaGFyKiYmLCB1bnNpZ25lZCBsb25nJiYsIHVuc2lnbmVkIGxvbmcqJiYsIHVuc2lnbmVkIGNoYXIgY29uc3QqJiYsIHVuc2lnbmVkIGxvbmcmJinIAkRzdGQ6Ol9fMjo6YmFzaWNfaW9zPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjpiYXNpY19pb3MoKckCjAFzdGQ6Ol9fMjo6YmFzaWNfaW9zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OmJhc2ljX2lvc3RyZWFtKHN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4qKcoCd3N0ZDo6X18yOjpiYXNpY19zdHJpbmdidWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46OmJhc2ljX3N0cmluZ2J1Zih1bnNpZ25lZCBpbnQpywJDc3RkOjpfXzI6OmJhc2ljX2lvczxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6ZmlsbChjaGFyKcwCNHN0ZDo6X18yOjppb3NfYmFzZTo6c2V0Zih1bnNpZ25lZCBpbnQsIHVuc2lnbmVkIGludCnNAh9zdGQ6Ol9fMjo6aW9zX2Jhc2U6OndpZHRoKGxvbmcpzgJlc3RkOjpfXzI6OmJhc2ljX3N0cmluZ2J1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6c3RyKCkgY29uc3TPAnRzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Ojp+YmFzaWNfc3RyaW5nc3RyZWFtKCkuMdACigFzdGQ6Ol9fMjo6YmFzaWNfaXN0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6YmFzaWNfaXN0cmVhbShzdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+KinRAkxzdGQ6Ol9fMjo6YmFzaWNfb3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6YmFzaWNfb3N0cmVhbSgp0gJ0c3RkOjpfXzI6OmJhc2ljX3N0cmluZ3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6fmJhc2ljX3N0cmluZ3N0cmVhbSgpLjLTAocBbm9uLXZpcnR1YWwgdGh1bmsgdG8gc3RkOjpfXzI6OmJhc2ljX3N0cmluZ3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6fmJhc2ljX3N0cmluZ3N0cmVhbSgp1AKJAW5vbi12aXJ0dWFsIHRodW5rIHRvIHN0ZDo6X18yOjpiYXNpY19zdHJpbmdzdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46On5iYXNpY19zdHJpbmdzdHJlYW0oKS4x1QKDAXZpcnR1YWwgdGh1bmsgdG8gc3RkOjpfXzI6OmJhc2ljX3N0cmluZ3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6fmJhc2ljX3N0cmluZ3N0cmVhbSgp1gKFAXZpcnR1YWwgdGh1bmsgdG8gc3RkOjpfXzI6OmJhc2ljX3N0cmluZ3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6fmJhc2ljX3N0cmluZ3N0cmVhbSgpLjHXAn1zdGQ6Ol9fMjo6YmFzaWNfaW9zPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojppbml0KHN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4qKdgCbHN0ZDo6X18yOjpiYXNpY19zdHJpbmdidWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46On5iYXNpY19zdHJpbmdidWYoKdkCbnN0ZDo6X18yOjpiYXNpY19zdHJpbmdidWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46On5iYXNpY19zdHJpbmdidWYoKS4x2gKXAXN0ZDo6X18yOjpiYXNpY19zdHJpbmdidWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46OnNlZWtvZmYobG9uZyBsb25nLCBzdGQ6Ol9fMjo6aW9zX2Jhc2U6OnNlZWtkaXIsIHVuc2lnbmVkIGludCnbAktzdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjpwcHRyKCkgY29uc3TcAixzdGQ6Ol9fMjo6ZnBvczxfX21ic3RhdGVfdD46OmZwb3MobG9uZyBsb25nKd0CS3N0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OmdwdHIoKSBjb25zdN4CTHN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OnBiYXNlKCkgY29uc3TfAlhzdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjpzZXRnKGNoYXIqLCBjaGFyKiwgY2hhciop4AJMc3RkOjpfXzI6OmJhc2ljX3N0cmVhbWJ1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6ZXBwdHIoKSBjb25zdOECUXN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OnNldHAoY2hhciosIGNoYXIqKeICSXN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OnBidW1wKGludCnjAowBc3RkOjpfXzI6OmJhc2ljX3N0cmluZ2J1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6c2Vla3BvcyhzdGQ6Ol9fMjo6ZnBvczxfX21ic3RhdGVfdD4sIHVuc2lnbmVkIGludCnkAmVzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Ojp1bmRlcmZsb3coKeUCTHN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OmVncHRyKCkgY29uc3TmAi5zdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj46OnRvX2ludF90eXBlKGNoYXIp5wJoc3RkOjpfXzI6OmJhc2ljX3N0cmluZ2J1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6cGJhY2tmYWlsKGludCnoAjJzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj46OmVxX2ludF90eXBlKGludCwgaW50KekCKXN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPjo6bm90X2VvZihpbnQp6gIuc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+Ojp0b19jaGFyX3R5cGUoaW50KesCK3N0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPjo6ZXEoY2hhciwgY2hhcinsAmdzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpvdmVyZmxvdyhpbnQp7QJnc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6Y2FwYWNpdHkoKSBjb25zdO4CbHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46OnJlc2l6ZSh1bnNpZ25lZCBsb25nKe8CSnN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OnNwdXRjKGNoYXIp8AJtc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19nZXRfbG9uZ19jYXAoKSBjb25zdPECKHN0ZDo6X18yOjppb3NfYmFzZTo6dW5zZXRmKHVuc2lnbmVkIGludCnyAmxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpnZXRfYWxsb2NhdG9yKCkgY29uc3TzAqABc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6YmFzaWNfc3RyaW5nPGNoYXIqLCB2b2lkPihjaGFyKiwgY2hhciosIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gY29uc3QmKfQChQFzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpiYXNpY19zdHJpbmcoc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiBjb25zdCYp9QKqAnN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX3JlcCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX2NvbXByZXNzZWRfcGFpcjxzdGQ6Ol9fMjo6X19kZWZhdWx0X2luaXRfdGFnLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+IGNvbnN0Jj4oc3RkOjpfXzI6Ol9fZGVmYXVsdF9pbml0X3RhZyYmLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+IGNvbnN0Jin2Ar0Bc3RkOjpfXzI6OmVuYWJsZV9pZjxfX2lzX2NwcDE3X2ZvcndhcmRfaXRlcmF0b3I8Y2hhcio+Ojp2YWx1ZSwgdm9pZD46OnR5cGUgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19pbml0PGNoYXIqPihjaGFyKiwgY2hhciop9wKmAXN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4sIDEsIHRydWU+OjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gY29uc3QmLCB2b2lkPihzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+IGNvbnN0Jin4AllzdGQ6Ol9fMjo6aXRlcmF0b3JfdHJhaXRzPGNoYXIqPjo6ZGlmZmVyZW5jZV90eXBlIHN0ZDo6X18yOjpkaXN0YW5jZTxjaGFyKj4oY2hhciosIGNoYXIqKfkCZ3N0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Om1heF9zaXplKCkgY29uc3T6AnZzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX3NldF9zaG9ydF9zaXplKHVuc2lnbmVkIGxvbmcp+wJxc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19yZWNvbW1lbmQodW5zaWduZWQgbG9uZyn8AnBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX3NldF9sb25nX3BvaW50ZXIoY2hhciop/QJ0c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19zZXRfbG9uZ19jYXAodW5zaWduZWQgbG9uZyn+AnVzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX3NldF9sb25nX3NpemUodW5zaWduZWQgbG9uZyn/AjdzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj46OmFzc2lnbihjaGFyJiwgY2hhciBjb25zdCYpgAO3BHN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX3ZhbHVlX2Z1bmM8dm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+OjpfX3ZhbHVlX2Z1bmM8dm9pZCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8dm9pZCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+ID4odm9pZCAoKiYmKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjx2b2lkICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4gY29uc3QmKYEDpQRzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19mdW5jPHZvaWQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHZvaWQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiwgdm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+OjpfX2Z1bmModm9pZCAoKiYmKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjx2b2lkICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4mJimCA9kCc3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fZnVuYzx2b2lkICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgc3RkOjpfXzI6OmFsbG9jYXRvcjx2b2lkICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4sIHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPjo6X19jbG9uZSgpIGNvbnN0gwOqBHN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Z1bmM8dm9pZCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8dm9pZCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46Ol9fZnVuYyh2b2lkICgqIGNvbnN0JikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8dm9pZCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+JiYphAPRA3N0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Z1bmM8dm9pZCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8dm9pZCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46Ol9fY2xvbmUoc3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fYmFzZTx2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4qKSBjb25zdIUDrwRzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19mdW5jPHZvaWQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHZvaWQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiwgdm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+OjpfX2Z1bmModm9pZCAoKiBjb25zdCYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHZvaWQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiBjb25zdCYphgOyA3N0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Z1bmM8dm9pZCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8dm9pZCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46Om9wZXJhdG9yKCkodW5zaWduZWQgY2hhciomJiwgdW5zaWduZWQgbG9uZyYmLCB1bnNpZ25lZCBsb25nKiYmLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiYmLCB1bnNpZ25lZCBsb25nJiYphwO4A3N0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2FsbG9jX2Z1bmM8dm9pZCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8dm9pZCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46Om9wZXJhdG9yKCkodW5zaWduZWQgY2hhciomJiwgdW5zaWduZWQgbG9uZyYmLCB1bnNpZ25lZCBsb25nKiYmLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiYmLCB1bnNpZ25lZCBsb25nJiYpiAPtAnN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Z1bmM8dm9pZCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8dm9pZCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46OnRhcmdldChzdGQ6OnR5cGVfaW5mbyBjb25zdCYpIGNvbnN0iQPdAnN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2Z1bmM8dm9pZCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHN0ZDo6X18yOjphbGxvY2F0b3I8dm9pZCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+LCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46OnRhcmdldF90eXBlKCkgY29uc3SKA6kDdm9pZCBzdGQ6Ol9fMjo6X19pbnZva2Vfdm9pZF9yZXR1cm5fd3JhcHBlcjx2b2lkPjo6X19jYWxsPHZvaWQgKComKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgdW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZz4odm9pZCAoKiYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCB1bnNpZ25lZCBjaGFyKiYmLCB1bnNpZ25lZCBsb25nJiYsIHVuc2lnbmVkIGxvbmcqJiYsIHVuc2lnbmVkIGNoYXIgY29uc3QqJiYsIHVuc2lnbmVkIGxvbmcmJimLA80FZGVjbHR5cGUoc3RkOjpfXzI6OmZvcndhcmQ8dm9pZCAoKiYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPihmcCkoc3RkOjpfXzI6OmZvcndhcmQ8dW5zaWduZWQgY2hhcio+KGZwMCksIHN0ZDo6X18yOjpmb3J3YXJkPHVuc2lnbmVkIGxvbmc+KGZwMCksIHN0ZDo6X18yOjpmb3J3YXJkPHVuc2lnbmVkIGxvbmcqPihmcDApLCBzdGQ6Ol9fMjo6Zm9yd2FyZDx1bnNpZ25lZCBjaGFyIGNvbnN0Kj4oZnAwKSwgc3RkOjpfXzI6OmZvcndhcmQ8dW5zaWduZWQgbG9uZz4oZnAwKSkpIHN0ZDo6X18yOjpfX2ludm9rZTx2b2lkICgqJikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmc+KHZvaWQgKComKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgdW5zaWduZWQgY2hhciomJiwgdW5zaWduZWQgbG9uZyYmLCB1bnNpZ25lZCBsb25nKiYmLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiYmLCB1bnNpZ25lZCBsb25nJiYpjAOvAXN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpfX3N3YXBfb3V0X2NpcmN1bGFyX2J1ZmZlcihzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiY+JimNA9ABc3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyPHVuc2lnbmVkIGNoYXIqLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fY29tcHJlc3NlZF9wYWlyPHN0ZDo6bnVsbHB0cl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4oc3RkOjpudWxscHRyX3QmJiwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiYmKY4D1QFzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+LCBzZXNzaW9uX3Q+OjpfX2NvbXByZXNzZWRfcGFpcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4sIHN0ZDo6X18yOjpfX3ZhbHVlX2luaXRfdGFnPihzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4mJiwgc3RkOjpfXzI6Ol9fdmFsdWVfaW5pdF90YWcmJimPA7oCc3RkOjpfXzI6OnVuaXF1ZV9wdHI8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4sIHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4gPiA+ID46OnJlc2V0KHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+KimQA2lzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxzZXNzaW9uX3QsIDEsIGZhbHNlPjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbShzdGQ6Ol9fMjo6X192YWx1ZV9pbml0X3RhZymRA2NzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPjo6fl9fc2hhcmVkX3B0cl9lbXBsYWNlKCmSA1xzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+LCBzZXNzaW9uX3Q+Ojp+X19jb21wcmVzc2VkX3BhaXIoKZMDZXN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+Ojp+X19zaGFyZWRfcHRyX2VtcGxhY2UoKS4xlANec3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID46Ol9fb25femVyb19zaGFyZWQoKZUDY3N0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+OjpfX29uX3plcm9fc2hhcmVkX3dlYWsoKZYDyAFzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+ID46OmRlYWxsb2NhdGUoc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4qLCB1bnNpZ25lZCBsb25nKZcDUHN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPHNlc3Npb25fdCwgMSwgZmFsc2U+Ojp+X19jb21wcmVzc2VkX3BhaXJfZWxlbSgpmAPcAXN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4gPiA+OjpvcGVyYXRvcigpKHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+KimZA8gCc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPiA+ID46OmRlYWxsb2NhdGUoc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPiA+Jiwgc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4qLCB1bnNpZ25lZCBsb25nKZoDkgJzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46Ol9Db25zdHJ1Y3RUcmFuc2FjdGlvbjo6X0NvbnN0cnVjdFRyYW5zYWN0aW9uKHN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPiYsIHVuc2lnbmVkIGxvbmcpmwOtAnZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6Y29uc3RydWN0PHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gY29uc3QmPihzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiYsIHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+IGNvbnN0JimcA4sBc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjpfX3JlY29tbWVuZCh1bnNpZ25lZCBsb25nKSBjb25zdJ0D1wFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4mPjo6X19zcGxpdF9idWZmZXIodW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4mKZ4D+QFzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46Ol9fc3dhcF9vdXRfY2lyY3VsYXJfYnVmZmVyKHN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiY+JimfA4QBc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+Jj46On5fX3NwbGl0X2J1ZmZlcigpoAPYAnZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6X19jb25zdHJ1Y3Q8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiBjb25zdCY+KHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCB0cnVlPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4mLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+Kiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiBjb25zdCYpoQPYAXZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID46OmNvbnN0cnVjdDxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+IGNvbnN0Jj4oc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiosIHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gY29uc3QmKaIDU3N0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD46OnNoYXJlZF9wdHIoc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiBjb25zdCYpowN7c3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjptYXhfc2l6ZSgpIGNvbnN0pAOjAXN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46OmFsbG9jYXRlKHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+JiwgdW5zaWduZWQgbG9uZymlA8gCdm9pZCBzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjpfX2NvbnN0cnVjdF9iYWNrd2FyZF93aXRoX2V4Y2VwdGlvbl9ndWFyYW50ZWVzPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qPihzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiYsIHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+Kiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiomKaYDjgFzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46Ol9fYW5ub3RhdGVfbmV3KHVuc2lnbmVkIGxvbmcpIGNvbnN0pwN6c3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+Jj46OmNsZWFyKCmoA4MBc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+Jj46OmNhcGFjaXR5KCkgY29uc3SpA5oBc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6bWF4X3NpemUoc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gY29uc3QmKaoDxQFzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjpfX21heF9zaXplKHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCB0cnVlPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gY29uc3QmKasDogJ2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46OmNvbnN0cnVjdDxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4oc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4mLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+Kiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiYmKawDzQJ2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46Ol9fY29uc3RydWN0PHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPihzdGQ6Ol9fMjo6aW50ZWdyYWxfY29uc3RhbnQ8Ym9vbCwgdHJ1ZT4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+Jiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiosIHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4mJimtA80Bdm9pZCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPjo6Y29uc3RydWN0PHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPihzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+Kiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiYmKa4DpgFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4mPjo6X19kZXN0cnVjdF9hdF9lbmQoc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PioprwPQAXN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiY+OjpfX2Rlc3RydWN0X2F0X2VuZChzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+Kiwgc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIGZhbHNlPimwA5EBc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjpfX2Fubm90YXRlX3Nocmluayh1bnNpZ25lZCBsb25nKSBjb25zdLED2wFzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+KiBzdGQ6Ol9fMjo6X19tb3ZlPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+Kj4oc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiosIHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+KimyA+oBc3RkOjpfXzI6OmRlcXVlPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46Ol9fYmFja19zcGFyZSgpIGNvbnN0swPrAXN0ZDo6X18yOjpkZXF1ZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpfX2FkZF9iYWNrX2NhcGFjaXR5KCm0A/EEdm9pZCBzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+Ojpjb25zdHJ1Y3Q8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCY+KHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmKbUD6AFzdGQ6Ol9fMjo6ZGVxdWU8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6X19jYXBhY2l0eSgpIGNvbnN0tgPIAnN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4gPjo6cHVzaF9iYWNrKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qIGNvbnN0Jim3A/QBc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiA+OjpfX2JhY2tfc3BhcmUoKSBjb25zdLgDjwJzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjphbGxvY2F0ZShzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiYsIHVuc2lnbmVkIGxvbmcpuQPDAnN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4gPjo6cHVzaF9iYWNrKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qJiYpugPEAnN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4gPjo6cHVzaF9mcm9udChzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiYmKbsD+gJzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+Jj46Ol9fc3BsaXRfYnVmZmVyKHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcsIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+Jim8A8MCc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiY+OjpwdXNoX2JhY2soc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiomJim9A8kCc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiY+OjpwdXNoX2Zyb250KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qIGNvbnN0Jim+A4wCc3RkOjpfXzI6OnVuaXF1ZV9wdHI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID4gPjo6fnVuaXF1ZV9wdHIoKb8D8QFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+Jj46On5fX3NwbGl0X2J1ZmZlcigpwAOcBXZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6X19jb25zdHJ1Y3Q8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCY+KHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCB0cnVlPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4mLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYpwQOjBHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiBzdGQ6Ol9fMjo6bW92ZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKj4oc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKinCA4AGc3RkOjpfXzI6OmVuYWJsZV9pZjxfX2lzX2NwcDE3X2ZvcndhcmRfaXRlcmF0b3I8c3RkOjpfXzI6Om1vdmVfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqPiA+Ojp2YWx1ZSwgdm9pZD46OnR5cGUgc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiY+OjpfX2NvbnN0cnVjdF9hdF9lbmQ8c3RkOjpfXzI6Om1vdmVfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqPiA+KHN0ZDo6X18yOjptb3ZlX2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKj4sIHN0ZDo6X18yOjptb3ZlX2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKj4pwwP1BHZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4gPjo6Y29uc3RydWN0PHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiBjb25zdCY+KHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiBjb25zdCYpxAORAXN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+OjphbGxvY2F0ZSh1bnNpZ25lZCBsb25nLCB2b2lkIGNvbnN0KinFA6wEc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqIHN0ZDo6X18yOjptb3ZlX2JhY2t3YXJkPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqPihzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqKcYDjwJzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiA+OjphbGxvY2F0ZShzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiYsIHVuc2lnbmVkIGxvbmcpxwPcAnN0ZDo6X18yOjp1bmlxdWVfcHRyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+ID46OnJlc2V0KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKcgD5wFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+Jj46OmNsZWFyKCnJA58Hc3RkOjpfXzI6OmVuYWJsZV9pZjwoaXNfc2FtZTxzdGQ6Ol9fMjo6cmVtb3ZlX2NvbnN0PHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPjo6dHlwZSwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+Ojp2YWx1ZSkgJiYgKGlzX3RyaXZpYWxseV9jb3B5X2Fzc2lnbmFibGU8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+Ojp2YWx1ZSksIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKj46OnR5cGUgc3RkOjpfXzI6Ol9fbW92ZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiopygOHBHN0ZDo6X18yOjppdGVyYXRvcl90cmFpdHM8c3RkOjpfXzI6Om1vdmVfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqPiA+OjpkaWZmZXJlbmNlX3R5cGUgc3RkOjpfXzI6OmRpc3RhbmNlPHN0ZDo6X18yOjptb3ZlX2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKj4gPihzdGQ6Ol9fMjo6bW92ZV9pdGVyYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kio+LCBzdGQ6Ol9fMjo6bW92ZV9pdGVyYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kio+KcsD9QJzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+Jj46Ol9Db25zdHJ1Y3RUcmFuc2FjdGlvbjo6X0NvbnN0cnVjdFRyYW5zYWN0aW9uKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiosIHVuc2lnbmVkIGxvbmcpzAOgBXZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4gPjo6X19jb25zdHJ1Y3Q8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qIGNvbnN0Jj4oc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIHRydWU+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiogY29uc3QmKc0DrwRzdGQ6Ol9fMjo6aXRlcmF0b3JfdHJhaXRzPHN0ZDo6X18yOjptb3ZlX2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKj4gPjo6ZGlmZmVyZW5jZV90eXBlIHN0ZDo6X18yOjpfX2Rpc3RhbmNlPHN0ZDo6X18yOjptb3ZlX2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKj4gPihzdGQ6Ol9fMjo6bW92ZV9pdGVyYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kio+LCBzdGQ6Ol9fMjo6bW92ZV9pdGVyYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kio+LCBzdGQ6Ol9fMjo6cmFuZG9tX2FjY2Vzc19pdGVyYXRvcl90YWcpzgPcA2RlY2x0eXBlKChmcC5iYXNlKCkpIC0gKGZwMC5iYXNlKCkpKSBzdGQ6Ol9fMjo6b3BlcmF0b3ItPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqPihzdGQ6Ol9fMjo6bW92ZV9pdGVyYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kio+IGNvbnN0Jiwgc3RkOjpfXzI6Om1vdmVfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqPiBjb25zdCYpzwPeA3ZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj46OmNvbnN0cnVjdDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiomJinQA31zdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPjo6bWF4X3NpemUoKSBjb25zdNEDqAdzdGQ6Ol9fMjo6ZW5hYmxlX2lmPChpc19zYW1lPHN0ZDo6X18yOjpyZW1vdmVfY29uc3Q8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+Ojp0eXBlLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj46OnZhbHVlKSAmJiAoaXNfdHJpdmlhbGx5X2NvcHlfYXNzaWduYWJsZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj46OnZhbHVlKSwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqPjo6dHlwZSBzdGQ6Ol9fMjo6X19tb3ZlX2JhY2t3YXJkPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4oc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKinSA5EBc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj46OmFsbG9jYXRlKHVuc2lnbmVkIGxvbmcsIHZvaWQgY29uc3QqKdMD8gFzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpvcGVyYXRvcigpKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKdQDygJzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+Jj46Ol9fZGVzdHJ1Y3RfYXRfZW5kKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKinVA/QCc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiY+OjpfX2Rlc3RydWN0X2F0X2VuZChzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiosIHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCBmYWxzZT4p1gPmA3ZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID46OmNvbnN0cnVjdDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0Jj4oc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmKdcDjgFXZWJBcGk6OkJ1ZmZlckNvbnZlcnRlcjo6ZnJvbUVuY29kaW5nKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIFdlYkFwaTo6RW5jb2Rpbmcp2AM1V2ViQXBpOjpCdWZmZXJDb252ZXJ0ZXI6OmdldERlY29kZXIoV2ViQXBpOjpFbmNvZGluZynZA3VXZWJBcGk6OkJ1ZmZlckNvbnZlcnRlcjo6ZGVoZXhpZnkodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZynaA1VzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X192ZGVhbGxvY2F0ZSgp2wOuAXN0ZDo6X18yOjpfX3ZlY3Rvcl9iYXNlPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19tb3ZlX2Fzc2lnbl9hbGxvYyhzdGQ6Ol9fMjo6X192ZWN0b3JfYmFzZTx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4mKdwDTXN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpjbGVhcigp3QPXAXN0ZDo6X18yOjpfX3ZlY3Rvcl9iYXNlPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19tb3ZlX2Fzc2lnbl9hbGxvYyhzdGQ6Ol9fMjo6X192ZWN0b3JfYmFzZTx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aW50ZWdyYWxfY29uc3RhbnQ8Ym9vbCwgdHJ1ZT4p3gNsc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fYW5ub3RhdGVfc2hyaW5rKHVuc2lnbmVkIGxvbmcpIGNvbnN03wNec3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6Y2xlYXIoKeADZHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46OmVtcHR5KCkgY29uc3ThAzlsb25nIGNvbnN0JiBzdGQ6Ol9fMjo6bWluPGxvbmc+KGxvbmcgY29uc3QmLCBsb25nIGNvbnN0JiniA3Zsb25nIGNvbnN0JiBzdGQ6Ol9fMjo6bWluPGxvbmcsIHN0ZDo6X18yOjpfX2xlc3M8bG9uZywgbG9uZz4gPihsb25nIGNvbnN0JiwgbG9uZyBjb25zdCYsIHN0ZDo6X18yOjpfX2xlc3M8bG9uZywgbG9uZz4p4wNIc3RkOjpfXzI6Ol9fbGVzczxsb25nLCBsb25nPjo6b3BlcmF0b3IoKShsb25nIGNvbnN0JiwgbG9uZyBjb25zdCYpIGNvbnN05APmBHZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6Y29uc3RydWN0PHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPihzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+JiYp5QORBXZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6X19jb25zdHJ1Y3Q8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+KHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCB0cnVlPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4mLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiYmKeYD2wN2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+Ojpjb25zdHJ1Y3Q8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+JiYp5wMEbWFpbugD0QFXZWJBcGk6Om1iZWRDaXBoZXI6Om1iZWRDaXBoZXIoV2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24sIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmKekDIVdlYkFwaTo6bWJlZENpcGhlcjo6fm1iZWRDaXBoZXIoKeoDI1dlYkFwaTo6bWJlZENpcGhlcjo6fm1iZWRDaXBoZXIoKS4x6wMoV2ViQXBpOjptYmVkQ2lwaGVyOjpzZXRBdXRvUGFkZGluZyhib29sKewDZ1dlYkFwaTo6bWJlZENpcGhlcjo6dXBkYXRlKHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0KintAz5tYmVkdGxzX2NpcGhlcl9nZXRfYmxvY2tfc2l6ZShtYmVkdGxzX2NpcGhlcl9jb250ZXh0X3QgY29uc3QqKe4DrwJzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIqPih1bnNpZ25lZCBjaGFyKiwgc3RkOjpfXzI6OmVuYWJsZV9pZjwoX19pc19jcHAxN19mb3J3YXJkX2l0ZXJhdG9yPHVuc2lnbmVkIGNoYXIqPjo6dmFsdWUpICYmIChpc19jb25zdHJ1Y3RpYmxlPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjppdGVyYXRvcl90cmFpdHM8dW5zaWduZWQgY2hhcio+OjpyZWZlcmVuY2U+Ojp2YWx1ZSksIHVuc2lnbmVkIGNoYXIqPjo6dHlwZSnvAx5XZWJBcGk6Om1iZWRDaXBoZXI6OmZpbmFsaXplKCnwA3hXZWJBcGk6Om1iZWRFQ0RIOjptYmVkRUNESChzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JinxAx1XZWJBcGk6Om1iZWRFQ0RIOjp+bWJlZEVDREgoKfIDH1dlYkFwaTo6bWJlZEVDREg6On5tYmVkRUNESCgpLjHzAyRXZWJBcGk6Om1iZWRFQ0RIOjpnZW5lcmF0ZUtleXNfaW50KCn0AzhXZWJBcGk6Om1iZWRFQ0RIOjpnZW5lcmF0ZUtleXMoV2ViQXBpOjpDdXJ2ZVBvaW50Rm9ybWF0KfUDOFdlYkFwaTo6bWJlZEVDREg6OmdldFB1YmxpY0tleShXZWJBcGk6OkN1cnZlUG9pbnRGb3JtYXQp9gMjV2ViQXBpOjpzaXplZF9idWZmZXIodW5zaWduZWQgbG9uZyn3A1tzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6dmVjdG9yKHVuc2lnbmVkIGxvbmcp+ANsV2ViQXBpOjptYmVkRUNESDo6Y29tcHV0ZVNlY3JldChzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCop+QNxc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46OmFzc2lnbih1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBjaGFyIGNvbnN0Jin6A4IBdW5zaWduZWQgY2hhciogc3RkOjpfXzI6OmZpbGxfbjx1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgY2hhcj4odW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGNoYXIgY29uc3QmKfsDZ3N0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpfX2Rlc3RydWN0X2F0X2VuZCh1bnNpZ25lZCBjaGFyKin8AxxXZWJBcGk6Om1iZWRIYXNoOjptYmVkSGFzaCgp/QMdV2ViQXBpOjptYmVkSGFzaDo6fm1iZWRIYXNoKCn+Ax9XZWJBcGk6Om1iZWRIYXNoOjp+bWJlZEhhc2goKS4x/wNlV2ViQXBpOjptYmVkSGFzaDo6dXBkYXRlKHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0KimABBpXZWJBcGk6Om1iZWRIYXNoOjpkaWdlc3QoKYEEGFdlYkFwaTo6Q3J5cHRvOjpDcnlwdG8oKYIEG1dlYkFwaTo6Q3J5cHRvOjp+Q3J5cHRvKCkuMYMEHFdlYkFwaTo6Q3J5cHRvOjpjcmVhdGVIYXNoKCmEBJIBc3RkOjpfXzI6OmVuYWJsZV9pZjwhKGlzX2FycmF5PFdlYkFwaTo6bWJlZEhhc2g+Ojp2YWx1ZSksIHN0ZDo6X18yOjpzaGFyZWRfcHRyPFdlYkFwaTo6bWJlZEhhc2g+ID46OnR5cGUgc3RkOjpfXzI6Om1ha2Vfc2hhcmVkPFdlYkFwaTo6bWJlZEhhc2g+KCmFBOkBc3RkOjpfXzI6OnNoYXJlZF9wdHI8V2ViQXBpOjpIYXNoPjo6c2hhcmVkX3B0cjxXZWJBcGk6Om1iZWRIYXNoPihzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxXZWJBcGk6Om1iZWRIYXNoPiYmLCBzdGQ6Ol9fMjo6ZW5hYmxlX2lmPGlzX2NvbnZlcnRpYmxlPFdlYkFwaTo6bWJlZEhhc2gqLCBXZWJBcGk6Okhhc2gqPjo6dmFsdWUsIHN0ZDo6X18yOjpzaGFyZWRfcHRyPFdlYkFwaTo6SGFzaD46Ol9fbmF0Pjo6dHlwZSmGBJQBc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkSGFzaCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRIYXNoPiA+ID46OmFsbG9jYXRlKHVuc2lnbmVkIGxvbmcsIHZvaWQgY29uc3QqKYcElQFzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkSGFzaCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRIYXNoPiA+OjpfX3NoYXJlZF9wdHJfZW1wbGFjZShzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEhhc2g+KYgEkQJzdGQ6Ol9fMjo6dW5pcXVlX3B0cjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkSGFzaCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRIYXNoPiA+LCBzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRIYXNoLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEhhc2g+ID4gPiA+ID46On51bmlxdWVfcHRyKCmJBHhXZWJBcGk6OkNyeXB0bzo6Y3JlYXRlRUNESChzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JimKBMwCc3RkOjpfXzI6OmVuYWJsZV9pZjwhKGlzX2FycmF5PFdlYkFwaTo6bWJlZEVDREg+Ojp2YWx1ZSksIHN0ZDo6X18yOjpzaGFyZWRfcHRyPFdlYkFwaTo6bWJlZEVDREg+ID46OnR5cGUgc3RkOjpfXzI6Om1ha2Vfc2hhcmVkPFdlYkFwaTo6bWJlZEVDREgsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmPihzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JimLBJQBc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkRUNESCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRFQ0RIPiA+ID46OmFsbG9jYXRlKHVuc2lnbmVkIGxvbmcsIHZvaWQgY29uc3QqKYwE0QJzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkRUNESCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRFQ0RIPiA+OjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0Jj4oc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRFQ0RIPiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYpjQSRAnN0ZDo6X18yOjp1bmlxdWVfcHRyPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRFQ0RILCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+ID4sIHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEVDREgsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkRUNESD4gPiA+ID4gPjo6fnVuaXF1ZV9wdHIoKY4EtgFXZWJBcGk6OkNyeXB0bzo6Y3JlYXRlQ2lwaGVyKHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmKY8E/gNzdGQ6Ol9fMjo6ZW5hYmxlX2lmPCEoaXNfYXJyYXk8V2ViQXBpOjptYmVkQ2lwaGVyPjo6dmFsdWUpLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxXZWJBcGk6Om1iZWRDaXBoZXI+ID46OnR5cGUgc3RkOjpfXzI6Om1ha2Vfc2hhcmVkPFdlYkFwaTo6bWJlZENpcGhlciwgV2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24sIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmPihXZWJBcGk6OkNpcGhlckRpcmVjdGlvbiYmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0JimQBJgBc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkQ2lwaGVyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZENpcGhlcj4gPiA+OjphbGxvY2F0ZSh1bnNpZ25lZCBsb25nLCB2b2lkIGNvbnN0KimRBIMEc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZENpcGhlciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+ID46Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6Q2lwaGVyRGlyZWN0aW9uLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jj4oc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+LCBXZWJBcGk6OkNpcGhlckRpcmVjdGlvbiYmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0JimSBJkCc3RkOjpfXzI6OnVuaXF1ZV9wdHI8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZENpcGhlciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+ID4sIHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZENpcGhlciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+ID4gPiA+ID46On51bmlxdWVfcHRyKCmTBLgBV2ViQXBpOjpDcnlwdG86OmNyZWF0ZURlY2lwaGVyKHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmKZQEIFdlYkFwaTo6Q3J5cHRvOjpyYW5kb21CeXRlcyhpbnQplQQgV2ViQXBpOjpDcnlwdG86OmdldE5hbWVkQ3VydmVzKCmWBLkCc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpwdXNoX2JhY2soc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiYmKZcE4AFzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46On52ZWN0b3IoKZgEowN2b2lkIHN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6X19jb25zdHJ1Y3Rfb25lX2F0X2VuZDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4oc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiYmKZkEogN2b2lkIHN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6X19wdXNoX2JhY2tfc2xvd19wYXRoPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPihzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+JiYpmgTwAXN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6X19hbm5vdGF0ZV9kZWxldGUoKSBjb25zdJsE7gFzdGQ6Ol9fMjo6X192ZWN0b3JfYmFzZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+Ojp+X192ZWN0b3JfYmFzZSgpnARnc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fY29uc3RydWN0X2F0X2VuZCh1bnNpZ25lZCBsb25nKZ0EkwF2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6Y29uc3RydWN0PHVuc2lnbmVkIGNoYXI+KHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mLCB1bnNpZ25lZCBjaGFyKimeBL4Bdm9pZCBzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fY29uc3RydWN0PHVuc2lnbmVkIGNoYXI+KHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCB0cnVlPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiYsIHVuc2lnbmVkIGNoYXIqKZ8EhAF1bnNpZ25lZCBjaGFyKiBzdGQ6Ol9fMjo6X19maWxsX248dW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGNoYXI+KHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBjaGFyIGNvbnN0JimgBPEBc3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyPHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkSGFzaD4sIFdlYkFwaTo6bWJlZEhhc2g+OjpfX2NvbXByZXNzZWRfcGFpcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEhhc2g+LCBzdGQ6Ol9fMjo6X192YWx1ZV9pbml0X3RhZz4oc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRIYXNoPiYmLCBzdGQ6Ol9fMjo6X192YWx1ZV9pbml0X3RhZyYmKaEE5AJzdGQ6Ol9fMjo6dW5pcXVlX3B0cjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkSGFzaCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRIYXNoPiA+LCBzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRIYXNoLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEhhc2g+ID4gPiA+ID46OnJlc2V0KHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRIYXNoLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEhhc2g+ID4qKaIEcHN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPFdlYkFwaTo6bWJlZEhhc2gsIDEsIGZhbHNlPjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbShzdGQ6Ol9fMjo6X192YWx1ZV9pbml0X3RhZymjBHFzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkSGFzaCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRIYXNoPiA+Ojp+X19zaGFyZWRfcHRyX2VtcGxhY2UoKaQEanN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEhhc2g+LCBXZWJBcGk6Om1iZWRIYXNoPjo6fl9fY29tcHJlc3NlZF9wYWlyKCmlBHNzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkSGFzaCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRIYXNoPiA+Ojp+X19zaGFyZWRfcHRyX2VtcGxhY2UoKS4xpgRsc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEhhc2gsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkSGFzaD4gPjo6X19vbl96ZXJvX3NoYXJlZCgppwRxc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEhhc2gsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkSGFzaD4gPjo6X19vbl96ZXJvX3NoYXJlZF93ZWFrKCmoBOQBc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkSGFzaCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRIYXNoPiA+ID46OmRlYWxsb2NhdGUoc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEhhc2gsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkSGFzaD4gPiosIHVuc2lnbmVkIGxvbmcpqQRXc3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyX2VsZW08V2ViQXBpOjptYmVkSGFzaCwgMSwgZmFsc2U+Ojp+X19jb21wcmVzc2VkX3BhaXJfZWxlbSgpqgT4AXN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEhhc2gsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkSGFzaD4gPiA+ID46Om9wZXJhdG9yKCkoc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEhhc2gsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkSGFzaD4gPiopqwTyAnN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEhhc2gsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkSGFzaD4gPiA+ID46OmRlYWxsb2NhdGUoc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkSGFzaCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRIYXNoPiA+ID4mLCBzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkSGFzaCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRIYXNoPiA+KiwgdW5zaWduZWQgbG9uZymsBLYDc3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyPHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkRUNESD4sIFdlYkFwaTo6bWJlZEVDREg+OjpfX2NvbXByZXNzZWRfcGFpcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCY+KHN0ZDo6X18yOjpwaWVjZXdpc2VfY29uc3RydWN0X3QsIHN0ZDo6X18yOjp0dXBsZTxzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+Jj4sIHN0ZDo6X18yOjp0dXBsZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0Jj4prQTkAnN0ZDo6X18yOjp1bmlxdWVfcHRyPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRFQ0RILCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+ID4sIHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEVDREgsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkRUNESD4gPiA+ID4gPjo6cmVzZXQoc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEVDREgsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkRUNESD4gPioprgTnAnN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPFdlYkFwaTo6bWJlZEVDREgsIDEsIGZhbHNlPjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JiwgMHVsPihzdGQ6Ol9fMjo6cGllY2V3aXNlX2NvbnN0cnVjdF90LCBzdGQ6Ol9fMjo6dHVwbGU8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCY+LCBzdGQ6Ol9fMjo6X190dXBsZV9pbmRpY2VzPDB1bD4prwRxc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEVDREgsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkRUNESD4gPjo6fl9fc2hhcmVkX3B0cl9lbXBsYWNlKCmwBGpzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRFQ0RIPiwgV2ViQXBpOjptYmVkRUNESD46On5fX2NvbXByZXNzZWRfcGFpcigpsQRzc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEVDREgsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkRUNESD4gPjo6fl9fc2hhcmVkX3B0cl9lbXBsYWNlKCkuMbIEcXN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRFQ0RILCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+ID46Ol9fb25femVyb19zaGFyZWRfd2VhaygpswTkAXN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEVDREgsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkRUNESD4gPiA+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRFQ0RILCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+ID4qLCB1bnNpZ25lZCBsb25nKbQEV3N0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPFdlYkFwaTo6bWJlZEVDREgsIDEsIGZhbHNlPjo6fl9fY29tcHJlc3NlZF9wYWlyX2VsZW0oKbUE+AFzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRFQ0RILCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+ID4gPiA+OjpvcGVyYXRvcigpKHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRFQ0RILCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+ID4qKbYE8gJzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRFQ0RILCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+ID4gPiA+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEVDREgsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkRUNESD4gPiA+Jiwgc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEVDREgsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkRUNESD4gPiosIHVuc2lnbmVkIGxvbmcptwTHBHN0ZDo6X18yOjp0dXBsZTxXZWJBcGk6OkNpcGhlckRpcmVjdGlvbiYmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jj4gc3RkOjpfXzI6OmZvcndhcmRfYXNfdHVwbGU8V2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24sIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmPihXZWJBcGk6OkNpcGhlckRpcmVjdGlvbiYmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jim4BOwEc3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyPHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkQ2lwaGVyPiwgV2ViQXBpOjptYmVkQ2lwaGVyPjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+JiwgV2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24mJiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCY+KHN0ZDo6X18yOjpwaWVjZXdpc2VfY29uc3RydWN0X3QsIHN0ZDo6X18yOjp0dXBsZTxzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZENpcGhlcj4mPiwgc3RkOjpfXzI6OnR1cGxlPFdlYkFwaTo6Q2lwaGVyRGlyZWN0aW9uJiYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmPim5BPACc3RkOjpfXzI6OnVuaXF1ZV9wdHI8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZENpcGhlciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+ID4sIHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZENpcGhlciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+ID4gPiA+ID46OnJlc2V0KHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRDaXBoZXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkQ2lwaGVyPiA+Kim6BMEEc3RkOjpfXzI6OnR1cGxlPFdlYkFwaTo6Q2lwaGVyRGlyZWN0aW9uJiYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmPjo6dHVwbGU8V2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24sIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCBmYWxzZSwgZmFsc2U+KFdlYkFwaTo6Q2lwaGVyRGlyZWN0aW9uJiYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmKbsEqwRzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxXZWJBcGk6Om1iZWRDaXBoZXIsIDEsIGZhbHNlPjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxXZWJBcGk6OkNpcGhlckRpcmVjdGlvbiYmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0JiwgMHVsLCAxdWwsIDJ1bD4oc3RkOjpfXzI6OnBpZWNld2lzZV9jb25zdHJ1Y3RfdCwgc3RkOjpfXzI6OnR1cGxlPFdlYkFwaTo6Q2lwaGVyRGlyZWN0aW9uJiYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmPiwgc3RkOjpfXzI6Ol9fdHVwbGVfaW5kaWNlczwwdWwsIDF1bCwgMnVsPim8BHVzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkQ2lwaGVyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZENpcGhlcj4gPjo6fl9fc2hhcmVkX3B0cl9lbXBsYWNlKCm9BG5zdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+LCBXZWJBcGk6Om1iZWRDaXBoZXI+Ojp+X19jb21wcmVzc2VkX3BhaXIoKb4Ed3N0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRDaXBoZXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkQ2lwaGVyPiA+Ojp+X19zaGFyZWRfcHRyX2VtcGxhY2UoKS4xvwR1c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZENpcGhlciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+ID46Ol9fb25femVyb19zaGFyZWRfd2VhaygpwATsAXN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZENpcGhlciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+ID4gPjo6ZGVhbGxvY2F0ZShzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkQ2lwaGVyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZENpcGhlcj4gPiosIHVuc2lnbmVkIGxvbmcpwQTfCHN0ZDo6X18yOjpfX3R1cGxlX2ltcGw8c3RkOjpfXzI6Ol9fdHVwbGVfaW5kaWNlczwwdWwsIDF1bCwgMnVsPiwgV2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24mJiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCY+OjpfX3R1cGxlX2ltcGw8MHVsLCAxdWwsIDJ1bCwgV2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24mJiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIFdlYkFwaTo6Q2lwaGVyRGlyZWN0aW9uLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jj4oc3RkOjpfXzI6Ol9fdHVwbGVfaW5kaWNlczwwdWwsIDF1bCwgMnVsPiwgc3RkOjpfXzI6Ol9fdHVwbGVfdHlwZXM8V2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24mJiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCY+LCBzdGQ6Ol9fMjo6X190dXBsZV9pbmRpY2VzPD4sIHN0ZDo6X18yOjpfX3R1cGxlX3R5cGVzPD4sIFdlYkFwaTo6Q2lwaGVyRGlyZWN0aW9uJiYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmKcIE+QRzdGQ6Ol9fMjo6dHVwbGVfZWxlbWVudDwydWwsIHN0ZDo6X18yOjp0dXBsZTxXZWJBcGk6OkNpcGhlckRpcmVjdGlvbiYmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jj4gPjo6dHlwZSYgc3RkOjpfXzI6OmdldDwydWwsIFdlYkFwaTo6Q2lwaGVyRGlyZWN0aW9uJiYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmPihzdGQ6Ol9fMjo6dHVwbGU8V2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24mJiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCY+JinDBFlzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxXZWJBcGk6Om1iZWRDaXBoZXIsIDEsIGZhbHNlPjo6fl9fY29tcHJlc3NlZF9wYWlyX2VsZW0oKcQEgAJzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRDaXBoZXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkQ2lwaGVyPiA+ID4gPjo6b3BlcmF0b3IoKShzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkQ2lwaGVyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZENpcGhlcj4gPiopxQT+AnN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZENpcGhlciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+ID4gPiA+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZENpcGhlciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+ID4gPiYsIHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRDaXBoZXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkQ2lwaGVyPiA+KiwgdW5zaWduZWQgbG9uZynGBOcBc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpjYXBhY2l0eSgpIGNvbnN0xwTjAXN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6c2l6ZSgpIGNvbnN0yATlAXN0ZDo6X18yOjpfX3ZlY3Rvcl9iYXNlPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46OmNsZWFyKCnJBO4Bc3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2U8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6Y2FwYWNpdHkoKSBjb25zdMoExwJzdGQ6Ol9fMjo6X192ZWN0b3JfYmFzZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpfX2Rlc3RydWN0X2F0X2VuZChzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KinLBOoDc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpfQ29uc3RydWN0VHJhbnNhY3Rpb246Ol9Db25zdHJ1Y3RUcmFuc2FjdGlvbihzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID4mLCB1bnNpZ25lZCBsb25nKcwE9wFzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46Ol9fcmVjb21tZW5kKHVuc2lnbmVkIGxvbmcpIGNvbnN0zQT5AnN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiY+OjpfX3NwbGl0X2J1ZmZlcih1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiYpzgTRA3N0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6X19zd2FwX291dF9jaXJjdWxhcl9idWZmZXIoc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+Jj4mKc8E8AFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4mPjo6fl9fc3BsaXRfYnVmZmVyKCnQBOcBc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjptYXhfc2l6ZSgpIGNvbnN00QSMBXZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6X19jb25zdHJ1Y3RfYmFja3dhcmRfd2l0aF9leGNlcHRpb25fZ3VhcmFudGVlczxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4oc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4mLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qJinSBPoBc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpfX2Fubm90YXRlX25ldyh1bnNpZ25lZCBsb25nKSBjb25zdNME5gFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4mPjo6Y2xlYXIoKdQE7wFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4mPjo6Y2FwYWNpdHkoKSBjb25zdNUEhgJzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjptYXhfc2l6ZShzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiBjb25zdCYp1gSxAnN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46Ol9fbWF4X3NpemUoc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIHRydWU+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiBjb25zdCYp1wTIAnN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiY+OjpfX2Rlc3RydWN0X2F0X2VuZChzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KinYBPICc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+Jj46Ol9fZGVzdHJ1Y3RfYXRfZW5kKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6aW50ZWdyYWxfY29uc3RhbnQ8Ym9vbCwgZmFsc2U+KdkEEG1iZWR0bHNfYWVzX2luaXTaBBBtYmVkdGxzX2Flc19mcmVl2wQWbWJlZHRsc19hZXNfc2V0a2V5X2VuY9wEFm1iZWR0bHNfYWVzX3NldGtleV9kZWPdBBptYmVkdGxzX2Flc194dHNfc2V0a2V5X2VuY94EGm1iZWR0bHNfYWVzX3h0c19zZXRrZXlfZGVj3wQcbWJlZHRsc19pbnRlcm5hbF9hZXNfZW5jcnlwdOAEHG1iZWR0bHNfaW50ZXJuYWxfYWVzX2RlY3J5cHThBBVtYmVkdGxzX2Flc19jcnlwdF9lY2LiBBVtYmVkdGxzX2Flc19jcnlwdF9jYmPjBBVtYmVkdGxzX2Flc19jcnlwdF94dHPkBBhtYmVkdGxzX2Flc19jcnlwdF9jZmIxMjjlBBVtYmVkdGxzX2Flc19jcnlwdF9vZmLmBBVtYmVkdGxzX2Flc19jcnlwdF9jdHLnBBJtYmVkdGxzX2FyYzRfc2V0dXDoBBJtYmVkdGxzX2FyYzRfY3J5cHTpBBVtYmVkdGxzX2Jhc2U2NF9lbmNvZGXqBBVtYmVkdGxzX2Jhc2U2NF9kZWNvZGXrBBBtYmVkdGxzX21waV9pbml07AQQbWJlZHRsc19tcGlfZnJlZe0EEG1iZWR0bHNfbXBpX2dyb3fuBBJtYmVkdGxzX21waV9zaHJpbmvvBBBtYmVkdGxzX21waV9jb3B58AQcbWJlZHRsc19tcGlfc2FmZV9jb25kX2Fzc2lnbvEEGm1iZWR0bHNfbXBpX3NhZmVfY29uZF9zd2Fw8gQQbWJlZHRsc19tcGlfbHNldPMEE21iZWR0bHNfbXBpX2dldF9iaXT0BBNtYmVkdGxzX21waV9zZXRfYml09QQPbWJlZHRsc19tcGlfbHNi9gQSbWJlZHRsc19tcGlfYml0bGVu9wQQbWJlZHRsc19tcGlfc2l6ZfgEF21iZWR0bHNfbXBpX3JlYWRfc3RyaW5n+QQNbXBpX2dldF9kaWdpdPoEE21iZWR0bHNfbXBpX211bF9tcGn7BBNtYmVkdGxzX21waV9hZGRfbXBp/AQTbWJlZHRsc19tcGlfc3ViX21waf0EE21iZWR0bHNfbXBpX211bF9pbnT+BBNtYmVkdGxzX21waV9zdWJfaW50/wQTbWJlZHRsc19tcGlfZGl2X21waYAFF21iZWR0bHNfbXBpX3JlYWRfYmluYXJ5gQUYbWJlZHRsc19tcGlfd3JpdGVfYmluYXJ5ggUTbWJlZHRsc19tcGlfc2hpZnRfbIMFE21iZWR0bHNfbXBpX3NoaWZ0X3KEBRNtYmVkdGxzX21waV9jbXBfbXBphQUTbWJlZHRsc19tcGlfY21wX2ludIYFE21iZWR0bHNfbXBpX2FkZF9hYnOHBRNtYmVkdGxzX21waV9zdWJfYWJziAULbXBpX211bF9obHCJBRNtYmVkdGxzX21waV9tb2RfbXBpigUPbWJlZHRsc19tcGlfZ2NkiwUXbWJlZHRsc19tcGlfZmlsbF9yYW5kb22MBRNtYmVkdGxzX21waV9pbnZfbW9kjQUXbWJlZHRsc19ibG93ZmlzaF9zZXRrZXmOBRptYmVkdGxzX2Jsb3dmaXNoX2NyeXB0X2VjYo8FGm1iZWR0bHNfYmxvd2Zpc2hfY3J5cHRfY2JjkAUcbWJlZHRsc19ibG93ZmlzaF9jcnlwdF9jZmI2NJEFGm1iZWR0bHNfYmxvd2Zpc2hfY3J5cHRfY3RykgUbbWJlZHRsc19jYW1lbGxpYV9zZXRrZXlfZW5jkwUbbWJlZHRsc19jYW1lbGxpYV9zZXRrZXlfZGVjlAUabWJlZHRsc19jYW1lbGxpYV9jcnlwdF9lY2KVBRptYmVkdGxzX2NhbWVsbGlhX2NyeXB0X2NiY5YFHW1iZWR0bHNfY2FtZWxsaWFfY3J5cHRfY2ZiMTI4lwUabWJlZHRsc19jYW1lbGxpYV9jcnlwdF9jdHKYBRBtYmVkdGxzX2NjbV9pbml0mQUSbWJlZHRsc19jY21fc2V0a2V5mgUVbWJlZHRsc19jaGFjaGEyMF9pbml0mwUVbWJlZHRsc19jaGFjaGEyMF9mcmVlnAUXbWJlZHRsc19jaGFjaGEyMF9zZXRrZXmdBRdtYmVkdGxzX2NoYWNoYTIwX3N0YXJ0c54FF21iZWR0bHNfY2hhY2hhMjBfdXBkYXRlnwUOY2hhY2hhMjBfYmxvY2ugBRdtYmVkdGxzX2NoYWNoYXBvbHlfaW5pdKEFF21iZWR0bHNfY2hhY2hhcG9seV9mcmVlogUZbWJlZHRsc19jaGFjaGFwb2x5X3VwZGF0ZaMFHW1iZWR0bHNfY2lwaGVyX2luZm9fZnJvbV90eXBlpAUfbWJlZHRsc19jaXBoZXJfaW5mb19mcm9tX3ZhbHVlc6UFE21iZWR0bHNfY2lwaGVyX2ZyZWWmBRRtYmVkdGxzX2NpcGhlcl9zZXR1cKcFEGdldF9wa2NzX3BhZGRpbmeoBRBhZGRfcGtjc19wYWRkaW5nqQUfbWJlZHRsc19jaXBoZXJfc2V0X3BhZGRpbmdfbW9kZaoFGWdldF9vbmVfYW5kX3plcm9zX3BhZGRpbmerBRlhZGRfb25lX2FuZF96ZXJvc19wYWRkaW5nrAUZZ2V0X3plcm9zX2FuZF9sZW5fcGFkZGluZ60FGWFkZF96ZXJvc19hbmRfbGVuX3BhZGRpbmeuBRFnZXRfemVyb3NfcGFkZGluZ68FEWFkZF96ZXJvc19wYWRkaW5nsAUOZ2V0X25vX3BhZGRpbmexBRVtYmVkdGxzX2NpcGhlcl9zZXRrZXmyBRVtYmVkdGxzX2NpcGhlcl9zZXRfaXazBRVtYmVkdGxzX2NpcGhlcl91cGRhdGW0BRVtYmVkdGxzX2NpcGhlcl9maW5pc2i1BRJhZXNfY3J5cHRfZWNiX3dyYXC2BRJhZXNfY3J5cHRfY2JjX3dyYXC3BRVhZXNfY3J5cHRfY2ZiMTI4X3dyYXC4BRJhZXNfY3J5cHRfb2ZiX3dyYXC5BRJhZXNfY3J5cHRfY3RyX3dyYXC6BRNhZXNfc2V0a2V5X2VuY193cmFwuwUTYWVzX3NldGtleV9kZWNfd3JhcLwFDWFlc19jdHhfYWxsb2O9BQxhZXNfY3R4X2ZyZWW+BRJhZXNfY3J5cHRfeHRzX3dyYXC/BRd4dHNfYWVzX3NldGtleV9lbmNfd3JhcMAFF3h0c19hZXNfc2V0a2V5X2RlY193cmFwwQUReHRzX2Flc19jdHhfYWxsb2PCBRB4dHNfYWVzX2N0eF9mcmVlwwUTZ2NtX2Flc19zZXRrZXlfd3JhcMQFDWdjbV9jdHhfYWxsb2PFBQxnY21fY3R4X2ZyZWXGBRNjY21fYWVzX3NldGtleV93cmFwxwUNY2NtX2N0eF9hbGxvY8gFDGNjbV9jdHhfZnJlZckFFmFyYzRfY3J5cHRfc3RyZWFtX3dyYXDKBRBhcmM0X3NldGtleV93cmFwywUOYXJjNF9jdHhfYWxsb2PMBQ1hcmM0X2N0eF9mcmVlzQUXYmxvd2Zpc2hfY3J5cHRfZWNiX3dyYXDOBRdibG93ZmlzaF9jcnlwdF9jYmNfd3JhcM8FGWJsb3dmaXNoX2NyeXB0X2NmYjY0X3dyYXDQBRdibG93ZmlzaF9jcnlwdF9jdHJfd3JhcNEFFGJsb3dmaXNoX3NldGtleV93cmFw0gUSYmxvd2Zpc2hfY3R4X2FsbG9j0wURYmxvd2Zpc2hfY3R4X2ZyZWXUBRdjYW1lbGxpYV9jcnlwdF9lY2Jfd3JhcNUFF2NhbWVsbGlhX2NyeXB0X2NiY193cmFw1gUaY2FtZWxsaWFfY3J5cHRfY2ZiMTI4X3dyYXDXBRdjYW1lbGxpYV9jcnlwdF9jdHJfd3JhcNgFGGNhbWVsbGlhX3NldGtleV9lbmNfd3JhcNkFGGNhbWVsbGlhX3NldGtleV9kZWNfd3JhcNoFEmNhbWVsbGlhX2N0eF9hbGxvY9sFEWNhbWVsbGlhX2N0eF9mcmVl3AUYZ2NtX2NhbWVsbGlhX3NldGtleV93cmFw3QUYY2NtX2NhbWVsbGlhX3NldGtleV93cmFw3gUSZGVzX2NyeXB0X2VjYl93cmFw3wUSZGVzX2NyeXB0X2NiY193cmFw4AUTZGVzX3NldGtleV9lbmNfd3JhcOEFE2Rlc19zZXRrZXlfZGVjX3dyYXDiBQ1kZXNfY3R4X2FsbG9j4wUMZGVzX2N0eF9mcmVl5AUTZGVzM19jcnlwdF9lY2Jfd3JhcOUFE2RlczNfY3J5cHRfY2JjX3dyYXDmBRVkZXMzX3NldDJrZXlfZW5jX3dyYXDnBRVkZXMzX3NldDJrZXlfZGVjX3dyYXDoBQ5kZXMzX2N0eF9hbGxvY+kFDWRlczNfY3R4X2ZyZWXqBRVkZXMzX3NldDNrZXlfZW5jX3dyYXDrBRVkZXMzX3NldDNrZXlfZGVjX3dyYXDsBRRjaGFjaGEyMF9zdHJlYW1fd3JhcO0FFGNoYWNoYTIwX3NldGtleV93cmFw7gUSY2hhY2hhMjBfY3R4X2FsbG9j7wURY2hhY2hhMjBfY3R4X2ZyZWXwBRRjaGFjaGFwb2x5X2N0eF9hbGxvY/EFE2NoYWNoYXBvbHlfY3R4X2ZyZWXyBSFtYmVkdGxzX2N0cl9kcmJnX3NlZWRfZW50cm9weV9sZW7zBQ9ibG9ja19jaXBoZXJfZGb0BRhjdHJfZHJiZ191cGRhdGVfaW50ZXJuYWz1BSBtYmVkdGxzX2N0cl9kcmJnX3JhbmRvbV93aXRoX2FkZPYFF21iZWR0bHNfY3RyX2RyYmdfcmFuZG9t9wUSbWJlZHRsc19kZXNfc2V0a2V5+AUWbWJlZHRsc19kZXNfc2V0a2V5X2RlY/kFGG1iZWR0bHNfZGVzM19zZXQya2V5X2VuY/oFGG1iZWR0bHNfZGVzM19zZXQya2V5X2RlY/sFGG1iZWR0bHNfZGVzM19zZXQza2V5X2VuY/wFDGRlczNfc2V0M2tlef0FGG1iZWR0bHNfZGVzM19zZXQza2V5X2RlY/4FFW1iZWR0bHNfZGVzX2NyeXB0X2VjYv8FFW1iZWR0bHNfZGVzX2NyeXB0X2NiY4AGFm1iZWR0bHNfZGVzM19jcnlwdF9lY2KBBhZtYmVkdGxzX2RlczNfY3J5cHRfY2JjggYbbWJlZHRsc19lY2RoX2NvbXB1dGVfc2hhcmVkgwYgbWJlZHRsc19lY3BfY3VydmVfaW5mb19mcm9tX25hbWWEBhZtYmVkdGxzX2VjcF9wb2ludF9pbml0hQYWbWJlZHRsc19lY3BfZ3JvdXBfaW5pdIYGFm1iZWR0bHNfZWNwX3BvaW50X2ZyZWWHBhZtYmVkdGxzX2VjcF9ncm91cF9mcmVliAYebWJlZHRsc19lY3BfcG9pbnRfd3JpdGVfYmluYXJ5iQYdbWJlZHRsc19lY3BfcG9pbnRfcmVhZF9iaW5hcnmKBhttYmVkdGxzX2VjcF9tdWxfcmVzdGFydGFibGWLBhltYmVkdGxzX2VjcF9jaGVja19wcml2a2V5jAYYbWJlZHRsc19lY3BfY2hlY2tfcHVia2V5jQYIZWNwX21vZHCOBg5lY3BfZG91YmxlX2phY48GFmVjcF9ub3JtYWxpemVfamFjX21hbnmQBhFlY3Bfbm9ybWFsaXplX2phY5EGDWVjcF9hZGRfbWl4ZWSSBhdtYmVkdGxzX2VjcF9nZW5fcHJpdmtleZMGFm1iZWR0bHNfZWNwX2dyb3VwX2xvYWSUBgxlY3BfbW9kX3AxOTKVBgxlY3BfbW9kX3AyMjSWBgxlY3BfbW9kX3AyNTaXBgxlY3BfbW9kX3AzODSYBgxlY3BfbW9kX3A1MjGZBg5lY3BfbW9kX3AxOTJrMZoGDmVjcF9tb2RfcDIyNGsxmwYOZWNwX21vZF9wMjU2azGcBgxlY3BfbW9kX3AyNTWdBgxlY3BfbW9kX3A0NDieBg9lY3BfbW9kX2tvYmxpdHqfBhRtYmVkdGxzX2VudHJvcHlfaW5pdKAGDmVudHJvcHlfdXBkYXRloQYXZW50cm9weV9nYXRoZXJfaW50ZXJuYWyiBhRtYmVkdGxzX2VudHJvcHlfZnVuY6MGHW1iZWR0bHNfcGxhdGZvcm1fZW50cm9weV9wb2xspAYWbWJlZHRsc19oYXJkY2xvY2tfcG9sbKUGEm1iZWR0bHNfZ2NtX3NldGtleaYGCGdjbV9tdWx0pwYSbWJlZHRsc19nY21fdXBkYXRlqAYYbWJlZHRsc19wbGF0Zm9ybV96ZXJvaXplqQYXbWJlZHRsc19wb2x5MTMwNV91cGRhdGWqBhBwb2x5MTMwNV9wcm9jZXNzqwYVbWJlZHRsc19zaGEyNTZfc3RhcnRzrAYfbWJlZHRsc19pbnRlcm5hbF9zaGEyNTZfcHJvY2Vzc60GFW1iZWR0bHNfc2hhMjU2X3VwZGF0Za4GGW1iZWR0bHNfc2hhMjU2X2ZpbmlzaF9yZXSvBhNtYmVkdGxzX3NoYTUxMl9pbml0sAYZbWJlZHRsc19zaGE1MTJfc3RhcnRzX3JldLEGH21iZWR0bHNfaW50ZXJuYWxfc2hhNTEyX3Byb2Nlc3OyBhltYmVkdGxzX3NoYTUxMl91cGRhdGVfcmV0swYZbWJlZHRsc19zaGE1MTJfZmluaXNoX3JldLQGEm1iZWR0bHNfc2hhNTEyX3JldLUGGG1iZWR0bHNfdGltaW5nX2hhcmRjbG9ja7YGDV9fc3lzY2FsbF9yZXS3BhBfX2Vycm5vX2xvY2F0aW9uuAYFZHVtbXm5BgZtZW1jaHK6BgtfX3N0cmNocm51bLsGBnN0cmNocrwGBnN0cmNtcL0GB3N0cm5jbXC+BgdkdW1teS4xvwYGZmNsb3NlwAYGZmZsdXNowQYRX19mZmx1c2hfdW5sb2NrZWTCBghzbnByaW50ZsMGDF9fc3RkaW9fcmVhZMQGCF9fZmRvcGVuxQYFZm9wZW7GBgl2c25wcmludGbHBghzbl93cml0ZcgGBWZyZWFkyQYMX19zdGRpb19zZWVrygYIX190b3JlYWTLBgdfX3VmbG93zAYHaXNkaWdpdM0GB3djcnRvbWLOBgZ3Y3RvbWLPBgVmcmV4cNAGE19fdmZwcmludGZfaW50ZXJuYWzRBgtwcmludGZfY29yZdIGA291dNMGBmdldGludNQGB3BvcF9hcmfVBgVmbXRfeNYGBWZtdF9v1wYFZm10X3XYBgNwYWTZBgh2ZnByaW50ZtoGBmZtdF9mcNsGE3BvcF9hcmdfbG9uZ19kb3VibGXcBg1fX3N0ZGlvX2Nsb3Nl3QYJX19vZmxfYWRk3gYZX19lbXNjcmlwdGVuX3N0ZG91dF9jbG9zZd8GGF9fZW1zY3JpcHRlbl9zdGRvdXRfc2Vla+AGDV9fc3RkaW9fd3JpdGXhBgxfX2Ztb2RlZmxhZ3PiBgdfX3NobGlt4wYIX19zaGdldGPkBgdpc3NwYWNl5QYJX19pbnRzY2Fu5gYGc3RydG945wYJY29weXNpZ25s6AYHc2NhbGJubOkGC19fZmxvYXRzY2Fu6gYIaGV4ZmxvYXTrBghkZWNmbG9hdOwGB3NjYW5leHDtBgZzdHJ0b2buBghzdHJ0b3guMe8GBnN0cnRvZPAGB3N0cnRvbGTxBglzdHJ0b2xkX2zyBhJfX3dhc2lfc3lzY2FsbF9yZXTzBgdfX2xldGYy9AYHX19nZXRmMvUGCF9fbXVsdGkz9gYJX19hc2hsdGkz9wYIX19hZGR0ZjP4Bg1fX2V4dGVuZHNmdGYy+QYJX19sc2hydGkz+gYMX190cnVuY3Rmc2Yy+wYNX19leHRlbmRkZnRmMvwGCF9fbXVsdGYz/QYIX19zdWJ0ZjP+BgtfX2Zsb2F0c2l0Zv8GCF9fZGl2dGYzgAcMX190cnVuY3RmZGYygQcNX19mbG9hdHVuc2l0ZoIHM3N0ZDo6X18yOjpiYWRfZnVuY3Rpb25fY2FsbDo6fmJhZF9mdW5jdGlvbl9jYWxsKCkuMYMHKXN0ZDo6X18yOjpiYWRfZnVuY3Rpb25fY2FsbDo6d2hhdCgpIGNvbnN0hAcHd21lbWNweYUHRXN0ZDo6X18yOjpiYXNpY19pb3M8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19pb3MoKYYHH3N0ZDo6X18yOjppb3NfYmFzZTo6fmlvc19iYXNlKCmHBz9zdGQ6Ol9fMjo6aW9zX2Jhc2U6Ol9fY2FsbF9jYWxsYmFja3Moc3RkOjpfXzI6Omlvc19iYXNlOjpldmVudCmIB0dzdGQ6Ol9fMjo6YmFzaWNfaW9zPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojp+YmFzaWNfaW9zKCkuMYkHUXN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19zdHJlYW1idWYoKYoHU3N0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19zdHJlYW1idWYoKS4xiwdQc3RkOjpfXzI6OmJhc2ljX3N0cmVhbWJ1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6YmFzaWNfc3RyZWFtYnVmKCmMB11zdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjppbWJ1ZShzdGQ6Ol9fMjo6bG9jYWxlIGNvbnN0JimNB1JzdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjpzZXRidWYoY2hhciosIGxvbmcpjgd8c3RkOjpfXzI6OmJhc2ljX3N0cmVhbWJ1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6c2Vla29mZihsb25nIGxvbmcsIHN0ZDo6X18yOjppb3NfYmFzZTo6c2Vla2RpciwgdW5zaWduZWQgaW50KY8HcXN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OnNlZWtwb3Moc3RkOjpfXzI6OmZwb3M8X19tYnN0YXRlX3Q+LCB1bnNpZ25lZCBpbnQpkAdSc3RkOjpfXzI6OmJhc2ljX3N0cmVhbWJ1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6eHNnZXRuKGNoYXIqLCBsb25nKZEHRHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPjo6Y29weShjaGFyKiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpkgdKc3RkOjpfXzI6OmJhc2ljX3N0cmVhbWJ1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6dW5kZXJmbG93KCmTB0ZzdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojp1ZmxvdygplAdNc3RkOjpfXzI6OmJhc2ljX3N0cmVhbWJ1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6cGJhY2tmYWlsKGludCmVB1hzdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojp4c3B1dG4oY2hhciBjb25zdCosIGxvbmcplgdNc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+Ojpjb3B5KHdjaGFyX3QqLCB3Y2hhcl90IGNvbnN0KiwgdW5zaWduZWQgbG9uZymXB09zdGQ6Ol9fMjo6YmFzaWNfaXN0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6fmJhc2ljX2lzdHJlYW0oKS4xmAdedmlydHVhbCB0aHVuayB0byBzdGQ6Ol9fMjo6YmFzaWNfaXN0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6fmJhc2ljX2lzdHJlYW0oKZkHT3N0ZDo6X18yOjpiYXNpY19pc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojp+YmFzaWNfaXN0cmVhbSgpLjKaB2B2aXJ0dWFsIHRodW5rIHRvIHN0ZDo6X18yOjpiYXNpY19pc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojp+YmFzaWNfaXN0cmVhbSgpLjGbB0VzdGQ6Ol9fMjo6YmFzaWNfaW9zPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojpnb29kKCkgY29uc3ScB0RzdGQ6Ol9fMjo6YmFzaWNfb3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6Zmx1c2goKZ0HInN0ZDo6X18yOjppb3NfYmFzZTo6Z2V0bG9jKCkgY29uc3SeB2FzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj4gY29uc3QmIHN0ZDo6X18yOjp1c2VfZmFjZXQ8c3RkOjpfXzI6OmN0eXBlPGNoYXI+ID4oc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYpnwfRAWJvb2wgc3RkOjpfXzI6Om9wZXJhdG9yIT08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4oc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiBjb25zdCYpoAdUc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46Om9wZXJhdG9yKigpIGNvbnN0oQc1c3RkOjpfXzI6OmN0eXBlPGNoYXI+Ojppcyh1bnNpZ25lZCBzaG9ydCwgY2hhcikgY29uc3SiB09zdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6b3BlcmF0b3IrKygpowfRAWJvb2wgc3RkOjpfXzI6Om9wZXJhdG9yPT08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4oc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiBjb25zdCYppAdPc3RkOjpfXzI6OmJhc2ljX2lvczxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6c2V0c3RhdGUodW5zaWduZWQgaW50KaUHiQFzdGQ6Ol9fMjo6YmFzaWNfb3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6c2VudHJ5OjpzZW50cnkoc3RkOjpfXzI6OmJhc2ljX29zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mKaYHSHN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OnB1YnN5bmMoKacHTnN0ZDo6X18yOjpiYXNpY19vc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjpzZW50cnk6On5zZW50cnkoKagHmAFzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6ZXF1YWwoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gY29uc3QmKSBjb25zdKkHRnN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OnNnZXRjKCmqB0dzdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjpzYnVtcGMoKasHJ3N0ZDo6X18yOjppb3NfYmFzZTo6Y2xlYXIodW5zaWduZWQgaW50KawHZ3N0ZDo6X18yOjpjdHlwZTx3Y2hhcl90PiBjb25zdCYgc3RkOjpfXzI6OnVzZV9mYWNldDxzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD4gPihzdGQ6Ol9fMjo6bG9jYWxlIGNvbnN0JimtB+MBYm9vbCBzdGQ6Ol9fMjo6b3BlcmF0b3IhPTx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiBjb25zdCYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IGNvbnN0JimuB1pzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPjo6b3BlcmF0b3IqKCkgY29uc3SvBztzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD46OmlzKHVuc2lnbmVkIHNob3J0LCB3Y2hhcl90KSBjb25zdLAHVXN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+OjpvcGVyYXRvcisrKCmxB+MBYm9vbCBzdGQ6Ol9fMjo6b3BlcmF0b3I9PTx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiBjb25zdCYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IGNvbnN0JimyB6QBc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID46OmVxdWFsKHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IGNvbnN0JikgY29uc3SzB0xzdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+OjpzZ2V0YygptAdNc3RkOjpfXzI6OmJhc2ljX3N0cmVhbWJ1Zjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPjo6c2J1bXBjKCm1B0dzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD46OmVxX2ludF90eXBlKHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50KbYHU3N0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID46OnNwdXRjKHdjaGFyX3QptwdPc3RkOjpfXzI6OmJhc2ljX29zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19vc3RyZWFtKCkuMbgHXnZpcnR1YWwgdGh1bmsgdG8gc3RkOjpfXzI6OmJhc2ljX29zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19vc3RyZWFtKCm5B09zdGQ6Ol9fMjo6YmFzaWNfb3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6fmJhc2ljX29zdHJlYW0oKS4yugdgdmlydHVhbCB0aHVuayB0byBzdGQ6Ol9fMjo6YmFzaWNfb3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6fmJhc2ljX29zdHJlYW0oKS4xuwdFc3RkOjpfXzI6OmJhc2ljX2lvczxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6ZmlsbCgpIGNvbnN0vAdKc3RkOjpfXzI6OmJhc2ljX2lvczxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6d2lkZW4oY2hhcikgY29uc3S9B1VzdGQ6Ol9fMjo6YmFzaWNfb3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6b3BlcmF0b3I8PCh1bnNpZ25lZCBpbnQpvgdSc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46Om9wZXJhdG9yPShjaGFyKb8HV3N0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OnNwdXRuKGNoYXIgY29uc3QqLCBsb25nKcAHW3N0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+OjpvcGVyYXRvcj0od2NoYXJfdCnBB1FzdGQ6Ol9fMjo6YmFzaWNfaW9zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19pb3N0cmVhbSgpLjHCB2Rub24tdmlydHVhbCB0aHVuayB0byBzdGQ6Ol9fMjo6YmFzaWNfaW9zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19pb3N0cmVhbSgpwwdgdmlydHVhbCB0aHVuayB0byBzdGQ6Ol9fMjo6YmFzaWNfaW9zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19pb3N0cmVhbSgpxAdRc3RkOjpfXzI6OmJhc2ljX2lvc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojp+YmFzaWNfaW9zdHJlYW0oKS4yxQdmbm9uLXZpcnR1YWwgdGh1bmsgdG8gc3RkOjpfXzI6OmJhc2ljX2lvc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojp+YmFzaWNfaW9zdHJlYW0oKS4xxgdidmlydHVhbCB0aHVuayB0byBzdGQ6Ol9fMjo6YmFzaWNfaW9zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19pb3N0cmVhbSgpLjHHByFzdGQ6Ol9fMjo6aW9zX2Jhc2U6On5pb3NfYmFzZSgpLjHIByZzdGQ6Ol9fMjo6X190aHJvd19mYWlsdXJlKGNoYXIgY29uc3QqKckHH3N0ZDo6X18yOjppb3NfYmFzZTo6aW5pdCh2b2lkKinKB7UBc3RkOjpfXzI6OmVuYWJsZV9pZjwoaXNfbW92ZV9jb25zdHJ1Y3RpYmxlPHVuc2lnbmVkIGludD46OnZhbHVlKSAmJiAoaXNfbW92ZV9hc3NpZ25hYmxlPHVuc2lnbmVkIGludD46OnZhbHVlKSwgdm9pZD46OnR5cGUgc3RkOjpfXzI6OnN3YXA8dW5zaWduZWQgaW50Pih1bnNpZ25lZCBpbnQmLCB1bnNpZ25lZCBpbnQmKcsHWXN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjpfX3Rlc3RfZm9yX2VvZigpIGNvbnN0zAdfc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID46Ol9fdGVzdF9mb3JfZW9mKCkgY29uc3TNByhzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj46OndpZGVuKGNoYXIpIGNvbnN0zgcrc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+Ojp3aWRlbihjaGFyKSBjb25zdM8HfXN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPHZvaWQgKCopKHZvaWQqKSwgMSwgZmFsc2U+OjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPHZvaWQgKCopKHZvaWQqKSwgdm9pZD4odm9pZCAoKiYmKSh2b2lkKikp0AcHbWJydG93Y9EHB3Zmc2NhbmbSBwVhcmdfbtMHCXN0b3JlX2ludNQHDV9fc3RyaW5nX3JlYWTVBwd2c3NjYW5m1gcHZG9fcmVhZNcHIF9fZW1zY3JpcHRlbl9lbnZpcm9uX2NvbnN0cnVjdG9y2AcGZ2V0ZW522QcMX19nZXRfbG9jYWxl2gcSX19sb2NfaXNfYWxsb2NhdGVk2wcLX19uZXdsb2NhbGXcBwl2YXNwcmludGbdBwxfX2lzeGRpZ2l0X2zeBwZzc2NhbmbfBwpmcmVlbG9jYWxl4AcGd2NzbGVu4QcJd2NzcnRvbWJz4gcKd2NzbnJ0b21ic+MHCW1ic3J0b3djc+QHCm1ic25ydG93Y3PlBwtfX3VzZWxvY2FsZeYHCnN0cnRvdWxsX2znBwlzdHJ0b2xsX2zoB11zdGQ6Ol9fMjo6Y29sbGF0ZTxjaGFyPjo6ZG9fY29tcGFyZShjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KikgY29uc3TpB0VzdGQ6Ol9fMjo6Y29sbGF0ZTxjaGFyPjo6ZG9fdHJhbnNmb3JtKGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KikgY29uc3TqB5ABc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6YmFzaWNfc3RyaW5nPGNoYXIgY29uc3QqLCB2b2lkPihjaGFyIGNvbnN0KiwgY2hhciBjb25zdCop6wfVAXN0ZDo6X18yOjplbmFibGVfaWY8X19pc19jcHAxN19mb3J3YXJkX2l0ZXJhdG9yPGNoYXIgY29uc3QqPjo6dmFsdWUsIHZvaWQ+Ojp0eXBlIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Ol9faW5pdDxjaGFyIGNvbnN0Kj4oY2hhciBjb25zdCosIGNoYXIgY29uc3QqKewHQHN0ZDo6X18yOjpjb2xsYXRlPGNoYXI+Ojpkb19oYXNoKGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KikgY29uc3TtB2xzdGQ6Ol9fMjo6Y29sbGF0ZTx3Y2hhcl90Pjo6ZG9fY29tcGFyZSh3Y2hhcl90IGNvbnN0Kiwgd2NoYXJfdCBjb25zdCosIHdjaGFyX3QgY29uc3QqLCB3Y2hhcl90IGNvbnN0KikgY29uc3TuB05zdGQ6Ol9fMjo6Y29sbGF0ZTx3Y2hhcl90Pjo6ZG9fdHJhbnNmb3JtKHdjaGFyX3QgY29uc3QqLCB3Y2hhcl90IGNvbnN0KikgY29uc3TvB6IBc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QgY29uc3QqLCB2b2lkPih3Y2hhcl90IGNvbnN0Kiwgd2NoYXJfdCBjb25zdCop8AewAnN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpfX3JlcCwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpfX2NvbXByZXNzZWRfcGFpcjxzdGQ6Ol9fMjo6X19kZWZhdWx0X2luaXRfdGFnLCBzdGQ6Ol9fMjo6X19kZWZhdWx0X2luaXRfdGFnPihzdGQ6Ol9fMjo6X19kZWZhdWx0X2luaXRfdGFnJiYsIHN0ZDo6X18yOjpfX2RlZmF1bHRfaW5pdF90YWcmJinxB+oBc3RkOjpfXzI6OmVuYWJsZV9pZjxfX2lzX2NwcDE3X2ZvcndhcmRfaXRlcmF0b3I8d2NoYXJfdCBjb25zdCo+Ojp2YWx1ZSwgdm9pZD46OnR5cGUgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6X19pbml0PHdjaGFyX3QgY29uc3QqPih3Y2hhcl90IGNvbnN0Kiwgd2NoYXJfdCBjb25zdCop8gdJc3RkOjpfXzI6OmNvbGxhdGU8d2NoYXJfdD46OmRvX2hhc2god2NoYXJfdCBjb25zdCosIHdjaGFyX3QgY29uc3QqKSBjb25zdPMHmgJzdGQ6Ol9fMjo6bnVtX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBib29sJikgY29uc3T0BxtzdGQ6Ol9fMjo6bG9jYWxlOjp+bG9jYWxlKCn1B2dzdGQ6Ol9fMjo6bnVtcHVuY3Q8Y2hhcj4gY29uc3QmIHN0ZDo6X18yOjp1c2VfZmFjZXQ8c3RkOjpfXzI6Om51bXB1bmN0PGNoYXI+ID4oc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYp9gcqc3RkOjpfXzI6Om51bXB1bmN0PGNoYXI+Ojp0cnVlbmFtZSgpIGNvbnN09wcrc3RkOjpfXzI6Om51bXB1bmN0PGNoYXI+OjpmYWxzZW5hbWUoKSBjb25zdPgHpAVzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0KiBzdGQ6Ol9fMjo6X19zY2FuX2tleXdvcmQ8c3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QqLCBzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj4gPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0Kiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCosIHN0ZDo6X18yOjpjdHlwZTxjaGFyPiBjb25zdCYsIHVuc2lnbmVkIGludCYsIGJvb2wp+Qc4c3RkOjpfXzI6OmxvY2FsZTo6dXNlX2ZhY2V0KHN0ZDo6X18yOjpsb2NhbGU6OmlkJikgY29uc3T6B7UDc3RkOjpfXzI6Oml0ZXJhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0Kj46OmRpZmZlcmVuY2VfdHlwZSBzdGQ6Ol9fMjo6ZGlzdGFuY2U8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCo+KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QqLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0Kin7B8wBc3RkOjpfXzI6OnVuaXF1ZV9wdHI8dW5zaWduZWQgY2hhciwgdm9pZCAoKikodm9pZCopPjo6dW5pcXVlX3B0cjx0cnVlLCB2b2lkPih1bnNpZ25lZCBjaGFyKiwgc3RkOjpfXzI6Ol9fZGVwZW5kZW50X3R5cGU8c3RkOjpfXzI6Ol9fdW5pcXVlX3B0cl9kZWxldGVyX3NmaW5hZTx2b2lkICgqKSh2b2lkKik+LCB0cnVlPjo6X19nb29kX3J2YWxfcmVmX3R5cGUp/AdLc3RkOjpfXzI6OnVuaXF1ZV9wdHI8dW5zaWduZWQgY2hhciwgdm9pZCAoKikodm9pZCopPjo6cmVzZXQodW5zaWduZWQgY2hhciop/Qcqc3RkOjpfXzI6OmN0eXBlPGNoYXI+Ojp0b3VwcGVyKGNoYXIpIGNvbnN0/gdDc3RkOjpfXzI6OnVuaXF1ZV9wdHI8dW5zaWduZWQgY2hhciwgdm9pZCAoKikodm9pZCopPjo6fnVuaXF1ZV9wdHIoKf8HmgJzdGQ6Ol9fMjo6bnVtX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBsb25nJikgY29uc3SACOsCc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gc3RkOjpfXzI6Om51bV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6X19kb19nZXRfc2lnbmVkPGxvbmc+KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgbG9uZyYpIGNvbnN0gQg5c3RkOjpfXzI6Ol9fbnVtX2dldF9iYXNlOjpfX2dldF9iYXNlKHN0ZDo6X18yOjppb3NfYmFzZSYpgghIc3RkOjpfXzI6Ol9fbnVtX2dldDxjaGFyPjo6X19zdGFnZTJfaW50X3ByZXAoc3RkOjpfXzI6Omlvc19iYXNlJiwgY2hhciYpgwjlAXN0ZDo6X18yOjpfX251bV9nZXQ8Y2hhcj46Ol9fc3RhZ2UyX2ludF9sb29wKGNoYXIsIGludCwgY2hhciosIGNoYXIqJiwgdW5zaWduZWQgaW50JiwgY2hhciwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYsIHVuc2lnbmVkIGludCosIHVuc2lnbmVkIGludComLCBjaGFyIGNvbnN0KimECFxsb25nIHN0ZDo6X18yOjpfX251bV9nZXRfc2lnbmVkX2ludGVncmFsPGxvbmc+KGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgaW50JiwgaW50KYUIpQFzdGQ6Ol9fMjo6X19jaGVja19ncm91cGluZyhzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JiwgdW5zaWduZWQgaW50KiwgdW5zaWduZWQgaW50KiwgdW5zaWduZWQgaW50JimGCJ8Cc3RkOjpfXzI6Om51bV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgbG9uZyBsb25nJikgY29uc3SHCPUCc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gc3RkOjpfXzI6Om51bV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6X19kb19nZXRfc2lnbmVkPGxvbmcgbG9uZz4oc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBsb25nIGxvbmcmKSBjb25zdIgIZmxvbmcgbG9uZyBzdGQ6Ol9fMjo6X19udW1fZ2V0X3NpZ25lZF9pbnRlZ3JhbDxsb25nIGxvbmc+KGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgaW50JiwgaW50KYkIpAJzdGQ6Ol9fMjo6bnVtX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB1bnNpZ25lZCBzaG9ydCYpIGNvbnN0igiBA3N0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+IHN0ZDo6X18yOjpudW1fZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZG9fZ2V0X3Vuc2lnbmVkPHVuc2lnbmVkIHNob3J0PihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHVuc2lnbmVkIHNob3J0JikgY29uc3SLCHJ1bnNpZ25lZCBzaG9ydCBzdGQ6Ol9fMjo6X19udW1fZ2V0X3Vuc2lnbmVkX2ludGVncmFsPHVuc2lnbmVkIHNob3J0PihjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGludCYsIGludCmMCKICc3RkOjpfXzI6Om51bV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgdW5zaWduZWQgaW50JikgY29uc3SNCP0Cc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gc3RkOjpfXzI6Om51bV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6X19kb19nZXRfdW5zaWduZWQ8dW5zaWduZWQgaW50PihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHVuc2lnbmVkIGludCYpIGNvbnN0jghudW5zaWduZWQgaW50IHN0ZDo6X18yOjpfX251bV9nZXRfdW5zaWduZWRfaW50ZWdyYWw8dW5zaWduZWQgaW50PihjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGludCYsIGludCmPCKgCc3RkOjpfXzI6Om51bV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgdW5zaWduZWQgbG9uZyBsb25nJikgY29uc3SQCIkDc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gc3RkOjpfXzI6Om51bV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6X19kb19nZXRfdW5zaWduZWQ8dW5zaWduZWQgbG9uZyBsb25nPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHVuc2lnbmVkIGxvbmcgbG9uZyYpIGNvbnN0kQh6dW5zaWduZWQgbG9uZyBsb25nIHN0ZDo6X18yOjpfX251bV9nZXRfdW5zaWduZWRfaW50ZWdyYWw8dW5zaWduZWQgbG9uZyBsb25nPihjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGludCYsIGludCmSCJsCc3RkOjpfXzI6Om51bV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgZmxvYXQmKSBjb25zdJMI9QJzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiBzdGQ6Ol9fMjo6bnVtX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+OjpfX2RvX2dldF9mbG9hdGluZ19wb2ludDxmbG9hdD4oc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBmbG9hdCYpIGNvbnN0lAhYc3RkOjpfXzI6Ol9fbnVtX2dldDxjaGFyPjo6X19zdGFnZTJfZmxvYXRfcHJlcChzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCBjaGFyKiwgY2hhciYsIGNoYXImKZUI8AFzdGQ6Ol9fMjo6X19udW1fZ2V0PGNoYXI+OjpfX3N0YWdlMl9mbG9hdF9sb29wKGNoYXIsIGJvb2wmLCBjaGFyJiwgY2hhciosIGNoYXIqJiwgY2hhciwgY2hhciwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYsIHVuc2lnbmVkIGludCosIHVuc2lnbmVkIGludComLCB1bnNpZ25lZCBpbnQmLCBjaGFyKimWCE9mbG9hdCBzdGQ6Ol9fMjo6X19udW1fZ2V0X2Zsb2F0PGZsb2F0PihjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGludCYplwicAnN0ZDo6X18yOjpudW1fZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46OmRvX2dldChzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIGRvdWJsZSYpIGNvbnN0mAj3AnN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+IHN0ZDo6X18yOjpudW1fZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZG9fZ2V0X2Zsb2F0aW5nX3BvaW50PGRvdWJsZT4oc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBkb3VibGUmKSBjb25zdJkIUWRvdWJsZSBzdGQ6Ol9fMjo6X19udW1fZ2V0X2Zsb2F0PGRvdWJsZT4oY2hhciBjb25zdCosIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBpbnQmKZoIoQJzdGQ6Ol9fMjo6bnVtX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBsb25nIGRvdWJsZSYpIGNvbnN0mwiBA3N0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+IHN0ZDo6X18yOjpudW1fZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZG9fZ2V0X2Zsb2F0aW5nX3BvaW50PGxvbmcgZG91YmxlPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIGxvbmcgZG91YmxlJikgY29uc3ScCFtsb25nIGRvdWJsZSBzdGQ6Ol9fMjo6X19udW1fZ2V0X2Zsb2F0PGxvbmcgZG91YmxlPihjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGludCYpnQibAnN0ZDo6X18yOjpudW1fZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46OmRvX2dldChzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHZvaWQqJikgY29uc3SeCENzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj46OndpZGVuKGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KiwgY2hhciopIGNvbnN0nwgSc3RkOjpfXzI6Ol9fY2xvYygpoAhMc3RkOjpfXzI6Ol9fbGliY3BwX3NzY2FuZl9sKGNoYXIgY29uc3QqLCBfX2xvY2FsZV9zdHJ1Y3QqLCBjaGFyIGNvbnN0KiwgLi4uKaEIVGNoYXIgY29uc3QqIHN0ZDo6X18yOjpmaW5kPGNoYXIgY29uc3QqLCBjaGFyPihjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIGNoYXIgY29uc3QmKaIISXN0ZDo6X18yOjpfX2xpYmNwcF9sb2NhbGVfZ3VhcmQ6Ol9fbGliY3BwX2xvY2FsZV9ndWFyZChfX2xvY2FsZV9zdHJ1Y3QqJimjCDlzdGQ6Ol9fMjo6X19saWJjcHBfbG9jYWxlX2d1YXJkOjp+X19saWJjcHBfbG9jYWxlX2d1YXJkKCmkCK8Cc3RkOjpfXzI6Om51bV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgYm9vbCYpIGNvbnN0pQhtc3RkOjpfXzI6Om51bXB1bmN0PHdjaGFyX3Q+IGNvbnN0JiBzdGQ6Ol9fMjo6dXNlX2ZhY2V0PHN0ZDo6X18yOjpudW1wdW5jdDx3Y2hhcl90PiA+KHN0ZDo6X18yOjpsb2NhbGUgY29uc3QmKaYI4AVzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+IGNvbnN0KiBzdGQ6Ol9fMjo6X19zY2FuX2tleXdvcmQ8c3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4gY29uc3QqLCBzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD4gPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+IGNvbnN0Kiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPiBjb25zdCosIHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90PiBjb25zdCYsIHVuc2lnbmVkIGludCYsIGJvb2wppwhsc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6c2l6ZSgpIGNvbnN0qAh/c3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6b3BlcmF0b3JbXSh1bnNpZ25lZCBsb25nKSBjb25zdKkIbXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46OmVtcHR5KCkgY29uc3SqCK8Cc3RkOjpfXzI6Om51bV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgbG9uZyYpIGNvbnN0qwiGA3N0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IHN0ZDo6X18yOjpudW1fZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZG9fZ2V0X3NpZ25lZDxsb25nPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIGxvbmcmKSBjb25zdKwITXN0ZDo6X18yOjpfX251bV9nZXQ8d2NoYXJfdD46Ol9fZG9fd2lkZW4oc3RkOjpfXzI6Omlvc19iYXNlJiwgd2NoYXJfdCopIGNvbnN0rQhOc3RkOjpfXzI6Ol9fbnVtX2dldDx3Y2hhcl90Pjo6X19zdGFnZTJfaW50X3ByZXAoc3RkOjpfXzI6Omlvc19iYXNlJiwgd2NoYXJfdCYprgjxAXN0ZDo6X18yOjpfX251bV9nZXQ8d2NoYXJfdD46Ol9fc3RhZ2UyX2ludF9sb29wKHdjaGFyX3QsIGludCwgY2hhciosIGNoYXIqJiwgdW5zaWduZWQgaW50Jiwgd2NoYXJfdCwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYsIHVuc2lnbmVkIGludCosIHVuc2lnbmVkIGludComLCB3Y2hhcl90IGNvbnN0KimvCLQCc3RkOjpfXzI6Om51bV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgbG9uZyBsb25nJikgY29uc3SwCJADc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gc3RkOjpfXzI6Om51bV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6X19kb19nZXRfc2lnbmVkPGxvbmcgbG9uZz4oc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBsb25nIGxvbmcmKSBjb25zdLEIuQJzdGQ6Ol9fMjo6bnVtX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB1bnNpZ25lZCBzaG9ydCYpIGNvbnN0sgicA3N0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IHN0ZDo6X18yOjpudW1fZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZG9fZ2V0X3Vuc2lnbmVkPHVuc2lnbmVkIHNob3J0PihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHVuc2lnbmVkIHNob3J0JikgY29uc3SzCLcCc3RkOjpfXzI6Om51bV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgdW5zaWduZWQgaW50JikgY29uc3S0CJgDc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gc3RkOjpfXzI6Om51bV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6X19kb19nZXRfdW5zaWduZWQ8dW5zaWduZWQgaW50PihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHVuc2lnbmVkIGludCYpIGNvbnN0tQi9AnN0ZDo6X18yOjpudW1fZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX2dldChzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHVuc2lnbmVkIGxvbmcgbG9uZyYpIGNvbnN0tgikA3N0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IHN0ZDo6X18yOjpudW1fZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZG9fZ2V0X3Vuc2lnbmVkPHVuc2lnbmVkIGxvbmcgbG9uZz4oc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB1bnNpZ25lZCBsb25nIGxvbmcmKSBjb25zdLcIsAJzdGQ6Ol9fMjo6bnVtX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBmbG9hdCYpIGNvbnN0uAiQA3N0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IHN0ZDo6X18yOjpudW1fZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZG9fZ2V0X2Zsb2F0aW5nX3BvaW50PGZsb2F0PihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIGZsb2F0JikgY29uc3S5CGRzdGQ6Ol9fMjo6X19udW1fZ2V0PHdjaGFyX3Q+OjpfX3N0YWdlMl9mbG9hdF9wcmVwKHN0ZDo6X18yOjppb3NfYmFzZSYsIHdjaGFyX3QqLCB3Y2hhcl90Jiwgd2NoYXJfdCYpugj/AXN0ZDo6X18yOjpfX251bV9nZXQ8d2NoYXJfdD46Ol9fc3RhZ2UyX2Zsb2F0X2xvb3Aod2NoYXJfdCwgYm9vbCYsIGNoYXImLCBjaGFyKiwgY2hhciomLCB3Y2hhcl90LCB3Y2hhcl90LCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JiwgdW5zaWduZWQgaW50KiwgdW5zaWduZWQgaW50KiYsIHVuc2lnbmVkIGludCYsIHdjaGFyX3QqKbsIsQJzdGQ6Ol9fMjo6bnVtX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBkb3VibGUmKSBjb25zdLwIkgNzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiBzdGQ6Ol9fMjo6bnVtX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+OjpfX2RvX2dldF9mbG9hdGluZ19wb2ludDxkb3VibGU+KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgZG91YmxlJikgY29uc3S9CLYCc3RkOjpfXzI6Om51bV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgbG9uZyBkb3VibGUmKSBjb25zdL4InANzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiBzdGQ6Ol9fMjo6bnVtX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+OjpfX2RvX2dldF9mbG9hdGluZ19wb2ludDxsb25nIGRvdWJsZT4oc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBsb25nIGRvdWJsZSYpIGNvbnN0vwiwAnN0ZDo6X18yOjpudW1fZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX2dldChzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHZvaWQqJikgY29uc3TACElzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD46OndpZGVuKGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0Kiwgd2NoYXJfdCopIGNvbnN0wQhmd2NoYXJfdCBjb25zdCogc3RkOjpfXzI6OmZpbmQ8d2NoYXJfdCBjb25zdCosIHdjaGFyX3Q+KHdjaGFyX3QgY29uc3QqLCB3Y2hhcl90IGNvbnN0Kiwgd2NoYXJfdCBjb25zdCYpwggvc3RkOjpfXzI6Om51bXB1bmN0PGNoYXI+OjpkZWNpbWFsX3BvaW50KCkgY29uc3TDCC9zdGQ6Ol9fMjo6bnVtcHVuY3Q8Y2hhcj46OnRob3VzYW5kc19zZXAoKSBjb25zdMQIKnN0ZDo6X18yOjpudW1wdW5jdDxjaGFyPjo6Z3JvdXBpbmcoKSBjb25zdMUIZ3djaGFyX3QgY29uc3QqIHN0ZDo6X18yOjpfX251bV9nZXQ8d2NoYXJfdD46Ol9fZG9fd2lkZW5fcDx3Y2hhcl90PihzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB3Y2hhcl90KikgY29uc3TGCM0Bc3RkOjpfXzI6Om51bV9wdXQ8Y2hhciwgc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fcHV0KHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCBjaGFyLCBib29sKSBjb25zdMcIzQFzdGQ6Ol9fMjo6bnVtX3B1dDxjaGFyLCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19wdXQoc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIGNoYXIsIGxvbmcpIGNvbnN0yAhOc3RkOjpfXzI6Ol9fbnVtX3B1dF9iYXNlOjpfX2Zvcm1hdF9pbnQoY2hhciosIGNoYXIgY29uc3QqLCBib29sLCB1bnNpZ25lZCBpbnQpyQhXc3RkOjpfXzI6Ol9fbGliY3BwX3NucHJpbnRmX2woY2hhciosIHVuc2lnbmVkIGxvbmcsIF9fbG9jYWxlX3N0cnVjdCosIGNoYXIgY29uc3QqLCAuLi4pyghVc3RkOjpfXzI6Ol9fbnVtX3B1dF9iYXNlOjpfX2lkZW50aWZ5X3BhZGRpbmcoY2hhciosIGNoYXIqLCBzdGQ6Ol9fMjo6aW9zX2Jhc2UgY29uc3QmKcsIdXN0ZDo6X18yOjpfX251bV9wdXQ8Y2hhcj46Ol9fd2lkZW5fYW5kX2dyb3VwX2ludChjaGFyKiwgY2hhciosIGNoYXIqLCBjaGFyKiwgY2hhciomLCBjaGFyKiYsIHN0ZDo6X18yOjpsb2NhbGUgY29uc3QmKcwIhQJzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiBzdGQ6Ol9fMjo6X19wYWRfYW5kX291dHB1dDxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPihzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgY2hhciBjb25zdCosIGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0Kiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgY2hhcinNCCt2b2lkIHN0ZDo6X18yOjpyZXZlcnNlPGNoYXIqPihjaGFyKiwgY2hhciopzgghc3RkOjpfXzI6Omlvc19iYXNlOjp3aWR0aCgpIGNvbnN0zwhdc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6ZGF0YSgp0AjSAXN0ZDo6X18yOjpudW1fcHV0PGNoYXIsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgY2hhciwgbG9uZyBsb25nKSBjb25zdNEI1gFzdGQ6Ol9fMjo6bnVtX3B1dDxjaGFyLCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19wdXQoc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIGNoYXIsIHVuc2lnbmVkIGxvbmcpIGNvbnN00gjbAXN0ZDo6X18yOjpudW1fcHV0PGNoYXIsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgY2hhciwgdW5zaWduZWQgbG9uZyBsb25nKSBjb25zdNMIzwFzdGQ6Ol9fMjo6bnVtX3B1dDxjaGFyLCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19wdXQoc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIGNoYXIsIGRvdWJsZSkgY29uc3TUCEpzdGQ6Ol9fMjo6X19udW1fcHV0X2Jhc2U6Ol9fZm9ybWF0X2Zsb2F0KGNoYXIqLCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgaW50KdUIJXN0ZDo6X18yOjppb3NfYmFzZTo6cHJlY2lzaW9uKCkgY29uc3TWCElzdGQ6Ol9fMjo6X19saWJjcHBfYXNwcmludGZfbChjaGFyKiosIF9fbG9jYWxlX3N0cnVjdCosIGNoYXIgY29uc3QqLCAuLi4p1wh3c3RkOjpfXzI6Ol9fbnVtX3B1dDxjaGFyPjo6X193aWRlbl9hbmRfZ3JvdXBfZmxvYXQoY2hhciosIGNoYXIqLCBjaGFyKiwgY2hhciosIGNoYXIqJiwgY2hhciomLCBzdGQ6Ol9fMjo6bG9jYWxlIGNvbnN0JinYCD1zdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXI8Y2hhciosIHZvaWQgKCopKHZvaWQqKT46OnNlY29uZCgp2QjUAXN0ZDo6X18yOjpudW1fcHV0PGNoYXIsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgY2hhciwgbG9uZyBkb3VibGUpIGNvbnN02gjUAXN0ZDo6X18yOjpudW1fcHV0PGNoYXIsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgY2hhciwgdm9pZCBjb25zdCopIGNvbnN02wjfAXN0ZDo6X18yOjpudW1fcHV0PHdjaGFyX3QsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgd2NoYXJfdCwgYm9vbCkgY29uc3TcCGdzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpiZWdpbigp3Qhlc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6ZW5kKCneCHNib29sIHN0ZDo6X18yOjpvcGVyYXRvciE9PHdjaGFyX3QqPihzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8d2NoYXJfdCo+IGNvbnN0Jiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QqPiBjb25zdCYp3wgtc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QqPjo6b3BlcmF0b3IrKygp4Ahvc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6X19nZXRfcG9pbnRlcigp4Qg2c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QqPjo6X193cmFwX2l0ZXIod2NoYXJfdCop4gjfAXN0ZDo6X18yOjpudW1fcHV0PHdjaGFyX3QsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgd2NoYXJfdCwgbG9uZykgY29uc3TjCIEBc3RkOjpfXzI6Ol9fbnVtX3B1dDx3Y2hhcl90Pjo6X193aWRlbl9hbmRfZ3JvdXBfaW50KGNoYXIqLCBjaGFyKiwgY2hhciosIHdjaGFyX3QqLCB3Y2hhcl90KiYsIHdjaGFyX3QqJiwgc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYp5AijAnN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IHN0ZDo6X18yOjpfX3BhZF9hbmRfb3V0cHV0PHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+KHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCB3Y2hhcl90IGNvbnN0Kiwgd2NoYXJfdCBjb25zdCosIHdjaGFyX3QgY29uc3QqLCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB3Y2hhcl90KeUINHZvaWQgc3RkOjpfXzI6OnJldmVyc2U8d2NoYXJfdCo+KHdjaGFyX3QqLCB3Y2hhcl90KinmCIQBc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6YmFzaWNfc3RyaW5nKHVuc2lnbmVkIGxvbmcsIHdjaGFyX3Qp5wjkAXN0ZDo6X18yOjpudW1fcHV0PHdjaGFyX3QsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgd2NoYXJfdCwgbG9uZyBsb25nKSBjb25zdOgI6AFzdGQ6Ol9fMjo6bnVtX3B1dDx3Y2hhcl90LCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19wdXQoc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHdjaGFyX3QsIHVuc2lnbmVkIGxvbmcpIGNvbnN06QjtAXN0ZDo6X18yOjpudW1fcHV0PHdjaGFyX3QsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgd2NoYXJfdCwgdW5zaWduZWQgbG9uZyBsb25nKSBjb25zdOoI4QFzdGQ6Ol9fMjo6bnVtX3B1dDx3Y2hhcl90LCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19wdXQoc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHdjaGFyX3QsIGRvdWJsZSkgY29uc3TrCD9zdGQ6Ol9fMjo6dW5pcXVlX3B0cjx3Y2hhcl90LCB2b2lkICgqKSh2b2lkKik+OjpyZXNldCh3Y2hhcl90KinsCIMBc3RkOjpfXzI6Ol9fbnVtX3B1dDx3Y2hhcl90Pjo6X193aWRlbl9hbmRfZ3JvdXBfZmxvYXQoY2hhciosIGNoYXIqLCBjaGFyKiwgd2NoYXJfdCosIHdjaGFyX3QqJiwgd2NoYXJfdComLCBzdGQ6Ol9fMjo6bG9jYWxlIGNvbnN0JintCD1zdGQ6Ol9fMjo6dW5pcXVlX3B0cjx3Y2hhcl90LCB2b2lkICgqKSh2b2lkKik+Ojp+dW5pcXVlX3B0cigp7gjmAXN0ZDo6X18yOjpudW1fcHV0PHdjaGFyX3QsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgd2NoYXJfdCwgbG9uZyBkb3VibGUpIGNvbnN07wjmAXN0ZDo6X18yOjpudW1fcHV0PHdjaGFyX3QsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgd2NoYXJfdCwgdm9pZCBjb25zdCopIGNvbnN08AhTdm9pZCBzdGQ6Ol9fMjo6X19yZXZlcnNlPGNoYXIqPihjaGFyKiwgY2hhciosIHN0ZDo6X18yOjpyYW5kb21fYWNjZXNzX2l0ZXJhdG9yX3RhZynxCFx2b2lkIHN0ZDo6X18yOjpfX3JldmVyc2U8d2NoYXJfdCo+KHdjaGFyX3QqLCB3Y2hhcl90Kiwgc3RkOjpfXzI6OnJhbmRvbV9hY2Nlc3NfaXRlcmF0b3JfdGFnKfIIsAJzdGQ6Ol9fMjo6dGltZV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6Z2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgdG0qLCBjaGFyIGNvbnN0KiwgY2hhciBjb25zdCopIGNvbnN08wgvc3RkOjpfXzI6OmN0eXBlPGNoYXI+OjpuYXJyb3coY2hhciwgY2hhcikgY29uc3T0CHNzdGQ6Ol9fMjo6dGltZV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fZGF0ZV9vcmRlcigpIGNvbnN09QieAnN0ZDo6X18yOjp0aW1lX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19nZXRfdGltZShzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHRtKikgY29uc3T2CJ4Cc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46OmRvX2dldF9kYXRlKHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgdG0qKSBjb25zdPcIoQJzdGQ6Ol9fMjo6dGltZV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fZ2V0X3dlZWtkYXkoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB0bSopIGNvbnN0+AivAnN0ZDo6X18yOjp0aW1lX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+OjpfX2dldF93ZWVrZGF5bmFtZShpbnQmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj4gY29uc3QmKSBjb25zdPkIowJzdGQ6Ol9fMjo6dGltZV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fZ2V0X21vbnRobmFtZShzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHRtKikgY29uc3T6CK0Cc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZ2V0X21vbnRobmFtZShpbnQmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj4gY29uc3QmKSBjb25zdPsIngJzdGQ6Ol9fMjo6dGltZV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fZ2V0X3llYXIoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB0bSopIGNvbnN0/AioAnN0ZDo6X18yOjp0aW1lX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+OjpfX2dldF95ZWFyKGludCYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpjdHlwZTxjaGFyPiBjb25zdCYpIGNvbnN0/QilAmludCBzdGQ6Ol9fMjo6X19nZXRfdXBfdG9fbl9kaWdpdHM8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj4gY29uc3QmLCBpbnQp/gilAnN0ZDo6X18yOjp0aW1lX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB0bSosIGNoYXIsIGNoYXIpIGNvbnN0/winAnN0ZDo6X18yOjp0aW1lX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+OjpfX2dldF9kYXkoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPGNoYXI+IGNvbnN0JikgY29uc3SACagCc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZ2V0X2hvdXIoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPGNoYXI+IGNvbnN0JikgY29uc3SBCasCc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZ2V0XzEyX2hvdXIoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPGNoYXI+IGNvbnN0JikgY29uc3SCCbACc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZ2V0X2RheV95ZWFyX251bShpbnQmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj4gY29uc3QmKSBjb25zdIMJqQJzdGQ6Ol9fMjo6dGltZV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6X19nZXRfbW9udGgoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPGNoYXI+IGNvbnN0JikgY29uc3SECaoCc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZ2V0X21pbnV0ZShpbnQmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj4gY29uc3QmKSBjb25zdIUJqQJzdGQ6Ol9fMjo6dGltZV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6X19nZXRfd2hpdGVfc3BhY2Uoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPGNoYXI+IGNvbnN0JikgY29uc3SGCakCc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZ2V0X2FtX3BtKGludCYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpjdHlwZTxjaGFyPiBjb25zdCYpIGNvbnN0hwmqAnN0ZDo6X18yOjp0aW1lX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+OjpfX2dldF9zZWNvbmQoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPGNoYXI+IGNvbnN0JikgY29uc3SICasCc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZ2V0X3dlZWtkYXkoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPGNoYXI+IGNvbnN0JikgY29uc3SJCakCc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZ2V0X3llYXI0KGludCYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpjdHlwZTxjaGFyPiBjb25zdCYpIGNvbnN0igmlAnN0ZDo6X18yOjp0aW1lX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+OjpfX2dldF9wZXJjZW50KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpjdHlwZTxjaGFyPiBjb25zdCYpIGNvbnN0iwnLAnN0ZDo6X18yOjp0aW1lX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+OjpnZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB0bSosIHdjaGFyX3QgY29uc3QqLCB3Y2hhcl90IGNvbnN0KikgY29uc3SMCTVzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD46Om5hcnJvdyh3Y2hhcl90LCBjaGFyKSBjb25zdI0JswJzdGQ6Ol9fMjo6dGltZV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0X3RpbWUoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB0bSopIGNvbnN0jgmzAnN0ZDo6X18yOjp0aW1lX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19nZXRfZGF0ZShzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHRtKikgY29uc3SPCXFzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpfX2lzX2xvbmcoKSBjb25zdJAJtgJzdGQ6Ol9fMjo6dGltZV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0X3dlZWtkYXkoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB0bSopIGNvbnN0kQnHAnN0ZDo6X18yOjp0aW1lX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+OjpfX2dldF93ZWVrZGF5bmFtZShpbnQmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD4gY29uc3QmKSBjb25zdJIJuAJzdGQ6Ol9fMjo6dGltZV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0X21vbnRobmFtZShzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHRtKikgY29uc3STCcUCc3RkOjpfXzI6OnRpbWVfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZ2V0X21vbnRobmFtZShpbnQmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD4gY29uc3QmKSBjb25zdJQJswJzdGQ6Ol9fMjo6dGltZV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0X3llYXIoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB0bSopIGNvbnN0lQnAAnN0ZDo6X18yOjp0aW1lX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+OjpfX2dldF95ZWFyKGludCYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90PiBjb25zdCYpIGNvbnN0lgm9AmludCBzdGQ6Ol9fMjo6X19nZXRfdXBfdG9fbl9kaWdpdHM8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD4gY29uc3QmLCBpbnQplwm6AnN0ZDo6X18yOjp0aW1lX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB0bSosIGNoYXIsIGNoYXIpIGNvbnN0mAm/AnN0ZDo6X18yOjp0aW1lX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+OjpfX2dldF9kYXkoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+IGNvbnN0JikgY29uc3SZCcACc3RkOjpfXzI6OnRpbWVfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZ2V0X2hvdXIoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+IGNvbnN0JikgY29uc3SaCcMCc3RkOjpfXzI6OnRpbWVfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZ2V0XzEyX2hvdXIoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+IGNvbnN0JikgY29uc3SbCcgCc3RkOjpfXzI6OnRpbWVfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZ2V0X2RheV95ZWFyX251bShpbnQmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD4gY29uc3QmKSBjb25zdJwJwQJzdGQ6Ol9fMjo6dGltZV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6X19nZXRfbW9udGgoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+IGNvbnN0JikgY29uc3SdCcICc3RkOjpfXzI6OnRpbWVfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZ2V0X21pbnV0ZShpbnQmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD4gY29uc3QmKSBjb25zdJ4JwQJzdGQ6Ol9fMjo6dGltZV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6X19nZXRfd2hpdGVfc3BhY2Uoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+IGNvbnN0JikgY29uc3SfCcECc3RkOjpfXzI6OnRpbWVfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZ2V0X2FtX3BtKGludCYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90PiBjb25zdCYpIGNvbnN0oAnCAnN0ZDo6X18yOjp0aW1lX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+OjpfX2dldF9zZWNvbmQoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+IGNvbnN0JikgY29uc3ShCcMCc3RkOjpfXzI6OnRpbWVfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZ2V0X3dlZWtkYXkoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+IGNvbnN0JikgY29uc3SiCcECc3RkOjpfXzI6OnRpbWVfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZ2V0X3llYXI0KGludCYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90PiBjb25zdCYpIGNvbnN0owm9AnN0ZDo6X18yOjp0aW1lX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+OjpfX2dldF9wZXJjZW50KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90PiBjb25zdCYpIGNvbnN0pAnfAXN0ZDo6X18yOjp0aW1lX3B1dDxjaGFyLCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19wdXQoc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIGNoYXIsIHRtIGNvbnN0KiwgY2hhciwgY2hhcikgY29uc3SlCUpzdGQ6Ol9fMjo6X190aW1lX3B1dDo6X19kb19wdXQoY2hhciosIGNoYXIqJiwgdG0gY29uc3QqLCBjaGFyLCBjaGFyKSBjb25zdKYJjQFzdGQ6Ol9fMjo6ZW5hYmxlX2lmPChpc19tb3ZlX2NvbnN0cnVjdGlibGU8Y2hhcj46OnZhbHVlKSAmJiAoaXNfbW92ZV9hc3NpZ25hYmxlPGNoYXI+Ojp2YWx1ZSksIHZvaWQ+Ojp0eXBlIHN0ZDo6X18yOjpzd2FwPGNoYXI+KGNoYXImLCBjaGFyJimnCVZ1bnNpZ25lZCBsb25nIHN0ZDo6X18yOjooYW5vbnltb3VzIG5hbWVzcGFjZSk6OmNvdW50b2Y8Y2hhcj4oY2hhciBjb25zdCosIGNoYXIgY29uc3QqKagJ8QFzdGQ6Ol9fMjo6dGltZV9wdXQ8d2NoYXJfdCwgc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fcHV0KHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB3Y2hhcl90LCB0bSBjb25zdCosIGNoYXIsIGNoYXIpIGNvbnN0qQlQc3RkOjpfXzI6Ol9fdGltZV9wdXQ6Ol9fZG9fcHV0KHdjaGFyX3QqLCB3Y2hhcl90KiYsIHRtIGNvbnN0KiwgY2hhciwgY2hhcikgY29uc3SqCV91bnNpZ25lZCBsb25nIHN0ZDo6X18yOjooYW5vbnltb3VzIG5hbWVzcGFjZSk6OmNvdW50b2Y8d2NoYXJfdD4od2NoYXJfdCBjb25zdCosIHdjaGFyX3QgY29uc3QqKasJZXN0ZDo6X18yOjpfX2xpYmNwcF9tYnNydG93Y3NfbCh3Y2hhcl90KiwgY2hhciBjb25zdCoqLCB1bnNpZ25lZCBsb25nLCBfX21ic3RhdGVfdCosIF9fbG9jYWxlX3N0cnVjdCoprAk7c3RkOjpfXzI6Om1vbmV5cHVuY3Q8Y2hhciwgZmFsc2U+Ojpkb19kZWNpbWFsX3BvaW50KCkgY29uc3StCTZzdGQ6Ol9fMjo6bW9uZXlwdW5jdDxjaGFyLCBmYWxzZT46OmRvX2dyb3VwaW5nKCkgY29uc3SuCTtzdGQ6Ol9fMjo6bW9uZXlwdW5jdDxjaGFyLCBmYWxzZT46OmRvX25lZ2F0aXZlX3NpZ24oKSBjb25zdK8JOHN0ZDo6X18yOjptb25leXB1bmN0PGNoYXIsIGZhbHNlPjo6ZG9fcG9zX2Zvcm1hdCgpIGNvbnN0sAk+c3RkOjpfXzI6Om1vbmV5cHVuY3Q8d2NoYXJfdCwgZmFsc2U+Ojpkb19kZWNpbWFsX3BvaW50KCkgY29uc3SxCTxzdGQ6Ol9fMjo6bW9uZXlwdW5jdDx3Y2hhcl90LCBmYWxzZT46OmRvX2N1cnJfc3ltYm9sKCkgY29uc3SyCW5zdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpiYXNpY19zdHJpbmcoKbMJaHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46Ol9femVybygptAk+c3RkOjpfXzI6Om1vbmV5cHVuY3Q8d2NoYXJfdCwgZmFsc2U+Ojpkb19uZWdhdGl2ZV9zaWduKCkgY29uc3S1CakCc3RkOjpfXzI6Om1vbmV5X2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBib29sLCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBsb25nIGRvdWJsZSYpIGNvbnN0tgmMA3N0ZDo6X18yOjptb25leV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6X19kb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgYm9vbCwgc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYsIHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50JiwgYm9vbCYsIHN0ZDo6X18yOjpjdHlwZTxjaGFyPiBjb25zdCYsIHN0ZDo6X18yOjp1bmlxdWVfcHRyPGNoYXIsIHZvaWQgKCopKHZvaWQqKT4mLCBjaGFyKiYsIGNoYXIqKbcJOHN0ZDo6X18yOjp1bmlxdWVfcHRyPGNoYXIsIHZvaWQgKCopKHZvaWQqKT46OmdldCgpIGNvbnN0uAndA3N0ZDo6X18yOjpfX21vbmV5X2dldDxjaGFyPjo6X19nYXRoZXJfaW5mbyhib29sLCBzdGQ6Ol9fMjo6bG9jYWxlIGNvbnN0Jiwgc3RkOjpfXzI6Om1vbmV5X2Jhc2U6OnBhdHRlcm4mLCBjaGFyJiwgY2hhciYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mLCBpbnQmKbkJUnN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjpvcGVyYXRvcisrKGludCm6CagBc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIgY29uc3QqPjo6X193cmFwX2l0ZXI8Y2hhcio+KHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyKj4gY29uc3QmLCBzdGQ6Ol9fMjo6ZW5hYmxlX2lmPGlzX2NvbnZlcnRpYmxlPGNoYXIqLCBjaGFyIGNvbnN0Kj46OnZhbHVlLCB2b2lkPjo6dHlwZSopuwl9Ym9vbCBzdGQ6Ol9fMjo6b3BlcmF0b3IhPTxjaGFyIGNvbnN0KiwgY2hhcio+KHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyIGNvbnN0Kj4gY29uc3QmLCBzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8Y2hhcio+IGNvbnN0Jim8CWZ2b2lkIHN0ZDo6X18yOjpfX2RvdWJsZV9vcl9ub3RoaW5nPGNoYXI+KHN0ZDo6X18yOjp1bmlxdWVfcHRyPGNoYXIsIHZvaWQgKCopKHZvaWQqKT4mLCBjaGFyKiYsIGNoYXIqJim9CYYBdm9pZCBzdGQ6Ol9fMjo6X19kb3VibGVfb3Jfbm90aGluZzx1bnNpZ25lZCBpbnQ+KHN0ZDo6X18yOjp1bmlxdWVfcHRyPHVuc2lnbmVkIGludCwgdm9pZCAoKikodm9pZCopPiYsIHVuc2lnbmVkIGludComLCB1bnNpZ25lZCBpbnQqJim+CfMCc3RkOjpfXzI6Om1vbmV5X2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBib29sLCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+JikgY29uc3S/CdoBc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiYgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19hcHBlbmRfZm9yd2FyZF91bnNhZmU8Y2hhcio+KGNoYXIqLCBjaGFyKinACXdzdGQ6Ol9fMjo6bW9uZXlwdW5jdDxjaGFyLCB0cnVlPiBjb25zdCYgc3RkOjpfXzI6OnVzZV9mYWNldDxzdGQ6Ol9fMjo6bW9uZXlwdW5jdDxjaGFyLCB0cnVlPiA+KHN0ZDo6X18yOjpsb2NhbGUgY29uc3QmKcEJNHN0ZDo6X18yOjptb25leXB1bmN0PGNoYXIsIHRydWU+OjpuZWdfZm9ybWF0KCkgY29uc3TCCTdzdGQ6Ol9fMjo6bW9uZXlwdW5jdDxjaGFyLCB0cnVlPjo6bmVnYXRpdmVfc2lnbigpIGNvbnN0wwm5AXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Om9wZXJhdG9yPShzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+JiYpxAk1c3RkOjpfXzI6Om1vbmV5cHVuY3Q8Y2hhciwgdHJ1ZT46OmZyYWNfZGlnaXRzKCkgY29uc3TFCXlzdGQ6Ol9fMjo6bW9uZXlwdW5jdDxjaGFyLCBmYWxzZT4gY29uc3QmIHN0ZDo6X18yOjp1c2VfZmFjZXQ8c3RkOjpfXzI6Om1vbmV5cHVuY3Q8Y2hhciwgZmFsc2U+ID4oc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYpxgnvAWJvb2wgc3RkOjpfXzI6OmVxdWFsPHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyKj4sIHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyKj4sIHN0ZDo6X18yOjpfX2VxdWFsX3RvPGNoYXIsIGNoYXI+ID4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIqPiwgc3RkOjpfXzI6Ol9fZXF1YWxfdG88Y2hhciwgY2hhcj4pxwkzc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIqPjo6b3BlcmF0b3IrKGxvbmcpIGNvbnN0yAk2c3RkOjpfXzI6OnVuaXF1ZV9wdHI8Y2hhciwgdm9pZCAoKikodm9pZCopPjo6cmVsZWFzZSgpyQk+c3RkOjpfXzI6OnVuaXF1ZV9wdHI8dW5zaWduZWQgaW50LCB2b2lkICgqKSh2b2lkKik+OjpyZWxlYXNlKCnKCb4Cc3RkOjpfXzI6Om1vbmV5X2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBib29sLCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBsb25nIGRvdWJsZSYpIGNvbnN0ywmtA3N0ZDo6X18yOjptb25leV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6X19kb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgYm9vbCwgc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYsIHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50JiwgYm9vbCYsIHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90PiBjb25zdCYsIHN0ZDo6X18yOjp1bmlxdWVfcHRyPHdjaGFyX3QsIHZvaWQgKCopKHZvaWQqKT4mLCB3Y2hhcl90KiYsIHdjaGFyX3QqKcwJgQRzdGQ6Ol9fMjo6X19tb25leV9nZXQ8d2NoYXJfdD46Ol9fZ2F0aGVyX2luZm8oYm9vbCwgc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYsIHN0ZDo6X18yOjptb25leV9iYXNlOjpwYXR0ZXJuJiwgd2NoYXJfdCYsIHdjaGFyX3QmLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+JiwgaW50JinNCVhzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPjo6b3BlcmF0b3IrKyhpbnQpzgm3AXN0ZDo6X18yOjpfX3dyYXBfaXRlcjx3Y2hhcl90IGNvbnN0Kj46Ol9fd3JhcF9pdGVyPHdjaGFyX3QqPihzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8d2NoYXJfdCo+IGNvbnN0Jiwgc3RkOjpfXzI6OmVuYWJsZV9pZjxpc19jb252ZXJ0aWJsZTx3Y2hhcl90Kiwgd2NoYXJfdCBjb25zdCo+Ojp2YWx1ZSwgdm9pZD46OnR5cGUqKc8JkQNzdGQ6Ol9fMjo6bW9uZXlfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX2dldChzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIGJvb2wsIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4mKSBjb25zdNAJZ3N0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46OmNsZWFyKCnRCX5zdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpfX3NldF9sb25nX3NpemUodW5zaWduZWQgbG9uZynSCX9zdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpfX3NldF9zaG9ydF9zaXplKHVuc2lnbmVkIGxvbmcp0wn1AXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4mIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46Ol9fYXBwZW5kX2ZvcndhcmRfdW5zYWZlPHdjaGFyX3QqPih3Y2hhcl90Kiwgd2NoYXJfdCop1Al9c3RkOjpfXzI6Om1vbmV5cHVuY3Q8d2NoYXJfdCwgdHJ1ZT4gY29uc3QmIHN0ZDo6X18yOjp1c2VfZmFjZXQ8c3RkOjpfXzI6Om1vbmV5cHVuY3Q8d2NoYXJfdCwgdHJ1ZT4gPihzdGQ6Ol9fMjo6bG9jYWxlIGNvbnN0JinVCcsBc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6b3BlcmF0b3I9KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4mJinWCX9zdGQ6Ol9fMjo6bW9uZXlwdW5jdDx3Y2hhcl90LCBmYWxzZT4gY29uc3QmIHN0ZDo6X18yOjp1c2VfZmFjZXQ8c3RkOjpfXzI6Om1vbmV5cHVuY3Q8d2NoYXJfdCwgZmFsc2U+ID4oc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYp1wmKAmJvb2wgc3RkOjpfXzI6OmVxdWFsPHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx3Y2hhcl90Kj4sIHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx3Y2hhcl90Kj4sIHN0ZDo6X18yOjpfX2VxdWFsX3RvPHdjaGFyX3QsIHdjaGFyX3Q+ID4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QqPiwgc3RkOjpfXzI6Ol9fZXF1YWxfdG88d2NoYXJfdCwgd2NoYXJfdD4p2Ak2c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QqPjo6b3BlcmF0b3IrKGxvbmcpIGNvbnN02QnlAXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Ol9fbW92ZV9hc3NpZ24oc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiYsIHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCB0cnVlPinaCfcBc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6X19tb3ZlX2Fzc2lnbihzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+Jiwgc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIHRydWU+KdsJ3AFzdGQ6Ol9fMjo6bW9uZXlfcHV0PGNoYXIsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgYm9vbCwgc3RkOjpfXzI6Omlvc19iYXNlJiwgY2hhciwgbG9uZyBkb3VibGUpIGNvbnN03AmLA3N0ZDo6X18yOjpfX21vbmV5X3B1dDxjaGFyPjo6X19nYXRoZXJfaW5mbyhib29sLCBib29sLCBzdGQ6Ol9fMjo6bG9jYWxlIGNvbnN0Jiwgc3RkOjpfXzI6Om1vbmV5X2Jhc2U6OnBhdHRlcm4mLCBjaGFyJiwgY2hhciYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiYsIGludCYp3QnZA3N0ZDo6X18yOjpfX21vbmV5X3B1dDxjaGFyPjo6X19mb3JtYXQoY2hhciosIGNoYXIqJiwgY2hhciomLCB1bnNpZ25lZCBpbnQsIGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0Kiwgc3RkOjpfXzI6OmN0eXBlPGNoYXI+IGNvbnN0JiwgYm9vbCwgc3RkOjpfXzI6Om1vbmV5X2Jhc2U6OnBhdHRlcm4gY29uc3QmLCBjaGFyLCBjaGFyLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmLCBpbnQp3gk0c3RkOjpfXzI6Om1vbmV5cHVuY3Q8Y2hhciwgdHJ1ZT46OnBvc19mb3JtYXQoKSBjb25zdN8JjgFjaGFyKiBzdGQ6Ol9fMjo6Y29weTxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8Y2hhciBjb25zdCo+LCBjaGFyKj4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIgY29uc3QqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIgY29uc3QqPiwgY2hhciop4AmtAnN0ZDo6X18yOjptb25leV9wdXQ8Y2hhciwgc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fcHV0KHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBib29sLCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCBjaGFyLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JikgY29uc3ThCe4Bc3RkOjpfXzI6Om1vbmV5X3B1dDx3Y2hhcl90LCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19wdXQoc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIGJvb2wsIHN0ZDo6X18yOjppb3NfYmFzZSYsIHdjaGFyX3QsIGxvbmcgZG91YmxlKSBjb25zdOIJpgNzdGQ6Ol9fMjo6X19tb25leV9wdXQ8d2NoYXJfdD46Ol9fZ2F0aGVyX2luZm8oYm9vbCwgYm9vbCwgc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYsIHN0ZDo6X18yOjptb25leV9iYXNlOjpwYXR0ZXJuJiwgd2NoYXJfdCYsIHdjaGFyX3QmLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4mLCBpbnQmKeMJhgRzdGQ6Ol9fMjo6X19tb25leV9wdXQ8d2NoYXJfdD46Ol9fZm9ybWF0KHdjaGFyX3QqLCB3Y2hhcl90KiYsIHdjaGFyX3QqJiwgdW5zaWduZWQgaW50LCB3Y2hhcl90IGNvbnN0Kiwgd2NoYXJfdCBjb25zdCosIHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90PiBjb25zdCYsIGJvb2wsIHN0ZDo6X18yOjptb25leV9iYXNlOjpwYXR0ZXJuIGNvbnN0Jiwgd2NoYXJfdCwgd2NoYXJfdCwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+IGNvbnN0JiwgaW50KeQJoAF3Y2hhcl90KiBzdGQ6Ol9fMjo6Y29weTxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8d2NoYXJfdCBjb25zdCo+LCB3Y2hhcl90Kj4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QgY29uc3QqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QgY29uc3QqPiwgd2NoYXJfdCop5QnIAnN0ZDo6X18yOjptb25leV9wdXQ8d2NoYXJfdCwgc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fcHV0KHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBib29sLCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB3Y2hhcl90LCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+IGNvbnN0JikgY29uc3TmCdUBc3RkOjpfXzI6OmVuYWJsZV9pZjwoaXNfc2FtZTxzdGQ6Ol9fMjo6cmVtb3ZlX2NvbnN0PGNoYXIgY29uc3Q+Ojp0eXBlLCBjaGFyPjo6dmFsdWUpICYmIChpc190cml2aWFsbHlfY29weV9hc3NpZ25hYmxlPGNoYXI+Ojp2YWx1ZSksIGNoYXIqPjo6dHlwZSBzdGQ6Ol9fMjo6X19jb3B5PGNoYXIgY29uc3QsIGNoYXI+KGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KiwgY2hhciop5wmfAXN0ZDo6X18yOjplbmFibGVfaWY8aXNfdHJpdmlhbGx5X2NvcHlfYXNzaWduYWJsZTx3Y2hhcl90Pjo6dmFsdWUsIHdjaGFyX3QgY29uc3QqPjo6dHlwZSBzdGQ6Ol9fMjo6X191bndyYXBfaXRlcjx3Y2hhcl90PihzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8d2NoYXJfdCBjb25zdCo+KegJngFzdGQ6Ol9fMjo6bWVzc2FnZXM8Y2hhcj46OmRvX29wZW4oc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjpsb2NhbGUgY29uc3QmKSBjb25zdOkJlAFzdGQ6Ol9fMjo6bWVzc2FnZXM8Y2hhcj46OmRvX2dldChsb25nLCBpbnQsIGludCwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYpIGNvbnN06gm+AnN0ZDo6X18yOjpiYWNrX2luc2VydF9pdGVyYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gc3RkOjpfXzI6OmJhY2tfaW5zZXJ0ZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mKesJuANzdGQ6Ol9fMjo6YmFja19pbnNlcnRfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+IHN0ZDo6X18yOjpfX25hcnJvd190b191dGY4PDh1bD46Om9wZXJhdG9yKCk8c3RkOjpfXzI6OmJhY2tfaW5zZXJ0X2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiwgY2hhcj4oc3RkOjpfXzI6OmJhY2tfaW5zZXJ0X2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiwgY2hhciBjb25zdCosIGNoYXIgY29uc3QqKSBjb25zdOwJjgFzdGQ6Ol9fMjo6YmFja19pbnNlcnRfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+OjpvcGVyYXRvcj0oY2hhciBjb25zdCYp7QmgAXN0ZDo6X18yOjptZXNzYWdlczx3Y2hhcl90Pjo6ZG9fZ2V0KGxvbmcsIGludCwgaW50LCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+IGNvbnN0JikgY29uc3TuCcIDc3RkOjpfXzI6OmJhY2tfaW5zZXJ0X2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiBzdGQ6Ol9fMjo6X19uYXJyb3dfdG9fdXRmODwzMnVsPjo6b3BlcmF0b3IoKTxzdGQ6Ol9fMjo6YmFja19pbnNlcnRfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+LCB3Y2hhcl90PihzdGQ6Ol9fMjo6YmFja19pbnNlcnRfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+LCB3Y2hhcl90IGNvbnN0Kiwgd2NoYXJfdCBjb25zdCopIGNvbnN07wnZAnN0ZDo6X18yOjpiYWNrX2luc2VydF9pdGVyYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+ID4gc3RkOjpfXzI6OmJhY2tfaW5zZXJ0ZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPiA+KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4mKfAJ0ANzdGQ6Ol9fMjo6YmFja19pbnNlcnRfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPiA+IHN0ZDo6X18yOjpfX3dpZGVuX2Zyb21fdXRmODwzMnVsPjo6b3BlcmF0b3IoKTxzdGQ6Ol9fMjo6YmFja19pbnNlcnRfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPiA+ID4oc3RkOjpfXzI6OmJhY2tfaW5zZXJ0X2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4gPiwgY2hhciBjb25zdCosIGNoYXIgY29uc3QqKSBjb25zdPEJRnN0ZDo6X18yOjpjb2RlY3Z0PGNoYXIzMl90LCBjaGFyLCBfX21ic3RhdGVfdD46OmNvZGVjdnQodW5zaWduZWQgbG9uZynyCTlzdGQ6Ol9fMjo6Y29kZWN2dDx3Y2hhcl90LCBjaGFyLCBfX21ic3RhdGVfdD46On5jb2RlY3Z0KCnzCS1zdGQ6Ol9fMjo6bG9jYWxlOjpfX2ltcDo6X19pbXAodW5zaWduZWQgbG9uZyn0CS1zdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldDo6ZmFjZXQodW5zaWduZWQgbG9uZyn1CX5zdGQ6Ol9fMjo6X192ZWN0b3JfYmFzZTxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiA+OjpfX3ZlY3Rvcl9iYXNlKCn2CYIBc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiA+OjpfX3ZhbGxvY2F0ZSh1bnNpZ25lZCBsb25nKfcJiQFzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kiwgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+ID46Ol9fY29uc3RydWN0X2F0X2VuZCh1bnNpZ25lZCBsb25nKfgJdHN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPjo6c2l6ZSgpIGNvbnN0+Ql2c3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2U8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPjo6Y2xlYXIoKfoJjgFzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kiwgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+ID46Ol9fYW5ub3RhdGVfc2hyaW5rKHVuc2lnbmVkIGxvbmcpIGNvbnN0+wkdc3RkOjpfXzI6OmxvY2FsZTo6aWQ6Ol9fZ2V0KCn8CUBzdGQ6Ol9fMjo6bG9jYWxlOjpfX2ltcDo6aW5zdGFsbChzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIGxvbmcp/QlIc3RkOjpfXzI6OmN0eXBlPGNoYXI+OjpjdHlwZSh1bnNpZ25lZCBzaG9ydCBjb25zdCosIGJvb2wsIHVuc2lnbmVkIGxvbmcp/gkbc3RkOjpfXzI6OmxvY2FsZTo6Y2xhc3NpYygp/wmBAXN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPjo6b3BlcmF0b3JbXSh1bnNpZ25lZCBsb25nKYAKiQFzdGQ6Ol9fMjo6dW5pcXVlX3B0cjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCwgc3RkOjpfXzI6Oihhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVsZWFzZT46OnVuaXF1ZV9wdHI8dHJ1ZSwgdm9pZD4oc3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqKYEKfXN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPjo6cmVzaXplKHVuc2lnbmVkIGxvbmcpggohc3RkOjpfXzI6OmxvY2FsZTo6X19pbXA6On5fX2ltcCgpgwqBAXN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPjo6X19hbm5vdGF0ZV9kZWxldGUoKSBjb25zdIQKI3N0ZDo6X18yOjpsb2NhbGU6Ol9faW1wOjp+X19pbXAoKS4xhQp/c3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiA+OjpfX2FwcGVuZCh1bnNpZ25lZCBsb25nKYYKMXN0ZDo6X18yOjpsb2NhbGU6OmxvY2FsZShzdGQ6Ol9fMjo6bG9jYWxlIGNvbnN0JimHChxzdGQ6Ol9fMjo6bG9jYWxlOjpfX2dsb2JhbCgpiAoac3RkOjpfXzI6OmxvY2FsZTo6bG9jYWxlKCmJCh5zdGQ6Ol9fMjo6bG9jYWxlOjppZDo6X19pbml0KCmKCowBdm9pZCBzdGQ6Ol9fMjo6Y2FsbF9vbmNlPHN0ZDo6X18yOjooYW5vbnltb3VzIG5hbWVzcGFjZSk6Ol9fZmFrZV9iaW5kPihzdGQ6Ol9fMjo6b25jZV9mbGFnJiwgc3RkOjpfXzI6Oihhbm9ueW1vdXMgbmFtZXNwYWNlKTo6X19mYWtlX2JpbmQmJimLCitzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldDo6X19vbl96ZXJvX3NoYXJlZCgpjAppdm9pZCBzdGQ6Ol9fMjo6X19jYWxsX29uY2VfcHJveHk8c3RkOjpfXzI6OnR1cGxlPHN0ZDo6X18yOjooYW5vbnltb3VzIG5hbWVzcGFjZSk6Ol9fZmFrZV9iaW5kJiY+ID4odm9pZCopjQo+c3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+Ojpkb19pcyh1bnNpZ25lZCBzaG9ydCwgd2NoYXJfdCkgY29uc3SOClZzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD46OmRvX2lzKHdjaGFyX3QgY29uc3QqLCB3Y2hhcl90IGNvbnN0KiwgdW5zaWduZWQgc2hvcnQqKSBjb25zdI8KWnN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90Pjo6ZG9fc2Nhbl9pcyh1bnNpZ25lZCBzaG9ydCwgd2NoYXJfdCBjb25zdCosIHdjaGFyX3QgY29uc3QqKSBjb25zdJAKW3N0ZDo6X18yOjpjdHlwZTx3Y2hhcl90Pjo6ZG9fc2Nhbl9ub3QodW5zaWduZWQgc2hvcnQsIHdjaGFyX3QgY29uc3QqLCB3Y2hhcl90IGNvbnN0KikgY29uc3SRCjNzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD46OmRvX3RvdXBwZXIod2NoYXJfdCkgY29uc3SSCkRzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD46OmRvX3RvdXBwZXIod2NoYXJfdCosIHdjaGFyX3QgY29uc3QqKSBjb25zdJMKM3N0ZDo6X18yOjpjdHlwZTx3Y2hhcl90Pjo6ZG9fdG9sb3dlcih3Y2hhcl90KSBjb25zdJQKRHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90Pjo6ZG9fdG9sb3dlcih3Y2hhcl90Kiwgd2NoYXJfdCBjb25zdCopIGNvbnN0lQouc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+Ojpkb193aWRlbihjaGFyKSBjb25zdJYKTHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90Pjo6ZG9fd2lkZW4oY2hhciBjb25zdCosIGNoYXIgY29uc3QqLCB3Y2hhcl90KikgY29uc3SXCjhzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD46OmRvX25hcnJvdyh3Y2hhcl90LCBjaGFyKSBjb25zdJgKVnN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90Pjo6ZG9fbmFycm93KHdjaGFyX3QgY29uc3QqLCB3Y2hhcl90IGNvbnN0KiwgY2hhciwgY2hhciopIGNvbnN0mQofc3RkOjpfXzI6OmN0eXBlPGNoYXI+Ojp+Y3R5cGUoKZoKIXN0ZDo6X18yOjpjdHlwZTxjaGFyPjo6fmN0eXBlKCkuMZsKLXN0ZDo6X18yOjpjdHlwZTxjaGFyPjo6ZG9fdG91cHBlcihjaGFyKSBjb25zdJwKO3N0ZDo6X18yOjpjdHlwZTxjaGFyPjo6ZG9fdG91cHBlcihjaGFyKiwgY2hhciBjb25zdCopIGNvbnN0nQotc3RkOjpfXzI6OmN0eXBlPGNoYXI+Ojpkb190b2xvd2VyKGNoYXIpIGNvbnN0ngo7c3RkOjpfXzI6OmN0eXBlPGNoYXI+Ojpkb190b2xvd2VyKGNoYXIqLCBjaGFyIGNvbnN0KikgY29uc3SfCkZzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj46OmRvX3dpZGVuKGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KiwgY2hhciopIGNvbnN0oAoyc3RkOjpfXzI6OmN0eXBlPGNoYXI+Ojpkb19uYXJyb3coY2hhciwgY2hhcikgY29uc3ShCk1zdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj46OmRvX25hcnJvdyhjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIGNoYXIsIGNoYXIqKSBjb25zdKIKhAFzdGQ6Ol9fMjo6Y29kZWN2dDxjaGFyLCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX291dChfX21ic3RhdGVfdCYsIGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KiwgY2hhciBjb25zdComLCBjaGFyKiwgY2hhciosIGNoYXIqJikgY29uc3SjCmBzdGQ6Ol9fMjo6Y29kZWN2dDxjaGFyLCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX3Vuc2hpZnQoX19tYnN0YXRlX3QmLCBjaGFyKiwgY2hhciosIGNoYXIqJikgY29uc3SkCj9zdGQ6Ol9fMjo6Y29kZWN2dDxjaGFyLCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX2VuY29kaW5nKCkgY29uc3SlCnJzdGQ6Ol9fMjo6Y29kZWN2dDxjaGFyLCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX2xlbmd0aChfX21ic3RhdGVfdCYsIGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZykgY29uc3SmCjtzdGQ6Ol9fMjo6Y29kZWN2dDx3Y2hhcl90LCBjaGFyLCBfX21ic3RhdGVfdD46On5jb2RlY3Z0KCkuMacKkAFzdGQ6Ol9fMjo6Y29kZWN2dDx3Y2hhcl90LCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX291dChfX21ic3RhdGVfdCYsIHdjaGFyX3QgY29uc3QqLCB3Y2hhcl90IGNvbnN0Kiwgd2NoYXJfdCBjb25zdComLCBjaGFyKiwgY2hhciosIGNoYXIqJikgY29uc3SoCnVzdGQ6Ol9fMjo6X19saWJjcHBfd2NzbnJ0b21ic19sKGNoYXIqLCB3Y2hhcl90IGNvbnN0KiosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcsIF9fbWJzdGF0ZV90KiwgX19sb2NhbGVfc3RydWN0KimpCkxzdGQ6Ol9fMjo6X19saWJjcHBfd2NydG9tYl9sKGNoYXIqLCB3Y2hhcl90LCBfX21ic3RhdGVfdCosIF9fbG9jYWxlX3N0cnVjdCopqgqPAXN0ZDo6X18yOjpjb2RlY3Z0PHdjaGFyX3QsIGNoYXIsIF9fbWJzdGF0ZV90Pjo6ZG9faW4oX19tYnN0YXRlX3QmLCBjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIGNoYXIgY29uc3QqJiwgd2NoYXJfdCosIHdjaGFyX3QqLCB3Y2hhcl90KiYpIGNvbnN0qwp1c3RkOjpfXzI6Ol9fbGliY3BwX21ic25ydG93Y3NfbCh3Y2hhcl90KiwgY2hhciBjb25zdCoqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCBfX21ic3RhdGVfdCosIF9fbG9jYWxlX3N0cnVjdCoprApic3RkOjpfXzI6Ol9fbGliY3BwX21icnRvd2NfbCh3Y2hhcl90KiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcsIF9fbWJzdGF0ZV90KiwgX19sb2NhbGVfc3RydWN0KimtCmNzdGQ6Ol9fMjo6Y29kZWN2dDx3Y2hhcl90LCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX3Vuc2hpZnQoX19tYnN0YXRlX3QmLCBjaGFyKiwgY2hhciosIGNoYXIqJikgY29uc3SuCkJzdGQ6Ol9fMjo6Y29kZWN2dDx3Y2hhcl90LCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX2VuY29kaW5nKCkgY29uc3SvClNzdGQ6Ol9fMjo6X19saWJjcHBfbWJ0b3djX2wod2NoYXJfdCosIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nLCBfX2xvY2FsZV9zdHJ1Y3QqKbAKMXN0ZDo6X18yOjpfX2xpYmNwcF9tYl9jdXJfbWF4X2woX19sb2NhbGVfc3RydWN0KimxCnVzdGQ6Ol9fMjo6Y29kZWN2dDx3Y2hhcl90LCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX2xlbmd0aChfX21ic3RhdGVfdCYsIGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZykgY29uc3SyCldzdGQ6Ol9fMjo6X19saWJjcHBfbWJybGVuX2woY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcsIF9fbWJzdGF0ZV90KiwgX19sb2NhbGVfc3RydWN0KimzCkRzdGQ6Ol9fMjo6Y29kZWN2dDx3Y2hhcl90LCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX21heF9sZW5ndGgoKSBjb25zdLQKlAFzdGQ6Ol9fMjo6Y29kZWN2dDxjaGFyMTZfdCwgY2hhciwgX19tYnN0YXRlX3Q+Ojpkb19vdXQoX19tYnN0YXRlX3QmLCBjaGFyMTZfdCBjb25zdCosIGNoYXIxNl90IGNvbnN0KiwgY2hhcjE2X3QgY29uc3QqJiwgY2hhciosIGNoYXIqLCBjaGFyKiYpIGNvbnN0tQq1AXN0ZDo6X18yOjp1dGYxNl90b191dGY4KHVuc2lnbmVkIHNob3J0IGNvbnN0KiwgdW5zaWduZWQgc2hvcnQgY29uc3QqLCB1bnNpZ25lZCBzaG9ydCBjb25zdComLCB1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGNoYXIqJiwgdW5zaWduZWQgbG9uZywgc3RkOjpfXzI6OmNvZGVjdnRfbW9kZSm2CpMBc3RkOjpfXzI6OmNvZGVjdnQ8Y2hhcjE2X3QsIGNoYXIsIF9fbWJzdGF0ZV90Pjo6ZG9faW4oX19tYnN0YXRlX3QmLCBjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIGNoYXIgY29uc3QqJiwgY2hhcjE2X3QqLCBjaGFyMTZfdCosIGNoYXIxNl90KiYpIGNvbnN0twq1AXN0ZDo6X18yOjp1dGY4X3RvX3V0ZjE2KHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgY2hhciBjb25zdComLCB1bnNpZ25lZCBzaG9ydCosIHVuc2lnbmVkIHNob3J0KiwgdW5zaWduZWQgc2hvcnQqJiwgdW5zaWduZWQgbG9uZywgc3RkOjpfXzI6OmNvZGVjdnRfbW9kZSm4CnZzdGQ6Ol9fMjo6Y29kZWN2dDxjaGFyMTZfdCwgY2hhciwgX19tYnN0YXRlX3Q+Ojpkb19sZW5ndGgoX19tYnN0YXRlX3QmLCBjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpIGNvbnN0uQqAAXN0ZDo6X18yOjp1dGY4X3RvX3V0ZjE2X2xlbmd0aCh1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcsIHN0ZDo6X18yOjpjb2RlY3Z0X21vZGUpugpFc3RkOjpfXzI6OmNvZGVjdnQ8Y2hhcjE2X3QsIGNoYXIsIF9fbWJzdGF0ZV90Pjo6ZG9fbWF4X2xlbmd0aCgpIGNvbnN0uwqUAXN0ZDo6X18yOjpjb2RlY3Z0PGNoYXIzMl90LCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX291dChfX21ic3RhdGVfdCYsIGNoYXIzMl90IGNvbnN0KiwgY2hhcjMyX3QgY29uc3QqLCBjaGFyMzJfdCBjb25zdComLCBjaGFyKiwgY2hhciosIGNoYXIqJikgY29uc3S8Cq4Bc3RkOjpfXzI6OnVjczRfdG9fdXRmOCh1bnNpZ25lZCBpbnQgY29uc3QqLCB1bnNpZ25lZCBpbnQgY29uc3QqLCB1bnNpZ25lZCBpbnQgY29uc3QqJiwgdW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBjaGFyKiYsIHVuc2lnbmVkIGxvbmcsIHN0ZDo6X18yOjpjb2RlY3Z0X21vZGUpvQqTAXN0ZDo6X18yOjpjb2RlY3Z0PGNoYXIzMl90LCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX2luKF9fbWJzdGF0ZV90JiwgY2hhciBjb25zdCosIGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KiYsIGNoYXIzMl90KiwgY2hhcjMyX3QqLCBjaGFyMzJfdComKSBjb25zdL4KrgFzdGQ6Ol9fMjo6dXRmOF90b191Y3M0KHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgY2hhciBjb25zdComLCB1bnNpZ25lZCBpbnQqLCB1bnNpZ25lZCBpbnQqLCB1bnNpZ25lZCBpbnQqJiwgdW5zaWduZWQgbG9uZywgc3RkOjpfXzI6OmNvZGVjdnRfbW9kZSm/CnZzdGQ6Ol9fMjo6Y29kZWN2dDxjaGFyMzJfdCwgY2hhciwgX19tYnN0YXRlX3Q+Ojpkb19sZW5ndGgoX19tYnN0YXRlX3QmLCBjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpIGNvbnN0wAp/c3RkOjpfXzI6OnV0ZjhfdG9fdWNzNF9sZW5ndGgodW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCBzdGQ6Ol9fMjo6Y29kZWN2dF9tb2RlKcEKJXN0ZDo6X18yOjpudW1wdW5jdDxjaGFyPjo6fm51bXB1bmN0KCnCCidzdGQ6Ol9fMjo6bnVtcHVuY3Q8Y2hhcj46On5udW1wdW5jdCgpLjHDCihzdGQ6Ol9fMjo6bnVtcHVuY3Q8d2NoYXJfdD46On5udW1wdW5jdCgpxAoqc3RkOjpfXzI6Om51bXB1bmN0PHdjaGFyX3Q+Ojp+bnVtcHVuY3QoKS4xxQoyc3RkOjpfXzI6Om51bXB1bmN0PGNoYXI+Ojpkb19kZWNpbWFsX3BvaW50KCkgY29uc3TGCjJzdGQ6Ol9fMjo6bnVtcHVuY3Q8Y2hhcj46OmRvX3Rob3VzYW5kc19zZXAoKSBjb25zdMcKLXN0ZDo6X18yOjpudW1wdW5jdDxjaGFyPjo6ZG9fZ3JvdXBpbmcoKSBjb25zdMgKMHN0ZDo6X18yOjpudW1wdW5jdDx3Y2hhcl90Pjo6ZG9fZ3JvdXBpbmcoKSBjb25zdMkKLXN0ZDo6X18yOjpudW1wdW5jdDxjaGFyPjo6ZG9fdHJ1ZW5hbWUoKSBjb25zdMoKMHN0ZDo6X18yOjpudW1wdW5jdDx3Y2hhcl90Pjo6ZG9fdHJ1ZW5hbWUoKSBjb25zdMsKjAFzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpiYXNpY19zdHJpbmc8c3RkOjpudWxscHRyX3Q+KHdjaGFyX3QgY29uc3QqKcwKLnN0ZDo6X18yOjpudW1wdW5jdDxjaGFyPjo6ZG9fZmFsc2VuYW1lKCkgY29uc3TNCjFzdGQ6Ol9fMjo6bnVtcHVuY3Q8d2NoYXJfdD46OmRvX2ZhbHNlbmFtZSgpIGNvbnN0zgptc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6b3BlcmF0b3I9KGNoYXIgY29uc3QqKc8KNXN0ZDo6X18yOjpfX3RpbWVfZ2V0X2Nfc3RvcmFnZTxjaGFyPjo6X193ZWVrcygpIGNvbnN00AoWc3RkOjpfXzI6OmluaXRfd2Vla3MoKdEKGl9fY3h4X2dsb2JhbF9hcnJheV9kdG9yLjU10go4c3RkOjpfXzI6Ol9fdGltZV9nZXRfY19zdG9yYWdlPHdjaGFyX3Q+OjpfX3dlZWtzKCkgY29uc3TTChdzdGQ6Ol9fMjo6aW5pdF93d2Vla3MoKdQKGl9fY3h4X2dsb2JhbF9hcnJheV9kdG9yLjcw1Qp5c3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6b3BlcmF0b3I9KHdjaGFyX3QgY29uc3QqKdYKNnN0ZDo6X18yOjpfX3RpbWVfZ2V0X2Nfc3RvcmFnZTxjaGFyPjo6X19tb250aHMoKSBjb25zdNcKF3N0ZDo6X18yOjppbml0X21vbnRocygp2AoaX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuODXZCjlzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8d2NoYXJfdD46Ol9fbW9udGhzKCkgY29uc3TaChhzdGQ6Ol9fMjo6aW5pdF93bW9udGhzKCnbChtfX2N4eF9nbG9iYWxfYXJyYXlfZHRvci4xMDncCjVzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8Y2hhcj46Ol9fYW1fcG0oKSBjb25zdN0KFnN0ZDo6X18yOjppbml0X2FtX3BtKCneChtfX2N4eF9nbG9iYWxfYXJyYXlfZHRvci4xMzPfCjhzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8d2NoYXJfdD46Ol9fYW1fcG0oKSBjb25zdOAKF3N0ZDo6X18yOjppbml0X3dhbV9wbSgp4QobX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuMTM24goxc3RkOjpfXzI6Ol9fdGltZV9nZXRfY19zdG9yYWdlPGNoYXI+OjpfX3goKSBjb25zdOMKGV9fY3h4X2dsb2JhbF9hcnJheV9kdG9yLjHkCjRzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8d2NoYXJfdD46Ol9feCgpIGNvbnN05QoaX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuMzLmCjFzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8Y2hhcj46Ol9fWCgpIGNvbnN05woaX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuMzToCjRzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8d2NoYXJfdD46Ol9fWCgpIGNvbnN06QoaX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuMzbqCjFzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8Y2hhcj46Ol9fYygpIGNvbnN06woaX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuMzjsCjRzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8d2NoYXJfdD46Ol9fYygpIGNvbnN07QoaX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuNDDuCjFzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8Y2hhcj46Ol9fcigpIGNvbnN07woaX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuNDLwCjRzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8d2NoYXJfdD46Ol9fcigpIGNvbnN08QoaX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuNDTyCmVzdGQ6Ol9fMjo6aXRlcmF0b3JfdHJhaXRzPHdjaGFyX3QqPjo6ZGlmZmVyZW5jZV90eXBlIHN0ZDo6X18yOjpkaXN0YW5jZTx3Y2hhcl90Kj4od2NoYXJfdCosIHdjaGFyX3QqKfMKcHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46OmNhcGFjaXR5KCkgY29uc3T0CnlzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpfX3NldF9zaXplKHVuc2lnbmVkIGxvbmcp9Qppc3RkOjpfXzI6OnRpbWVfcHV0PGNoYXIsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46On50aW1lX3B1dCgp9gprc3RkOjpfXzI6OnRpbWVfcHV0PGNoYXIsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46On50aW1lX3B1dCgpLjH3Cn1zdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46OmRlYWxsb2NhdGUoc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiYsIHdjaGFyX3QqLCB1bnNpZ25lZCBsb25nKfgKdnN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46Ol9fZ2V0X2xvbmdfY2FwKCkgY29uc3T5CnhzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kiwgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+ID46Om1heF9zaXplKCkgY29uc3T6CnhzdGQ6Ol9fMjo6X192ZWN0b3JfYmFzZTxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiA+OjpfX2FsbG9jKCn7CqsBc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+ID46OmFsbG9jYXRlKHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiYsIHVuc2lnbmVkIGxvbmcp/Ap6c3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2U8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPjo6X19lbmRfY2FwKCn9CosBc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiA+OjpfX2Fubm90YXRlX25ldyh1bnNpZ25lZCBsb25nKSBjb25zdP4KjAJzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kiwgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+ID46Ol9Db25zdHJ1Y3RUcmFuc2FjdGlvbjo6X0NvbnN0cnVjdFRyYW5zYWN0aW9uKHN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPiYsIHVuc2lnbmVkIGxvbmcp/wqFAXN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiosIDAsIGZhbHNlPjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxzdGQ6Om51bGxwdHJfdCwgdm9pZD4oc3RkOjpudWxscHRyX3QmJimAC19zdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD46OmFsbG9jYXRlKHVuc2lnbmVkIGxvbmcsIHZvaWQgY29uc3QqKYELf3N0ZDo6X18yOjpfX3ZlY3Rvcl9iYXNlPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kiwgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+ID46OmNhcGFjaXR5KCkgY29uc3SCC4MCdm9pZCBzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPjo6X19jb25zdHJ1Y3Q8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqPihzdGQ6Ol9fMjo6aW50ZWdyYWxfY29uc3RhbnQ8Ym9vbCwgZmFsc2U+LCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4mLCBzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCoqKYMLyAFzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPjo6ZGVhbGxvY2F0ZShzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4mLCBzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCoqLCB1bnNpZ25lZCBsb25nKYQLmwFzdGQ6Ol9fMjo6X192ZWN0b3JfYmFzZTxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiA+OjpfX2Rlc3RydWN0X2F0X2VuZChzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCoqKYULb3N0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPjo6ZGVhbGxvY2F0ZShzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCoqLCB1bnNpZ25lZCBsb25nKYYLInN0ZDo6X18yOjpfX3RpbWVfcHV0OjpfX3RpbWVfcHV0KCmHC4gBc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiA+OjpfX3JlY29tbWVuZCh1bnNpZ25lZCBsb25nKSBjb25zdIgL2AFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4mPjo6X19zcGxpdF9idWZmZXIodW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+JimJC5EBc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kiwgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+Jj46Ol9fY29uc3RydWN0X2F0X2VuZCh1bnNpZ25lZCBsb25nKYoL8wFzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kiwgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+ID46Ol9fc3dhcF9vdXRfY2lyY3VsYXJfYnVmZmVyKHN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiY+JimLC3lzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4mPjo6X19hbGxvYygpjAt7c3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kiwgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+Jj46Ol9fZW5kX2NhcCgpjQvHAXN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiY+OjpfQ29uc3RydWN0VHJhbnNhY3Rpb246Ol9Db25zdHJ1Y3RUcmFuc2FjdGlvbihzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCoqKiwgdW5zaWduZWQgbG9uZymOC+ADc3RkOjpfXzI6OmVuYWJsZV9pZjwoKHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCBmYWxzZT46OnZhbHVlKSB8fCAoIShfX2hhc19jb25zdHJ1Y3Q8c3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+LCBib29sKiwgYm9vbD46OnZhbHVlKSkpICYmIChpc190cml2aWFsbHlfbW92ZV9jb25zdHJ1Y3RpYmxlPGJvb2w+Ojp2YWx1ZSksIHZvaWQ+Ojp0eXBlIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiA+OjpfX2NvbnN0cnVjdF9iYWNrd2FyZF93aXRoX2V4Y2VwdGlvbl9ndWFyYW50ZWVzPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kj4oc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+JiwgYm9vbCosIGJvb2wqLCBib29sKiYpjwt8c3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiY+OjpzZWNvbmQoKZALxgFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4mPjo6X19kZXN0cnVjdF9hdF9lbmQoc3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqKiwgc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIGZhbHNlPimRC0BzdGQ6Ol9fMjo6KGFub255bW91cyBuYW1lc3BhY2UpOjpfX2Zha2VfYmluZDo6b3BlcmF0b3IoKSgpIGNvbnN0kgt6c3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6X19yZWNvbW1lbmQodW5zaWduZWQgbG9uZymTC3xzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpfX3NldF9sb25nX3BvaW50ZXIod2NoYXJfdCoplAt9c3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6X19zZXRfbG9uZ19jYXAodW5zaWduZWQgbG9uZymVC0JzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+OjphbGxvY2F0ZSh1bnNpZ25lZCBsb25nLCB2b2lkIGNvbnN0KimWC0Nsb25nIGRvdWJsZSBzdGQ6Ol9fMjo6X19kb19zdHJ0b2Q8bG9uZyBkb3VibGU+KGNoYXIgY29uc3QqLCBjaGFyKioplwv4AXN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+IHN0ZDo6X18yOjpfX2NvcHlfY29uc3RleHByPGNoYXIqLCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+KGNoYXIqLCBjaGFyKiwgc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4pmAuTAnN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IHN0ZDo6X18yOjpfX2NvcHlfY29uc3RleHByPHdjaGFyX3QqLCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+KHdjaGFyX3QqLCB3Y2hhcl90Kiwgc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4pmQtKYm9vbCBzdGQ6Ol9fMjo6X19wdHJfaW5fcmFuZ2U8Y2hhcj4oY2hhciBjb25zdCosIGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KimaC3BzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX3NldF9zaXplKHVuc2lnbmVkIGxvbmcpmwu1AXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46OmJhc2ljX3N0cmluZzx3Y2hhcl90Kiwgdm9pZD4od2NoYXJfdCosIHdjaGFyX3QqLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+IGNvbnN0JimcCy1zdGQ6Ol9fMjo6X19zaGFyZWRfY291bnQ6On5fX3NoYXJlZF9jb3VudCgpLjGdCy9zdGQ6Ol9fMjo6X19zaGFyZWRfd2Vha19jb3VudDo6X19yZWxlYXNlX3dlYWsoKZ4LSXN0ZDo6X18yOjpfX3NoYXJlZF93ZWFrX2NvdW50OjpfX2dldF9kZWxldGVyKHN0ZDo6dHlwZV9pbmZvIGNvbnN0JikgY29uc3SfC0ZzdGQ6Ol9fMjo6X19jYWxsX29uY2UodW5zaWduZWQgbG9uZyB2b2xhdGlsZSYsIHZvaWQqLCB2b2lkICgqKSh2b2lkKikpoAsbb3BlcmF0b3IgbmV3KHVuc2lnbmVkIGxvbmcpoQs9c3RkOjpfXzI6Ol9fbGliY3BwX3JlZnN0cmluZzo6X19saWJjcHBfcmVmc3RyaW5nKGNoYXIgY29uc3QqKaILB3dtZW1zZXSjCwh3bWVtbW92ZaQLQ3N0ZDo6X18yOjpfX2Jhc2ljX3N0cmluZ19jb21tb248dHJ1ZT46Ol9fdGhyb3dfbGVuZ3RoX2Vycm9yKCkgY29uc3SlC8EBc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6YmFzaWNfc3RyaW5nKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmKaYLeXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Ol9faW5pdChjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZymnC2ZzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Ojp+YmFzaWNfc3RyaW5nKCmoC3lzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Ojphc3NpZ24oY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpqQvTAXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Ol9fZ3Jvd19ieV9hbmRfcmVwbGFjZSh1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCBjaGFyIGNvbnN0KimqC3JzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpyZXNpemUodW5zaWduZWQgbG9uZywgY2hhcimrC3JzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjphcHBlbmQodW5zaWduZWQgbG9uZywgY2hhcimsC3RzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX2VyYXNlX3RvX2VuZCh1bnNpZ25lZCBsb25nKa0LugFzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX2dyb3dfYnkodW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZymuCz9zdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj46OmFzc2lnbihjaGFyKiwgdW5zaWduZWQgbG9uZywgY2hhcimvC3lzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjphcHBlbmQoY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpsAtmc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6cHVzaF9iYWNrKGNoYXIpsQtyc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19pbml0KHVuc2lnbmVkIGxvbmcsIGNoYXIpsguFAXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46Ol9faW5pdCh3Y2hhcl90IGNvbnN0KiwgdW5zaWduZWQgbG9uZymzC29zdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+Ojp+YmFzaWNfc3RyaW5nKCm0C4UBc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6YXNzaWduKHdjaGFyX3QgY29uc3QqLCB1bnNpZ25lZCBsb25nKbUL3wFzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpfX2dyb3dfYnlfYW5kX3JlcGxhY2UodW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgd2NoYXJfdCBjb25zdCoptgvDAXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46Ol9fZ3Jvd19ieSh1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKbcLhQFzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjphcHBlbmQod2NoYXJfdCBjb25zdCosIHVuc2lnbmVkIGxvbmcpuAtyc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6cHVzaF9iYWNrKHdjaGFyX3QpuQt+c3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6X19pbml0KHVuc2lnbmVkIGxvbmcsIHdjaGFyX3QpugtCc3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2VfY29tbW9uPHRydWU+OjpfX3Rocm93X2xlbmd0aF9lcnJvcigpIGNvbnN0uwsTX19jeGFfZ3VhcmRfYWNxdWlyZbwLVl9fY3h4YWJpdjE6Oihhbm9ueW1vdXMgbmFtZXNwYWNlKTo6SW5pdEJ5dGVOb1RocmVhZHM6OkluaXRCeXRlTm9UaHJlYWRzKHVuc2lnbmVkIGludCopvQt5X19jeHhhYml2MTo6KGFub255bW91cyBuYW1lc3BhY2UpOjpHdWFyZE9iamVjdDxfX2N4eGFiaXYxOjooYW5vbnltb3VzIG5hbWVzcGFjZSk6OkluaXRCeXRlTm9UaHJlYWRzPjo6Y3hhX2d1YXJkX2FjcXVpcmUoKb4LSV9fY3h4YWJpdjE6Oihhbm9ueW1vdXMgbmFtZXNwYWNlKTo6SW5pdEJ5dGVOb1RocmVhZHM6OmFjcXVpcmVfaW5pdF9ieXRlKCm/CxNfX2N4YV9ndWFyZF9yZWxlYXNlwAt5X19jeHhhYml2MTo6KGFub255bW91cyBuYW1lc3BhY2UpOjpHdWFyZE9iamVjdDxfX2N4eGFiaXYxOjooYW5vbnltb3VzIG5hbWVzcGFjZSk6OkluaXRCeXRlTm9UaHJlYWRzPjo6Y3hhX2d1YXJkX3JlbGVhc2UoKcELEl9fY3hhX3B1cmVfdmlydHVhbMILHHN0ZDo6ZXhjZXB0aW9uOjp3aGF0KCkgY29uc3TDCyBzdGQ6OmxvZ2ljX2Vycm9yOjp+bG9naWNfZXJyb3IoKcQLM3N0ZDo6X18yOjpfX2xpYmNwcF9yZWZzdHJpbmc6On5fX2xpYmNwcF9yZWZzdHJpbmcoKcULInN0ZDo6bG9naWNfZXJyb3I6On5sb2dpY19lcnJvcigpLjHGCyJzdGQ6Omxlbmd0aF9lcnJvcjo6fmxlbmd0aF9lcnJvcigpxwthX19jeHhhYml2MTo6X19mdW5kYW1lbnRhbF90eXBlX2luZm86OmNhbl9jYXRjaChfX2N4eGFiaXYxOjpfX3NoaW1fdHlwZV9pbmZvIGNvbnN0Kiwgdm9pZComKSBjb25zdMgLPGlzX2VxdWFsKHN0ZDo6dHlwZV9pbmZvIGNvbnN0Kiwgc3RkOjp0eXBlX2luZm8gY29uc3QqLCBib29sKckLXl9fY3h4YWJpdjE6Ol9fZnVuY3Rpb25fdHlwZV9pbmZvOjpjYW5fY2F0Y2goX19jeHhhYml2MTo6X19zaGltX3R5cGVfaW5mbyBjb25zdCosIHZvaWQqJikgY29uc3TKC1tfX2N4eGFiaXYxOjpfX2NsYXNzX3R5cGVfaW5mbzo6Y2FuX2NhdGNoKF9fY3h4YWJpdjE6Ol9fc2hpbV90eXBlX2luZm8gY29uc3QqLCB2b2lkKiYpIGNvbnN0ywsOX19keW5hbWljX2Nhc3TMC2tfX2N4eGFiaXYxOjpfX2NsYXNzX3R5cGVfaW5mbzo6cHJvY2Vzc19mb3VuZF9iYXNlX2NsYXNzKF9fY3h4YWJpdjE6Ol9fZHluYW1pY19jYXN0X2luZm8qLCB2b2lkKiwgaW50KSBjb25zdM0Lbl9fY3h4YWJpdjE6Ol9fY2xhc3NfdHlwZV9pbmZvOjpoYXNfdW5hbWJpZ3VvdXNfcHVibGljX2Jhc2UoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQqLCBpbnQpIGNvbnN0zgtxX19jeHhhYml2MTo6X19zaV9jbGFzc190eXBlX2luZm86Omhhc191bmFtYmlndW91c19wdWJsaWNfYmFzZShfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCosIGludCkgY29uc3TPC3NfX2N4eGFiaXYxOjpfX2Jhc2VfY2xhc3NfdHlwZV9pbmZvOjpoYXNfdW5hbWJpZ3VvdXNfcHVibGljX2Jhc2UoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQqLCBpbnQpIGNvbnN00AtyX19jeHhhYml2MTo6X192bWlfY2xhc3NfdHlwZV9pbmZvOjpoYXNfdW5hbWJpZ3VvdXNfcHVibGljX2Jhc2UoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQqLCBpbnQpIGNvbnN00QtbX19jeHhhYml2MTo6X19wYmFzZV90eXBlX2luZm86OmNhbl9jYXRjaChfX2N4eGFiaXYxOjpfX3NoaW1fdHlwZV9pbmZvIGNvbnN0Kiwgdm9pZComKSBjb25zdNILXV9fY3h4YWJpdjE6Ol9fcG9pbnRlcl90eXBlX2luZm86OmNhbl9jYXRjaChfX2N4eGFiaXYxOjpfX3NoaW1fdHlwZV9pbmZvIGNvbnN0Kiwgdm9pZComKSBjb25zdNMLXF9fY3h4YWJpdjE6Ol9fcG9pbnRlcl90eXBlX2luZm86OmNhbl9jYXRjaF9uZXN0ZWQoX19jeHhhYml2MTo6X19zaGltX3R5cGVfaW5mbyBjb25zdCopIGNvbnN01AtmX19jeHhhYml2MTo6X19wb2ludGVyX3RvX21lbWJlcl90eXBlX2luZm86OmNhbl9jYXRjaF9uZXN0ZWQoX19jeHhhYml2MTo6X19zaGltX3R5cGVfaW5mbyBjb25zdCopIGNvbnN01QuDAV9fY3h4YWJpdjE6Ol9fY2xhc3NfdHlwZV9pbmZvOjpwcm9jZXNzX3N0YXRpY190eXBlX2Fib3ZlX2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIHZvaWQgY29uc3QqLCBpbnQpIGNvbnN01gt2X19jeHhhYml2MTo6X19jbGFzc190eXBlX2luZm86OnByb2Nlc3Nfc3RhdGljX3R5cGVfYmVsb3dfZHN0KF9fY3h4YWJpdjE6Ol9fZHluYW1pY19jYXN0X2luZm8qLCB2b2lkIGNvbnN0KiwgaW50KSBjb25zdNcLc19fY3h4YWJpdjE6Ol9fdm1pX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2JlbG93X2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIGludCwgYm9vbCkgY29uc3TYC4EBX19jeHhhYml2MTo6X19iYXNlX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2Fib3ZlX2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIHZvaWQgY29uc3QqLCBpbnQsIGJvb2wpIGNvbnN02Qt0X19jeHhhYml2MTo6X19iYXNlX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2JlbG93X2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIGludCwgYm9vbCkgY29uc3TaC3JfX2N4eGFiaXYxOjpfX3NpX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2JlbG93X2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIGludCwgYm9vbCkgY29uc3TbC29fX2N4eGFiaXYxOjpfX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2JlbG93X2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIGludCwgYm9vbCkgY29uc3TcC4ABX19jeHhhYml2MTo6X192bWlfY2xhc3NfdHlwZV9pbmZvOjpzZWFyY2hfYWJvdmVfZHN0KF9fY3h4YWJpdjE6Ol9fZHluYW1pY19jYXN0X2luZm8qLCB2b2lkIGNvbnN0Kiwgdm9pZCBjb25zdCosIGludCwgYm9vbCkgY29uc3TdC39fX2N4eGFiaXYxOjpfX3NpX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2Fib3ZlX2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIHZvaWQgY29uc3QqLCBpbnQsIGJvb2wpIGNvbnN03gt8X19jeHhhYml2MTo6X19jbGFzc190eXBlX2luZm86OnNlYXJjaF9hYm92ZV9kc3QoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQgY29uc3QqLCB2b2lkIGNvbnN0KiwgaW50LCBib29sKSBjb25zdN8LCGRsbWFsbG9j4AsGZGxmcmVl4QsIZGxjYWxsb2PiCwlkbHJlYWxsb2PjCxF0cnlfcmVhbGxvY19jaHVua+QLDWRpc3Bvc2VfY2h1bmvlCwRzYnJr5gsFZm1vZGznCwZzY2FsYm7oCw1fX2ZwY2xhc3NpZnls6QsGbWVtY3B56gsGbWVtc2V06wsHbWVtbW92ZewLCV9fdG93cml0Ze0LCV9fZndyaXRleO4LBnByaW50Zu8LBnN0cmxlbvALCXN0YWNrU2F2ZfELDHN0YWNrUmVzdG9yZfILCnN0YWNrQWxsb2PzCwhzZXRUaHJld/QLBWh0b25z9QsFaHRvbmz2CwpfX2Jzd2FwXzMy9wsKZHluQ2FsbF92afgLCmR5bkNhbGxfaWn5Cw5keW5DYWxsX2lpaWlpafoLDmR5bkNhbGxfdmlpaWlp+wsLZHluQ2FsbF92aWn8Cw9keW5DYWxsX3ZpaWlpaWn9CwtkeW5DYWxsX2lpaf4LCWR5bkNhbGxfdv8LDGR5bkNhbGxfaWlpaYAMDWR5bkNhbGxfdmlpaWmBDA1keW5DYWxsX2lpaWlpggwMZHluQ2FsbF92aWlpgwwPZHluQ2FsbF9paWlpaWlphAwQZHluQ2FsbF9paWlpaWlpaYUMCWR5bkNhbGxfaYYMD2R5bkNhbGxfaWlkaWlpaYcMEWR5bkNhbGxfaWlpaWlpaWlpiAwOZHluQ2FsbF9paWlpaWSJDBhsZWdhbHN0dWIkZHluQ2FsbF92aWlqaWmKDBZsZWdhbHN0dWIkZHluQ2FsbF9qaWppiwwYbGVnYWxzdHViJGR5bkNhbGxfaWlpaWlqjAwZbGVnYWxzdHViJGR5bkNhbGxfaWlpaWlqao0MGmxlZ2Fsc3R1YiRkeW5DYWxsX2lpaWlpaWpqjgwQX19ncm93V2FzbU1lbW9yeQBhEHNvdXJjZU1hcHBpbmdVUkxPaHR0cDovL2xvY2FsaG9zdDo4MDgwL3t7eyBGSUxFTkFNRV9SRVBMQUNFTUVOVF9TVFJJTkdTX1dBU01fQklOQVJZX0ZJTEUgfX19Lm1hcA==';
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary() {
  try {
    if (wasmBinary) {
      return new Uint8Array(wasmBinary);
    }

    var binary = tryParseAsDataURI(wasmBinaryFile);
    if (binary) {
      return binary;
    }
    if (readBinary) {
      return readBinary(wasmBinaryFile);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, and have the Fetch api, use that;
  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'
      // Let's not use fetch to get objects over file:// as it's most likely Cordova which doesn't support fetch for file://
      && !isFileURI(wasmBinaryFile)
      ) {
    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
      }
      return response['arrayBuffer']();
    }).catch(function () {
      return getBinary();
    });
  }
  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(getBinary);
}



// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;
    Module['asm'] = exports;
    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');


  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }


  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);


      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.
  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
        !isFileURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
        var result = WebAssembly.instantiateStreaming(response, info);
        return result.then(receiveInstantiatedSource, function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            return instantiateArrayBuffer(receiveInstantiatedSource);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiatedSource);
    }
  }
  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  instantiateAsync();
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};




// STATICTOP = STATIC_BASE + 63792;
/* global initializers */  __ATINIT__.push({ func: function() { ___wasm_call_ctors() } });




/* no memory initializer */
// {{PRE_LIBRARY}}


  function demangle(func) {
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function jsStackTrace() {
      var err = new Error();
      if (!err.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          err = e;
        }
        if (!err.stack) {
          return '(no stack trace available)';
        }
      }
      return err.stack.toString();
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  function ___assert_fail(condition, filename, line, func) {
      abort('Assertion failed: ' + UTF8ToString(condition) + ', at: ' + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);
    }

  
  var ExceptionInfoAttrs={DESTRUCTOR_OFFSET:0,REFCOUNT_OFFSET:4,TYPE_OFFSET:8,CAUGHT_OFFSET:12,RETHROWN_OFFSET:13,SIZE:16};function ___cxa_allocate_exception(size) {
      // Thrown object is prepended by exception metadata block
      return _malloc(size + ExceptionInfoAttrs.SIZE) + ExceptionInfoAttrs.SIZE;
    }

  
  function _atexit(func, arg) {
  
    }function ___cxa_atexit(a0,a1
  ) {
  return _atexit(a0,a1);
  }

  
  function ExceptionInfo(excPtr) {
      this.excPtr = excPtr;
      this.ptr = excPtr - ExceptionInfoAttrs.SIZE;
  
      this.set_type = function(type) {
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.TYPE_OFFSET))>>2)]=type;
      };
  
      this.get_type = function() {
        return HEAP32[(((this.ptr)+(ExceptionInfoAttrs.TYPE_OFFSET))>>2)];
      };
  
      this.set_destructor = function(destructor) {
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.DESTRUCTOR_OFFSET))>>2)]=destructor;
      };
  
      this.get_destructor = function() {
        return HEAP32[(((this.ptr)+(ExceptionInfoAttrs.DESTRUCTOR_OFFSET))>>2)];
      };
  
      this.set_refcount = function(refcount) {
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)]=refcount;
      };
  
      this.set_caught = function (caught) {
        caught = caught ? 1 : 0;
        HEAP8[(((this.ptr)+(ExceptionInfoAttrs.CAUGHT_OFFSET))>>0)]=caught;
      };
  
      this.get_caught = function () {
        return HEAP8[(((this.ptr)+(ExceptionInfoAttrs.CAUGHT_OFFSET))>>0)] != 0;
      };
  
      this.set_rethrown = function (rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[(((this.ptr)+(ExceptionInfoAttrs.RETHROWN_OFFSET))>>0)]=rethrown;
      };
  
      this.get_rethrown = function () {
        return HEAP8[(((this.ptr)+(ExceptionInfoAttrs.RETHROWN_OFFSET))>>0)] != 0;
      };
  
      // Initialize native structure fields. Should be called once after allocated.
      this.init = function(type, destructor) {
        this.set_type(type);
        this.set_destructor(destructor);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false);
      }
  
      this.add_ref = function() {
        var value = HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)];
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)]=value + 1;
      };
  
      // Returns true if last reference released.
      this.release_ref = function() {
        var prev = HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)];
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)]=prev - 1;
        return prev === 1;
      };
    }
  
  var exceptionLast=0;
  
  function __ZSt18uncaught_exceptionv() { // std::uncaught_exception()
      return __ZSt18uncaught_exceptionv.uncaught_exceptions > 0;
    }function ___cxa_throw(ptr, type, destructor) {
      var info = new ExceptionInfo(ptr);
      // Initialize ExceptionInfo content after it was allocated in __cxa_allocate_exception.
      info.init(type, destructor);
      exceptionLast = ptr;
      if (!("uncaught_exception" in __ZSt18uncaught_exceptionv)) {
        __ZSt18uncaught_exceptionv.uncaught_exceptions = 1;
      } else {
        __ZSt18uncaught_exceptionv.uncaught_exceptions++;
      }
      throw ptr;
    }

  
  function setErrNo(value) {
      HEAP32[((___errno_location())>>2)]=value;
      return value;
    }function ___map_file(pathname, size) {
      setErrNo(63);
      return -1;
    }

  
  
  var PATH={splitPath:function(filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function(parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function(path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function(path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function(path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function(path) {
        return PATH.splitPath(path)[3];
      },join:function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function(l, r) {
        return PATH.normalize(l + '/' + r);
      }};
  
  
  var PATH_FS={resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function(from, to) {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  var TTY={ttys:[],init:function () {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function(stream) {
          // flush any pending line data
          stream.tty.ops.flush(stream.tty);
        },flush:function(stream) {
          stream.tty.ops.flush(stream.tty);
        },read:function(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              // we will read data by chunks of BUFSIZE
              var BUFSIZE = 256;
              var buf = Buffer.alloc ? Buffer.alloc(BUFSIZE) : new Buffer(BUFSIZE);
              var bytesRead = 0;
  
              try {
                bytesRead = nodeFS.readSync(process.stdin.fd, buf, 0, BUFSIZE, null);
              } catch(e) {
                // Cross-platform differences: on Windows, reading EOF throws an exception, but on other OSes,
                // reading EOF returns 0. Uniformize behavior by treating the EOF exception to return 0.
                if (e.toString().indexOf('EOF') != -1) bytesRead = 0;
                else throw e;
              }
  
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString('utf-8');
              } else {
                result = null;
              }
            } else
            if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  var MEMFS={ops_table:null,mount:function(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },getFileDataAsRegularArray:function(node) {
        if (node.contents && node.contents.subarray) {
          var arr = [];
          for (var i = 0; i < node.usedBytes; ++i) arr.push(node.contents[i]);
          return arr; // Returns a copy of the original data.
        }
        return node.contents; // No-op, the file contents are already in a JS array. Return as-is.
      },getFileDataAsTypedArray:function(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
        return;
      },resizeFileStorage:function(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
          return;
        }
        if (!node.contents || node.contents.subarray) { // Resize a typed array if that is being used as the backing store.
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
          return;
        }
        // Backing with a JS array.
        if (!node.contents) node.contents = [];
        if (node.contents.length > newSize) node.contents.length = newSize;
        else while (node.contents.length < newSize) node.contents.push(0);
        node.usedBytes = newSize;
      },node_ops:{getattr:function(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function(parent, name) {
          throw FS.genericErrors[44];
        },mknod:function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },unlink:function(parent, name) {
          delete parent.contents[name];
        },rmdir:function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
        },readdir:function(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }},stream_ops:{read:function(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function(stream, buffer, offset, length, position, canOwn) {
          // If the buffer is located in main memory (HEAP), and if
          // memory can grow, we can't hold on to references of the
          // memory buffer, as they may get invalidated. That means we
          // need to do copy its contents.
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },llseek:function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },allocate:function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function(stream, address, length, position, prot, flags) {
          // We don't currently support location hints for the address of the mapping
          assert(address === 0);
  
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = FS.mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },msync:function(stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            // MAP_PRIVATE calls need not to be synced back to underlying fs
            return 0;
          }
  
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:function(e) {
        if (!(e instanceof FS.ErrnoError)) throw e + ' : ' + stackTrace();
        return setErrNo(e.errno);
      },lookupPath:function(path, opts) {
        path = PATH_FS.resolve(FS.cwd(), path);
        opts = opts || {};
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:function(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function(parentid, name) {
        var hash = 0;
  
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function(parent, name, mode, rdev) {
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:function(node) {
        FS.hashRemoveNode(node);
      },isRoot:function(node) {
        return node === node.parent;
      },isMountpoint:function(node) {
        return !!node.mounted;
      },isFile:function(mode) {
        return (mode & 61440) === 32768;
      },isDir:function(mode) {
        return (mode & 61440) === 16384;
      },isLink:function(mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function(mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function(mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function(mode) {
        return (mode & 61440) === 4096;
      },isSocket:function(mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function(str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
          return 2;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
          return 2;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },mayLookup:function(dir) {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },mayCreate:function(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },mayOpen:function(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function(fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },getStream:function(fd) {
        return FS.streams[fd];
      },createStream:function(stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function(){};
          FS.FSStream.prototype = {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          };
        }
        // clone it, so we can return an instance of FSStream
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function(fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function() {
          throw new FS.ErrnoError(70);
        }},major:function(dev) {
        return ((dev) >> 8);
      },minor:function(dev) {
        return ((dev) & 0xff);
      },makedev:function(ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function(dev) {
        return FS.devices[dev];
      },getMounts:function(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:function(populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:function(type, opts, mountpoint) {
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach(function (hash) {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.indexOf(current.mount) !== -1) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        node.mount.mounts.splice(idx, 1);
      },lookup:function(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function(path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function(path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:function(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },mkdev:function(path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existant directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        try {
          if (FS.trackingDelegate['willMovePath']) {
            FS.trackingDelegate['willMovePath'](old_path, new_path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
        try {
          if (FS.trackingDelegate['onMovePath']) FS.trackingDelegate['onMovePath'](old_path, new_path);
        } catch(e) {
          err("FS.trackingDelegate['onMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
      },rmdir:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },unlink:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readlink:function(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:function(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },lstat:function(path) {
        return FS.stat(path, true);
      },chmod:function(path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function(path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function(fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },chown:function(path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function(fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function(fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },utime:function(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function(path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            err("FS.trackingDelegate error on read file: " + path);
          }
        }
        try {
          if (FS.trackingDelegate['onOpenFile']) {
            var trackingFlags = 0;
            if ((flags & 2097155) !== 1) {
              trackingFlags |= FS.tracking.openFlags.READ;
            }
            if ((flags & 2097155) !== 0) {
              trackingFlags |= FS.tracking.openFlags.WRITE;
            }
            FS.trackingDelegate['onOpenFile'](path, trackingFlags);
          }
        } catch(e) {
          err("FS.trackingDelegate['onOpenFile']('"+path+"', flags) threw an exception: " + e.message);
        }
        return stream;
      },close:function(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },isClosed:function(stream) {
        return stream.fd === null;
      },llseek:function(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },read:function(stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function(stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        try {
          if (stream.path && FS.trackingDelegate['onWriteToFile']) FS.trackingDelegate['onWriteToFile'](stream.path);
        } catch(e) {
          err("FS.trackingDelegate['onWriteToFile']('"+stream.path+"') threw an exception: " + e.message);
        }
        return bytesWritten;
      },allocate:function(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function(stream, address, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
      },msync:function(stream, buffer, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:function(stream) {
        return 0;
      },ioctl:function(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function(path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'r';
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:function(path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'w';
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },cwd:function() {
        return FS.currentPath;
      },chdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:function() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function(stream, buffer, offset, length, pos) { return length; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        var random_device;
        if (typeof crypto === 'object' && typeof crypto['getRandomValues'] === 'function') {
          // for modern web browsers
          var randomBuffer = new Uint8Array(1);
          random_device = function() { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
        } else
        if (ENVIRONMENT_IS_NODE) {
          // for nodejs with or without crypto support included
          try {
            var crypto_module = require('crypto');
            // nodejs has crypto support
            random_device = function() { return crypto_module['randomBytes'](1)[0]; };
          } catch (e) {
            // nodejs doesn't have crypto support
          }
        } else
        {}
        if (!random_device) {
          // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
          random_device = function() { abort("random_device"); };
        }
        FS.createDevice('/dev', 'random', random_device);
        FS.createDevice('/dev', 'urandom', random_device);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:function() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: function() {
            var node = FS.createNode('/proc/self', 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: function(parent, name) {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: function() { return stream.path } }
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:function() {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 'r');
        var stdout = FS.open('/dev/stdout', 'w');
        var stderr = FS.open('/dev/stderr', 'w');
      },ensureErrnoError:function() {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
          };
          this.setErrno(errno);
          this.message = 'FS error';
  
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function() {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },init:function(input, output, error) {
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:function() {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        var fflush = Module['_fflush'];
        if (fflush) fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function(canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },joinPath:function(parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == '/') path = path.substr(1);
        return path;
      },absolutePath:function(relative, base) {
        return PATH_FS.resolve(base, relative);
      },standardizePath:function(path) {
        return PATH.normalize(path);
      },findObject:function(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          setErrNo(ret.error);
          return null;
        }
      },analyzePath:function(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createFolder:function(parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
      },createPath:function(parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function(parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 'w');
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function(parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },createLink:function(parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
      },forceLoadFile:function(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!success) setErrNo(29);
        return success;
      },createLazyFile:function(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (function(from, to) {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            } else {
              return intArrayFromString(xhr.responseText || '', true);
            }
          });
          var lazyArray = this;
          lazyArray.setDataGetter(function(chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(29);
            }
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(29);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init(); // XXX perhaps this method should move onto Browser?
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function() {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function() {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          out('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },mmapAlloc:function(size) {
        var alignedSize = alignMemory(size, 16384);
        var ptr = _malloc(alignedSize);
        while (size < alignedSize) HEAP8[ptr + size++] = 0;
        return ptr;
      }};var SYSCALLS={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(dirfd, path) {
        if (path[0] !== '/') {
          // relative path
          var dir;
          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = FS.getStream(dirfd);
            if (!dirstream) throw new FS.ErrnoError(8);
            dir = dirstream.path;
          }
          path = PATH.join2(dir, path);
        }
        return path;
      },doStat:function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)]=stat.dev;
        HEAP32[(((buf)+(4))>>2)]=0;
        HEAP32[(((buf)+(8))>>2)]=stat.ino;
        HEAP32[(((buf)+(12))>>2)]=stat.mode;
        HEAP32[(((buf)+(16))>>2)]=stat.nlink;
        HEAP32[(((buf)+(20))>>2)]=stat.uid;
        HEAP32[(((buf)+(24))>>2)]=stat.gid;
        HEAP32[(((buf)+(28))>>2)]=stat.rdev;
        HEAP32[(((buf)+(32))>>2)]=0;
        (tempI64 = [stat.size>>>0,(tempDouble=stat.size,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(40))>>2)]=tempI64[0],HEAP32[(((buf)+(44))>>2)]=tempI64[1]);
        HEAP32[(((buf)+(48))>>2)]=4096;
        HEAP32[(((buf)+(52))>>2)]=stat.blocks;
        HEAP32[(((buf)+(56))>>2)]=(stat.atime.getTime() / 1000)|0;
        HEAP32[(((buf)+(60))>>2)]=0;
        HEAP32[(((buf)+(64))>>2)]=(stat.mtime.getTime() / 1000)|0;
        HEAP32[(((buf)+(68))>>2)]=0;
        HEAP32[(((buf)+(72))>>2)]=(stat.ctime.getTime() / 1000)|0;
        HEAP32[(((buf)+(76))>>2)]=0;
        (tempI64 = [stat.ino>>>0,(tempDouble=stat.ino,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(80))>>2)]=tempI64[0],HEAP32[(((buf)+(84))>>2)]=tempI64[1]);
        return 0;
      },doMsync:function(addr, stream, len, flags, offset) {
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },doMkdir:function(path, mode) {
        // remove a trailing slash, if one - /a/b/ has basename of '', but
        // we want to create b in the context of this function
        path = PATH.normalize(path);
        if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
        FS.mkdir(path, mode, 0);
        return 0;
      },doMknod:function(path, mode, dev) {
        // we don't want this in the JS API as it uses mknod to create all nodes.
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default: return -28;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },doReadlink:function(path, buf, bufsize) {
        if (bufsize <= 0) return -28;
        var ret = FS.readlink(path);
  
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf+len];
        stringToUTF8(ret, buf, bufsize+1);
        // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
        // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
        HEAP8[buf+len] = endChar;
  
        return len;
      },doAccess:function(path, amode) {
        if (amode & ~7) {
          // need a valid mode
          return -28;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        if (!node) {
          return -44;
        }
        var perms = '';
        if (amode & 4) perms += 'r';
        if (amode & 2) perms += 'w';
        if (amode & 1) perms += 'x';
        if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
          return -2;
        }
        return 0;
      },doDup:function(path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },doReadv:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.read(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break; // nothing more to read
        }
        return ret;
      },doWritev:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.write(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      },varargs:undefined,get:function() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },getStreamFromFD:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream;
      },get64:function(low, high) {
        return low;
      }};function ___sys_fcntl64(fd, cmd, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -28;
          }
          var newStream;
          newStream = FS.open(stream.path, stream.flags, 0, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 12:
        /* case 12: Currently in musl F_GETLK64 has same value as F_GETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */ {
          
          var arg = SYSCALLS.get();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)]=2;
          return 0;
        }
        case 13:
        case 14:
        /* case 13: Currently in musl F_SETLK64 has same value as F_SETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
        /* case 14: Currently in musl F_SETLKW64 has same value as F_SETLKW, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
          
          
          return 0; // Pretend that the locking is successful.
        case 16:
        case 8:
          return -28; // These are for sockets. We don't have them fully implemented yet.
        case 9:
          // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fnctl() returns that, and we set errno ourselves.
          setErrNo(28);
          return -1;
        default: {
          return -28;
        }
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_ioctl(fd, op, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509:
        case 21505: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = SYSCALLS.get();
          HEAP32[((argp)>>2)]=0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.get();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        default: abort('bad ioctl syscall ' + op);
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  
  function syscallMunmap(addr, len) {
      if ((addr | 0) === -1 || len === 0) {
        return -28;
      }
      // TODO: support unmmap'ing parts of allocations
      var info = SYSCALLS.mappings[addr];
      if (!info) return 0;
      if (len === info.len) {
        var stream = FS.getStream(info.fd);
        if (info.prot & 2) {
          SYSCALLS.doMsync(addr, stream, len, info.flags, info.offset);
        }
        FS.munmap(stream);
        SYSCALLS.mappings[addr] = null;
        if (info.allocated) {
          _free(info.malloc);
        }
      }
      return 0;
    }function ___sys_munmap(addr, len) {try {
  
      return syscallMunmap(addr, len);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_open(path, flags, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var pathname = SYSCALLS.getStr(path);
      var mode = SYSCALLS.get();
      var stream = FS.open(pathname, flags, mode);
      return stream.fd;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function _abort() {
      abort();
    }

  function _emscripten_get_sbrk_ptr() {
      return 64656;
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  
  function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
  
  function emscripten_realloc_buffer(size) {
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1 /*success*/;
      } catch(e) {
      }
    }function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      var oldSize = _emscripten_get_heap_size();
      // With pthreads, races can happen (another thread might increase the size in between), so return a failure, and let the caller retry.
  
  
      var PAGE_MULTIPLE = 65536;
  
      // Memory resize rules:
      // 1. When resizing, always produce a resized heap that is at least 16MB (to avoid tiny heap sizes receiving lots of repeated resizes at startup)
      // 2. Always increase heap size to at least the requested size, rounded up to next page multiple.
      // 3a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap geometrically: increase the heap size according to 
      //                                         MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%),
      //                                         At most overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 3b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap linearly: increase the heap size by at least MEMORY_GROWTH_LINEAR_STEP bytes.
      // 4. Max size for the heap is capped at 2048MB-PAGE_MULTIPLE, or by MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 5. If we were unable to allocate as much memory, it may be due to over-eager decision to excessively reserve due to (3) above.
      //    Hence if an allocation fails, cut down on the amount of excess growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit was set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = 104857600;
      if (requestedSize > maxHeapSize) {
        return false;
      }
  
      var minHeapSize = 16777216;
  
      // Loop through potential heap size increases. If we attempt a too eager reservation that fails, cut down on the
      // attempted size and reserve a smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for(var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), PAGE_MULTIPLE));
  
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
  
          return true;
        }
      }
      return false;
    }

  
  
  var ENV={};
  
  function getExecutableName() {
      return thisProgram || './this.program';
    }function getEnvStrings() {
      if (!getEnvStrings.strings) {
        // Default values.
        // Browser language detection #8751
        var lang = ((typeof navigator === 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8';
        var env = {
          'USER': 'web_user',
          'LOGNAME': 'web_user',
          'PATH': '/',
          'PWD': '/',
          'HOME': '/home/web_user',
          'LANG': lang,
          '_': getExecutableName()
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + '=' + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[(((__environ)+(i * 4))>>2)]=ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }

  function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAP32[((penviron_count)>>2)]=strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAP32[((penviron_buf_size)>>2)]=bufSize;
      return 0;
    }

  function _fd_close(fd) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_read(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)]=num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {try {
  
      
      var stream = SYSCALLS.getStreamFromFD(fd);
      var HIGH_OFFSET = 0x100000000; // 2^32
      // use an unsigned operator on low and shift high by 32-bits
      var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
  
      var DOUBLE_LIMIT = 0x20000000000000; // 2^53
      // we also check for equality since DOUBLE_LIMIT + 1 == DOUBLE_LIMIT
      if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
        return -61;
      }
  
      FS.llseek(stream, offset, whence);
      (tempI64 = [stream.position>>>0,(tempDouble=stream.position,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((newOffset)>>2)]=tempI64[0],HEAP32[(((newOffset)+(4))>>2)]=tempI64[1]);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_write(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doWritev(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)]=num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _gettimeofday(ptr) {
      var now = Date.now();
      HEAP32[((ptr)>>2)]=(now/1000)|0; // seconds
      HEAP32[(((ptr)+(4))>>2)]=((now % 1000)*1000)|0; // microseconds
      return 0;
    }

  function _setTempRet0($i) {
      setTempRet0(($i) | 0);
    }

  
  
  function __isLeapYear(year) {
        return year%4 === 0 && (year%100 !== 0 || year%400 === 0);
    }
  
  function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
        // no-op
      }
      return sum;
    }
  
  
  var __MONTH_DAYS_LEAP=[31,29,31,30,31,30,31,31,30,31,30,31];
  
  var __MONTH_DAYS_REGULAR=[31,28,31,30,31,30,31,31,30,31,30,31];function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while(days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
  
        if (days > daysInCurrentMonth-newDate.getDate()) {
          // we spill over to next month
          days -= (daysInCurrentMonth-newDate.getDate()+1);
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth+1)
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear()+1);
          }
        } else {
          // we stay in current month
          newDate.setDate(newDate.getDate()+days);
          return newDate;
        }
      }
  
      return newDate;
    }function _strftime(s, maxsize, format, tm) {
      // size_t strftime(char *restrict s, size_t maxsize, const char *restrict format, const struct tm *restrict timeptr);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html
  
      var tm_zone = HEAP32[(((tm)+(40))>>2)];
  
      var date = {
        tm_sec: HEAP32[((tm)>>2)],
        tm_min: HEAP32[(((tm)+(4))>>2)],
        tm_hour: HEAP32[(((tm)+(8))>>2)],
        tm_mday: HEAP32[(((tm)+(12))>>2)],
        tm_mon: HEAP32[(((tm)+(16))>>2)],
        tm_year: HEAP32[(((tm)+(20))>>2)],
        tm_wday: HEAP32[(((tm)+(24))>>2)],
        tm_yday: HEAP32[(((tm)+(28))>>2)],
        tm_isdst: HEAP32[(((tm)+(32))>>2)],
        tm_gmtoff: HEAP32[(((tm)+(36))>>2)],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
      };
  
      var pattern = UTF8ToString(format);
  
      // expand format
      var EXPANSION_RULES_1 = {
        '%c': '%a %b %d %H:%M:%S %Y',     // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
        '%D': '%m/%d/%y',                 // Equivalent to %m / %d / %y
        '%F': '%Y-%m-%d',                 // Equivalent to %Y - %m - %d
        '%h': '%b',                       // Equivalent to %b
        '%r': '%I:%M:%S %p',              // Replaced by the time in a.m. and p.m. notation
        '%R': '%H:%M',                    // Replaced by the time in 24-hour notation
        '%T': '%H:%M:%S',                 // Replaced by the time
        '%x': '%m/%d/%y',                 // Replaced by the locale's appropriate date representation
        '%X': '%H:%M:%S',                 // Replaced by the locale's appropriate time representation
        // Modified Conversion Specifiers
        '%Ec': '%c',                      // Replaced by the locale's alternative appropriate date and time representation.
        '%EC': '%C',                      // Replaced by the name of the base year (period) in the locale's alternative representation.
        '%Ex': '%m/%d/%y',                // Replaced by the locale's alternative date representation.
        '%EX': '%H:%M:%S',                // Replaced by the locale's alternative time representation.
        '%Ey': '%y',                      // Replaced by the offset from %EC (year only) in the locale's alternative representation.
        '%EY': '%Y',                      // Replaced by the full alternative year representation.
        '%Od': '%d',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading zeros if there is any alternative symbol for zero; otherwise, with leading <space> characters.
        '%Oe': '%e',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading <space> characters.
        '%OH': '%H',                      // Replaced by the hour (24-hour clock) using the locale's alternative numeric symbols.
        '%OI': '%I',                      // Replaced by the hour (12-hour clock) using the locale's alternative numeric symbols.
        '%Om': '%m',                      // Replaced by the month using the locale's alternative numeric symbols.
        '%OM': '%M',                      // Replaced by the minutes using the locale's alternative numeric symbols.
        '%OS': '%S',                      // Replaced by the seconds using the locale's alternative numeric symbols.
        '%Ou': '%u',                      // Replaced by the weekday as a number in the locale's alternative representation (Monday=1).
        '%OU': '%U',                      // Replaced by the week number of the year (Sunday as the first day of the week, rules corresponding to %U ) using the locale's alternative numeric symbols.
        '%OV': '%V',                      // Replaced by the week number of the year (Monday as the first day of the week, rules corresponding to %V ) using the locale's alternative numeric symbols.
        '%Ow': '%w',                      // Replaced by the number of the weekday (Sunday=0) using the locale's alternative numeric symbols.
        '%OW': '%W',                      // Replaced by the week number of the year (Monday as the first day of the week) using the locale's alternative numeric symbols.
        '%Oy': '%y',                      // Replaced by the year (offset from %C ) using the locale's alternative numeric symbols.
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
      }
  
      var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      function leadingSomething(value, digits, character) {
        var str = typeof value === 'number' ? value.toString() : (value || '');
        while (str.length < digits) {
          str = character[0]+str;
        }
        return str;
      }
  
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, '0');
      }
  
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : (value > 0 ? 1 : 0);
        }
  
        var compare;
        if ((compare = sgn(date1.getFullYear()-date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth()-date2.getMonth())) === 0) {
            compare = sgn(date1.getDate()-date2.getDate());
          }
        }
        return compare;
      }
  
      function getFirstWeekStartDate(janFourth) {
          switch (janFourth.getDay()) {
            case 0: // Sunday
              return new Date(janFourth.getFullYear()-1, 11, 29);
            case 1: // Monday
              return janFourth;
            case 2: // Tuesday
              return new Date(janFourth.getFullYear(), 0, 3);
            case 3: // Wednesday
              return new Date(janFourth.getFullYear(), 0, 2);
            case 4: // Thursday
              return new Date(janFourth.getFullYear(), 0, 1);
            case 5: // Friday
              return new Date(janFourth.getFullYear()-1, 11, 31);
            case 6: // Saturday
              return new Date(janFourth.getFullYear()-1, 11, 30);
          }
      }
  
      function getWeekBasedYear(date) {
          var thisDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
          var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            // this date is after the start of the first week of this year
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
              return thisDate.getFullYear()+1;
            } else {
              return thisDate.getFullYear();
            }
          } else {
            return thisDate.getFullYear()-1;
          }
      }
  
      var EXPANSION_RULES_2 = {
        '%a': function(date) {
          return WEEKDAYS[date.tm_wday].substring(0,3);
        },
        '%A': function(date) {
          return WEEKDAYS[date.tm_wday];
        },
        '%b': function(date) {
          return MONTHS[date.tm_mon].substring(0,3);
        },
        '%B': function(date) {
          return MONTHS[date.tm_mon];
        },
        '%C': function(date) {
          var year = date.tm_year+1900;
          return leadingNulls((year/100)|0,2);
        },
        '%d': function(date) {
          return leadingNulls(date.tm_mday, 2);
        },
        '%e': function(date) {
          return leadingSomething(date.tm_mday, 2, ' ');
        },
        '%g': function(date) {
          // %g, %G, and %V give values according to the ISO 8601:2000 standard week-based year.
          // In this system, weeks begin on a Monday and week 1 of the year is the week that includes
          // January 4th, which is also the week that includes the first Thursday of the year, and
          // is also the first week that contains at least four days in the year.
          // If the first Monday of January is the 2nd, 3rd, or 4th, the preceding days are part of
          // the last week of the preceding year; thus, for Saturday 2nd January 1999,
          // %G is replaced by 1998 and %V is replaced by 53. If December 29th, 30th,
          // or 31st is a Monday, it and any following days are part of week 1 of the following year.
          // Thus, for Tuesday 30th December 1997, %G is replaced by 1998 and %V is replaced by 01.
  
          return getWeekBasedYear(date).toString().substring(2);
        },
        '%G': function(date) {
          return getWeekBasedYear(date);
        },
        '%H': function(date) {
          return leadingNulls(date.tm_hour, 2);
        },
        '%I': function(date) {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        '%j': function(date) {
          // Day of the year (001-366)
          return leadingNulls(date.tm_mday+__arraySum(__isLeapYear(date.tm_year+1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
        },
        '%m': function(date) {
          return leadingNulls(date.tm_mon+1, 2);
        },
        '%M': function(date) {
          return leadingNulls(date.tm_min, 2);
        },
        '%n': function() {
          return '\n';
        },
        '%p': function(date) {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return 'AM';
          } else {
            return 'PM';
          }
        },
        '%S': function(date) {
          return leadingNulls(date.tm_sec, 2);
        },
        '%t': function() {
          return '\t';
        },
        '%u': function(date) {
          return date.tm_wday || 7;
        },
        '%U': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Sunday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year+1900, 0, 1);
          var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7-janFirst.getDay());
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Sunday?
          if (compareByDay(firstSunday, endDate) < 0) {
            // calculate difference in days between first Sunday and endDate
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstSundayUntilEndJanuary = 31-firstSunday.getDate();
            var days = firstSundayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
  
          return compareByDay(firstSunday, janFirst) === 0 ? '01': '00';
        },
        '%V': function(date) {
          // Replaced by the week number of the year (Monday as the first day of the week)
          // as a decimal number [01,53]. If the week containing 1 January has four
          // or more days in the new year, then it is considered week 1.
          // Otherwise, it is the last week of the previous year, and the next week is week 1.
          // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
          var janFourthThisYear = new Date(date.tm_year+1900, 0, 4);
          var janFourthNextYear = new Date(date.tm_year+1901, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          var endDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            // if given date is before this years first week, then it belongs to the 53rd week of last year
            return '53';
          }
  
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            // if given date is after next years first week, then it belongs to the 01th week of next year
            return '01';
          }
  
          // given date is in between CW 01..53 of this calendar year
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date.tm_year+1900) {
            // first CW of this year starts last year
            daysDifference = date.tm_yday+32-firstWeekStartThisYear.getDate()
          } else {
            // first CW of this year starts this year
            daysDifference = date.tm_yday+1-firstWeekStartThisYear.getDate();
          }
          return leadingNulls(Math.ceil(daysDifference/7), 2);
        },
        '%w': function(date) {
          return date.tm_wday;
        },
        '%W': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Monday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year, 0, 1);
          var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7-janFirst.getDay()+1);
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Monday?
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstMondayUntilEndJanuary = 31-firstMonday.getDate();
            var days = firstMondayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
          return compareByDay(firstMonday, janFirst) === 0 ? '01': '00';
        },
        '%y': function(date) {
          // Replaced by the last two digits of the year as a decimal number [00,99]. [ tm_year]
          return (date.tm_year+1900).toString().substring(2);
        },
        '%Y': function(date) {
          // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
          return date.tm_year+1900;
        },
        '%z': function(date) {
          // Replaced by the offset from UTC in the ISO 8601:2000 standard format ( +hhmm or -hhmm ).
          // For example, "-0430" means 4 hours 30 minutes behind UTC (west of Greenwich).
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          // convert from minutes into hhmm format (which means 60 minutes = 100 units)
          off = (off / 60)*100 + (off % 60);
          return (ahead ? '+' : '-') + String("0000" + off).slice(-4);
        },
        '%Z': function(date) {
          return date.tm_zone;
        },
        '%%': function() {
          return '%';
        }
      };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.indexOf(rule) >= 0) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
  
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
  
      writeArrayToMemory(bytes, s);
      return bytes.length-1;
    }function _strftime_l(s, maxsize, format, tm) {
      return _strftime(s, maxsize, format, tm); // no locale support yet
    }
var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.staticInit();;
var ASSERTIONS = false;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {
  if (typeof ENVIRONMENT_IS_NODE === 'boolean' && ENVIRONMENT_IS_NODE) {
    var buf;
    try {
      // TODO: Update Node.js externs, Closure does not recognize the following Buffer.from()
      /**@suppress{checkTypes}*/
      buf = Buffer.from(s, 'base64');
    } catch (_) {
      buf = new Buffer(s, 'base64');
    }
    return new Uint8Array(buf['buffer'], buf['byteOffset'], buf['byteLength']);
  }

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}


var asmGlobalArg = {};
var asmLibraryArg = { "__assert_fail": ___assert_fail, "__cxa_allocate_exception": ___cxa_allocate_exception, "__cxa_atexit": ___cxa_atexit, "__cxa_throw": ___cxa_throw, "__map_file": ___map_file, "__sys_fcntl64": ___sys_fcntl64, "__sys_ioctl": ___sys_ioctl, "__sys_munmap": ___sys_munmap, "__sys_open": ___sys_open, "abort": _abort, "emscripten_get_sbrk_ptr": _emscripten_get_sbrk_ptr, "emscripten_memcpy_big": _emscripten_memcpy_big, "emscripten_resize_heap": _emscripten_resize_heap, "environ_get": _environ_get, "environ_sizes_get": _environ_sizes_get, "fd_close": _fd_close, "fd_read": _fd_read, "fd_seek": _fd_seek, "fd_write": _fd_write, "gettimeofday": _gettimeofday, "memory": wasmMemory, "setTempRet0": _setTempRet0, "strftime_l": _strftime_l, "table": wasmTable };
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
  return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["__wasm_call_ctors"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = function() {
  return (_malloc = Module["_malloc"] = Module["asm"]["malloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = function() {
  return (___errno_location = Module["___errno_location"] = Module["asm"]["__errno_location"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _getNextI = Module["_getNextI"] = function() {
  return (_getNextI = Module["_getNextI"] = Module["asm"]["getNextI"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _makePublicKey = Module["_makePublicKey"] = function() {
  return (_makePublicKey = Module["_makePublicKey"] = Module["asm"]["makePublicKey"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _create_crypto_session = Module["_create_crypto_session"] = function() {
  return (_create_crypto_session = Module["_create_crypto_session"] = Module["asm"]["create_crypto_session"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _delete_crypto_session = Module["_delete_crypto_session"] = function() {
  return (_delete_crypto_session = Module["_delete_crypto_session"] = Module["asm"]["delete_crypto_session"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _send_message = Module["_send_message"] = function() {
  return (_send_message = Module["_send_message"] = Module["asm"]["send_message"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _completeSessionJS = Module["_completeSessionJS"] = function() {
  return (_completeSessionJS = Module["_completeSessionJS"] = Module["asm"]["completeSessionJS"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _encryptJS = Module["_encryptJS"] = function() {
  return (_encryptJS = Module["_encryptJS"] = Module["asm"]["encryptJS"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _decryptJS = Module["_decryptJS"] = function() {
  return (_decryptJS = Module["_decryptJS"] = Module["asm"]["decryptJS"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _main = Module["_main"] = function() {
  return (_main = Module["_main"] = Module["asm"]["main"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _free = Module["_free"] = function() {
  return (_free = Module["_free"] = Module["asm"]["free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _ntohs = Module["_ntohs"] = function() {
  return (_ntohs = Module["_ntohs"] = Module["asm"]["ntohs"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _htons = Module["_htons"] = function() {
  return (_htons = Module["_htons"] = Module["asm"]["htons"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _htonl = Module["_htonl"] = function() {
  return (_htonl = Module["_htonl"] = Module["asm"]["htonl"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _setThrew = Module["_setThrew"] = function() {
  return (_setThrew = Module["_setThrew"] = Module["asm"]["setThrew"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = function() {
  return (stackSave = Module["stackSave"] = Module["asm"]["stackSave"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = function() {
  return (stackRestore = Module["stackRestore"] = Module["asm"]["stackRestore"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = function() {
  return (stackAlloc = Module["stackAlloc"] = Module["asm"]["stackAlloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vi = Module["dynCall_vi"] = function() {
  return (dynCall_vi = Module["dynCall_vi"] = Module["asm"]["dynCall_vi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_ii = Module["dynCall_ii"] = function() {
  return (dynCall_ii = Module["dynCall_ii"] = Module["asm"]["dynCall_ii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiii = Module["dynCall_iiiiii"] = function() {
  return (dynCall_iiiiii = Module["dynCall_iiiiii"] = Module["asm"]["dynCall_iiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiii = Module["dynCall_viiiii"] = function() {
  return (dynCall_viiiii = Module["dynCall_viiiii"] = Module["asm"]["dynCall_viiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vii = Module["dynCall_vii"] = function() {
  return (dynCall_vii = Module["dynCall_vii"] = Module["asm"]["dynCall_vii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiii = Module["dynCall_viiiiii"] = function() {
  return (dynCall_viiiiii = Module["dynCall_viiiiii"] = Module["asm"]["dynCall_viiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iii = Module["dynCall_iii"] = function() {
  return (dynCall_iii = Module["dynCall_iii"] = Module["asm"]["dynCall_iii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_v = Module["dynCall_v"] = function() {
  return (dynCall_v = Module["dynCall_v"] = Module["asm"]["dynCall_v"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiii = Module["dynCall_iiii"] = function() {
  return (dynCall_iiii = Module["dynCall_iiii"] = Module["asm"]["dynCall_iiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viijii = Module["dynCall_viijii"] = function() {
  return (dynCall_viijii = Module["dynCall_viijii"] = Module["asm"]["dynCall_viijii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiii = Module["dynCall_viiii"] = function() {
  return (dynCall_viiii = Module["dynCall_viiii"] = Module["asm"]["dynCall_viiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiii = Module["dynCall_iiiii"] = function() {
  return (dynCall_iiiii = Module["dynCall_iiiii"] = Module["asm"]["dynCall_iiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viii = Module["dynCall_viii"] = function() {
  return (dynCall_viii = Module["dynCall_viii"] = Module["asm"]["dynCall_viii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = function() {
  return (dynCall_iiiiiii = Module["dynCall_iiiiiii"] = Module["asm"]["dynCall_iiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = function() {
  return (dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = Module["asm"]["dynCall_iiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_i = Module["dynCall_i"] = function() {
  return (dynCall_i = Module["dynCall_i"] = Module["asm"]["dynCall_i"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = function() {
  return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["dynCall_jiji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iidiiii = Module["dynCall_iidiiii"] = function() {
  return (dynCall_iidiiii = Module["dynCall_iidiiii"] = Module["asm"]["dynCall_iidiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = function() {
  return (dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = Module["asm"]["dynCall_iiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiij = Module["dynCall_iiiiij"] = function() {
  return (dynCall_iiiiij = Module["dynCall_iiiiij"] = Module["asm"]["dynCall_iiiiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiid = Module["dynCall_iiiiid"] = function() {
  return (dynCall_iiiiid = Module["dynCall_iiiiid"] = Module["asm"]["dynCall_iiiiid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = function() {
  return (dynCall_iiiiijj = Module["dynCall_iiiiijj"] = Module["asm"]["dynCall_iiiiijj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = function() {
  return (dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = Module["asm"]["dynCall_iiiiiijj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __growWasmMemory = Module["__growWasmMemory"] = function() {
  return (__growWasmMemory = Module["__growWasmMemory"] = Module["asm"]["__growWasmMemory"]).apply(null, arguments);
};





// === Auto-generated postamble setup entry stuff ===



Module["ccall"] = ccall;
Module["cwrap"] = cwrap;




























































































































































var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;


dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function callMain(args) {

  var entryFunction = Module['_main'];


  args = args || [];

  var argc = args.length+1;
  var argv = stackAlloc((argc + 1) * 4);
  HEAP32[argv >> 2] = allocateUTF8OnStack(thisProgram);
  for (var i = 1; i < argc; i++) {
    HEAP32[(argv >> 2) + i] = allocateUTF8OnStack(args[i - 1]);
  }
  HEAP32[(argv >> 2) + argc] = 0;

  try {


    var ret = entryFunction(argc, argv);


    // In PROXY_TO_PTHREAD builds, we should never exit the runtime below, as execution is asynchronously handed
    // off to a pthread.
    // if we're not running an evented main loop, it's time to exit
      exit(ret, /* implicit = */ true);
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'unwind') {
      // running an evented main loop, don't immediately exit
      noExitRuntime = true;
      return;
    } else {
      var toLog = e;
      if (e && typeof e === 'object' && e.stack) {
        toLog = [e, e.stack];
      }
      err('exception thrown: ' + toLog);
      quit_(1, e);
    }
  } finally {
    calledMain = true;
  }
}




/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }


  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    if (shouldRunNow) callMain(args);

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}
Module['run'] = run;


/** @param {boolean|number=} implicit */
function exit(status, implicit) {

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
  } else {

    ABORT = true;
    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;

if (Module['noInitialRun']) shouldRunNow = false;


  noExitRuntime = true;

run();






// {{MODULE_ADDITIONS}}



/**
 * Sends a message
 * @param {string} message a string of json data 
 * @returns {number} >= if successfull
 */
const send_message_cpp = cwrap("send_message",'number',['string'] );

/**
 * Starts a crypto session
 * @returns {number} pointer of the crypto session
 */
const create_crypto_session = cwrap("create_crypto_session",'number' );

/**
 * Removes a crypto session
 * @returns {number} pointer of the crypto session 
 */
const delete_crypto_session = cwrap("delete_crypto_session",null,['number']);

/**
 * Creates public key for crypto handshake
 * @param {number} session pointer of the crypto sesssion
 * @returns {string} public key 
 */
const get_public_key = cwrap("makePublicKey",'string',['number'] );

/**
 * Removes a crypto session
 * @param {number} session pointer of the crypto sesssion
 * @param {number} k 
 * @param {number} iv 
 * @param {number} e
 * @returns {number} pointer of the crypto session 
 */
const complete_session = cwrap("completeSessionJS",'number',['number','number','number','number']);

const encrypt = cwrap("encryptJS",'number',['number','number']);

const decrypt = cwrap("decryptJS",'number',['array','number','number']);

const getArrayBuffer = function (offset) {
  // copy an array that looks like  [ length, data[0], data[1], etc, data[length-1] ]

  //Get first element in the array - the length of the array
  let data = new Uint8Array( wasmMemory.buffer, offset, 4);
  const dv = new DataView( wasmMemory.buffer);
  const length = dv.getUint32(offset, true);
  // WebApiLogger('info', `copying ${length} bytes to JS.`);
  
  data = new Uint8Array( wasmMemory.buffer, offset+4, length);
  const buffer = new Uint8Array(data.length);
  data.map(function(value, i){buffer[i] = value});

  return buffer;
}

const getDecryptedMessage = function (offset) {
  //Get first element in the array - the length of the array
  let dataLength = new Uint32Array( wasmMemory.buffer, offset, 1);
 
  //WebApiLogger('info',dataLength);
  var dv = new DataView( wasmMemory.buffer);
  
  let length = dv.getUint32(offset,true);

  let data = new Uint8Array( wasmMemory.buffer, offset+4, length);
  
  let buffer = new Uint8Array(data.length);

  for (i = 0; i < data.length; i++) {
    buffer[i] =  data[i];
  }

  return buffer;
}

class WebApiConnection extends EventEmitter {
  /**
   * Creates a WebApiConnection object.
   */
  constructor(){
    super();
    this._i = 1;
    this._custom_crypto = true;
  }
  
  on(event, listener) {
    if(!isNaN(+event)) // if we are a number convert to a string
      event = ConnectionEvents[event];
    super.on(event, listener);
  }

  once(event, listener) {
    if(!isNaN(+event)) // if we are a number convert to a string
      event = ConnectionEvents[event];
    super.once(event, listener);
  }

  /**
   * Gets a new value for use in the webapi messahges i parameter.
   */
  getNextI() { return this._i++; }
  
  /**
   * Closes the connection
   */
  close(){
    this._socket.close(1000,"Disconnect from Reader");
    if(this._custom_crypto){
      delete_crypto_session(this._crypto_session);
    }
  }
  
  onClose(event) {
    if(this._custom_crypto) {
      delete_crypto_session(this._crypto_session);
    }

    if(event.wasClean){
      WebApiLogger('info','Connection to reader closed successfully');
    } else {
      WebApiLogger('warn','Connection to reader closed unexpectedly');
    }
    
    this.emit('CLOSED');
    this.emit(4);
  }
  
  onError(error) {
    WebApiLogger('error', 'WebSocket error: ', error)
    WebApiLogger('error', 'WebSocket error: ', error.data)
  }
  
  _make_connection_string() {
    if(this.auth.token) {
      const connectMessage = {
        "t": 91, //Connect Message
        "i": this.getNextI(),
        "d": { token: this.auth.token }
      }

      return JSON.stringify(connectMessage);
    } else {
      const connectMessage = {
        "t": 1, //Connect Message
        "i": this.getNextI(),
        "d": {
          "authKeyID" : this.auth.apiId,
          "authKey" : this.auth.apiKey
        }
      }

      return JSON.stringify(connectMessage);
    }
  }

  onMessageString(event) {
    WebApiLogger('debug', 'String Message Received', event.data);

    try{
      const {k, iv, e} = JSON.parse(event.data);

      const lengthBytes_k = lengthBytesUTF8(k)+1; 
      const k_OnWasm = _malloc(lengthBytes_k); 
      stringToUTF8(k, k_OnWasm, lengthBytes_k);
      
      const lengthBytes_iv = lengthBytesUTF8(iv)+1; 
      const iv_OnWasm = _malloc(lengthBytes_iv); 
      stringToUTF8(iv, iv_OnWasm, lengthBytes_iv); 

      const lengthBytes_e = lengthBytesUTF8(e)+1; 
      const e_OnWasm = _malloc(lengthBytes_e); 
      stringToUTF8(e, e_OnWasm, lengthBytes_e); 

      const completed = complete_session(this._crypto_session, k_OnWasm, iv_OnWasm, e_OnWasm);

      _free(k_OnWasm);
      _free(iv_OnWasm);
      _free(e_OnWasm);

      if(completed) {
        WebApiLogger('debug', 'Crypto Session Completed');
      } else {
        WebApiLogger('error', 'Crypto Session Failed');
      }

      const connectMessageString = this._make_connection_string();

      //WebApiLogger('info','Encrypting Message');

      const lengthBytes_connectMessage = lengthBytesUTF8(connectMessageString)+1; 
      //WebApiLogger('info',`malloc ${lengthBytes_connectMessage} bytes`);
      const connectMessage_OnWasm = _malloc(lengthBytes_connectMessage); 
      stringToUTF8(connectMessageString, connectMessage_OnWasm, lengthBytes_connectMessage); 
      
      let arrayPtr = encrypt(connectMessage_OnWasm, this._crypto_session);
      let arrayBuffer = getArrayBuffer(arrayPtr);
      _free(connectMessage_OnWasm);
      
      //WebApiLogger('info',`Sending ${arrayBuffer.length} bytes`);
      this._socket.send(arrayBuffer);
    } catch(e){
      WebApiLogger('error', 'Error Reading in message: ', e);
    }
  }
  
  onMessageArray(event){
    WebApiLogger('debug', "Encrypted Message Received");
    const response = event.data;

    const array = new Uint8Array(response,0,response.byteLength);
    //WebApiLogger('info',array);
    
    const decryptedMessagePtr = decrypt(array, this._crypto_session, array.length);

    //let decryptedMessage = String.fromCharCode.apply(null,getDecryptedMessage(decryptedMessagePtr));
    const decryptedMessage = new TextDecoder("utf-8").decode(getDecryptedMessage(decryptedMessagePtr));

    _free(decryptedMessagePtr);
    
    this.handle_onMessage(decryptedMessage);
  }

  handle_onMessage(decryptedMessage){
    const {t:messageId, d:obj, i: messageI} = JSON.parse(decryptedMessage);

    // Logging
    const eventType = Module['ConnectionEvents'][messageId];
    if(webapi_is_enable_logging('info')){
      if(eventType == "RETURNED_IMAGE"){
        WebApiLogger('info', 'Received: ', eventType );
      } else if(eventType == "EVENT"){
        WebApiLogger('info', 'Event: ', Module['EventCodes'][obj.eventId]);
      } else{
        WebApiLogger('info', 'Received: ', eventType, decryptedMessage);
      }
    }

    this.emit(eventType, obj);
    this.emit(messageId, obj);
  }

  onMessage(event) {
    if(this._custom_crypto) {
      if(typeof event.data === "string"){
        this.onMessageString(event);
      } else if(event.data instanceof ArrayBuffer){
        this.onMessageArray(event);
      }
    } else {
      WebApiLogger('debug', 'Message Received', event.data);
      this.handle_onMessage(event.data);
    }
  }

  onOpen() {
    if(this._custom_crypto) {
      const publicKey = get_public_key( Module['_crypto_session'] );
      WebApiLogger('debug', 'Public Key: ', publicKey);
      const message = {
        "k" :  publicKey
      }
      this._socket.send(JSON.stringify(message));
    } else {
      const connectMessageString = this._make_connection_string();
      this._socket.send(connectMessageString);
    }
  }

  /**
   * 
   * @param {string} address The address of the reader to connect to.
   * @param {Object} options Connection Options
   * 
   * @param {string} options.apidId the Key ID for the connection
   * @param {string} options.apiKey the Key for the connection
   * @param {string} options.token A JWT token to authenticate with
   * @param {string} options.protocol The network protocol to use 'ws' or 'wss' 
   * @param {number} options.port Allows the user to overide the port
   */
  open(address, options) {
    if ('WebSocket' in window || 'MozWebSocket' in window) {
      this.auth = options;
      // set port to empty if it is empty
      const port = options.port ? ':' + options.port : '';
      
      if (options.protocol === undefined || options.protocol ==null) {
        if(location && location.protocol === 'https:') {
          options.protocol = "wss";
        } else {
          options.protocol = "ws";
        }
      }

      if(options.protocol === "wss")
        this._custom_crypto = false;

      const connection = `${options.protocol}://${address}${port}/`;
      WebApiLogger('info','Attempting to open connection to reader at: ', connection);

      const socket = new WebSocket(connection);
      socket.binaryType = "arraybuffer";

      this._socket = Module['_socket'] = socket;
      if(this._custom_crypto) {
        this._crypto_session = Module['_crypto_session'] = create_crypto_session();
      }

      // bind the functions back to 'this', as WebSocket make itself 'this'
      this._socket.onerror = this.onError.bind(this);
      this._socket.onclose = this.onClose.bind(this);
      this._socket.onopen = this.onOpen.bind(this);
      this._socket.onmessage = this.onMessage.bind(this);
    } else {       
      // The browser doesn't support WebSockets
      alert("WebSockets are NOT supported by your Browser!");
    }
  };

  /**
   * Sends a message
   * @param {Object} message 
   * @param {ConnectionEvents} message.t The message type descriptor
   * @param {number} message.i an arbitrary i that will be returned in the readers response
   * @param {Object} message.d The data element
   */
  send_message(message) {
    let messageJson = undefined;
    if(typeof message === 'string' || ((!!message && typeof message === 'object') && Object.prototype.toString.call(message) === '[object String]'))
      messageJson = JSON.parse(message);
    else {
      messageJson = message;
      message = JSON.stringify(message);
    }

    // log the ConnectionEvents
    let eventId = messageJson.t;
    eventId = Module['ConnectionEvents'][eventId];
    WebApiLogger('info', "Sending: " , eventId , message);
  
    if(this._custom_crypto) {
      const lengthBytes_Message = lengthBytesUTF8(message)+1; 
      const message_OnWasm = _malloc(lengthBytes_Message); 
      stringToUTF8(message, message_OnWasm, lengthBytes_Message); 
    
      const arrayPtr = encrypt( message_OnWasm, this._crypto_session);
      const arrayBuffer = getArrayBuffer(arrayPtr);
    
      _free(message_OnWasm);
      _free(arrayPtr);
    
      this._socket.send(arrayBuffer);
    } else {
      this._socket.send(message);
    }
  }

  /**
   * Starts a session to control the reader
   */
  start_session(){
    this.send_message({
      i: this.getNextI(),
      d: null,
      t: 9
    });
  }

  /**
   * Ends a session, releasing control of the reader.
   */
  end_session(){ 
    this.send_message({
      i: this.getNextI(),
      d: null,
      t: 11
    });
  }

  /**
   * Sends message DEVICE_INFO:70.
   */
  get_device_info(){
    this.send_message({
      i: this.getNextI(),
      d: null,
      t: 70
    });
  }

  /**
   * Sends message CAPTURE_DATA:50
   */
  capture(){
    this.send_message({
      i: this.getNextI(),
      d: null,
      t: 50
    });
  }

  /**
   * Sends messagge LISTEN_START:42
   */
  listen_start(){
    this.send_message({
      i: this.getNextI(),
      d: null,
      t: 42
    });
  }

  /**
  * Sends messagge LISTEN_ERROR_START:54
  */
  listen_error_start(){
    this.send_message({
      i: this.getNextI(),
      d: null,
      t: 54
    });
  }

  /**
   * Sends a RETRIEVE_IMAGE:16 message
   * @param {Object} image_options Information about the image to get
   * @param {number} image_options.image_id the image ID to return.
   */
  retreive_image(image_options){
    this.send_message({
      i: this.getNextI(),
      d: image_options,
      t: 16
    });
  }
}

const _WebApiConnection = new WebApiConnection();
Module['defaultConnection'] = _WebApiConnection;

Module['newConnection'] = () => {
  return new WebApiConnection();
}

/**
 * Registers a handler to listen on
 * @param {string} event the event to listen to
 * @param {function} handler the event handler
 */
Module['on'] = (event,handler) => {
  return _WebApiConnection.on(event, handler);
}

/**
 * Registers a handler to listen one time on
 * @param {string} event the event to listen to
 * @param {function} handler the event handler
 */
Module['once'] = (event,handler) => {
  return _WebApiConnection.once(event, handler);
}

/**
 * Registers a handler to listen one time on
 * @param {string} event the event to listen to
 * @param {function} handler the event handler
 */
Module['off'] = (event,handler) => {
  return _WebApiConnection.off(event, handler);
}

/**
 * Sends message to the reader
 * @param {string} message message structure from messages.md 
 */
Module['send_message'] = (message) => {
  return _WebApiConnection.send_message(message);
}

/**
 * Opens a connection to a reader
 * @param {string} address the ip address of a reader
 * @param {string} apidId the Key ID for the connection
 * @param {string} apiKey the Key for the connection
 * @param {string} protocol The network protocol to use 'ws' or 'wss' 
 * @param {number} port Allows the user to overide the port
 */
Module['open_connection'] = (address, apiId, apiKey, protocol = undefined, port = undefined) => {
  return _WebApiConnection.open(address,{apiId, apiKey, port, protocol})
}

/**
 * Opens a connection to a reader
 * @param {string} address The ip address of a reader
 * @param {string} token A JWT token to authenticate with
 * @param {string} protocol The network protocol to use 'ws' or 'wss' 
 * @param {number} port Allows the user to overide the port
 */
Module['open_jwt_connection'] = (address, token, protocol = undefined, port = undefined) => {
  return _WebApiConnection.open(address,{token , port, protocol})
}

/**
 * Sends a Start Session message
 */
Module['start_session'] = function(){
  return _WebApiConnection.start_session();
}

/**
 * Sends an End Session message
 */
Module['end_session'] = function(){
  return _WebApiConnection.end_session();
}

/**
 * Sends a DEVICE_INFO:70 message
 */
Module['get_device_info'] = function(){
  return _WebApiConnection.get_device_info();
}

/**
 * Sends a CAPTURE_DATA:50 message
 */
Module['capture'] = function(){
  return _WebApiConnection.capture();
}
/**
 * Sends a LISTEN_START:42 message
 */
Module['listen_start'] = function(){
  return _WebApiConnection.listen_start();
}
/**
 * Sends a LISTEN_ERROR_START:54 message
 */
Module['listen_error_start'] = function(){
  return _WebApiConnection.listen_error_start();
}

/**
 * Sends a RETRIEVE_IMAGE:16 message
 * @param {Object} image_options Information about the image to get
 * @param {number} image_options.image_id the image ID to return.
 */
Module['retreive_image'] = function(image_options){
  return _WebApiConnection.retreive_image(image_options);
}

Module['getReaderDataType'] = (type) => {
  return Module['ReaderDataTypes'][type];
}

Module['getEventCode'] = (type) => {
  return Module['EventCodes'][type];
}

Module['getErrorCode'] = (type) => {
  return Module['ErrorCodes'][type];
}

/**
 * Closes a connection to a reader
 */
Module['close_connection'] = () => {
  return _WebApiConnection.close();
}

/**
 * Increment for identifyer of individual messages
 */
Module['getNextI'] = () => {
  return _WebApiConnection.getNextI();
}

Module['removeAllListeners'] = () => {
  return _WebApiConnection.removeAllListeners();
}



  return webapi.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = webapi;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return webapi; });
    else if (typeof exports === 'object')
      exports["webapi"] = webapi;
    