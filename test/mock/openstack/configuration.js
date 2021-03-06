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
 * This module loads various mock configurations into the test scope.
 *
 * Usage: beforeEach(module('openstack.mock.$$configuration'));
 */
angular.module('openstack.mock.$$configuration', ['openstack'])
  .config(function($$configurationProvider) {
    'use strict';

    // Disable unused configuration options for the test harness.
    $$configurationProvider.$enableLocalStorage(false);
    $$configurationProvider.$enableDefault(false);
    $$configurationProvider.$enableConfigLoad(false);

    // Wrap a spy around our other feature flags so they can't accidentally be triggered in a
    // test harness.
    spyOn($$configurationProvider, '$enableLocalStorage');
    spyOn($$configurationProvider, '$enableDefault');
    spyOn($$configurationProvider, '$enableConfigLoad');

    $$configurationProvider.$addConfig({
      id: 'test_config_1',
      ironic: {apiRoot: 'http://ironic.example.com:1000'}
    });
    $$configurationProvider.$addConfig({
      id: 'test_config_2',
      ironic: {apiRoot: 'http://ironic.example.com:2000'}
    });
  });
