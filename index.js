const errors = require( './rules/possible-errors.js' );
const bestPractices = require( './rules/best-pratices.js' );
const rules = require( './rules/rules.js' );
const node = require( './rules/node.js' );
const stylisticIssues = require( './rules/stylistic-issues.js' );
const es6 = require( './rules/es6.js' );
const variables = require( './rules/variables.js' );

const jestRules = require( './rules/jest.js' );
const testOverrides = require( './rules/test-overrides.js' );

module.exports = {
    env: {
        es6: true
    },
    overrides: [
        {
            env: {
                'jest/globals': true
            },
            files: [
                'test/**/*.js',
                '**/*.spec.js'
            ],
            plugins: [ 'jest' ],
            rules: {
                ...jestRules,
                ...testOverrides
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module'
    },
    rules: {
        ...errors,
        ...bestPractices,
        ...rules,
        ...node,
        ...stylisticIssues,
        ...es6,
        ...variables
    }
};
