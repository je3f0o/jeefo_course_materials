
// ECMA5 syntax
// Reference: https://www.ecma-international.org/ecma-262/5.1/#sec-12.5
// if ( Expression ) Statement else Statement
// if ( Expression ) Statement

const PRECEDENCE_TERMINATION = 0;

module.exports = {
	id         : "If statement",
	type       : "Statement",
	precedence : 31,

	is : (current_token, parser) => {
		return true;
	},

	initialize : (symbol, current_token, parser) => {
		let else_statement = null, statement;

		// expression
		parser.prepare_next_symbol_definition();
		parser.expect('(', parser => parser.next_token.value === '(');
		parser.prepare_next_state(null, true);
		const expression = parser.get_next_symbol(PRECEDENCE_TERMINATION);
		parser.expect(')', parser => parser.next_token.value === ')');

		// statement
		parser.prepare_next_state(null, true);
		if (parser.next_token.value === ';') {
			statement = parser.next_token;
		}

		// else statement
		parser.prepare_next_state();
		if (parser.next_token.value === "else") {
			parser.prepare_next_state();

			if (parser.next_token.value === ';') {
				else_statement = parser.next_token;
			} else {
				else_statement = parser.get_next_symbol(PRECEDENCE_TERMINATION);
			}
		}

		symbol.expression     = expression;
		symbol.statement      = statement;
		symbol.else_statement = else_statement;
		symbol.start          = current_token.start;
		symbol.end            = else_statement ? else_statement.end : statement.end;
	}
};







// ternary operator
//end = else_statement ? else_statement.end : statement.end;
