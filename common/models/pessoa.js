'use strict';

module.exports = function(Pessoa) {
	// create() hooks
//	Pessoa.observe('before save', function(ctx, next) {
//		next();
//	});
	Pessoa.observe('access', function(ctx, next) {
		Pessoa.getDataSource().connector.executeSQL('execute procedure dypedev_force_login2(\'dype\')');
		console.log('Wow...');
		next();
	});
};
