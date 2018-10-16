// 兼容低版本IE
import '../polyfill/object-assign-polyfill';
import '../polyfill/isarray';
import 'es5-shim'; //IE8 ^4.5.10
import 'object-create-ie8';//IE8, 司徒正美老师写的库，这样就不用加上es5-sham
import 'object-defineproperty-ie8';//IE8， 司徒正美老师写的库
import 'console-polyfill';//IE8下，如果你不打开开发者工具，window下是没有console这个对象的，只有打开了F12才会有这个方法
import 'json3';  //比IE8的JSON好用
import 'fetch-polyfill2'; //fetch 实现，司徒正美老师的另一力作
window.Promise = require('bluebird');

import './store';

import App from './App';

var app = new App();
app.attach(document.getElementById('app'));