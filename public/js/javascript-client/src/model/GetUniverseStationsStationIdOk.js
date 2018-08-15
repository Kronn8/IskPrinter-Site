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
    define(['ApiClient', 'model/GetUniverseStationsStationIdPosition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetUniverseStationsStationIdPosition'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetUniverseStationsStationIdOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetUniverseStationsStationIdPosition);
  }
}(this, function(ApiClient, GetUniverseStationsStationIdPosition) {
  'use strict';




  /**
   * The GetUniverseStationsStationIdOk model module.
   * @module model/GetUniverseStationsStationIdOk
   * @version 0.8.5
   */

  /**
   * Constructs a new <code>GetUniverseStationsStationIdOk</code>.
   * 200 ok object
   * @alias module:model/GetUniverseStationsStationIdOk
   * @class
   * @param maxDockableShipVolume {Number} max_dockable_ship_volume number
   * @param name {String} name string
   * @param officeRentalCost {Number} office_rental_cost number
   * @param position {module:model/GetUniverseStationsStationIdPosition} 
   * @param reprocessingEfficiency {Number} reprocessing_efficiency number
   * @param reprocessingStationsTake {Number} reprocessing_stations_take number
   * @param services {Array.<module:model/GetUniverseStationsStationIdOk.ServicesEnum>} services array
   * @param stationId {Number} station_id integer
   * @param systemId {Number} The solar system this station is in
   * @param typeId {Number} type_id integer
   */
  var exports = function(maxDockableShipVolume, name, officeRentalCost, position, reprocessingEfficiency, reprocessingStationsTake, services, stationId, systemId, typeId) {
    var _this = this;

    _this['max_dockable_ship_volume'] = maxDockableShipVolume;
    _this['name'] = name;
    _this['office_rental_cost'] = officeRentalCost;

    _this['position'] = position;

    _this['reprocessing_efficiency'] = reprocessingEfficiency;
    _this['reprocessing_stations_take'] = reprocessingStationsTake;
    _this['services'] = services;
    _this['station_id'] = stationId;
    _this['system_id'] = systemId;
    _this['type_id'] = typeId;
  };

  /**
   * Constructs a <code>GetUniverseStationsStationIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseStationsStationIdOk} obj Optional instance to populate.
   * @return {module:model/GetUniverseStationsStationIdOk} The populated <code>GetUniverseStationsStationIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('max_dockable_ship_volume')) {
        obj['max_dockable_ship_volume'] = ApiClient.convertToType(data['max_dockable_ship_volume'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('office_rental_cost')) {
        obj['office_rental_cost'] = ApiClient.convertToType(data['office_rental_cost'], 'Number');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'Number');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = GetUniverseStationsStationIdPosition.constructFromObject(data['position']);
      }
      if (data.hasOwnProperty('race_id')) {
        obj['race_id'] = ApiClient.convertToType(data['race_id'], 'Number');
      }
      if (data.hasOwnProperty('reprocessing_efficiency')) {
        obj['reprocessing_efficiency'] = ApiClient.convertToType(data['reprocessing_efficiency'], 'Number');
      }
      if (data.hasOwnProperty('reprocessing_stations_take')) {
        obj['reprocessing_stations_take'] = ApiClient.convertToType(data['reprocessing_stations_take'], 'Number');
      }
      if (data.hasOwnProperty('services')) {
        obj['services'] = ApiClient.convertToType(data['services'], ['String']);
      }
      if (data.hasOwnProperty('station_id')) {
        obj['station_id'] = ApiClient.convertToType(data['station_id'], 'Number');
      }
      if (data.hasOwnProperty('system_id')) {
        obj['system_id'] = ApiClient.convertToType(data['system_id'], 'Number');
      }
      if (data.hasOwnProperty('type_id')) {
        obj['type_id'] = ApiClient.convertToType(data['type_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * max_dockable_ship_volume number
   * @member {Number} max_dockable_ship_volume
   */
  exports.prototype['max_dockable_ship_volume'] = undefined;
  /**
   * name string
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * office_rental_cost number
   * @member {Number} office_rental_cost
   */
  exports.prototype['office_rental_cost'] = undefined;
  /**
   * ID of the corporation that controls this station
   * @member {Number} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * @member {module:model/GetUniverseStationsStationIdPosition} position
   */
  exports.prototype['position'] = undefined;
  /**
   * race_id integer
   * @member {Number} race_id
   */
  exports.prototype['race_id'] = undefined;
  /**
   * reprocessing_efficiency number
   * @member {Number} reprocessing_efficiency
   */
  exports.prototype['reprocessing_efficiency'] = undefined;
  /**
   * reprocessing_stations_take number
   * @member {Number} reprocessing_stations_take
   */
  exports.prototype['reprocessing_stations_take'] = undefined;
  /**
   * services array
   * @member {Array.<module:model/GetUniverseStationsStationIdOk.ServicesEnum>} services
   */
  exports.prototype['services'] = undefined;
  /**
   * station_id integer
   * @member {Number} station_id
   */
  exports.prototype['station_id'] = undefined;
  /**
   * The solar system this station is in
   * @member {Number} system_id
   */
  exports.prototype['system_id'] = undefined;
  /**
   * type_id integer
   * @member {Number} type_id
   */
  exports.prototype['type_id'] = undefined;


  /**
   * Allowed values for the <code>services</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ServicesEnum = {
    /**
     * value: "bounty-missions"
     * @const
     */
    "bounty-missions": "bounty-missions",
    /**
     * value: "assasination-missions"
     * @const
     */
    "assasination-missions": "assasination-missions",
    /**
     * value: "courier-missions"
     * @const
     */
    "courier-missions": "courier-missions",
    /**
     * value: "interbus"
     * @const
     */
    "interbus": "interbus",
    /**
     * value: "reprocessing-plant"
     * @const
     */
    "reprocessing-plant": "reprocessing-plant",
    /**
     * value: "refinery"
     * @const
     */
    "refinery": "refinery",
    /**
     * value: "market"
     * @const
     */
    "market": "market",
    /**
     * value: "black-market"
     * @const
     */
    "black-market": "black-market",
    /**
     * value: "stock-exchange"
     * @const
     */
    "stock-exchange": "stock-exchange",
    /**
     * value: "cloning"
     * @const
     */
    "cloning": "cloning",
    /**
     * value: "surgery"
     * @const
     */
    "surgery": "surgery",
    /**
     * value: "dna-therapy"
     * @const
     */
    "dna-therapy": "dna-therapy",
    /**
     * value: "repair-facilities"
     * @const
     */
    "repair-facilities": "repair-facilities",
    /**
     * value: "factory"
     * @const
     */
    "factory": "factory",
    /**
     * value: "labratory"
     * @const
     */
    "labratory": "labratory",
    /**
     * value: "gambling"
     * @const
     */
    "gambling": "gambling",
    /**
     * value: "fitting"
     * @const
     */
    "fitting": "fitting",
    /**
     * value: "paintshop"
     * @const
     */
    "paintshop": "paintshop",
    /**
     * value: "news"
     * @const
     */
    "news": "news",
    /**
     * value: "storage"
     * @const
     */
    "storage": "storage",
    /**
     * value: "insurance"
     * @const
     */
    "insurance": "insurance",
    /**
     * value: "docking"
     * @const
     */
    "docking": "docking",
    /**
     * value: "office-rental"
     * @const
     */
    "office-rental": "office-rental",
    /**
     * value: "jump-clone-facility"
     * @const
     */
    "jump-clone-facility": "jump-clone-facility",
    /**
     * value: "loyalty-point-store"
     * @const
     */
    "loyalty-point-store": "loyalty-point-store",
    /**
     * value: "navy-offices"
     * @const
     */
    "navy-offices": "navy-offices",
    /**
     * value: "security-offices"
     * @const
     */
    "security-offices": "security-offices"  };


  return exports;
}));


