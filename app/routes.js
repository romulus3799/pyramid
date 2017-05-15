var Pyramid = require('./models/pyramid')
const path = require('path')

module.exports = (app) => {
	//get all pyramids
	app.get('/api/pyramids', (req, res) => {
		Pyramid.find((err, pyrs) => {
			if (err) {res.send(err)}

			res.json(pyrs)
		})
	})

	app.post('/api/pyramids', (req, res) => {
		console.log('Posting...');
		//create pyramid
		Pyramid.create({
			name		: req.body.name,
			context		: req.body.context,
			contrast	: req.body.contrast,
			example		: req.body.example,
			application	: req.body.application,
			fn			: req.body.fn,
			cause		: req.body.cause,
			impact		: req.body.impact,
			author		: req.body.author,
			chapter		: req.body.chapter
		}, (err, pyramid) => {
			if (err) {res.send(err)}

			Pyramid.find((err, pyrs) => {
				if (err) {res.send(err)}

				res.json(pyrs)
			})
		})
	})

	app.post('/api/pyramids/:pyramid_id', (req,res) => {
		Pyramid.update({ _id : req.params.pyramid_id }, {
			name		: req.body.name,
			context		: req.body.context,
			contrast	: req.body.contrast,
			example		: req.body.example,
			application	: req.body.application,
			fn			: req.body.fn,
			cause		: req.body.cause,
			impact		: req.body.impact,
			author		: req.body.author,
			chapter		: req.body.chapter
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

			Pyramid.find((err, pyrs) => {
				if (err) {res.send(err)}

				res.json(pyrs)
			})
		})

	})

	//default route
	app.get('*', (req,res) => {
		res.sendfile(path.resolve('public/views/index.html'))
	})
}
