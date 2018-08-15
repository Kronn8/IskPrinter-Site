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
    root.EveSwaggerInterface.GetCorporationsCorporationIdContractsContractIdItems200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCorporationsCorporationIdContractsContractIdItems200Ok model module.
   * @module model/GetCorporationsCorporationIdContractsContractIdItems200Ok
   * @version 0.8.5
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdContractsContractIdItems200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdContractsContractIdItems200Ok
   * @class
   * @param isIncluded {Boolean} true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract.
   * @param isSingleton {Boolean} is_singleton boolean
   * @param quantity {Number} Number of items in the stack
   * @param recordId {Number} Unique ID for the item
   * @param typeId {Number} Type ID for item
   */
  var exports = function(isIncluded, isSingleton, quantity, recordId, typeId) {
    var _this = this;

    _this['is_included'] = isIncluded;
    _this['is_singleton'] = isSingleton;
    _this['quantity'] = quantity;

    _this['record_id'] = recordId;
    _this['type_id'] = typeId;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdContractsContractIdItems200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdContractsContractIdItems200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdContractsContractIdItems200Ok} The populated <code>GetCorporationsCorporationIdContractsContractIdItems200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('is_included')) {
        obj['is_included'] = ApiClient.convertToType(data['is_included'], 'Boolean');
      }
      if (data.hasOwnProperty('is_singleton')) {
        obj['is_singleton'] = ApiClient.convertToType(data['is_singleton'], 'Boolean');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('raw_quantity')) {
        obj['raw_quantity'] = ApiClient.convertToType(data['raw_quantity'], 'Number');
      }
      if (data.hasOwnProperty('record_id')) {
        obj['record_id'] = ApiClient.convertToType(data['record_id'], 'Number');
      }
      if (data.hasOwnProperty('type_id')) {
        obj['type_id'] = ApiClient.convertToType(data['type_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract.
   * @member {Boolean} is_included
   */
  exports.prototype['is_included'] = undefined;
  /**
   * is_singleton boolean
   * @member {Boolean} is_singleton
   */
  exports.prototype['is_singleton'] = undefined;
  /**
   * Number of items in the stack
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * -1 indicates that the item is a singleton (non-stackable). If the item happens to be a Blueprint, -1 is an Original and -2 is a Blueprint Copy
   * @member {Number} raw_quantity
   */
  exports.prototype['raw_quantity'] = undefined;
  /**
   * Unique ID for the item
   * @member {Number} record_id
   */
  exports.prototype['record_id'] = undefined;
  /**
   * Type ID for item
   * @member {Number} type_id
   */
  exports.prototype['type_id'] = undefined;



  return exports;
}));


