import { AuthConfig } from 'angular-oauth2-oidc'

export const auth: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: "http://localhost:4200",
    clientId: '421550058323-q12rop6gola54g3nbnf185aeuk4agu09.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false
}
