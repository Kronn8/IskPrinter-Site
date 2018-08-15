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
    root.EveSwaggerInterface.GetCharactersCharacterIdFleetOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdFleetOk model module.
   * @module model/GetCharactersCharacterIdFleetOk
   * @version 0.8.5
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdFleetOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdFleetOk
   * @class
   * @param fleetId {Number} The character's current fleet ID
   * @param role {module:model/GetCharactersCharacterIdFleetOk.RoleEnum} Member’s role in fleet
   * @param squadId {Number} ID of the squad the member is in. If not applicable, will be set to -1
   * @param wingId {Number} ID of the wing the member is in. If not applicable, will be set to -1
   */
  var exports = function(fleetId, role, squadId, wingId) {
    var _this = this;

    _this['fleet_id'] = fleetId;
    _this['role'] = role;
    _this['squad_id'] = squadId;
    _this['wing_id'] = wingId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdFleetOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdFleetOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdFleetOk} The populated <code>GetCharactersCharacterIdFleetOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fleet_id')) {
        obj['fleet_id'] = ApiClient.convertToType(data['fleet_id'], 'Number');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
      if (data.hasOwnProperty('squad_id')) {
        obj['squad_id'] = ApiClient.convertToType(data['squad_id'], 'Number');
      }
      if (data.hasOwnProperty('wing_id')) {
        obj['wing_id'] = ApiClient.convertToType(data['wing_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The character's current fleet ID
   * @member {Number} fleet_id
   */
  exports.prototype['fleet_id'] = undefined;
  /**
   * Member’s role in fleet
   * @member {module:model/GetCharactersCharacterIdFleetOk.RoleEnum} role
   */
  exports.prototype['role'] = undefined;
  /**
   * ID of the squad the member is in. If not applicable, will be set to -1
   * @member {Number} squad_id
   */
  exports.prototype['squad_id'] = undefined;
  /**
   * ID of the wing the member is in. If not applicable, will be set to -1
   * @member {Number} wing_id
   */
  exports.prototype['wing_id'] = undefined;


  /**
   * Allowed values for the <code>role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoleEnum = {
    /**
     * value: "fleet_commander"
     * @const
     */
    "fleet_commander": "fleet_commander",
    /**
     * value: "squad_commander"
     * @const
     */
    "squad_commander": "squad_commander",
    /**
     * value: "squad_member"
     * @const
     */
    "squad_member": "squad_member",
    /**
     * value: "wing_commander"
     * @const
     */
    "wing_commander": "wing_commander"  };


  return exports;
}));


