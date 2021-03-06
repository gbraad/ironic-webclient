/*
 * Copyright (c) 2015 Hewlett-Packard Enterprise Development Company, L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/**
 * This module provides some basic IronicDriverProperties API responses.
 *
 * Usage: beforeEach(module('ironic.mock.IronicDriverProperties'));
 */
angular.module('ironic.api.mock.IronicDriverProperties',
  ['ironic.api', 'openstack.mock.$$selectedConfiguration'])
  .run(function($httpBackend) {
    'use strict';

    $httpBackend
      .whenGET('http://ironic.example.com:1000/drivers/properties?driver_name=test_driver_1')
      .respond(200, {name: 'test_driver_1'});

    $httpBackend
      .whenGET('http://ironic.example.com:1000/drivers/properties?driver_name=test_driver_2')
      .respond(200, {name: 'test_driver_2'});

    $httpBackend
      .whenGET('http://ironic.example.com:1000/drivers/properties?driver_name=invalid')
      .respond(400, {
        error_message: angular.toJson({
          debuginfo: null,
          faultcode: 'Client',
          faultstring: 'Test fault string'
        })
      });
  });
