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
    root.EveSwaggerInterface.GetCharactersCharacterIdAttributesOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdAttributesOk model module.
   * @module model/GetCharactersCharacterIdAttributesOk
   * @version 0.8.5
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdAttributesOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdAttributesOk
   * @class
   * @param charisma {Number} charisma integer
   * @param intelligence {Number} intelligence integer
   * @param memory {Number} memory integer
   * @param perception {Number} perception integer
   * @param willpower {Number} willpower integer
   */
  var exports = function(charisma, intelligence, memory, perception, willpower) {
    var _this = this;



    _this['charisma'] = charisma;
    _this['intelligence'] = intelligence;

    _this['memory'] = memory;
    _this['perception'] = perception;
    _this['willpower'] = willpower;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdAttributesOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdAttributesOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdAttributesOk} The populated <code>GetCharactersCharacterIdAttributesOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accrued_remap_cooldown_date')) {
        obj['accrued_remap_cooldown_date'] = ApiClient.convertToType(data['accrued_remap_cooldown_date'], 'Date');
      }
      if (data.hasOwnProperty('bonus_remaps')) {
        obj['bonus_remaps'] = ApiClient.convertToType(data['bonus_remaps'], 'Number');
      }
      if (data.hasOwnProperty('charisma')) {
        obj['charisma'] = ApiClient.convertToType(data['charisma'], 'Number');
      }
      if (data.hasOwnProperty('intelligence')) {
        obj['intelligence'] = ApiClient.convertToType(data['intelligence'], 'Number');
      }
      if (data.hasOwnProperty('last_remap_date')) {
        obj['last_remap_date'] = ApiClient.convertToType(data['last_remap_date'], 'Date');
      }
      if (data.hasOwnProperty('memory')) {
        obj['memory'] = ApiClient.convertToType(data['memory'], 'Number');
      }
      if (data.hasOwnProperty('perception')) {
        obj['perception'] = ApiClient.convertToType(data['perception'], 'Number');
      }
      if (data.hasOwnProperty('willpower')) {
        obj['willpower'] = ApiClient.convertToType(data['willpower'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Neural remapping cooldown after a character uses remap accrued over time
   * @member {Date} accrued_remap_cooldown_date
   */
  exports.prototype['accrued_remap_cooldown_date'] = undefined;
  /**
   * Number of available bonus character neural remaps
   * @member {Number} bonus_remaps
   */
  exports.prototype['bonus_remaps'] = undefined;
  /**
   * charisma integer
   * @member {Number} charisma
   */
  exports.prototype['charisma'] = undefined;
  /**
   * intelligence integer
   * @member {Number} intelligence
   */
  exports.prototype['intelligence'] = undefined;
  /**
   * Datetime of last neural remap, including usage of bonus remaps
   * @member {Date} last_remap_date
   */
  exports.prototype['last_remap_date'] = undefined;
  /**
   * memory integer
   * @member {Number} memory
   */
  exports.prototype['memory'] = undefined;
  /**
   * perception integer
   * @member {Number} perception
   */
  exports.prototype['perception'] = undefined;
  /**
   * willpower integer
   * @member {Number} willpower
   */
  exports.prototype['willpower'] = undefined;



  return exports;
}));


