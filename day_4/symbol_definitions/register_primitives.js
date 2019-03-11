
module.exports = function register_primitives (symbol_table) {
	const primitives = [
		{
			id : "Numeric literal",
			is : current_token => current_token.id === "Number",
		},
		{
			id : "Identifier",
			is : current_token => current_token.id === "Identifier",
		},
		{
			id : "String literal",
			is : current_token => current_token.id === "String",
		},
	];

	const skeleton_symbol_definition = {
		type       : "Primitive",
		precedence : 31,
		initialize : (symbol, current_token, parser) => {
			symbol.token = current_token;
			symbol.start = current_token.start;
			symbol.end   = current_token.end;
		},
	};

	primitives.forEach(function (primitive) {
		skeleton_symbol_definition.id = primitive.id;
		skeleton_symbol_definition.is = primitive.is;

		symbol_table.register_symbol_definition(skeleton_symbol_definition);
	});
};
