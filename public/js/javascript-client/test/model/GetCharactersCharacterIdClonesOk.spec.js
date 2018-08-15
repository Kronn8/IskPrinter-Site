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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveSwaggerInterface);
  }
}(this, function(expect, EveSwaggerInterface) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EveSwaggerInterface.GetCharactersCharacterIdClonesOk();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetCharactersCharacterIdClonesOk', function() {
    it('should create an instance of GetCharactersCharacterIdClonesOk', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdClonesOk
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdClonesOk();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdClonesOk);
    });

    it('should have the property homeLocation (base name: "home_location")', function() {
      // uncomment below and update the code to test the property homeLocation
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdClonesOk();
      //expect(instance).to.be();
    });

    it('should have the property jumpClones (base name: "jump_clones")', function() {
      // uncomment below and update the code to test the property jumpClones
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdClonesOk();
      //expect(instance).to.be();
    });

    it('should have the property lastCloneJumpDate (base name: "last_clone_jump_date")', function() {
      // uncomment below and update the code to test the property lastCloneJumpDate
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdClonesOk();
      //expect(instance).to.be();
    });

    it('should have the property lastStationChangeDate (base name: "last_station_change_date")', function() {
      // uncomment below and update the code to test the property lastStationChangeDate
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdClonesOk();
      //expect(instance).to.be();
    });

  });

}));
