
// Get users_mysql_connection

module.exports = function register_users_api (router) {
router.get('/user/:id', (req, res) => {
	res.json({name : "jeefo"});
});

router.post('/user/create', (req, res) => {

});

router.put('/user/:id', (req, res) => {

});

router.delete('/user/:id', (req, res) => {
	
});
}
