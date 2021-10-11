import "./commands.js"
import 'cypress-xpath';

Cypress.Cookies.defaults({
   preserve: ['session_id',
      'remember_token',
      'CFID',
      'CFTOKEN',
      'LCENTER',
      'sUsername',
      'JSESSIONID',
      'LOGINQAEXT',
      'LB-Persist',
      'CFAUTHORIZATION_FMC_STAGING',
      'CFAUTHORIZATION_FMC_WWW',
      'LOGINSITE1',
      'OAM_JSESSIONID',
      'OAM_REQ_0',
      'OAM_REQ_COUNT',
      'OAM_REQ_ID',
      'ECID-Context',
      'swServer',
      'swSessionId',
      "SW_USER",
      "SW_SERVER",
      "SW_CENTER",
      "LOGINQAEXT",
      'JWT',
      'fmcsrv_beta_qa'
   ],
   preserve: ['.ASPXAUTH', 'um_apiToken']
})

Cypress.on('uncaught:exception', (err, runnable) => {
   cy.log(err + '   ' + runnable)
   return false
})
