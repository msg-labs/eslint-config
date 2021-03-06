/* eslint-disable max-lines */
const SPACE_IDENT_DEPTH = 4;
const MAX_DEPTH = 4;
const MAX_LINE_LENGTH = 80;

module.exports = {
    'array-bracket-newline': [
        'error',
        'consistent'
    ],
    'array-bracket-spacing': [
        'error',
        'always'
    ],
    'array-element-newline': [
        'error',
        'consistent'
    ],
    'block-spacing': [
        'error',
        'always'
    ],
    'brace-style': [
        'error',
        '1tbs',
        {
            allowSingleLine: false
        }
    ],
    'camelcase': [
        'error',
        {
            properties: 'always'
        }
    ],
    'capitalized-comments': [
        'error',
        'always',
        {
            ignoreConsecutiveComments: true
        }
    ],
    'comma-dangle': [
        'error',
        'never'
    ],
    'comma-spacing': [
        'error',
        {
            after: true,
            before: false
        }
    ],
    'comma-style': [
        'error',
        'last'
    ],
    'computed-property-spacing': [
        'error',
        'always'
    ],
    'consistent-this': [ 'error' ],
    'eol-last': [
        'error',
        'always'
    ],
    'func-call-spacing': [
        'error',
        'never'
    ],
    'func-name-matching': [
        'warn',
        { includeCommonJSModuleExports: false }
    ],
    'func-names': [
        'warn',
        'as-needed'
    ],
    'func-style': [
        'error',
        'declaration',
        {
            allowArrowFunctions: true
        }
    ],
    'function-paren-newline': [
        'error',
        'multiline'
    ],
    'implicit-arrow-linebreak': [ 'off' ],
    'indent': [
        'error',
        SPACE_IDENT_DEPTH,
        { SwitchCase: 1 }
    ],
    'jsx-quotes': [
        'error',
        'prefer-double'
    ],
    'key-spacing': [
        'error',
        {
            afterColon: true,
            beforeColon: false,
            mode: 'strict'
        }
    ],
    'keyword-spacing': [
        'error',
        {
            after: true,
            before: true
        }
    ],
    'line-comment-position': [
        'error',
        {
            position: 'above'
        }
    ],
    'linebreak-style': [
        'error',
        'unix'
    ],
    'lines-around-comment': [
        'warn',
        {
            afterBlockComment: false,
            afterLineComment: false,
            beforeBlockComment: true,
            beforeLineComment: true
        }
    ],
    'lines-between-class-members': [
        'warn',
        'always'
    ],
    'max-depth': [
        'warn',
        MAX_DEPTH
    ],
    'max-len': [
        'warn',
        MAX_LINE_LENGTH,
        {
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreUrls: true
        }
    ],
    'max-lines': [
        'warn',
        {
            max: 250,
            skipBlankLines: true,
            skipComments: true
        }
    ],
    'max-lines-per-function': [
        'warn',
        {
            IIFEs: true,
            max: 25,
            skipBlankLines: true,
            skipComments: true
        }
    ],
    'max-nested-callbacks': [
        'warn',
        { max: 3 }
    ],
    'max-params': [
        'warn',
        { max: 3 }
    ],
    'max-statemens': [ 'off' ],
    'max-statements-per-line': [
        'warn',
        { max: 1 }
    ],
    'multiline-comment-style': [
        'error',
        'starred-block'
    ],
    'multiline-ternary': [
        'error',
        'always-multiline'
    ],
    'new-cap': [
        'error',
        {
            capIsNew: true,
            newIsCap: true,
            properties: true
        }
    ],
    'new-parens': [ 'error' ],
    'newline-per-chained-call': [
        'error',
        { ignoreChainWithDepth: 1 }
    ],
    'no-array-constructor': [ 'error' ],
    'no-bitwise': [ 'error' ],
    'no-continue': [ 'error' ],
    'no-inline-comments': [ 'error' ],
    'no-lonely-if': [ 'error' ],
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': [ 'error' ],
    'no-multi-assign': [ 'error' ],
    'no-multiple-empty-lines': [
        'error',
        { max: 2 }
    ],
    'no-negated-condition': [ 'error' ],
    'no-nested-ternary': [ 'error' ],
    'no-new-object': [ 'error' ],
    'no-plusplus': [
        'error',
        { allowForLoopAfterthoughts: true }
    ],
    'no-tabs': [ 'error' ],
    'no-ternary': [ 'off' ],
    'no-trailing-spaces': [
        'error',
        {
            ignoreComments: false,
            skipBlankLines: false
        }
    ],
    'no-underscore-dangle': [ 'warn' ],
    'no-unneeded-ternary': [ 'warn' ],
    'no-whitespace-before-property': [ 'error' ],
    'nonblock-statement-body-position': [ 'off' ],
    'object-curly-newline': [
        'error',
        {
            consistent: true,
            minProperties: 2,
            multiline: true
        }
    ],
    'object-curly-spacing': [
        'error',
        'always'
    ],
    'object-property-newline': [
        'error',
        { allowAllPropertiesOnSameLine: false }
    ],
    'one-var': [
        'error',
        'never'
    ],
    'one-var-declaration-per-line': [
        'error',
        'always'
    ],
    'operator-assignment': [
        'error',
        'always'
    ],
    'operator-linebreak': [
        'error',
        'none',
        {
            overrides: {
                ':': 'after',
                '?': 'after'
            }
        }
    ],
    'padded-blocks': [ 'off' ],
    'padding-line-between-statements': [
        'error',
        {
            blankLine: 'always',
            next: '*',
            prev: [
                'const',
                'let',
                'var'
            ]
        },
        {
            blankLine: 'any',
            next: [
                'const',
                'let',
                'var'
            ],
            prev: [
                'const',
                'let',
                'var'
            ]
        }
    ],
    'prefer-object-spread': [ 'warn' ],
    'quote-props': [
        'error',
        'consistent-as-needed'
    ],
    'quotes': [
        'error',
        'single',
        { allowTemplateLiterals: true }
    ],
    'semi': [
        'error',
        'always'
    ],
    'semi-spacing': [
        'error',
        {
            after: true,
            before: false
        }
    ],
    'semi-style': [
        'error',
        'last'
    ],
    'sort-keys': [
        'warn',
        'asc',
        {
            caseSensitive: false,
            natural: false
        }
    ],
    'sort-vars': [ 'off' ],
    'space-before-blocks': [
        'error',
        'always'
    ],
    'space-before-function-paren': [
        'error',
        'always'
    ],
    'space-in-parens': [
        'error',
        'always'
    ],
    'space-infix-ops': [ 'error' ],
    'space-unary-ops': [
        'error',
        {
            nonwords: false,
            words: true
        }
    ],
    'spaced-comment': [
        'error',
        'always'
    ],
    'switch-colon-spacing': [
        'error',
        {
            after: true,
            before: true
        }
    ],
    'template-tag-spacing': [
        'error',
        'never'
    ],
    'unicode-bom': [ 'off' ],
    'wrap-regex': [ 'error' ]
};
