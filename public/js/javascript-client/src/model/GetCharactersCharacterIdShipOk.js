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
    root.EveSwaggerInterface.GetCharactersCharacterIdShipOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdShipOk model module.
   * @module model/GetCharactersCharacterIdShipOk
   * @version 0.8.5
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdShipOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdShipOk
   * @class
   * @param shipItemId {Number} Item id's are unique to a ship and persist until it is repackaged. This value can be used to track repeated uses of a ship, or detect when a pilot changes into a different instance of the same ship type.
   * @param shipName {String} ship_name string
   * @param shipTypeId {Number} ship_type_id integer
   */
  var exports = function(shipItemId, shipName, shipTypeId) {
    var _this = this;

    _this['ship_item_id'] = shipItemId;
    _this['ship_name'] = shipName;
    _this['ship_type_id'] = shipTypeId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdShipOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdShipOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdShipOk} The populated <code>GetCharactersCharacterIdShipOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ship_item_id')) {
        obj['ship_item_id'] = ApiClient.convertToType(data['ship_item_id'], 'Number');
      }
      if (data.hasOwnProperty('ship_name')) {
        obj['ship_name'] = ApiClient.convertToType(data['ship_name'], 'String');
      }
      if (data.hasOwnProperty('ship_type_id')) {
        obj['ship_type_id'] = ApiClient.convertToType(data['ship_type_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Item id's are unique to a ship and persist until it is repackaged. This value can be used to track repeated uses of a ship, or detect when a pilot changes into a different instance of the same ship type.
   * @member {Number} ship_item_id
   */
  exports.prototype['ship_item_id'] = undefined;
  /**
   * ship_name string
   * @member {String} ship_name
   */
  exports.prototype['ship_name'] = undefined;
  /**
   * ship_type_id integer
   * @member {Number} ship_type_id
   */
  exports.prototype['ship_type_id'] = undefined;



  return exports;
}));


