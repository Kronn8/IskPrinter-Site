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
    root.EveSwaggerInterface.GetUniverseAncestries200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetUniverseAncestries200Ok model module.
   * @module model/GetUniverseAncestries200Ok
   * @version 0.8.5
   */

  /**
   * Constructs a new <code>GetUniverseAncestries200Ok</code>.
   * 200 ok object
   * @alias module:model/GetUniverseAncestries200Ok
   * @class
   * @param bloodlineId {Number} The bloodline associated with this ancestry
   * @param description {String} description string
   * @param id {Number} id integer
   * @param name {String} name string
   */
  var exports = function(bloodlineId, description, id, name) {
    var _this = this;

    _this['bloodline_id'] = bloodlineId;
    _this['description'] = description;

    _this['id'] = id;
    _this['name'] = name;

  };

  /**
   * Constructs a <code>GetUniverseAncestries200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseAncestries200Ok} obj Optional instance to populate.
   * @return {module:model/GetUniverseAncestries200Ok} The populated <code>GetUniverseAncestries200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bloodline_id')) {
        obj['bloodline_id'] = ApiClient.convertToType(data['bloodline_id'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('icon_id')) {
        obj['icon_id'] = ApiClient.convertToType(data['icon_id'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('short_description')) {
        obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
      }
    }
    return obj;
  }

  /**
   * The bloodline associated with this ancestry
   * @member {Number} bloodline_id
   */
  exports.prototype['bloodline_id'] = undefined;
  /**
   * description string
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * icon_id integer
   * @member {Number} icon_id
   */
  exports.prototype['icon_id'] = undefined;
  /**
   * id integer
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * name string
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * short_description string
   * @member {String} short_description
   */
  exports.prototype['short_description'] = undefined;



  return exports;
}));


