/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.8.5
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdCalendarEventIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdCalendarEventIdOk model module.
   * @module model/GetCharactersCharacterIdCalendarEventIdOk
   * @version 0.8.5
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdCalendarEventIdOk</code>.
   * Full details of a specific event
   * @alias module:model/GetCharactersCharacterIdCalendarEventIdOk
   * @class
   * @param _date {Date} date string
   * @param duration {Number} Length in minutes
   * @param eventId {Number} event_id integer
   * @param importance {Number} importance integer
   * @param ownerId {Number} owner_id integer
   * @param ownerName {String} owner_name string
   * @param ownerType {module:model/GetCharactersCharacterIdCalendarEventIdOk.OwnerTypeEnum} owner_type string
   * @param response {String} response string
   * @param text {String} text string
   * @param title {String} title string
   */
  var exports = function(_date, duration, eventId, importance, ownerId, ownerName, ownerType, response, text, title) {
    var _this = this;

    _this['date'] = _date;
    _this['duration'] = duration;
    _this['event_id'] = eventId;
    _this['importance'] = importance;
    _this['owner_id'] = ownerId;
    _this['owner_name'] = ownerName;
    _this['owner_type'] = ownerType;
    _this['response'] = response;
    _this['text'] = text;
    _this['title'] = title;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdCalendarEventIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdCalendarEventIdOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdCalendarEventIdOk} The populated <code>GetCharactersCharacterIdCalendarEventIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
      }
      if (data.hasOwnProperty('event_id')) {
        obj['event_id'] = ApiClient.convertToType(data['event_id'], 'Number');
      }
      if (data.hasOwnProperty('importance')) {
        obj['importance'] = ApiClient.convertToType(data['importance'], 'Number');
      }
      if (data.hasOwnProperty('owner_id')) {
        obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');
      }
      if (data.hasOwnProperty('owner_name')) {
        obj['owner_name'] = ApiClient.convertToType(data['owner_name'], 'String');
      }
      if (data.hasOwnProperty('owner_type')) {
        obj['owner_type'] = ApiClient.convertToType(data['owner_type'], 'String');
      }
      if (data.hasOwnProperty('response')) {
        obj['response'] = ApiClient.convertToType(data['response'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * date string
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * Length in minutes
   * @member {Number} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * event_id integer
   * @member {Number} event_id
   */
  exports.prototype['event_id'] = undefined;
  /**
   * importance integer
   * @member {Number} importance
   */
  exports.prototype['importance'] = undefined;
  /**
   * owner_id integer
   * @member {Number} owner_id
   */
  exports.prototype['owner_id'] = undefined;
  /**
   * owner_name string
   * @member {String} owner_name
   */
  exports.prototype['owner_name'] = undefined;
  /**
   * owner_type string
   * @member {module:model/GetCharactersCharacterIdCalendarEventIdOk.OwnerTypeEnum} owner_type
   */
  exports.prototype['owner_type'] = undefined;
  /**
   * response string
   * @member {String} response
   */
  exports.prototype['response'] = undefined;
  /**
   * text string
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * title string
   * @member {String} title
   */
  exports.prototype['title'] = undefined;


  /**
   * Allowed values for the <code>owner_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OwnerTypeEnum = {
    /**
     * value: "eve_server"
     * @const
     */
    "eve_server": "eve_server",
    /**
     * value: "corporation"
     * @const
     */
    "corporation": "corporation",
    /**
     * value: "faction"
     * @const
     */
    "faction": "faction",
    /**
     * value: "character"
     * @const
     */
    "character": "character",
    /**
     * value: "alliance"
     * @const
     */
    "alliance": "alliance"  };


  return exports;
}));


