/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var React = require('react-native');
var { AppRegistry } = React;

var hello = require('./Weather')


AppRegistry.registerComponent('hello', () => hello);