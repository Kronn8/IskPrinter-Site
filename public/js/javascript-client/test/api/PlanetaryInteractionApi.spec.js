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
    instance = new EveSwaggerInterface.PlanetaryInteractionApi();
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

  describe('PlanetaryInteractionApi', function() {
    describe('getCharactersCharacterIdPlanets', function() {
      it('should call getCharactersCharacterIdPlanets successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdPlanets
        //instance.getCharactersCharacterIdPlanets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdPlanetsPlanetId', function() {
      it('should call getCharactersCharacterIdPlanetsPlanetId successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdPlanetsPlanetId
        //instance.getCharactersCharacterIdPlanetsPlanetId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCorporationsCorporationIdCustomsOffices', function() {
      it('should call getCorporationsCorporationIdCustomsOffices successfully', function(done) {
        //uncomment below and update the code to test getCorporationsCorporationIdCustomsOffices
        //instance.getCorporationsCorporationIdCustomsOffices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUniverseSchematicsSchematicId', function() {
      it('should call getUniverseSchematicsSchematicId successfully', function(done) {
        //uncomment below and update the code to test getUniverseSchematicsSchematicId
        //instance.getUniverseSchematicsSchematicId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
