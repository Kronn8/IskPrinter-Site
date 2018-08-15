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
    root.EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCorporationsCorporationIdContainersLogs200Ok model module.
   * @module model/GetCorporationsCorporationIdContainersLogs200Ok
   * @version 0.8.5
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdContainersLogs200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdContainersLogs200Ok
   * @class
   * @param action {module:model/GetCorporationsCorporationIdContainersLogs200Ok.ActionEnum} action string
   * @param characterId {Number} ID of the character who performed the action.
   * @param containerId {Number} ID of the container
   * @param containerTypeId {Number} Type ID of the container
   * @param locationFlag {module:model/GetCorporationsCorporationIdContainersLogs200Ok.LocationFlagEnum} location_flag string
   * @param locationId {Number} location_id integer
   * @param loggedAt {Date} Timestamp when this log was created
   */
  var exports = function(action, characterId, containerId, containerTypeId, locationFlag, locationId, loggedAt) {
    var _this = this;

    _this['action'] = action;
    _this['character_id'] = characterId;
    _this['container_id'] = containerId;
    _this['container_type_id'] = containerTypeId;
    _this['location_flag'] = locationFlag;
    _this['location_id'] = locationId;
    _this['logged_at'] = loggedAt;





  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdContainersLogs200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdContainersLogs200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdContainersLogs200Ok} The populated <code>GetCorporationsCorporationIdContainersLogs200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('character_id')) {
        obj['character_id'] = ApiClient.convertToType(data['character_id'], 'Number');
      }
      if (data.hasOwnProperty('container_id')) {
        obj['container_id'] = ApiClient.convertToType(data['container_id'], 'Number');
      }
      if (data.hasOwnProperty('container_type_id')) {
        obj['container_type_id'] = ApiClient.convertToType(data['container_type_id'], 'Number');
      }
      if (data.hasOwnProperty('location_flag')) {
        obj['location_flag'] = ApiClient.convertToType(data['location_flag'], 'String');
      }
      if (data.hasOwnProperty('location_id')) {
        obj['location_id'] = ApiClient.convertToType(data['location_id'], 'Number');
      }
      if (data.hasOwnProperty('logged_at')) {
        obj['logged_at'] = ApiClient.convertToType(data['logged_at'], 'Date');
      }
      if (data.hasOwnProperty('new_config_bitmask')) {
        obj['new_config_bitmask'] = ApiClient.convertToType(data['new_config_bitmask'], 'Number');
      }
      if (data.hasOwnProperty('old_config_bitmask')) {
        obj['old_config_bitmask'] = ApiClient.convertToType(data['old_config_bitmask'], 'Number');
      }
      if (data.hasOwnProperty('password_type')) {
        obj['password_type'] = ApiClient.convertToType(data['password_type'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('type_id')) {
        obj['type_id'] = ApiClient.convertToType(data['type_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * action string
   * @member {module:model/GetCorporationsCorporationIdContainersLogs200Ok.ActionEnum} action
   */
  exports.prototype['action'] = undefined;
  /**
   * ID of the character who performed the action.
   * @member {Number} character_id
   */
  exports.prototype['character_id'] = undefined;
  /**
   * ID of the container
   * @member {Number} container_id
   */
  exports.prototype['container_id'] = undefined;
  /**
   * Type ID of the container
   * @member {Number} container_type_id
   */
  exports.prototype['container_type_id'] = undefined;
  /**
   * location_flag string
   * @member {module:model/GetCorporationsCorporationIdContainersLogs200Ok.LocationFlagEnum} location_flag
   */
  exports.prototype['location_flag'] = undefined;
  /**
   * location_id integer
   * @member {Number} location_id
   */
  exports.prototype['location_id'] = undefined;
  /**
   * Timestamp when this log was created
   * @member {Date} logged_at
   */
  exports.prototype['logged_at'] = undefined;
  /**
   * new_config_bitmask integer
   * @member {Number} new_config_bitmask
   */
  exports.prototype['new_config_bitmask'] = undefined;
  /**
   * old_config_bitmask integer
   * @member {Number} old_config_bitmask
   */
  exports.prototype['old_config_bitmask'] = undefined;
  /**
   * Type of password set if action is of type SetPassword or EnterPassword
   * @member {module:model/GetCorporationsCorporationIdContainersLogs200Ok.PasswordTypeEnum} password_type
   */
  exports.prototype['password_type'] = undefined;
  /**
   * Quantity of the item being acted upon
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * Type ID of the item being acted upon
   * @member {Number} type_id
   */
  exports.prototype['type_id'] = undefined;


  /**
   * Allowed values for the <code>action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionEnum = {
    /**
     * value: "add"
     * @const
     */
    "add": "add",
    /**
     * value: "assemble"
     * @const
     */
    "assemble": "assemble",
    /**
     * value: "configure"
     * @const
     */
    "configure": "configure",
    /**
     * value: "enter_password"
     * @const
     */
    "enter_password": "enter_password",
    /**
     * value: "lock"
     * @const
     */
    "lock": "lock",
    /**
     * value: "move"
     * @const
     */
    "move": "move",
    /**
     * value: "repackage"
     * @const
     */
    "repackage": "repackage",
    /**
     * value: "set_name"
     * @const
     */
    "set_name": "set_name",
    /**
     * value: "set_password"
     * @const
     */
    "set_password": "set_password",
    /**
     * value: "unlock"
     * @const
     */
    "unlock": "unlock"  };

  /**
   * Allowed values for the <code>location_flag</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LocationFlagEnum = {
    /**
     * value: "AssetSafety"
     * @const
     */
    "AssetSafety": "AssetSafety",
    /**
     * value: "AutoFit"
     * @const
     */
    "AutoFit": "AutoFit",
    /**
     * value: "Bonus"
     * @const
     */
    "Bonus": "Bonus",
    /**
     * value: "Booster"
     * @const
     */
    "Booster": "Booster",
    /**
     * value: "BoosterBay"
     * @const
     */
    "BoosterBay": "BoosterBay",
    /**
     * value: "Capsule"
     * @const
     */
    "Capsule": "Capsule",
    /**
     * value: "Cargo"
     * @const
     */
    "Cargo": "Cargo",
    /**
     * value: "CorpDeliveries"
     * @const
     */
    "CorpDeliveries": "CorpDeliveries",
    /**
     * value: "CorpSAG1"
     * @const
     */
    "CorpSAG1": "CorpSAG1",
    /**
     * value: "CorpSAG2"
     * @const
     */
    "CorpSAG2": "CorpSAG2",
    /**
     * value: "CorpSAG3"
     * @const
     */
    "CorpSAG3": "CorpSAG3",
    /**
     * value: "CorpSAG4"
     * @const
     */
    "CorpSAG4": "CorpSAG4",
    /**
     * value: "CorpSAG5"
     * @const
     */
    "CorpSAG5": "CorpSAG5",
    /**
     * value: "CorpSAG6"
     * @const
     */
    "CorpSAG6": "CorpSAG6",
    /**
     * value: "CorpSAG7"
     * @const
     */
    "CorpSAG7": "CorpSAG7",
    /**
     * value: "CrateLoot"
     * @const
     */
    "CrateLoot": "CrateLoot",
    /**
     * value: "Deliveries"
     * @const
     */
    "Deliveries": "Deliveries",
    /**
     * value: "DroneBay"
     * @const
     */
    "DroneBay": "DroneBay",
    /**
     * value: "DustBattle"
     * @const
     */
    "DustBattle": "DustBattle",
    /**
     * value: "DustDatabank"
     * @const
     */
    "DustDatabank": "DustDatabank",
    /**
     * value: "FighterBay"
     * @const
     */
    "FighterBay": "FighterBay",
    /**
     * value: "FighterTube0"
     * @const
     */
    "FighterTube0": "FighterTube0",
    /**
     * value: "FighterTube1"
     * @const
     */
    "FighterTube1": "FighterTube1",
    /**
     * value: "FighterTube2"
     * @const
     */
    "FighterTube2": "FighterTube2",
    /**
     * value: "FighterTube3"
     * @const
     */
    "FighterTube3": "FighterTube3",
    /**
     * value: "FighterTube4"
     * @const
     */
    "FighterTube4": "FighterTube4",
    /**
     * value: "FleetHangar"
     * @const
     */
    "FleetHangar": "FleetHangar",
    /**
     * value: "Hangar"
     * @const
     */
    "Hangar": "Hangar",
    /**
     * value: "HangarAll"
     * @const
     */
    "HangarAll": "HangarAll",
    /**
     * value: "HiSlot0"
     * @const
     */
    "HiSlot0": "HiSlot0",
    /**
     * value: "HiSlot1"
     * @const
     */
    "HiSlot1": "HiSlot1",
    /**
     * value: "HiSlot2"
     * @const
     */
    "HiSlot2": "HiSlot2",
    /**
     * value: "HiSlot3"
     * @const
     */
    "HiSlot3": "HiSlot3",
    /**
     * value: "HiSlot4"
     * @const
     */
    "HiSlot4": "HiSlot4",
    /**
     * value: "HiSlot5"
     * @const
     */
    "HiSlot5": "HiSlot5",
    /**
     * value: "HiSlot6"
     * @const
     */
    "HiSlot6": "HiSlot6",
    /**
     * value: "HiSlot7"
     * @const
     */
    "HiSlot7": "HiSlot7",
    /**
     * value: "HiddenModifiers"
     * @const
     */
    "HiddenModifiers": "HiddenModifiers",
    /**
     * value: "Implant"
     * @const
     */
    "Implant": "Implant",
    /**
     * value: "Impounded"
     * @const
     */
    "Impounded": "Impounded",
    /**
     * value: "JunkyardReprocessed"
     * @const
     */
    "JunkyardReprocessed": "JunkyardReprocessed",
    /**
     * value: "JunkyardTrashed"
     * @const
     */
    "JunkyardTrashed": "JunkyardTrashed",
    /**
     * value: "LoSlot0"
     * @const
     */
    "LoSlot0": "LoSlot0",
    /**
     * value: "LoSlot1"
     * @const
     */
    "LoSlot1": "LoSlot1",
    /**
     * value: "LoSlot2"
     * @const
     */
    "LoSlot2": "LoSlot2",
    /**
     * value: "LoSlot3"
     * @const
     */
    "LoSlot3": "LoSlot3",
    /**
     * value: "LoSlot4"
     * @const
     */
    "LoSlot4": "LoSlot4",
    /**
     * value: "LoSlot5"
     * @const
     */
    "LoSlot5": "LoSlot5",
    /**
     * value: "LoSlot6"
     * @const
     */
    "LoSlot6": "LoSlot6",
    /**
     * value: "LoSlot7"
     * @const
     */
    "LoSlot7": "LoSlot7",
    /**
     * value: "Locked"
     * @const
     */
    "Locked": "Locked",
    /**
     * value: "MedSlot0"
     * @const
     */
    "MedSlot0": "MedSlot0",
    /**
     * value: "MedSlot1"
     * @const
     */
    "MedSlot1": "MedSlot1",
    /**
     * value: "MedSlot2"
     * @const
     */
    "MedSlot2": "MedSlot2",
    /**
     * value: "MedSlot3"
     * @const
     */
    "MedSlot3": "MedSlot3",
    /**
     * value: "MedSlot4"
     * @const
     */
    "MedSlot4": "MedSlot4",
    /**
     * value: "MedSlot5"
     * @const
     */
    "MedSlot5": "MedSlot5",
    /**
     * value: "MedSlot6"
     * @const
     */
    "MedSlot6": "MedSlot6",
    /**
     * value: "MedSlot7"
     * @const
     */
    "MedSlot7": "MedSlot7",
    /**
     * value: "OfficeFolder"
     * @const
     */
    "OfficeFolder": "OfficeFolder",
    /**
     * value: "Pilot"
     * @const
     */
    "Pilot": "Pilot",
    /**
     * value: "PlanetSurface"
     * @const
     */
    "PlanetSurface": "PlanetSurface",
    /**
     * value: "QuafeBay"
     * @const
     */
    "QuafeBay": "QuafeBay",
    /**
     * value: "Reward"
     * @const
     */
    "Reward": "Reward",
    /**
     * value: "RigSlot0"
     * @const
     */
    "RigSlot0": "RigSlot0",
    /**
     * value: "RigSlot1"
     * @const
     */
    "RigSlot1": "RigSlot1",
    /**
     * value: "RigSlot2"
     * @const
     */
    "RigSlot2": "RigSlot2",
    /**
     * value: "RigSlot3"
     * @const
     */
    "RigSlot3": "RigSlot3",
    /**
     * value: "RigSlot4"
     * @const
     */
    "RigSlot4": "RigSlot4",
    /**
     * value: "RigSlot5"
     * @const
     */
    "RigSlot5": "RigSlot5",
    /**
     * value: "RigSlot6"
     * @const
     */
    "RigSlot6": "RigSlot6",
    /**
     * value: "RigSlot7"
     * @const
     */
    "RigSlot7": "RigSlot7",
    /**
     * value: "SecondaryStorage"
     * @const
     */
    "SecondaryStorage": "SecondaryStorage",
    /**
     * value: "ServiceSlot0"
     * @const
     */
    "ServiceSlot0": "ServiceSlot0",
    /**
     * value: "ServiceSlot1"
     * @const
     */
    "ServiceSlot1": "ServiceSlot1",
    /**
     * value: "ServiceSlot2"
     * @const
     */
    "ServiceSlot2": "ServiceSlot2",
    /**
     * value: "ServiceSlot3"
     * @const
     */
    "ServiceSlot3": "ServiceSlot3",
    /**
     * value: "ServiceSlot4"
     * @const
     */
    "ServiceSlot4": "ServiceSlot4",
    /**
     * value: "ServiceSlot5"
     * @const
     */
    "ServiceSlot5": "ServiceSlot5",
    /**
     * value: "ServiceSlot6"
     * @const
     */
    "ServiceSlot6": "ServiceSlot6",
    /**
     * value: "ServiceSlot7"
     * @const
     */
    "ServiceSlot7": "ServiceSlot7",
    /**
     * value: "ShipHangar"
     * @const
     */
    "ShipHangar": "ShipHangar",
    /**
     * value: "ShipOffline"
     * @const
     */
    "ShipOffline": "ShipOffline",
    /**
     * value: "Skill"
     * @const
     */
    "Skill": "Skill",
    /**
     * value: "SkillInTraining"
     * @const
     */
    "SkillInTraining": "SkillInTraining",
    /**
     * value: "SpecializedAmmoHold"
     * @const
     */
    "SpecializedAmmoHold": "SpecializedAmmoHold",
    /**
     * value: "SpecializedCommandCenterHold"
     * @const
     */
    "SpecializedCommandCenterHold": "SpecializedCommandCenterHold",
    /**
     * value: "SpecializedFuelBay"
     * @const
     */
    "SpecializedFuelBay": "SpecializedFuelBay",
    /**
     * value: "SpecializedGasHold"
     * @const
     */
    "SpecializedGasHold": "SpecializedGasHold",
    /**
     * value: "SpecializedIndustrialShipHold"
     * @const
     */
    "SpecializedIndustrialShipHold": "SpecializedIndustrialShipHold",
    /**
     * value: "SpecializedLargeShipHold"
     * @const
     */
    "SpecializedLargeShipHold": "SpecializedLargeShipHold",
    /**
     * value: "SpecializedMaterialBay"
     * @const
     */
    "SpecializedMaterialBay": "SpecializedMaterialBay",
    /**
     * value: "SpecializedMediumShipHold"
     * @const
     */
    "SpecializedMediumShipHold": "SpecializedMediumShipHold",
    /**
     * value: "SpecializedMineralHold"
     * @const
     */
    "SpecializedMineralHold": "SpecializedMineralHold",
    /**
     * value: "SpecializedOreHold"
     * @const
     */
    "SpecializedOreHold": "SpecializedOreHold",
    /**
     * value: "SpecializedPlanetaryCommoditiesHold"
     * @const
     */
    "SpecializedPlanetaryCommoditiesHold": "SpecializedPlanetaryCommoditiesHold",
    /**
     * value: "SpecializedSalvageHold"
     * @const
     */
    "SpecializedSalvageHold": "SpecializedSalvageHold",
    /**
     * value: "SpecializedShipHold"
     * @const
     */
    "SpecializedShipHold": "SpecializedShipHold",
    /**
     * value: "SpecializedSmallShipHold"
     * @const
     */
    "SpecializedSmallShipHold": "SpecializedSmallShipHold",
    /**
     * value: "StructureActive"
     * @const
     */
    "StructureActive": "StructureActive",
    /**
     * value: "StructureFuel"
     * @const
     */
    "StructureFuel": "StructureFuel",
    /**
     * value: "StructureInactive"
     * @const
     */
    "StructureInactive": "StructureInactive",
    /**
     * value: "StructureOffline"
     * @const
     */
    "StructureOffline": "StructureOffline",
    /**
     * value: "SubSystemBay"
     * @const
     */
    "SubSystemBay": "SubSystemBay",
    /**
     * value: "SubSystemSlot0"
     * @const
     */
    "SubSystemSlot0": "SubSystemSlot0",
    /**
     * value: "SubSystemSlot1"
     * @const
     */
    "SubSystemSlot1": "SubSystemSlot1",
    /**
     * value: "SubSystemSlot2"
     * @const
     */
    "SubSystemSlot2": "SubSystemSlot2",
    /**
     * value: "SubSystemSlot3"
     * @const
     */
    "SubSystemSlot3": "SubSystemSlot3",
    /**
     * value: "SubSystemSlot4"
     * @const
     */
    "SubSystemSlot4": "SubSystemSlot4",
    /**
     * value: "SubSystemSlot5"
     * @const
     */
    "SubSystemSlot5": "SubSystemSlot5",
    /**
     * value: "SubSystemSlot6"
     * @const
     */
    "SubSystemSlot6": "SubSystemSlot6",
    /**
     * value: "SubSystemSlot7"
     * @const
     */
    "SubSystemSlot7": "SubSystemSlot7",
    /**
     * value: "Unlocked"
     * @const
     */
    "Unlocked": "Unlocked",
    /**
     * value: "Wallet"
     * @const
     */
    "Wallet": "Wallet",
    /**
     * value: "Wardrobe"
     * @const
     */
    "Wardrobe": "Wardrobe"  };

  /**
   * Allowed values for the <code>password_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PasswordTypeEnum = {
    /**
     * value: "config"
     * @const
     */
    "config": "config",
    /**
     * value: "general"
     * @const
     */
    "general": "general"  };


  return exports;
}));


