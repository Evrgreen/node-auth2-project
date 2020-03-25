const router = require('express').Router();
const bcrypt = require('bcrypt');
const UserActions = require('../user/userModel');
const AuthUtils = require('./authUtils');

router
  .route('/register')
  .get((req, res) => {
    res.send('Hi register');
  })
  .post(AuthUtils.validateUser, async (req, res) => {
    try {
      const user = req.body;
      const ROUND = process.env.HASH_ROUNDS || 8;
      user.password = bcrypt.hashSync(user.password, ROUND);
      const [newUser] = await UserActions.add(user);
      newUser
        ? res.status(200).json({ message: 'Account created', newUser })
        : res.status(400).json({
            message: 'Not able to register account, please try again later',
          });
    } catch (error) {
      res.json({ error: `error ${error}` });
    }
  });
router.route('/login').post(AuthUtils.validateUser, async (req, res) => {
  try {
    const { username, password } = req.body;
    const [user] = await UserActions.findByUsername(username);

    if (bcrypt.compareSync(password, user.password)) {
      const token = AuthUtils.generateToken(user);
      res.status(200).json({ message: 'Login Successful', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `error occured while processing requyest ${error}` });
  }
});

module.exports = router;
