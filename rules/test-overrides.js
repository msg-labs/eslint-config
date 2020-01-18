module.exports = {
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'newline-per-chained-call': [
        'error',
        { ignoreChainWithDepth: 2 }
    ],
    'no-magic-numbers': 'off',
    'no-undefined': 'off',
    'object-curly-newline': [
        'error',
        {
            consistent: true,
            minProperties: 3,
            multiline: true
        }
    ]
};
