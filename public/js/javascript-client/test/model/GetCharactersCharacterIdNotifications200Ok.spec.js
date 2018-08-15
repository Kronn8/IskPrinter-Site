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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdNotifications200Ok();
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

  describe('GetCharactersCharacterIdNotifications200Ok', function() {
    it('should create an instance of GetCharactersCharacterIdNotifications200Ok', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdNotifications200Ok
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdNotifications200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdNotifications200Ok);
    });

    it('should have the property isRead (base name: "is_read")', function() {
      // uncomment below and update the code to test the property isRead
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdNotifications200Ok();
      //expect(instance).to.be();
    });

    it('should have the property notificationId (base name: "notification_id")', function() {
      // uncomment below and update the code to test the property notificationId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdNotifications200Ok();
      //expect(instance).to.be();
    });

    it('should have the property senderId (base name: "sender_id")', function() {
      // uncomment below and update the code to test the property senderId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdNotifications200Ok();
      //expect(instance).to.be();
    });

    it('should have the property senderType (base name: "sender_type")', function() {
      // uncomment below and update the code to test the property senderType
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdNotifications200Ok();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdNotifications200Ok();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdNotifications200Ok();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdNotifications200Ok();
      //expect(instance).to.be();
    });

  });

}));
