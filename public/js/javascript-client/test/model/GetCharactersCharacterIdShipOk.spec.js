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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdShipOk();
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

  describe('GetCharactersCharacterIdShipOk', function() {
    it('should create an instance of GetCharactersCharacterIdShipOk', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdShipOk
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdShipOk();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdShipOk);
    });

    it('should have the property shipItemId (base name: "ship_item_id")', function() {
      // uncomment below and update the code to test the property shipItemId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdShipOk();
      //expect(instance).to.be();
    });

    it('should have the property shipName (base name: "ship_name")', function() {
      // uncomment below and update the code to test the property shipName
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdShipOk();
      //expect(instance).to.be();
    });

    it('should have the property shipTypeId (base name: "ship_type_id")', function() {
      // uncomment below and update the code to test the property shipTypeId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdShipOk();
      //expect(instance).to.be();
    });

  });

}));
