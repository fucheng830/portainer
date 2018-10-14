import angular from 'angular';

angular.module('extension.storidge').component('storidgeProfileSelector', {
  templateUrl: './storidgeProfileSelector.html',
  controller: 'StoridgeProfileSelectorController',
  bindings: {
    'storidgeProfile': '='
  }
});
