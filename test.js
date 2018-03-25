import test from 'ava';
import rocambole from 'rocambole';
import m from '.';

test('strip debugger statements', t => {
	const string = rocambole.moonwalk('if (true) { debugger; }', node => {
		m(node);
	}).toString();

	t.is(string, 'if (true) {  }');
});
