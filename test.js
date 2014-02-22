'use strict';
var assert = require('assert');
var rocambole = require('rocambole');
var stripDebugger = require('./index');

it('should strip debugger statements', function () {
	var str = rocambole.moonwalk('if (true) { debugger; }', function (node) {
		stripDebugger(node);
	}).toString();

	assert.strictEqual(str, 'if (true) {  }');
});
