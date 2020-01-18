const MAX_CYCLOMATIC_COMPLEXITY = 5;
const MAX_CLASSES_PER_FILE = 1;

module.exports = {
    'accessor-pairs': [ 'error' ],
    'array-callback-return': [ 'error' ],
    'block-scoped-var': [ 'error' ],
    'class-methods-use-this': [ 'warn' ],
    'complexity': [
        'warn',
        MAX_CYCLOMATIC_COMPLEXITY
    ],
    'consistent-return': [ 'error' ],
    'curly': [
        'error',
        'all'
    ],
    'default-case': [ 'warn' ],
    'dot-location': [
        'error',
        'property'
    ],
    'dot-notation': [
        'error',
        {
            allowKeywords: true
        }
    ],
    'eqeqeq': [
        'error',
        'always'
    ],
    'guard-for-in': [ 'error' ],
    'max-classes-per-file': [
        'warn',
        MAX_CLASSES_PER_FILE
    ],
    'no-alert': [ 'error' ],
    'no-caller': [ 'error' ],
    'no-case-declarations': [ 'error' ],
    'no-div-regex': [ 'warn' ],
    'no-else-return': [ 'error' ],
    'no-empty-function': [ 'error' ],
    'no-empty-pattern': [ 'warn' ],
    'no-eq-null': [ 'error' ],
    'no-eval': [ 'error' ],
    'no-extend-native': [ 'error' ],
    'no-extra-bind': [ 'error' ],
    'no-extra-label': [ 'error' ],
    'no-fallthrough': [ 'error' ],
    'no-floating-decimal': [ 'error' ],
    'no-global-assign': [ 'error' ],
    'no-implicit-coercion': [ 'error' ],
    'no-implicit-globals': [ 'error' ],
    'no-implied-eval': [ 'error' ],
    'no-invalid-this': [ 'error' ],
    'no-iterator': [ 'error' ],
    'no-labels': [ 'error' ],
    'no-lone-blocks': [ 'error' ],
    'no-loop-func': [ 'error' ],
    'no-magic-numbers': [ 'warn' ],
    'no-multi-spaces': [ 'error' ],
    'no-multi-str': [ 'error' ],
    'no-new': [ 'error' ],
    'no-new-func': [ 'error' ],
    'no-new-wrappers': [ 'error' ],
    'no-octal': [ 'error' ],
    'no-octal-escape': [ 'error' ],
    'no-param-reassign': [ 'error' ],
    'no-proto': [ 'error' ],
    'no-redeclare': [ 'error' ],
    'no-return-assign': [
        'error',
        'always'
    ],
    'no-return-await': [ 'error' ],
    'no-script-url': [ 'error' ],
    'no-self-assign': [ 'error' ],
    'no-self-compare': [ 'error' ],
    'no-sequences': [ 'error' ],
    'no-throw-literal': [ 'error' ],
    'no-unmodified-loop-condition': [ 'error' ],
    'no-unused-expressions': [ 'error' ],
    'no-unused-labels': [ 'error' ],
    'no-useless-call': [ 'error' ],
    'no-useless-concat': [ 'error' ],
    'no-useless-escape': [ 'error' ],
    'no-useless-return': [ 'error' ],
    'no-void': [ 'error' ],
    'no-warning-comments': [ 'warn' ],
    'no-with': [ 'error' ],
    'prefer-promise-reject-errors': [ 'error' ],
    'radix': [ 'error' ],
    'require-await': [ 'error' ],
    'require-unicode-regexp': [ 'warn' ],
    'vars-on-top': [ 'error' ],
    'wrap-iife': [
        'error',
        'inside'
    ],
    'yoda': [
        'error',
        'never'
    ]
};
