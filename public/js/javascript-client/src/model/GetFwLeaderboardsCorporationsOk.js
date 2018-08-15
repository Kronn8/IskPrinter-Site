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
    define(['ApiClient', 'model/GetFwLeaderboardsCorporationsKills', 'model/GetFwLeaderboardsCorporationsVictoryPoints'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetFwLeaderboardsCorporationsKills'), require('./GetFwLeaderboardsCorporationsVictoryPoints'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetFwLeaderboardsCorporationsOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetFwLeaderboardsCorporationsKills, root.EveSwaggerInterface.GetFwLeaderboardsCorporationsVictoryPoints);
  }
}(this, function(ApiClient, GetFwLeaderboardsCorporationsKills, GetFwLeaderboardsCorporationsVictoryPoints) {
  'use strict';




  /**
   * The GetFwLeaderboardsCorporationsOk model module.
   * @module model/GetFwLeaderboardsCorporationsOk
   * @version 0.8.5
   */

  /**
   * Constructs a new <code>GetFwLeaderboardsCorporationsOk</code>.
   * 200 ok object
   * @alias module:model/GetFwLeaderboardsCorporationsOk
   * @class
   * @param kills {module:model/GetFwLeaderboardsCorporationsKills} 
   * @param victoryPoints {module:model/GetFwLeaderboardsCorporationsVictoryPoints} 
   */
  var exports = function(kills, victoryPoints) {
    var _this = this;

    _this['kills'] = kills;
    _this['victory_points'] = victoryPoints;
  };

  /**
   * Constructs a <code>GetFwLeaderboardsCorporationsOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFwLeaderboardsCorporationsOk} obj Optional instance to populate.
   * @return {module:model/GetFwLeaderboardsCorporationsOk} The populated <code>GetFwLeaderboardsCorporationsOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('kills')) {
        obj['kills'] = GetFwLeaderboardsCorporationsKills.constructFromObject(data['kills']);
      }
      if (data.hasOwnProperty('victory_points')) {
        obj['victory_points'] = GetFwLeaderboardsCorporationsVictoryPoints.constructFromObject(data['victory_points']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/GetFwLeaderboardsCorporationsKills} kills
   */
  exports.prototype['kills'] = undefined;
  /**
   * @member {module:model/GetFwLeaderboardsCorporationsVictoryPoints} victory_points
   */
  exports.prototype['victory_points'] = undefined;



  return exports;
}));


