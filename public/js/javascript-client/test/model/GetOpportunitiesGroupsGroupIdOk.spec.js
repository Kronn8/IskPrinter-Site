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
    instance = new EveSwaggerInterface.GetOpportunitiesGroupsGroupIdOk();
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

  describe('GetOpportunitiesGroupsGroupIdOk', function() {
    it('should create an instance of GetOpportunitiesGroupsGroupIdOk', function() {
      // uncomment below and update the code to test GetOpportunitiesGroupsGroupIdOk
      //var instane = new EveSwaggerInterface.GetOpportunitiesGroupsGroupIdOk();
      //expect(instance).to.be.a(EveSwaggerInterface.GetOpportunitiesGroupsGroupIdOk);
    });

    it('should have the property connectedGroups (base name: "connected_groups")', function() {
      // uncomment below and update the code to test the property connectedGroups
      //var instane = new EveSwaggerInterface.GetOpportunitiesGroupsGroupIdOk();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new EveSwaggerInterface.GetOpportunitiesGroupsGroupIdOk();
      //expect(instance).to.be();
    });

    it('should have the property groupId (base name: "group_id")', function() {
      // uncomment below and update the code to test the property groupId
      //var instane = new EveSwaggerInterface.GetOpportunitiesGroupsGroupIdOk();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new EveSwaggerInterface.GetOpportunitiesGroupsGroupIdOk();
      //expect(instance).to.be();
    });

    it('should have the property notification (base name: "notification")', function() {
      // uncomment below and update the code to test the property notification
      //var instane = new EveSwaggerInterface.GetOpportunitiesGroupsGroupIdOk();
      //expect(instance).to.be();
    });

    it('should have the property requiredTasks (base name: "required_tasks")', function() {
      // uncomment below and update the code to test the property requiredTasks
      //var instane = new EveSwaggerInterface.GetOpportunitiesGroupsGroupIdOk();
      //expect(instance).to.be();
    });

  });

}));
