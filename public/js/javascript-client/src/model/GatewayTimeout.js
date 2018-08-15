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
    root.EveSwaggerInterface.GatewayTimeout = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GatewayTimeout model module.
   * @module model/GatewayTimeout
   * @version 0.8.5
   */

  /**
   * Constructs a new <code>GatewayTimeout</code>.
   * Gateway timeout model
   * @alias module:model/GatewayTimeout
   * @class
   * @param error {String} Gateway timeout message
   */
  var exports = function(error) {
    var _this = this;

    _this['error'] = error;

  };

  /**
   * Constructs a <code>GatewayTimeout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GatewayTimeout} obj Optional instance to populate.
   * @return {module:model/GatewayTimeout} The populated <code>GatewayTimeout</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('timeout')) {
        obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Gateway timeout message
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * number of seconds the request was given
   * @member {Number} timeout
   */
  exports.prototype['timeout'] = undefined;



  return exports;
}));


