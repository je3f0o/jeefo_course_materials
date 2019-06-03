
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
        {
            id : "Comment",
            is : current_token => current_token.id === "Comment",
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

    // Boolean literal
    skeleton_symbol_definition.id = "Boolean literal";
    // skeleton_symbol_definition.is = function () { return true; };
    skeleton_symbol_definition.is = () => true;
    // registering reserved words (aka keywords)
    symbol_table.register_reserved_words(["true", "false"], skeleton_symbol_definition);

    // Null literal
    skeleton_symbol_definition.id = "Null literal";
    symbol_table.register_reserved_word("null", skeleton_symbol_definition);

    // Undefined literal
    skeleton_symbol_definition.id = "Undefined literal";
    symbol_table.register_reserved_word("undefined", skeleton_symbol_definition);

    primitives.forEach(function (primitive) {
        skeleton_symbol_definition.id = primitive.id;
        skeleton_symbol_definition.is = primitive.is;

        symbol_table.register_symbol_definition(skeleton_symbol_definition);
    });
};
