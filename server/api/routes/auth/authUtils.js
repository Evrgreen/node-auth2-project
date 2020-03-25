const UserActions = require('../user/userModel');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../../config/secrets');

module.exports = {
  generateToken,
  validateUser,
  validateUserId,
  authRoute,
};

function generateToken(user) {
  const payload = {
    username: user.username,
    department: user.department || 'user',
  };
  const secret = jwtSecret;
  const options = {
    expiresIn: '1h',
  };

  return jwt.sign(payload, secret, options);
}

function validateUser(req, res, next) {
  const { username, password, department = '' } = req.body;
  if (username && password) {
    if (req.originalUrl == '/api/register' && !department) {
      res.status(400).json({
        message:
          'Registering new users requires a username password and department',
      });
    } else {
      next();
    }
  } else {
    res.status(400).json({
      message: 'Registering a new user requries a username and password',
    });
  }
}
async function validateUserId(req, res, next) {
  const user = await UserActions.findById(req.parans.id);
  user
    ? (req.user = user & next())
    : res.status(400).json({ message: 'Could not find a user with that ID' });
}

function authRoute(req, res, next) {
  const { authorization } = req.headers;
  console.log(authorization);
  if (authorization) {
    jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: `Invalid Credentials ${err}` });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'no credentials provided' });
  }
}
