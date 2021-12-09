/*
 * This file can be used to override any environment vars from compile time.
 *
 * To use:
 *   $ cp example.config.js config.js
 *   $ vi config.js
 *
 * And customize for your deployment environment.
 *
 */
(function(window) {
  window.RuntimeConfig = {};

  /*
   * The FHIR API service base URL.
   * If you change this to point to your API Gateway or PingAuthorize,
   * make sure to set the CORS policy to allow access from your webserver.
   */
  // window.RuntimeConfig.FHIR_BASE_URL = "https://open-ic.epic.com";

  /*
   * The FHIR API prefix or base path for DSTU2 resources like CarePlan.
   */
  // window.RuntimeConfig.FHIR_API_NAMESPACE = "FHIR/api/FHIR/DSTU2";

  /*
   * The https URL where this app will redirect for login.
   */
  // window.RuntimeConfig.OAUTH2_AUTHORIZATION_URL = "https://pf.example.com:9031/as/authorization.oauth2";

  /*
   * The client id this app will use to identify itself to the authorization server.
   */
  // window.RuntimeConfig.OAUTH2_CLIENT_ID = "health-portal";
})(window);
