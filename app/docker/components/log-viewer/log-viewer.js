import angular from 'angular';

angular.module('portainer.docker').component('logViewer', {
  templateUrl: './logViewer.html',
  controller: 'LogViewerController',
  bindings: {
    data: '=',
    displayTimestamps: '=',
    logCollectionChange: '<',
    lineCount: '='
  }
});
