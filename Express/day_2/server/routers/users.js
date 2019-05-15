// Get users_mysql_connection

const fake_database = {
  1 : {
    name : "jeefo"
  },
  2 : {
    name : "Jadambaa"
  },
  3 : {
    name : "Tulgaa"
  }
};

module.exports = function register_users_api (router) {
  router.get('/user/:id', (req, res) => {
    const user_data = fake_database[req.params.id];
    if (user_data) {
      res.json(user_data);
    } else {
      res.status(404).end();
    }
  });

  router.post('/user/create', (req, res) => {

  });

  router.put('/user/:id', (req, res) => {

  });

  router.delete('/user/:id', (req, res) => {

  });
}
