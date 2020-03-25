exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('user').insert([
        { username: 'Michael', password: 'dunder', department: 'management' },
      ]);
    });
};
