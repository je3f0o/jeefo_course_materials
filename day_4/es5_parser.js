
// Imports
const JeefoParser   = require('@jeefo/parser');
const SymbolTable   = require("@jeefo/parser/src/symbol_table");

// instancces
const es5_tokenizer    = require('./es5_tokenizer');
const es5_symbol_table = new SymbolTable();

const register_primitives = require("./symbol_definitions/register_primitives");
register_primitives(es5_symbol_table);

const es5_parser = new JeefoParser("ECMA Script 5", es5_symbol_table, es5_tokenizer);

module.exports = es5_parser;

// DEBUG
if (require.main === module) {
	console.log(es5_parser);
}
