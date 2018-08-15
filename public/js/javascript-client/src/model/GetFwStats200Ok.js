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
    define(['ApiClient', 'model/GetFwStatsKills', 'model/GetFwStatsVictoryPoints'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetFwStatsKills'), require('./GetFwStatsVictoryPoints'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetFwStats200Ok = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetFwStatsKills, root.EveSwaggerInterface.GetFwStatsVictoryPoints);
  }
}(this, function(ApiClient, GetFwStatsKills, GetFwStatsVictoryPoints) {
  'use strict';




  /**
   * The GetFwStats200Ok model module.
   * @module model/GetFwStats200Ok
   * @version 0.8.5
   */

  /**
   * Constructs a new <code>GetFwStats200Ok</code>.
   * 200 ok object
   * @alias module:model/GetFwStats200Ok
   * @class
   * @param factionId {Number} faction_id integer
   * @param kills {module:model/GetFwStatsKills} 
   * @param pilots {Number} How many pilots fight for the given faction
   * @param systemsControlled {Number} The number of solar systems controlled by the given faction
   * @param victoryPoints {module:model/GetFwStatsVictoryPoints} 
   */
  var exports = function(factionId, kills, pilots, systemsControlled, victoryPoints) {
    var _this = this;

    _this['faction_id'] = factionId;
    _this['kills'] = kills;
    _this['pilots'] = pilots;
    _this['systems_controlled'] = systemsControlled;
    _this['victory_points'] = victoryPoints;
  };

  /**
   * Constructs a <code>GetFwStats200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFwStats200Ok} obj Optional instance to populate.
   * @return {module:model/GetFwStats200Ok} The populated <code>GetFwStats200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('faction_id')) {
        obj['faction_id'] = ApiClient.convertToType(data['faction_id'], 'Number');
      }
      if (data.hasOwnProperty('kills')) {
        obj['kills'] = GetFwStatsKills.constructFromObject(data['kills']);
      }
      if (data.hasOwnProperty('pilots')) {
        obj['pilots'] = ApiClient.convertToType(data['pilots'], 'Number');
      }
      if (data.hasOwnProperty('systems_controlled')) {
        obj['systems_controlled'] = ApiClient.convertToType(data['systems_controlled'], 'Number');
      }
      if (data.hasOwnProperty('victory_points')) {
        obj['victory_points'] = GetFwStatsVictoryPoints.constructFromObject(data['victory_points']);
      }
    }
    return obj;
  }

  /**
   * faction_id integer
   * @member {Number} faction_id
   */
  exports.prototype['faction_id'] = undefined;
  /**
   * @member {module:model/GetFwStatsKills} kills
   */
  exports.prototype['kills'] = undefined;
  /**
   * How many pilots fight for the given faction
   * @member {Number} pilots
   */
  exports.prototype['pilots'] = undefined;
  /**
   * The number of solar systems controlled by the given faction
   * @member {Number} systems_controlled
   */
  exports.prototype['systems_controlled'] = undefined;
  /**
   * @member {module:model/GetFwStatsVictoryPoints} victory_points
   */
  exports.prototype['victory_points'] = undefined;



  return exports;
}));


