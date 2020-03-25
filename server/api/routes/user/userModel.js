const db = require('../../../data/dbconfig');

module.exports = {
  find,
  findBy,
  findById,
  findByUsername,
  add,
};

async function find() {
  try {
    return await db('user').select('id', 'username', 'department');
  } catch (error) {
    return error;
  }
}
async function findBy(key) {
  return await db('user')
    .where(key)
    .select('id', 'username', 'department');
}
async function findById(id) {
  return await db('user')
    .where({ id })
    .select('id', 'username', 'department');
}

async function findByUsername(username) {
  return await db('user').where({ username });
}

async function add(user) {
  const [id] = await db('user').insert(user);
  return await findById(id);
}
