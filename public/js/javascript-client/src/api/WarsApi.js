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
    define(['ApiClient', 'model/BadRequest', 'model/ErrorLimited', 'model/GatewayTimeout', 'model/GetWarsWarIdKillmails200Ok', 'model/GetWarsWarIdKillmailsUnprocessableEntity', 'model/GetWarsWarIdOk', 'model/GetWarsWarIdUnprocessableEntity', 'model/InternalServerError', 'model/ServiceUnavailable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ErrorLimited'), require('../model/GatewayTimeout'), require('../model/GetWarsWarIdKillmails200Ok'), require('../model/GetWarsWarIdKillmailsUnprocessableEntity'), require('../model/GetWarsWarIdOk'), require('../model/GetWarsWarIdUnprocessableEntity'), require('../model/InternalServerError'), require('../model/ServiceUnavailable'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.WarsApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.BadRequest, root.EveSwaggerInterface.ErrorLimited, root.EveSwaggerInterface.GatewayTimeout, root.EveSwaggerInterface.GetWarsWarIdKillmails200Ok, root.EveSwaggerInterface.GetWarsWarIdKillmailsUnprocessableEntity, root.EveSwaggerInterface.GetWarsWarIdOk, root.EveSwaggerInterface.GetWarsWarIdUnprocessableEntity, root.EveSwaggerInterface.InternalServerError, root.EveSwaggerInterface.ServiceUnavailable);
  }
}(this, function(ApiClient, BadRequest, ErrorLimited, GatewayTimeout, GetWarsWarIdKillmails200Ok, GetWarsWarIdKillmailsUnprocessableEntity, GetWarsWarIdOk, GetWarsWarIdUnprocessableEntity, InternalServerError, ServiceUnavailable) {
  'use strict';

  /**
   * Wars service.
   * @module api/WarsApi
   * @version 0.8.5
   */

  /**
   * Constructs a new WarsApi. 
   * @alias module:api/WarsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getWars operation.
     * @callback module:api/WarsApi~getWarsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Number'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List wars
     * Return a list of wars  ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.maxWarId Only return wars with ID smaller than this.
     * @param {module:api/WarsApi~getWarsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'Number'>}
     */
    this.getWars = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'max_war_id': opts['maxWarId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['Number'];

      return this.apiClient.callApi(
        '/v1/wars/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWarsWarId operation.
     * @callback module:api/WarsApi~getWarsWarIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetWarsWarIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get war information
     * Return details about a war  ---  This route is cached for up to 3600 seconds
     * @param {Number} warId ID for a war
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/WarsApi~getWarsWarIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetWarsWarIdOk}
     */
    this.getWarsWarId = function(warId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'warId' is set
      if (warId === undefined || warId === null) {
        throw new Error("Missing the required parameter 'warId' when calling getWarsWarId");
      }


      var pathParams = {
        'war_id': warId
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetWarsWarIdOk;

      return this.apiClient.callApi(
        '/v1/wars/{war_id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWarsWarIdKillmails operation.
     * @callback module:api/WarsApi~getWarsWarIdKillmailsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetWarsWarIdKillmails200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List kills for a war
     * Return a list of kills related to a war  ---  This route is cached for up to 3600 seconds
     * @param {Number} warId A valid war ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {module:api/WarsApi~getWarsWarIdKillmailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetWarsWarIdKillmails200Ok>}
     */
    this.getWarsWarIdKillmails = function(warId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'warId' is set
      if (warId === undefined || warId === null) {
        throw new Error("Missing the required parameter 'warId' when calling getWarsWarIdKillmails");
      }


      var pathParams = {
        'war_id': warId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetWarsWarIdKillmails200Ok];

      return this.apiClient.callApi(
        '/v1/wars/{war_id}/killmails/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
