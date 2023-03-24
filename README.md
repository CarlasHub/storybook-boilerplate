# storybook-boilerplate

This is a boilerplate project for Storybook, a user interface development environment and testing tool.

## Installation

To get started, clone the project and install the required dependencies:

```sh
npm install react-dom
npx storybook init
npm run storybook -- --smoke-test 
npm install --save-dev @babel/core @babel/preset-react babel-loader
npm install --save-dev @babel/preset-env @babel/preset-react
npm install  --location=local babel-cli
npx sb init
npm install --save-dev @storybook/addon-console
npm run build
npm run storybook
npm install storybook-zeplin
