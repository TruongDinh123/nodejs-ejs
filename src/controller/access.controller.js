"user strict";

const AccessService = require("../services/access.service");
const { SuccessReponse } = require("../core/success.reponse");
const { createApikey } = require("../services/apiKey.service");

class AccessController {
  signup = async (req, res, next) => {
    return res.status(201).json(await AccessService.signUp(req.body));
  };

  login = async (req, res, next) => {
    try {
      const loginResult = await AccessService.logIn(req.body);
      console.log(loginResult);
      if (loginResult) {
        res.cookie('accessToken', loginResult.tokens.accessToken, { httpOnly: true, secure: true });
        res.redirect('/');
      } else {
        res.render('login', { error: 'Invalid email or password.' });
      }
    } catch (error) {
      res.render('login', { error: error.message });
    }
  };

  apiKey = async (req, res, next) => {
    return res.status(200).json(await createApikey());
  };
}

module.exports = new AccessController();
