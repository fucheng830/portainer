import angular from 'angular';

angular.module('portainer.app')
.controller('porEndpointSecurityController', [function () {
  var ctrl = this;

  function initComponent() {
    if (ctrl.endpoint) {
      var endpoint = ctrl.endpoint;
      var TLS = endpoint.TLSConfig.TLS;
      ctrl.formData.TLS = TLS;
      var CACert = endpoint.TLSConfig.TLSCACert;
      ctrl.formData.TLSCACert = CACert;
      var cert = endpoint.TLSConfig.TLSCert;
      ctrl.formData.TLSCert = cert;
      var key = endpoint.TLSConfig.TLSKey;
      ctrl.formData.TLSKey = key;

      if (TLS) {
        if (CACert && cert && key) {
          ctrl.formData.TLSMode = 'tls_client_ca';
        } else if (cert && key) {
          ctrl.formData.TLSMode = 'tls_client_noca';
        } else if (CACert) {
          ctrl.formData.TLSMode = 'tls_ca';
        } else {
          ctrl.formData.TLSMode = 'tls_only';
        }
      }
    }
  }

  initComponent();
}]);
