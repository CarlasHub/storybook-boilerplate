const path = require('path');

module.exports = {
    stories: [
        path.join(__dirname, '../src/stories/**/*.stories.jsx'),
        path.join(__dirname, '../src/stories/Button.stories.jsx')
    ],
    addons: [
        '@storybook/addon-links/register',
        'storybook-zeplin/register'
    ]
};