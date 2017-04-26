const Pyramid = require('./models/pyramid')

module.exports = (app) => {
	//get all pyramids
	app.get('/api/pyramids', (req, res) => {
		Pyramid.find((err, pyrs) => {
			if (err) {res.send(err)}

			res.json(pyrs)
		})
	})

	//default route
	app.get('*', (req,res) => {
		res.sendFile('/../public/views/index.html')
	})
}
