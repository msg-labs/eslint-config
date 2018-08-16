module.exports = {
    "parserOptions": {
        "ecmaVersion": 9,
        "sourceType": "module"
    },
    "rules": {
        
        "array-bracket-newline": [ "error", {
            "multiline": true,
            "minItems": 2
        } ],

        "array-bracket-spacing": [ "error", "always" ],
        "array-callback-return": [ "error" ],
        "array-element-newline": [ "error", {
            "multiline": true,
            "minItems": 2
        } ],

        "arrow-body-style": [ "error", "as-needed" ],
        "arrow-parens": [ "error", "as-needed" ],
        "arrow-spacing": [ "error", {
            "before": true,
            "after": true
        } ],

        "block-scoped-var": [ "error" ],

        "block-spacing": [ "error", "always" ],
        "brace-style": [ "error", "1tbs", {
            "allowSingleLine": false
        } ],

        "callback-return": [ "error" ],
        "camelcase": [ "error", {
            "properties": "always"
        } ],

        "capitalized-comments": [ "error", "always", {
            "ignoreConsecutiveComments": true
        } ],

        "class-methods-use-this": [ "warn" ],

        "comma-dangle": [ "error", "never" ],
        "comma-spacing": [ "error", {
            "before": false,
            "after": true
        } ],
        "comma-style": [ "error", "last" ],

        "complexity": [ "error", 4 ],

        "computed-property-spacing": [ "error", "always" ],
        "consistent-return": [ "error" ],

        "consistent-this": [ "error" ],
        "constructor-super": [ "error" ],
        "curly": [ "error", "all" ],
        "default-case": [ "error" ],
        "dot-location": [ "error", "property" ],
        "dot-notation": [ "error", {
            "allowKeywords": false
        } ],

        "eol-last": [ "error", "always" ],

        "eqeqeq": [ "error", "always" ],

        "for-direction": [ "error" ],
        "func-call-spacing": [ "error", "never" ],

        "func-style": [ "error", "declaration", {
            "allowArrowFunctions": true
        } ],

        "function-paren-newline": [ "error", "multiline" ],
        "implicit-arrow-linebreak": [ "error", "beside" ],

        "indent": [ "error", 4 ],

        "key-spacing": [ "error", {
            "beforeColon": false,
            "afterColon": true,
            "mode": "strict"
        } ],

        "keyword-spacing": [ "error", {
            "after": true,
            "before": true
        } ],

        "line-comment-position": [
            "error",
            { "position": "above" }
        ],

        "linebreak-style": [ "error", "unix" ]

    }   
}