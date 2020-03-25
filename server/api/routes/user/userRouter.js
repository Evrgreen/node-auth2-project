const router = require('express').Router();

const UserAction = require('./userModel.js');

router.route('/').get(async (req, res) => {
  const { department } = req.decodedToken;
  console.log(req.decodedToken);
  try {
    const users = await UserAction.findBy({ department });
    if (users.length) {
      res.status(200).json(users);
    } else {
      res.status(400).json({ message: 'Could not find any users' });
    }
  } catch (error) {
    res.status(500).json({
      message: `There was an error processing that request: ${error}`,
    });
  }
});
router.route('/:id').get(async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserAction.findById(id);
    console.log(user);
  } catch (error) {
    res.status(500).json({
      message: `There was an error processing that request: ${error}`,
    });
  }
});

module.exports = router;
