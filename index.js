'use strict';
const removeNode = require('rocambole-node-remove');

module.exports = node => {
	if (node.type === 'DebuggerStatement') {
		removeNode(node);
	}
};
