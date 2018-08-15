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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdNotificationsContacts200Ok();
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

  describe('GetCharactersCharacterIdNotificationsContacts200Ok', function() {
    it('should create an instance of GetCharactersCharacterIdNotificationsContacts200Ok', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdNotificationsContacts200Ok
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdNotificationsContacts200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdNotificationsContacts200Ok);
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdNotificationsContacts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property notificationId (base name: "notification_id")', function() {
      // uncomment below and update the code to test the property notificationId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdNotificationsContacts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property sendDate (base name: "send_date")', function() {
      // uncomment below and update the code to test the property sendDate
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdNotificationsContacts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property senderCharacterId (base name: "sender_character_id")', function() {
      // uncomment below and update the code to test the property senderCharacterId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdNotificationsContacts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property standingLevel (base name: "standing_level")', function() {
      // uncomment below and update the code to test the property standingLevel
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdNotificationsContacts200Ok();
      //expect(instance).to.be();
    });

  });

}));
