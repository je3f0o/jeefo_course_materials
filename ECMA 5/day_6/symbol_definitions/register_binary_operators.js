module.exports = function register_binary_operators (symbol_table) {
    const operators = [
        // {{{1 Exponentiation operator (15)
        {
            id         : "Exponentiation operator",
            precedence : 15,
            is         : token => token.value === "**",
        },

        // {{{1 Arithmetic operator (14)
        {
            id         : "Arithmetic operator",
            precedence : 14,
            is         : token => token.value === '*' || token.value === '%',
        },

        // {{{1 Arithmetic operator (13)
        {
            id         : "Arithmetic operator",
            precedence : 13,
            is         : token => token.value === '+' || token.value === '-',
        },

        // {{{1 Bitwise shift operator (12)
        {
            id         : "Bitwise shift operator",
            precedence : 12,
            is         : token => {
                switch (token.value) { case "<<" : case ">>" : case ">>>" : return true; }
                return false;
            },
        },

        // {{{1 Comparision operator (11)
        {
            id         : "Comparision operator",
            precedence : 11,
            is         : token => {
                switch (token.value) {
                    case '<'  :
                    case '>'  :
                    case "<=" :
                    case ">=" :
                        return true;
                }
                return false;
            },
        },

        // {{{1 Equality operator (10)
        {
            id         : "Equality operator",
            precedence : 10,
            is         : token => {
                switch (token.value) {
                    case  "==" :
                    case "===" :
                    case  "!=" :
                    case "!==" :
                        return true;
                }
                return false;
            },
        },

        // {{{1 Bitwise and operator (9)
        {
            id         : "Bitwise and operator",
            precedence : 9,
            is         : token => token.value === '&',
        },

        // {{{1 Bitwise xor operator (8)
        {
            id         : "Bitwise xor operator",
            precedence : 8,
            is         : token => token.value === '^',
        },

        // {{{1 Bitwise or operator (7)
        {
            id         : "Bitwise or operator",
            precedence : 7,
            is         : token => token.value === '|',
        },

        // {{{1 Logical and operator (6)
        {
            id         : "Logical and operator",
            precedence : 6,
            is         : token => token.value === "&&",
        },

        // {{{1 Logical or operator (5)
        {
            id         : "Logical or operator",
            precedence : 5,
            is         : token => token.value === "||",
        },

        // {{{1 Assignment operator (3)
        {
            id         : "Assignment operator",
            precedence : 3,
            is         : token => {
                switch (token.value) {
                    case    '=' :
                    case   "+=" :
                    case   "-=" :
                    case   "*=" :
                    case   "/=" :
                    case   "%=" :
                    case   "&=" :
                    case   "|=" :
                    case   "^=" :
                    case  "**=" :
                    case  "<<=" :
                    case  ">>=" :
                    case ">>>=" :
                        return true;
                }
                return false;
            },
        }
        // }}}1
    ];

    const initialize = (symbol, current_token, parser) => {
        symbol.left     = parser.current_symbol;
        symbol.operator = current_token.value;

		parser.prepare_next_state();
        symbol.right    = parser.get_next_symbol(symbol.precedence);
        symbol.start    = symbol.left.start;
        symbol.end      = symbol.right.end;
    };

    operators.forEach(operator => {
        operator.type       = "Binary operator";
        operator.initialize = initialize;

        symbol_table.register_symbol_definition(operator);
    });
};
