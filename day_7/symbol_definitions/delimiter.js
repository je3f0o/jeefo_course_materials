//const get_start_position = require("./helpers/get_start_position");

module.exports = {
    id         : "Delimiter",
    type       : "Delimiter",
    precedence : -1,

    is : token => {
        switch (token.value) {
            case '(' : case ')' :
            case '[' : case ']' :
            case '{' : case '}' :
            case ':' : case ';' :
                return true;
        }
        return false;
    },
    initialize : (symbol, current_token, parser) => {

    }
};
