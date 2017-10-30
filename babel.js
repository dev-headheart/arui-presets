/* eslint global-require: 0 */
module.exports = {
    presets: [
        [
            'env',
            {
                targets: {
                    browsers: require('./supporting-browsers'),
                    node: 'current'
                },
                loose: true
            }
        ],
        'react'
    ],
    plugins: [
        'babel-plugin-transform-proto-to-assign',
        'babel-plugin-transform-decorators-legacy',
        'babel-plugin-transform-class-properties',
        'babel-plugin-transform-export-extensions',
        ['babel-plugin-transform-object-rest-spread', { useBuiltIns: true }],
        ['babel-plugin-transform-runtime', { polyfill: false, helpers: false }]
    ],
    env: {
        production: {
            plugins: [
                'babel-plugin-transform-react-remove-prop-types',
                'babel-plugin-transform-react-constant-elements',
                'babel-plugin-transform-react-inline-elements'
            ]
        }
    }
};
