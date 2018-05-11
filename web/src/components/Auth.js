import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'app96198871.auth0.com',
    clientID: 'PnUyRqnG0d5t8QQ6EUTD7oe5T_k1CiTV',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://app96198871.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}