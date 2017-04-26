const mongoose = require('mongoose');

module.exports - mongoose.model('Pyramid', {
	name 		: {type : String, default : '(none)'},
	context		: {type : String, default : '(none)'},
	contrast	: {type : String, default : '(none)'},
	example		: {type : String, default : '(none)'},
	application	: {type : String, default : '(none)'},
	fn			: {type : String, default : '(none)'},
	impact		: {type : String, default : '(none)'}
})
