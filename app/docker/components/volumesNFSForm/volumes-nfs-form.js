import angular from 'angular';

angular.module('portainer.docker').component('volumesNfsForm', {
  templateUrl: './volumesnfsForm.html',
  bindings: {
    data: '='
  }
});
