
// Imports
const JeefoParser = require('@jeefo/parser');
const SymbolTable = require("@jeefo/parser/src/symbol_table");

// instancces
const es5_tokenizer    = require('./es5_tokenizer');
const es5_symbol_table = new SymbolTable();

const register_primitives = require("./symbol_definitions/register_primitives");
register_primitives(es5_symbol_table);

// Binary operator day 5
const register_binary_operators = require("./symbol_definitions/register_binary_operators");
register_binary_operators(es5_symbol_table);

// delimiters
es5_symbol_table.register_symbol_definition(require("./symbol_definitions/delimiter"));

// if Statement
es5_symbol_table.register_reserved_word("if"   , require("./symbol_definitions/if_statement"));

const es5_parser = new JeefoParser("ECMA Script 5", es5_tokenizer, es5_symbol_table);

module.exports = es5_parser;

// DEBUG
if (require.main === module) {
	const ast = es5_parser.parse(`
		if (false);
		else if (false);
		else;
	`);

	console.log(ast[0]);
}
