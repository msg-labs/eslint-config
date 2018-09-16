const errors = require( './rules/possible-errors.js' );
const bestPractices = require( './rules/best-pratices.js' );
const rules = require( './rules/rules.js' );
const node = require( './rules/node.js' );
const stylisticIssues = require( './rules/stylistic-issues.js' );
const es6 = require( './rules/es6.js' );
const variables = require( './rules/variables.js' );

module.exports = {
    'parserOptions': {
        'ecmaVersion': 9,
        'sourceType': 'module'
    },
    'rules': {
        ...errors,
        ...bestPractices,
        ...rules,
        ...node,
        ...stylisticIssues,
        ...es6,
        ...variables
    }
};
