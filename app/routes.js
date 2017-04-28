const Pyramid = require('./models/pyramid')
const path = require('path');
module.exports = (app) => {
	//get all pyramids
	app.get('/api/pyramids', (req, res) => {
		Pyramid.find((err, pyrs) => {
			if (err) {res.send(err)}

			res.json(pyrs)
		})
	})

	app.post('/api/todos', (req, res) => {
		//create pyramid
		Pyramid.create({
			name		: res.body.name,
			context		: res.body.context,
			contrast	: res.body.contrast,
			example		: res.body.example,
			application	: res.body.application,
			fn			: res.body.fn,
			cause		: res.body.cause,
			impact		: res.body.impact,
			author		: res.body.author,
			chapter		: res.body.chapter
		}, (err, pyramid) => {
			if (err) {res.send(err)}

			Pyramid.find((err, pyrs) => {
				if (err) {res.send(err)}

				res.json(pyrs)
			})
		})
	})

	app.delete('/api/pyramids/:pyramid_id', (req, res) => {
		//delete pyramid
		Pyramid.remove({
			_id : req.params.pyramid_id
		}, (err, pyramid) => {
			if (err) {res.send(err)}
		})

		Pyramid.find((err, pyrs) => {
			if (err) {res.send(err)}

			res.json(pyrs)
		})
	})

	//default route
	app.get('*', (req,res) => {
		res.sendfile(path.resolve('c:/pyramid/public/views/index.html'))
	})
}
