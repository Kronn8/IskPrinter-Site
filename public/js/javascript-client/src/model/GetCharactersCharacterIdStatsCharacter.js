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
    root.EveSwaggerInterface.GetCharactersCharacterIdStatsCharacter = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdStatsCharacter model module.
   * @module model/GetCharactersCharacterIdStatsCharacter
   * @version 0.8.5
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdStatsCharacter</code>.
   * character object
   * @alias module:model/GetCharactersCharacterIdStatsCharacter
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>GetCharactersCharacterIdStatsCharacter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdStatsCharacter} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdStatsCharacter} The populated <code>GetCharactersCharacterIdStatsCharacter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('days_of_activity')) {
        obj['days_of_activity'] = ApiClient.convertToType(data['days_of_activity'], 'Number');
      }
      if (data.hasOwnProperty('minutes')) {
        obj['minutes'] = ApiClient.convertToType(data['minutes'], 'Number');
      }
      if (data.hasOwnProperty('sessions_started')) {
        obj['sessions_started'] = ApiClient.convertToType(data['sessions_started'], 'Number');
      }
    }
    return obj;
  }

  /**
   * days_of_activity integer
   * @member {Number} days_of_activity
   */
  exports.prototype['days_of_activity'] = undefined;
  /**
   * minutes integer
   * @member {Number} minutes
   */
  exports.prototype['minutes'] = undefined;
  /**
   * sessions_started integer
   * @member {Number} sessions_started
   */
  exports.prototype['sessions_started'] = undefined;



  return exports;
}));


