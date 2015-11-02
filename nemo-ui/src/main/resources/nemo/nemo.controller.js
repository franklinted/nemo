/*
 * Copyright (c) 2015 Huawei, Inc and others.  All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['app/nemo/nemo.module','app/nemo/nemo.services','app/nemo/js/vis'], function(topology) {
  topology.register.controller('NemoController', ['$scope', '$rootScope', 'NemoService' ,  function ($scope, $rootScope, NemoService) {
    $scope.updateChannels = function() {
      NemoService.updateChannels();
    };
    $scope.updateChannels();
  }]);

});
